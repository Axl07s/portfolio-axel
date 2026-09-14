
export function HeroAbstract({ theme }: { theme: 'cyber' | 'ai' | 'data' | 'saas' }) {
  if (theme === 'cyber') {
    return (
      <div className="absolute inset-0 w-full h-full bg-[#020617] overflow-hidden flex items-center justify-center z-0">
        {/* Radar Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        {/* Radar Circles */}
        <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-emerald-500/20 rounded-full flex items-center justify-center">
          <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] border border-emerald-500/30 rounded-full flex items-center justify-center">
            <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] border border-emerald-500/40 rounded-full bg-emerald-500/10"></div>
          </div>
          {/* Radar Sweep */}
          <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/40 to-transparent origin-bottom-left animate-[spin_4s_linear_infinite] [mask-image:linear-gradient(to_right,white,transparent)]"></div>
        </div>
        {/* Threat Node */}
        <div className="absolute mt-[100px] ml-[150px] w-3 h-3 bg-red-500 rounded-full animate-ping shadow-[0_0_20px_#ef4444]"></div>
      </div>
    );
  }

  if (theme === 'ai') {
    return (
      <div className="absolute inset-0 w-full h-full bg-[#020617] overflow-hidden flex items-center justify-center z-0">
        <div className="absolute inset-0 bg-blue-900/10 blur-[100px]"></div>
        {/* AI Core */}
        <div className="relative w-48 h-48 md:w-64 md:h-64">
           {/* Pulsing rings */}
           <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
           <div className="absolute inset-4 border border-blue-500/40 rounded-full animate-[spin_10s_linear_infinite] border-t-blue-400"></div>
           <div className="absolute inset-8 border border-cyan-500/40 rounded-full animate-[spin_7s_linear_infinite_reverse] border-b-cyan-300"></div>
           {/* Core Glow */}
           <div className="absolute inset-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
           <div className="absolute inset-20 bg-blue-500 rounded-full shadow-[0_0_80px_#06b6d4] animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (theme === 'data') {
    return (
      <div className="absolute inset-0 w-full h-full bg-[#020617] overflow-hidden flex items-center justify-center z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e511_1px,transparent_1px),linear-gradient(to_bottom,#4f46e511_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="flex flex-col gap-4 transform -skew-y-12 rotate-12 scale-150 opacity-20">
           <div className="w-[1000px] h-12 bg-indigo-500/40 blur-md translate-x-20"></div>
           <div className="w-[1000px] h-12 bg-blue-500/40 blur-md -translate-x-10"></div>
           <div className="w-[1000px] h-12 bg-purple-500/40 blur-md translate-x-32"></div>
           <div className="w-[1000px] h-12 bg-indigo-500/40 blur-md -translate-x-24"></div>
        </div>
        <div className="absolute w-64 h-64 bg-indigo-600/30 blur-[100px] rounded-full"></div>
      </div>
    );
  }

  return <div className="absolute inset-0 w-full h-full bg-zinc-950"></div>;
}
