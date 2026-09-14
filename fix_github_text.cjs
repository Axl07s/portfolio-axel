const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// The Github span is currently: <span className="hidden sm:inline">GitHub</span>
content = content.replace('<span className="hidden sm:inline">GitHub</span>', '<span className="text-white font-bold">GitHub</span>');

// Also update the link classes to ensure strong white text
content = content.replace(
  'className="flex items-center gap-2 bg-black hover:bg-zinc-900 text-white px-5 py-3 rounded-full font-medium transition-all shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/10 backdrop-blur-md hover:scale-105"',
  'className="flex items-center gap-2 bg-black hover:bg-zinc-900 text-white px-5 py-3 rounded-full font-bold transition-all shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/20 backdrop-blur-md hover:scale-105"'
);

fs.writeFileSync('src/pages/ProjectDetail.tsx', content);
