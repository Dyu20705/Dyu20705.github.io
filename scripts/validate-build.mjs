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
	const pathname = decodeURIComponent(href.split(/[?#]/, 1)[0]);
	const relative = pathname.replace(/^\/+/, '');
	if (!relative) return path.join(dist, 'index.html');

	const exact = path.join(dist, relative);
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

const sourceRoots = ['src', 'public'];
const textExtensions = new Set(['.astro', '.html', '.js', '.json', '.md', '.mdx', '.mjs', '.ts', '.txt', '.yaml', '.yml']);
const privacyPatterns = [
	{ label: 'telephone URI', pattern: /\btel:/i },
	{ label: 'phone field', pattern: /\bphone\s*:/i },
	{ label: 'birthday field', pattern: /\bbirthday\s*:/i },
];

for (const sourceRoot of sourceRoots) {
	const directory = path.join(root, sourceRoot);
	if (!(await exists(directory))) continue;
	const sourceFiles = await collectFiles(directory, (file) => textExtensions.has(path.extname(file)));
	for (const file of sourceFiles) {
		const source = await fs.readFile(file, 'utf8');
		for (const { label, pattern } of privacyPatterns) {
			if (pattern.test(source)) {
				failures.push(`${path.relative(root, file)}: contains prohibited public ${label}`);
			}
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
		if (
			href.startsWith('#') ||
			href.startsWith('http://') ||
			href.startsWith('https://') ||
			href.startsWith('mailto:') ||
			href.startsWith('data:')
		) continue;
		if (href.startsWith('tel:')) {
			failures.push(`${relativeFile}: contains a prohibited public telephone link`);
			continue;
		}

		const target = await resolveInternalTarget(href);
		if (!target) failures.push(`${relativeFile}: broken internal link ${href}`);
	}
}

if (failures.length > 0) {
	console.error('Build validation failed:\n');
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML files: landmarks and internal links passed.`);
