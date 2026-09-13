import { useEffect, useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { Cpu, Terminal, Mic, ShieldAlert, ArrowRight } from 'lucide-react';

export function CommandCenterLayout({ project }: { project: Project }) {
  const [pulse, setPulse] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const rotateX = (0.5 - mousePos.y) * 12;
  const rotateY = (mousePos.x - 0.5) * 12;

  return (
    <article className="min-h-screen bg-black text-green-500 font-mono selection:bg-green-500/30 overflow-hidden">
      
      {/* Sci-Fi Grid Background tracking mouse slightly */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 transition-transform duration-300 ease-out" 
        style={{ 
          backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          transform: `translate(${mousePos.x * 30 - 15}px, ${mousePos.y * 30 - 15}px)`
        }}
      ></div>
      
      <header className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-green-500/30">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-green-400" />
            <span className="text-sm tracking-widest text-green-400 uppercase">System Initialized</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">
            {project.title}
          </h1>
          <p className="text-green-400/70 max-w-2xl text-lg">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-2 text-right">
          {project.metrics.map((m, i) => (
             <div key={i} className="flex items-center gap-3 bg-green-950/30 px-4 py-2 border border-green-500/20 rounded hover:bg-green-900/50 transition-colors">
                <span className="text-xs text-green-600 uppercase">{m.label}</span>
                <span className="text-white font-bold">{m.value}</span>
             </div>
          ))}
        </div>
      </header>

      {/* 3D HUD Layout */}
      <section 
        className="relative z-10 max-w-7xl mx-auto px-6 py-12"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        style={{ perspective: '2000px' }}
      >
        <div 
           className="grid grid-cols-1 lg:grid-cols-12 gap-8 transition-transform duration-300 ease-out"
           style={{ 
             transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
             transformStyle: 'preserve-3d' 
           }}
        >
          {/* Left Column: Diagnostics */}
          <div className="lg:col-span-3 space-y-8 transition-transform duration-300" style={{ transform: 'translateZ(20px)' }}>
             <div className="border border-green-500/30 bg-black/50 backdrop-blur-sm p-6 rounded-lg relative overflow-hidden group hover:border-green-400 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <h3 className="text-green-500 uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><Terminal className="w-4 h-4" /> Tech Stack</h3>
                <ul className="space-y-4">
                   {project.stack.map(s => (
                     <li key={s} className="flex justify-between items-center text-sm border-b border-green-900 pb-2 hover:pl-2 transition-all">
                       <span className="text-zinc-300">{s}</span>
                       <span className="text-green-500 text-xs">OK</span>
                     </li>
                   ))}
                </ul>
             </div>

             <div className="border border-green-500/30 bg-black/50 backdrop-blur-sm p-6 rounded-lg hover:border-green-500/60 transition-colors">
                <h3 className="text-green-500 uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> Core Modules</h3>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="text-xs text-zinc-400 leading-relaxed pl-3 border-l border-green-500/50">
                      {f}
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          {/* Center Column: The Main UI & Voice Waveform */}
          <div className="lg:col-span-6 flex flex-col gap-8 transition-transform duration-300" style={{ transform: 'translateZ(60px)' }}>
             <div className="border border-green-500/50 bg-green-950/10 p-2 rounded-xl relative shadow-[0_0_50px_rgba(16,185,129,0.1)] group">
                <div className="absolute top-4 right-4 flex gap-1 z-20">
                   <div className={`w-2 h-2 rounded-full ${pulse ? 'bg-red-500 shadow-[0_0_10px_red]' : 'bg-red-900'}`}></div>
                   <span className="text-[10px] uppercase text-red-500">Live</span>
                </div>
                <img src={project.images[0]?.url} alt="Main HUD" className="w-full h-auto rounded-lg border border-green-900/50 mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity" />
             </div>

             <div className="border border-green-500/30 bg-black p-4 rounded-xl flex items-center justify-between hover:border-green-500/60 transition-colors">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border border-green-500 flex items-center justify-center bg-green-950/50 relative">
                      <Mic className="w-5 h-5 text-green-400" />
                      {pulse && <div className="absolute inset-0 rounded-full border border-green-400 animate-ping"></div>}
                   </div>
                   <div>
                     <div className="text-xs text-green-500 uppercase tracking-widest">ElevenLabs Neural Link</div>
                     <div className="text-white text-sm">Awaiting Voice Input...</div>
                   </div>
                </div>
                <img src={project.images[1]?.url} alt="Waveform" className="h-16 w-32 object-cover opacity-70 sepia hue-rotate-[70deg] saturate-200" />
             </div>
          </div>

          {/* Right Column: Ledger & Terminal */}
          <div className="lg:col-span-3 space-y-8 transition-transform duration-300" style={{ transform: 'translateZ(30px)' }}>
             <div className="border border-green-500/30 bg-black/50 backdrop-blur-sm p-2 rounded-lg hover:scale-105 transition-transform">
                <img src={project.images[2]?.url} alt="Ledger" className="w-full h-auto rounded border border-green-900/30 mix-blend-screen" />
             </div>

             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full border border-green-400 bg-green-500/10 hover:bg-green-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-green-400 text-center py-4 rounded-lg uppercase tracking-widest text-sm transition-all group">
                <div className="flex justify-center items-center gap-2">
                   Launch Command Center
                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
             </a>
          </div>
        </div>
      </section>

    </article>
  );
}
