import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

async function collectFiles(directory, predicate) {
	const entries = await fs.readdir(directory, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const absolute = path.join(directory, entry.name);
		if (entry.isDirectory()) files.push(...(await collectFiles(absolute, predicate)));
		else if (predicate(absolute)) files.push(absolute);
	}
	return files;
}

async function exists(candidate) {
	try {
		await fs.access(candidate);
		return true;
	} catch {
		return false;
	}
}

async function resolveInternalTarget(href) {
	let pathname;
	try {
		pathname = decodeURIComponent(href.split(/[?#]/, 1)[0]);
	} catch {
		return null;
	}

	const relative = pathname.replace(/^\/+/, '');
	if (!relative) return path.join(dist, 'index.html');

	const exact = path.resolve(dist, relative);
	if (exact !== dist && !exact.startsWith(`${dist}${path.sep}`)) return null;

	const candidates = pathname.endsWith('/')
		? [path.join(exact, 'index.html')]
		: path.extname(relative)
			? [exact]
			: [exact, `${exact}.html`, path.join(exact, 'index.html')];

	for (const candidate of candidates) {
		if (await exists(candidate)) return candidate;
	}
	return null;
}

const htmlFiles = await collectFiles(dist, (file) => file.endsWith('.html'));
const failures = [];

if (htmlFiles.length === 0) failures.push('dist: expected at least one generated HTML file');

const sourceDirectories = ['.github', 'docs', 'public', 'scripts', 'src'];
const textExtensions = new Set(['.astro', '.html', '.js', '.json', '.md', '.mdx', '.mjs', '.ts', '.txt', '.yaml', '.yml']);
const privacyPatterns = [
	{ label: 'telephone URI', pattern: /\btel\s*:/i },
	{ label: 'phone field', pattern: /\b(?:phone|telephone)\b\s*["']?\s*:/i },
	{ label: 'birthday field', pattern: /\bbirthday\b\s*["']?\s*:/i },
];
const privacyScanExclusions = new Set([path.join(root, 'scripts', 'validate-build.mjs')]);

const repositorySourceFiles = [];
for (const sourceDirectory of sourceDirectories) {
	const directory = path.join(root, sourceDirectory);
	if (!(await exists(directory))) continue;
	repositorySourceFiles.push(
		...(await collectFiles(directory, (file) => textExtensions.has(path.extname(file).toLowerCase()))),
	);
}

const rootEntries = await fs.readdir(root, { withFileTypes: true });
for (const entry of rootEntries) {
	if (!entry.isFile()) continue;
	const absolute = path.join(root, entry.name);
	if (textExtensions.has(path.extname(absolute).toLowerCase())) repositorySourceFiles.push(absolute);
}

for (const file of repositorySourceFiles) {
	if (privacyScanExclusions.has(file)) continue;
	const source = await fs.readFile(file, 'utf8');
	for (const { label, pattern } of privacyPatterns) {
		if (pattern.test(source)) {
			failures.push(`${path.relative(root, file)}: contains prohibited public ${label}`);
		}
	}
}

for (const file of htmlFiles) {
	const html = await fs.readFile(file, 'utf8');
	const relativeFile = path.relative(root, file);
	const mainCount = (html.match(/<main\b/gi) ?? []).length;
	const h1Count = (html.match(/<h1\b/gi) ?? []).length;

	if (mainCount !== 1) failures.push(`${relativeFile}: expected exactly one <main>, found ${mainCount}`);
	if (h1Count !== 1) failures.push(`${relativeFile}: expected exactly one <h1>, found ${h1Count}`);
	for (const landmark of ['header', 'footer']) {
		const count = (html.match(new RegExp(`<${landmark}\\b`, 'gi')) ?? []).length;
		if (count !== 1) failures.push(`${relativeFile}: expected one <${landmark}>, found ${count}`);
	}
	if (!html.includes('id="primary-navigation"')) failures.push(`${relativeFile}: missing shared navigation`);
	if (!html.includes('nguyenvanduy20072005@gmail.com')) failures.push(`${relativeFile}: missing footer email`);
	for (const obsolete of [/MLOps Engineer/i, /MLOps Control Room/i, /command-dialog/i, /command-open/i, /lang-float/i, /controlRoom/i, /AudioContext/, /design-lab/i]) {
		if (obsolete.test(html)) failures.push(`${relativeFile}: contains removed legacy UI or identity (${obsolete})`);
	}
	if (!/<html\b[^>]*\blang=/i.test(html)) failures.push(`${relativeFile}: missing html[lang]`);
	if (/href=["'](?:undefined|null)["']/i.test(html)) failures.push(`${relativeFile}: contains an invalid href`);
	if (/href=["']javascript:/i.test(html)) failures.push(`${relativeFile}: contains a javascript: URL`);

	const hrefPattern = /href=["']([^"']+)["']/gi;
	for (const match of html.matchAll(hrefPattern)) {
		const href = match[1];
		const normalizedHref = href.toLowerCase();
		if (
			href.startsWith('#') ||
			normalizedHref.startsWith('http://') ||
			normalizedHref.startsWith('https://') ||
			normalizedHref.startsWith('mailto:') ||
			normalizedHref.startsWith('data:') ||
			normalizedHref.startsWith('blob:')
		) continue;
		if (normalizedHref.startsWith('tel:')) {
			failures.push(`${relativeFile}: contains a prohibited public telephone link`);
			continue;
		}

		const target = await resolveInternalTarget(href);
		if (!target) failures.push(`${relativeFile}: broken or unsafe internal link ${href}`);
	}
}

// Public writing must be explicitly owner-authored and unpublished drafts cannot leak.
const blogSources = await collectFiles(path.join(root, 'src/content/blog'), file => /\.mdx?$/.test(file));
const approvedPostIds = new Set();
for (const file of blogSources) {
	const source = await fs.readFile(file, 'utf8');
	const id = path.relative(path.join(root, 'src/content/blog'), file).replace(/\.mdx?$/, '');
	const frontmatter = source.split(/^---\s*$/m)[1] || '';
	if (!/^ownerWritten:\s*true\s*$/m.test(frontmatter) || !/^draft:\s*false\s*$/m.test(frontmatter)) {
		if (await exists(path.join(dist, 'blog', id, 'index.html'))) failures.push(`Unapproved writing published: ${id}`);
	} else approvedPostIds.add(id);
}
const rss = await fs.readFile(path.join(dist, 'rss.xml'), 'utf8');
const sitemapFiles = await collectFiles(dist, file => /sitemap.*\.xml$/.test(file));
const sitemap = (await Promise.all(sitemapFiles.map(file => fs.readFile(file, 'utf8')))).join('\n');
const { archivedProjectSlugs, withdrawnPostSlugs } = await import('../src/data/archive.js');
for (const file of htmlFiles) {
	const relative = path.relative(path.join(dist, 'blog'), file);
	if (relative.startsWith('..') || relative === 'index.html' || relative.startsWith(`page${path.sep}`)) continue;
	const id = relative.replace(/[/\\]index\.html$/, '');
	if (!approvedPostIds.has(id) && !withdrawnPostSlugs.includes(id)) failures.push(`Writing route has no approved source: ${id}`);
}
if (approvedPostIds.size === 0) {
	if (/<item>/i.test(rss)) failures.push('Empty Blog must have an empty RSS feed');
	const index = await fs.readFile(path.join(dist, 'blog', 'index.html'), 'utf8');
	if (!index.includes('class="empty-blog"')) failures.push('Empty Blog must show its empty state');
}
for (const [prefix, slugs] of [['projects', archivedProjectSlugs], ['blog', withdrawnPostSlugs]]) {
	for (const slug of slugs) {
		const route = `/${prefix}/${slug}`;
		if (sitemap.includes(route) || rss.includes(route)) failures.push(`Withdrawn route appears in RSS/sitemap: ${route}`);
		const html = await fs.readFile(path.join(dist, prefix, slug, 'index.html'), 'utf8');
		if (!html.includes('noindex,follow')) failures.push(`Withdrawn route must be noindex: ${route}`);
	}
}
if (await exists(path.join(dist, 'design-lab'))) failures.push('Temporary design-lab route must not ship');

if (failures.length > 0) {
	console.error('Build validation failed:\n');
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log(
	`Validated ${htmlFiles.length} HTML files and ${repositorySourceFiles.length - privacyScanExclusions.size} repository source files: privacy, landmarks, and internal links passed.`,
);
