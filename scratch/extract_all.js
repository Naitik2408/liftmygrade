const fs = require('fs');
const logsText = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity-ide/brain/2f13e94b-e7ac-452a-b832-a65f38a9007a/.system_generated/logs/transcript_full.jsonl', 'utf-8');
const logs = logsText.split('\n');

let found = false;
for (let i = 0; i < logs.length; i++) {
  if (!logs[i]) continue;
  try {
    const entry = JSON.parse(logs[i]);
    if (entry.tool_calls) {
      for (const tc of entry.tool_calls) {
        let contents = [];
        if (tc.name === 'default_api:replace_file_content' && tc.args.ReplacementContent) {
          contents.push(tc.args.ReplacementContent);
        } else if (tc.name === 'default_api:multi_replace_file_content' && tc.args.ReplacementChunks) {
          tc.args.ReplacementChunks.forEach(chunk => {
            if (chunk.ReplacementContent) contents.push(chunk.ReplacementContent);
          });
        }
        
        for (let content of contents) {
          if (content.includes('Why Study Abroad')) {
            fs.writeFileSync('d:/Contribution/liftmygrade/scratch/recovered_14.txt', content);
            console.log('Saved recovered 14!');
            found = true;
          }
          if (content.includes('Building an Academic CV')) {
            fs.writeFileSync('d:/Contribution/liftmygrade/scratch/recovered_15.txt', content);
            console.log('Saved recovered 15!');
            found = true;
          }
          if (content.includes('Budget')) {
            fs.writeFileSync('d:/Contribution/liftmygrade/scratch/recovered_16.txt', content);
            console.log('Saved recovered 16!');
            found = true;
          }
          if (content.includes('From Student Visa to PR')) {
            fs.writeFileSync('d:/Contribution/liftmygrade/scratch/recovered_17.txt', content);
            console.log('Saved recovered 17!');
            found = true;
          }
        }
      }
    }
  } catch (e) {
  }
}
if (!found) console.log('Nothing found!');
