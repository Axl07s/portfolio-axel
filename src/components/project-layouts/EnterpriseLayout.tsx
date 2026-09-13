
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
        
        {/* Floating External Monitor (Behind) */}
        <div className="absolute top-[5%] right-[0%] md:right-[5%] w-[85%] md:w-[65%] aspect-video transform rotate-y-[-15deg] rotate-x-[5deg] translate-z-[-200px] hover:translate-z-[-100px] hover:rotate-y-[-5deg] transition-all duration-1000 ease-out group/monitor z-0">
          <div className="w-full h-full bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden relative">
            {/* Window Top Bar */}
            <div className="h-6 bg-zinc-950 border-b border-zinc-800 flex items-center px-3 gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
               <div className="ml-2 text-[10px] text-zinc-500 font-mono">system_monitor.exe</div>
            </div>
            <img src="/projects/suitesecurity_02.png" alt="SuiteSeguridad Monitor" className="w-full h-[calc(100%-1.5rem)] object-cover object-left-top opacity-60 group-hover/monitor:opacity-90 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay pointer-events-none"></div>
          </div>
        </div>

        {/* Laptop (Foreground) */}
        <div className="relative w-[95%] md:w-[75%] aspect-[16/10] max-w-4xl transform rotate-x-[12deg] rotate-y-[5deg] translate-z-[100px] hover:rotate-x-[0deg] hover:rotate-y-[0deg] hover:translate-z-[150px] transition-all duration-1000 ease-out group/laptop z-10 mt-24 md:mt-0 md:-ml-[20%]">
          {/* Subtle under-glow */}
          <div className="absolute -inset-10 bg-red-500/20 blur-[100px] rounded-[3rem] opacity-0 group-hover/laptop:opacity-100 transition-opacity duration-1000 -z-10"></div>
          
          {/* Laptop Screen */}
          <div className="relative w-full h-full bg-zinc-900 rounded-t-2xl md:rounded-t-3xl border-[6px] md:border-[12px] border-zinc-800 border-b-0 overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] z-10">
            <img src="/projects/suitesecurity_01.png" alt="SuiteSeguridad UI" className="w-full h-full object-cover object-top opacity-90 group-hover/laptop:opacity-100 transition-opacity duration-700" />
            
            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Laptop Base */}
          <div className="relative w-[104%] -ml-[2%] h-3 md:h-8 bg-zinc-700 rounded-b-xl md:rounded-b-2xl border border-zinc-600 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 flex justify-center">
             <div className="w-1/6 h-1 md:h-2 bg-zinc-800 rounded-b-sm md:rounded-b-md"></div>
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
