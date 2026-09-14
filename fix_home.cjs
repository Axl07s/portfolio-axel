const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');
content = content.replace('return (\n    <>\n      <Hero />', 'return (\n    <main className="w-full overflow-x-hidden">\n      <Hero />');
content = content.replace('    </>\n  );', '    </main>\n  );');
fs.writeFileSync('src/pages/Home.tsx', content);
