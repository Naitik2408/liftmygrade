const fs = require('fs');
const diff = JSON.parse(fs.readFileSync('d:/Contribution/liftmygrade/scratch/userdiff.json', 'utf-8')).content;

const matchIdx = diff.indexOf('+    id: "14"');
console.log('Match index:', matchIdx);
if (matchIdx !== -1) {
  console.log(diff.substring(matchIdx - 50, matchIdx + 100));
}
