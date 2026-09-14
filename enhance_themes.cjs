const fs = require('fs');
let content = fs.readFileSync('src/components/HeroAbstract.tsx', 'utf8');

// The AI and Data themes might need a boost to match the new Cyber theme.
const aiThemeReplacement = `
  if (theme === 'ai') {
    return (
      <div className="absolute inset-0 w-full h-full bg-[#020617] overflow-hidden flex items-center justify-center z-0 perspective-[1000px]">
        {/* Core Glow */}
        <div className="absolute inset-0 bg-blue-900/10 blur-[100px]"></div>
        
        {/* Holographic AI Ring */}
        <div className="relative w-[50vh] h-[50vh]">
           <div className="absolute inset-0 border-[4px] border-cyan-500/20 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
           <div className="absolute inset-4 border border-blue-400/40 rounded-full animate-[spin_15s_linear_infinite] border-t-blue-300 border-b-blue-300 border-l-transparent border-r-transparent"></div>
           <div className="absolute inset-10 border border-cyan-400/30 rounded-full animate-[spin_10s_linear_infinite_reverse] border-dashed"></div>
           <div className="absolute inset-16 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
           
           {/* Center Neural Node */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500 rounded-full shadow-[0_0_80px_#06b6d4] animate-pulse flex items-center justify-center">
              <div className="w-full h-full border border-white/50 rounded-full animate-ping"></div>
           </div>
        </div>

        {/* Data processing streams */}
        <div className="absolute top-1/4 right-[20%] text-cyan-500/70 text-[10px] font-mono whitespace-nowrap">NEURAL_NET_ACTIVE</div>
        <div className="absolute bottom-1/3 left-[20%] text-blue-400/70 text-[10px] font-mono whitespace-nowrap">NLP_MODELS_SYNCED</div>
      </div>
    );
  }
`;

content = content.replace(/if \(theme === 'ai'\) \{[\s\S]*?return \(\s*<div className="absolute inset-0 w-full h-full bg-\[#020617\][\s\S]*?<\/div>\s*\);\s*\}/s, aiThemeReplacement);

const dataThemeReplacement = `
  if (theme === 'data') {
    return (
      <div className="absolute inset-0 w-full h-full bg-[#020617] overflow-hidden flex items-center justify-center z-0 perspective-[1000px]">
        {/* Isometric Data Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e522_1px,transparent_1px),linear-gradient(to_bottom,#4f46e522_1px,transparent_1px)] bg-[size:40px_40px] transform rotate-X-60 scale-150 origin-bottom opacity-50 animate-pulse"></div>
        
        {/* Floating Data Nodes */}
        <div className="relative w-[60vh] h-[40vh] transform -skew-y-6">
           <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/20 border border-indigo-500/50 rounded-xl backdrop-blur-sm animate-[bounce_4s_infinite] shadow-[0_0_30px_#4f46e5]"></div>
           <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/20 border border-purple-500/50 rounded-xl backdrop-blur-sm animate-[bounce_5s_infinite_1s] shadow-[0_0_30px_#a855f7]"></div>
           <div className="absolute top-1/2 left-1/3 w-40 h-20 bg-blue-500/20 border border-blue-500/50 rounded-xl backdrop-blur-sm animate-[bounce_6s_infinite_0.5s] shadow-[0_0_30px_#3b82f6] flex items-center justify-center">
              <span className="text-white/70 font-mono text-xs">RAG_CLUSTER</span>
           </div>
        </div>
      </div>
    );
  }
`;

content = content.replace(/if \(theme === 'data'\) \{[\s\S]*?return \(\s*<div className="absolute inset-0 w-full h-full bg-\[#020617\][\s\S]*?<\/div>\s*\);\s*\}/s, dataThemeReplacement);

fs.writeFileSync('src/components/HeroAbstract.tsx', content);
