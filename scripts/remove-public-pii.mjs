import { readFileSync, writeFileSync } from 'node:fs';

const shellPath = 'src/layouts/ProfileShell.astro';
const dataPath = 'src/data/site.ts';

let shell = readFileSync(shellPath, 'utf8');
let data = readFileSync(dataPath, 'utf8');

function removeContactItem(source, key) {
	const marker = `data-i18n="${key}"`;
	const markerIndex = source.indexOf(marker);
	if (markerIndex === -1) return source;

	const itemStartMarker = '\n\t\t\t\t\t<div class="contact-item">';
	const start = source.lastIndexOf(itemStartMarker, markerIndex);
	const next = source.indexOf(itemStartMarker, markerIndex + marker.length);
	if (start === -1 || next === -1) throw new Error(`Could not isolate contact item for ${key}`);
	return `${source.slice(0, start)}${source.slice(next)}`;
}

shell = removeContactItem(shell, 'profile.phone');
shell = removeContactItem(shell, 'profile.birthday');
shell = shell.replace(/^\s*'profile\.phone':.*\n/gm, '');
shell = shell.replace(/^\s*'profile\.birthday':.*\n/gm, '');

data = data.replace(/^\s*phone:.*\n/gm, '');
data = data.replace(/^\s*birthday:.*\n/gm, '');

if (/0869630908|20\/07\/2005|profile\.phone|profile\.birthday/.test(shell + data)) {
	throw new Error('PII markers remain after patch');
}

writeFileSync(shellPath, shell);
writeFileSync(dataPath, data);
console.log('Removed public phone and birthday from portfolio source.');
