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
	if (h1Count < 1) failures.push(`${relativeFile}: expected at least one <h1>`);
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

if (failures.length > 0) {
	console.error('Build validation failed:\n');
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log(
	`Validated ${htmlFiles.length} HTML files and ${repositorySourceFiles.length} repository source files: privacy, landmarks, and internal links passed.`,
);
