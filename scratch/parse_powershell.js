const fs = require('fs');

let content = fs.readFileSync('d:/Contribution/liftmygrade/scratch/powershell_extract.json', 'utf16le'); // Out-File usually writes utf16le
try {
  let entry = JSON.parse(content.trim());
  let targetFound = false;
  
  if (entry.tool_calls) {
    for (let tc of entry.tool_calls) {
      if (tc.name === 'default_api:replace_file_content' && tc.args.ReplacementContent) {
        fs.writeFileSync('d:/Contribution/liftmygrade/scratch/recovered.txt', tc.args.ReplacementContent, 'utf-8');
        console.log('Success! Saved to recovered.txt');
        targetFound = true;
      }
    }
  }
  if (!targetFound) console.log('Parsed JSON but no matching tool_call found.');
} catch (e) {
  console.error('Failed to parse JSON', e.message);
}
