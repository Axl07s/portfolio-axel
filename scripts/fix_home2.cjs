const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');
content = content.replace('<>', '<main className="w-full overflow-x-hidden">');
content = content.replace('</>', '</main>');
fs.writeFileSync('src/pages/Home.tsx', content);
