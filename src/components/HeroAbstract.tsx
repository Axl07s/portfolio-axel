
export function HeroAbstract({ theme }: { theme: 'cyber' | 'ai' | 'data' | 'saas' }) {
  if (theme === 'cyber') {
    return (
      <div className="absolute inset-0 w-full h-full bg-[#020617] overflow-hidden flex items-center justify-center z-0 perspective-[1000px]">
        {/* Advanced Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(16,185,129,0.2)_2px,transparent_2px)] bg-[size:100px_100px] opacity-40"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]"></div>

        {/* Center Reticule */}
        <div className="absolute w-[80vh] h-[80vh] border border-emerald-500/20 rounded-full flex items-center justify-center">
          <div className="absolute w-[60vh] h-[60vh] border border-emerald-500/10 rounded-full border-dashed"></div>
          <div className="absolute w-[40vh] h-[40vh] border border-emerald-500/30 rounded-full"></div>
          
          {/* Crosshairs */}
          <div className="absolute w-full h-[1px] bg-emerald-500/20"></div>
          <div className="absolute h-full w-[1px] bg-emerald-500/20"></div>
          
          {/* Pro Radar Sweep using conic-gradient */}
          <div className="absolute w-full h-full rounded-full animate-[spin_4s_linear_infinite]" 
               style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(16, 185, 129, 0.1) 95%, rgba(16, 185, 129, 0.8) 100%)' }}>
          </div>
        </div>

        {/* Threat Targets */}
        <div className="absolute top-[30%] left-[60%] flex items-center justify-center">
          <div className="w-8 h-8 border border-red-500/50 flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-red-500 shadow-[0_0_10px_#ef4444]"></div>
          </div>
          <div className="absolute top-10 text-red-500 text-[10px] font-mono tracking-widest whitespace-nowrap">THREAT DETECTED</div>
        </div>
        
        <div className="absolute bottom-[40%] right-[70%] flex items-center justify-center">
          <div className="w-6 h-6 border border-emerald-500/50 flex items-center justify-center">
            <div className="w-1 h-1 bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
          </div>
          <div className="absolute top-8 text-emerald-500/70 text-[10px] font-mono tracking-widest whitespace-nowrap">SECURE NODE</div>
        </div>
      </div>
    );
  }

  return <div className="absolute inset-0 w-full h-full bg-zinc-950"></div>;
}
