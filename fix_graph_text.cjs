const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', 'utf8');

content = content.replace(
  `className="font-mono text-6xl font-black text-blue-500/10 tracking-tighter uppercase border-8 border-blue-500/10 p-12 rounded-[3rem]"`,
  `className="font-mono text-4xl text-center lg:text-left lg:text-6xl font-black text-blue-500/10 tracking-tighter uppercase border-4 lg:border-8 border-blue-500/10 p-4 lg:p-12 rounded-3xl lg:rounded-[3rem]"`
);

fs.writeFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', content);
