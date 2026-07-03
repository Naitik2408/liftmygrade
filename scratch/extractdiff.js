const fs = require('fs');
const logsText = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity-ide/brain/2f13e94b-e7ac-452a-b832-a65f38a9007a/.system_generated/logs/transcript_full.jsonl', 'utf-8');
const logs = logsText.split('\n');
let fullDiff = "";
for (let i = 0; i < logs.length; i++) {
  if (logs[i].includes('The following changes were made by the USER to: d:\\\\Contribution\\\\liftmygrade\\\\data\\\\blogs.ts')) {
    fullDiff = logs[i];
    break;
  }
}
fs.writeFileSync('d:/Contribution/liftmygrade/scratch/userdiff.json', fullDiff);
console.log('Saved user diff');
