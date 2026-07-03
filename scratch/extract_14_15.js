const fs = require('fs');
const logsText = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity-ide/brain/2f13e94b-e7ac-452a-b832-a65f38a9007a/.system_generated/logs/transcript_full.jsonl', 'utf-8');
const logs = logsText.split('\n');

for (let i = 0; i < logs.length; i++) {
  if (!logs[i]) continue;
  try {
    const entry = JSON.parse(logs[i]);
    if (entry.tool_calls) {
      for (const tc of entry.tool_calls) {
        if (tc.name === 'default_api:replace_file_content' && tc.args.TargetFile && tc.args.TargetFile.endsWith('blogs.ts')) {
          if (tc.args.ReplacementContent && tc.args.ReplacementContent.includes('Why Study Abroad Applications Get Rejected')) {
            fs.writeFileSync('d:/Contribution/liftmygrade/scratch/recovered_14_15.txt', tc.args.ReplacementContent);
            console.log('Saved recovered 14 & 15!');
            return;
          }
        }
      }
    }
  } catch (e) {}
}
