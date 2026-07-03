const fs = require('fs');

const content = fs.readFileSync('data/blogs.ts', 'utf-8');
const arrayStartToken = 'export const blogs: BlogPost[] = [\n';
const startIndex = content.indexOf(arrayStartToken) + arrayStartToken.length;
const endIndex = content.lastIndexOf('];');
const header = content.substring(0, startIndex);
const footer = content.substring(endIndex);
const arrayContent = content.substring(startIndex, endIndex);

let blocks = [];
let currentBlock = '';
let braceCount = 0;
let inString = false;
let stringChar = '';

for (let i = 0; i < arrayContent.length; i++) {
  const char = arrayContent[i];
  
  if (inString) {
    currentBlock += char;
    if (char === stringChar && arrayContent[i-1] !== '\\') {
      inString = false;
    }
  } else {
    currentBlock += char;
    if (char === '"' || char === "'" || char === '`') {
      inString = true;
      stringChar = char;
    } else if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      if (braceCount === 0) {
        blocks.push(currentBlock);
        currentBlock = '';
      }
    }
  }
}

let parsedBlocks = blocks.map(b => b.trim()).filter(b => b.length > 0);
console.log('Found ' + parsedBlocks.length + ' blocks');

parsedBlocks = parsedBlocks.map(b => {
  const idMatch = b.match(/id:\s*"(\d+)"/);
  const id = idMatch ? parseInt(idMatch[1], 10) : 9999;
  return { id, text: b };
});

parsedBlocks.sort((a, b) => a.id - b.id);

let newArrayContent = parsedBlocks.map(b => '  ' + b.text).join(',\n');
newArrayContent += '\n';

fs.writeFileSync('data/blogs.ts', header + newArrayContent + footer);
console.log('Done');
