import clipboard from 'clipboardy';

function readClipboard() {
	try {
		return clipboard.readSync();
	} catch {
		throw new Error('Failed to read clipboard');
	}
}

function writeClipboard(text) {
	try {
		clipboard.writeSync(text);
	} catch {
		throw new Error('Failed to write clipboard');
	}
}

const input = readClipboard();
const lines = input.split(/\r?\n/);

const symbols = {};

for (const line of lines) {
	const trimmed = line.trim();
	if (trimmed.startsWith('alias ') || trimmed.startsWith('define ')) {
		const [, name, value] = trimmed.split(/\s+/);
		if (name && value) {
			if (symbols.hasOwnProperty(name)) {
				throw new Error(`Symbol "${name}" redefined`);
			}

			symbols[name] = value;
		}
	}
}

let expanded = input;
for (const [name, value] of Object.entries(symbols)) {
	const regex = new RegExp(`\\b${name}\\b`, 'g');
	expanded = expanded.replace(regex, value);
}

// Remove comments, empty lines, alias and define lines first
let filteredLines = expanded.split(/\r?\n/).filter((line) => {
	const trimmed = line.trim();
	if (trimmed === '') return false;
	if (trimmed.startsWith('#')) return false;
	if (trimmed.startsWith('alias ')) return false;
	if (trimmed.startsWith('define ')) return false;
	return true;
});

// Find jump labels and calculate their line numbers
const labels = {};
let lineNumber = 0;

for (const line of filteredLines) {
	const trimmed = line.trim();

	// Check if this is a label definition (word followed by colon only)
	const labelMatch = trimmed.match(/^(\w+):$/);
	if (labelMatch) {
		labels[labelMatch[1]] = lineNumber;
		continue;
	}

	lineNumber++;
}

// Replace label references with line numbers
for (const [name, num] of Object.entries(labels)) {
	const regex = new RegExp(`\\b${name}\\b`, 'g');
	filteredLines = filteredLines.map((line) => line.replace(regex, num.toString()));
}

// Remove label definition lines
const output = filteredLines
	.filter((line) => {
		if (/^\w+:$/.test(line.trim())) return false;
		return true;
	})
	.map((line) => line.trim())
	.join('\n');

writeClipboard(output);
console.log('Minification complete. Output copied to clipboard.');