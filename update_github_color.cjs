const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// The current classes for the Github button are:
// className="flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white px-5 py-3 rounded-full font-medium transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-zinc-700 backdrop-blur-md hover:scale-105"

const oldClasses = "className=\"flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white px-5 py-3 rounded-full font-medium transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-zinc-700 backdrop-blur-md hover:scale-105\"";
const newClasses = "className=\"flex items-center gap-2 bg-black hover:bg-zinc-900 text-white px-5 py-3 rounded-full font-medium transition-all shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/10 backdrop-blur-md hover:scale-105\"";

content = content.replace(oldClasses, newClasses);

fs.writeFileSync('src/pages/ProjectDetail.tsx', content);
