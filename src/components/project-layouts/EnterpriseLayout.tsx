
import type { PersonalProject } from '../../data/personalProjectsData';
import { Shield, GitBranch, ArrowRight, Cpu, Activity, Zap } from 'lucide-react';

export function EnterpriseLayout({ project }: { project: PersonalProject }) {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-red-500/30">
      
      {/* Hero Header */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center text-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-64 bg-red-600/10 blur-[120px] pointer-events-none rounded-full"></div>

        {/* Small badge */}
        <div className="flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-red-500/20 bg-red-500/5 z-10">
          <Shield className="w-3.5 h-3.5 text-red-400" />
          <span className="text-xs font-medium tracking-wide text-red-400 uppercase">Enterprise Security</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] tracking-tighter uppercase break-words text-white z-10 max-w-4xl">
          {project.title}
        </h1>
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto z-10 leading-relaxed">
          {project.descriptionES}
        </p>

        {project.githubUrl && (
          <div className="mt-12 flex items-center z-10">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white text-zinc-950 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              <span>Ver Código Fuente</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}

        {/* Tech Stack Minimal Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 z-10 max-w-2xl">
          {project.tech.map((tech: string) => (
            <span key={tech} className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs font-mono tracking-widest uppercase backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Cinematic 3D Device Showcase */}
      <section className="relative w-full max-w-6xl mx-auto px-4 py-12 md:py-32 z-20 perspective-[2000px] flex items-center justify-center min-h-[50vh] md:min-h-[80vh]">
        
        {/* Vercel-style Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        {/* Floating External Monitor (Behind) */}
        <div className="absolute top-[5%] right-[0%] md:right-[5%] w-[85%] md:w-[65%] aspect-video transform rotate-y-[-15deg] rotate-x-[5deg] translate-z-[-200px] hover:translate-z-[-100px] hover:rotate-y-[-5deg] transition-all duration-1000 ease-out group/monitor z-10">
          <div className="w-full h-full bg-zinc-950/80 backdrop-blur-xl rounded-xl border border-zinc-800 shadow-2xl overflow-hidden relative">
            {/* Window Top Bar */}
            <div className="h-8 bg-zinc-900/50 border-b border-zinc-800/50 flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
               <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
               <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
               <div className="ml-2 text-xs text-zinc-500 font-mono">system_monitor.exe</div>
            </div>
            <img src="/projects/suitesecurity_02.png" alt="SuiteSeguridad Monitor" className="w-full h-[calc(100%-2rem)] object-cover object-left-top opacity-40 group-hover/monitor:opacity-80 transition-opacity duration-700 mix-blend-screen" />
          </div>
        </div>

        {/* Main Glass Window (Foreground) */}
        <div className="relative w-[95%] md:w-[85%] max-w-5xl z-20 mt-12 md:mt-0 md:-ml-[10%] group/window" style={{ perspective: '2000px' }}>
          
          <div className="relative w-full aspect-[16/10] transition-transform duration-1000 ease-out shadow-[0_0_100px_rgba(16,185,129,0.15)] rounded-2xl md:rounded-[2rem] border border-white/10 bg-zinc-950/60 backdrop-blur-3xl overflow-hidden" 
               style={{ transformStyle: 'preserve-3d', transform: 'rotateY(5deg) rotateX(2deg)' }}>
            
            {/* macOS Window Header */}
            <div className="absolute top-0 inset-x-0 h-10 md:h-12 bg-white/5 border-b border-white/5 flex items-center px-4 md:px-6 gap-2 z-30">
               <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
               <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
               <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
               <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-black/40 rounded-md border border-white/5">
                 <Shield className="w-3.5 h-3.5 text-emerald-400" />
                 <span className="text-[10px] md:text-xs text-zinc-400 font-mono">SuiteSeguridad.exe</span>
               </div>
            </div>
            
            <img src="/projects/suitesecurity_01.png" alt="SuiteSeguridad UI" className="w-full h-full object-cover object-top pt-10 md:pt-12 opacity-90 group-hover/window:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
          </div>

          {/* Floating Bento Widgets (Breaking out of the screen) */}
          <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 p-4 md:p-6 bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800 rounded-2xl shadow-2xl z-30 transition-transform duration-1000 ease-out hover:scale-105"
               style={{ transform: 'translateZ(100px)' }}>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                   <Shield className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-zinc-400 text-[10px] md:text-xs font-mono uppercase tracking-wider mb-1">Status</h4>
                  <p className="text-white text-lg md:text-2xl font-light">Zero-Trust Activo</p>
                </div>
             </div>
          </div>

          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 p-3 md:p-4 bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800 rounded-2xl shadow-2xl z-30 transition-transform duration-1000 ease-out hover:scale-105"
               style={{ transform: 'translateZ(80px)' }}>
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <h4 className="text-white text-xs md:text-sm font-mono tracking-widest">ETW KERNEL</h4>
             </div>
          </div>

        </div>
      </section>

      {/* Hardcore Metrics */}
      <section className="py-24 border-y border-zinc-900 bg-zinc-950/50 relative z-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-800 text-center">
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Zap className="w-6 h-6 text-red-500 mb-4 opacity-80" />
            <div className="text-5xl font-light text-white mb-2 tracking-tighter">{"< 12ms"}</div>
            <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Latencia Kernel</div>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Cpu className="w-6 h-6 text-red-500 mb-4 opacity-80" />
            <div className="text-5xl font-light text-white mb-2 tracking-tighter">0.8%</div>
            <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Overhead CPU</div>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Activity className="w-6 h-6 text-red-500 mb-4 opacity-80" />
            <div className="text-5xl font-light text-white mb-2 tracking-tighter">100%</div>
            <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Mitigación Ransomware</div>
          </div>
        </div>
      </section>

      {/* Storytelling Block */}
      <section className="px-4 py-24 max-w-3xl mx-auto text-center space-y-8 relative z-20">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
           Protección proactiva,<br className="hidden md:block"/>
           <span className="text-zinc-500">sin comprometer el rendimiento.</span>
         </h2>
         <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
           {project.architectureES}
         </p>
      </section>

      {/* Architecture Diagram */}
      <section className="py-12 md:py-24 px-4 max-w-5xl mx-auto relative z-20">
        <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <h3 className="text-xl md:text-2xl font-light text-white mb-12 text-center">Arquitectura de Detección</h3>
          
          <div className="w-full max-w-3xl mx-auto">
            <svg viewBox="0 0 800 400" className="w-full h-auto font-sans">
              <defs>
                <linearGradient id="gradRed" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="gradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#18181b" />
                  <stop offset="100%" stopColor="#09090b" />
                </linearGradient>
              </defs>

              {/* ETW Provider */}
              <rect x="50" y="50" width="180" height="90" rx="12" fill="url(#gradDark)" stroke="#27272a" strokeWidth="2" />
              <text x="140" y="95" textAnchor="middle" fill="#f4f4f5" className="text-lg font-medium">Windows ETW</text>
              <text x="140" y="115" textAnchor="middle" fill="#71717a" className="text-sm">Kernel Telemetry</text>
              
              {/* Sysmon */}
              <rect x="50" y="250" width="180" height="90" rx="12" fill="url(#gradDark)" stroke="#27272a" strokeWidth="2" />
              <text x="140" y="295" textAnchor="middle" fill="#f4f4f5" className="text-lg font-medium">Sysmon</text>
              <text x="140" y="315" textAnchor="middle" fill="#71717a" className="text-sm">Process Monitor</text>

              {/* Arrows to Data Ingestion */}
              <path d="M 230 95 L 340 180" stroke="#52525b" strokeWidth="2" fill="none" strokeDasharray="6,6" />
              <path d="M 230 295 L 340 215" stroke="#52525b" strokeWidth="2" fill="none" strokeDasharray="6,6" />

              {/* Data Ingestion (C++) */}
              <rect x="340" y="150" width="180" height="110" rx="12" fill="url(#gradDark)" stroke="#3f3f46" strokeWidth="2" />
              <text x="430" y="195" textAnchor="middle" fill="#f4f4f5" className="text-lg font-medium">C++ Event Parser</text>
              <text x="430" y="220" textAnchor="middle" fill="#71717a" className="text-sm">Low Latency Ingestion</text>

              {/* Arrow to Python Engine */}
              <path d="M 520 205 L 610 205" stroke="#ef4444" strokeWidth="3" fill="none" />
              <polygon points="615,205 605,198 605,212" fill="#ef4444" />

              {/* Python Detection Engine */}
              <rect x="620" y="150" width="180" height="110" rx="12" fill="url(#gradRed)" stroke="#ef4444" strokeWidth="2" />
              <text x="710" y="195" textAnchor="middle" fill="#f4f4f5" className="text-lg font-medium">Python Engine</text>
              <text x="710" y="220" textAnchor="middle" fill="#f87171" className="text-sm">YARA + Heuristics</text>

              {/* Mitigation Action */}
              <path d="M 710 150 L 710 70 L 230 70" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="8,4" />
              <polygon points="230,70 240,64 240,76" fill="#ef4444" />
              <text x="470" y="60" textAnchor="middle" fill="#f87171" className="text-sm font-medium">Mitigación Inmediata (Kill Process)</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Spacing at bottom */}
      <div className="h-24"></div>
    </article>
  );
}
