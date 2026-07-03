const fs = require('fs');

const diffData = fs.readFileSync('d:/Contribution/liftmygrade/scratch/userdiff.json', 'utf-8');
const entry = JSON.parse(diffData);
const content = entry.content; // This contains the diff block

const startMarker = '@@ -1799,6 +1799,593 @@';
const startIdx = content.indexOf(startMarker);

if (startIdx !== -1) {
  const block = content.substring(startIdx + startMarker.length);
  const lines = block.split('\n');
  
  // We want to capture lines starting with '+'
  let addedLines = [];
  let recording = false;
  
  for (let line of lines) {
    if (line.startsWith('+  },') || line.startsWith('+  {')) {
      recording = true;
    }
    if (recording) {
      if (line.startsWith('+')) {
        addedLines.push(line.substring(1));
      }
    }
  }
  
  const toAppend = ',\n' + addedLines.join('\n');
  
  let blogsTs = fs.readFileSync('data/blogs.ts', 'utf-8');
  blogsTs = blogsTs.replace('  }\n];', '  }' + toAppend + '\n];');
  fs.writeFileSync('data/blogs.ts', blogsTs);
  console.log('Appended user changes successfully!');
} else {
  console.log('Could not find start marker in diff.');
}
