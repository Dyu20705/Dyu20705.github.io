// Tests run in a temporary copy, never in the production content tree.
import { mkdtemp, cp, copyFile, symlink, readFile, writeFile, unlink, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import assert from 'node:assert/strict';
const exec = promisify(execFile);
const root = process.cwd();
const lab = await mkdtemp(path.join(tmpdir(), 'portfolio-publication-'));
for (const directory of ['src', 'public', 'scripts']) await cp(path.join(root, directory), path.join(lab, directory), {recursive:true});
for (const file of ['package.json', 'astro.config.mjs', 'tsconfig.json']) await copyFile(path.join(root, file), path.join(lab, file));
await symlink(path.join(root, 'node_modules'), path.join(lab, 'node_modules'), 'dir');
const postsDir = path.join(lab, 'src/content/blog');
const projectsDir = path.join(lab, 'src/content/projects');
// Remove only content from the isolated copy to create deterministic boundaries.
for (const file of await readdir(postsDir)) if (/\.mdx?$/.test(file)) await unlink(path.join(postsDir,file));
for (const file of await readdir(projectsDir)) {
  if (/\.mdx?$/.test(file) && !['sites.md','opendownloader.md'].includes(file)) await unlink(path.join(projectsDir,file));
}
const localized = text => ({vi:text,en:text});
for (let i = 0; i < 5; i++) {
  const data = {
    title:`Project fixture ${i}`,slug:`fixture-${i}`,priority:i+10,year:2026,
    status:localized('Test fixture'),domain:localized('Isolated test'),
    summary:localized('Test data, never published.'),stack:['Test'],
    repoUrl:'https://github.com/Dyu20705',revision:'test',verifiedOn:'2026-10-05',
    sections:[{heading:localized('Fixture'),paragraphs:[localized('Test data.')]}],
    evidence:[{label:localized('Fixture'),href:'https://github.com/Dyu20705'}],
  };
  await writeFile(path.join(projectsDir,`fixture-${i}.md`),`---\n${JSON.stringify(data)}\n---\n`);
}
for (let i = 0; i < 9; i++) {
  await writeFile(path.join(postsDir,`owner-fixture-${i}.md`),`---\ntitle: Publication fixture ${i}\ndescription: Isolated test data, never published.\npubDate: 2026-10-01\nownerWritten: true\ndraft: false\n---\nIsolated test body.\n`);
}
for (const [id, flags] of [['generated','ownerWritten: false\ndraft: false'],['draft','ownerWritten: true\ndraft: true'],['unclassified','']]) {
  await writeFile(path.join(postsDir,`${id}-fixture.md`),`---\ntitle: Unpublished fixture\ndescription: Test data.\npubDate: 2026-10-01\n${flags}\n---\nUnpublished.\n`);
}
async function build() {
  const {stdout,stderr} = await exec('npm',['run','verify'],{cwd:lab,env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'},maxBuffer:8*1024*1024});
  await writeFile(path.join(lab,'verify.log'),stdout+stderr);
}
const output = file => readFile(path.join(lab,'dist',file),'utf8');
try {
  await build();
  assert.match(await output('portfolio/index.html'), /\/portfolio\/page\/2\//);
  assert.match(await output('portfolio/page/2/index.html'), /fixture-4/);
  assert.match(await output('blog/index.html'), /\/blog\/page\/2\//);
  assert.match(await output('blog/page/2/index.html'), /owner-fixture-8/);
  const feed = await output('rss.xml');
  assert.equal((feed.match(/<item>/g) || []).length,9);
  for (const id of ['generated','draft','unclassified']) {
    assert.ok(!feed.includes(`${id}-fixture`));
    await assert.rejects(readFile(path.join(lab,'dist/blog',`${id}-fixture/index.html`)),{code:'ENOENT'});
  }
  for (const file of await readdir(postsDir)) if (/\.mdx?$/.test(file)) await unlink(path.join(postsDir,file));
  await build();
  assert.ok(!(await output('rss.xml')).includes('<item>'));
  assert.match(await output('blog/index.html'), /class="empty-blog"/);
  assert.ok(!(await readFile(path.join(lab,'.astro/cache/data-store.json'),'utf8')).includes('owner-fixture'));
  console.log(`Passed owner/draft exclusion, pagination and last-post-removal with warm cache. Isolated logs: ${lab}`);
} catch (error) {
  console.error(`Publication test failed. Isolated files: ${lab}`);
  throw error;
}
