const fs = require('fs');

const code = `import React from 'react';
import { Shield, Smartphone, Terminal as TerminalIcon } from 'lucide-react';

interface DeviceMockupProps {
  type: 'mac' | 'phone' | 'terminal';
  children?: React.ReactNode;
  imgSrc?: string;
  url?: string;
  className?: string;
}

export function DeviceMockup({ type, children, imgSrc, url = 'localhost:3000', className = '' }: DeviceMockupProps) {
  if (type === 'mac') {
    return (
      <div className={\`w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 \${className}\`}>
        <div className="h-10 bg-zinc-950 flex items-center px-4 border-b border-zinc-800 shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-amber-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors"></div>
          </div>
          <div className="mx-auto flex items-center gap-2 text-[11px] text-zinc-500 font-mono bg-zinc-900 px-3 py-1 rounded-md">
            <Shield className="w-3 h-3" />
            {url}
          </div>
        </div>
        <div className="relative w-full">
          {imgSrc ? <img src={imgSrc} alt="App Interface" className="w-full h-auto object-cover" /> : children}
        </div>
      </div>
    );
  }

  if (type === 'terminal') {
    return (
      <div className={\`w-full rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-[#0a0a0a] \${className}\`}>
        <div className="h-9 bg-[#1a1a1a] flex items-center px-4 border-b border-zinc-800 shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          </div>
          <div className="mx-auto text-[11px] text-zinc-500 font-mono flex items-center gap-2">
            <TerminalIcon className="w-3 h-3" />
            root@server:~
          </div>
        </div>
        <div className="p-4 font-mono text-sm text-zinc-300 w-full overflow-x-auto">
          {imgSrc ? <img src={imgSrc} alt="Terminal Output" className="w-full h-auto object-cover rounded" /> : children}
        </div>
      </div>
    );
  }

  if (type === 'phone') {
    return (
      <div className={\`w-full max-w-[280px] mx-auto aspect-[9/19.5] bg-[#0c0c0e] rounded-[3rem] border-[10px] border-zinc-900 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] relative flex flex-col \${className}\`}>
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-full z-40"></div>
        <div className="flex-1 overflow-hidden relative">
          {imgSrc ? <img src={imgSrc} alt="Mobile UI" className="w-full h-full object-cover" /> : children}
        </div>
      </div>
    );
  }

  return null;
}
\`;

fs.writeFileSync('src/components/DeviceMockup.tsx', code);
