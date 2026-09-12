import type { PersonalProject } from '../../data/personalProjectsData';
import { Terminal, Code2, Cpu, FileJson, GitBranch, Shield } from 'lucide-react';

export function BentoLayout({ project }: { project: PersonalProject }) {
  return (
    <div className="w-full font-sans selection:bg-emerald-500/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        
        {/* Header & Tech Stack (Row 1, Span 3) */}
        <div className="md:col-span-3 bg-[#0d1117] border border-[#30363d] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute -right-4 -top-8 text-[#21262d] opacity-50 pointer-events-none">
            <Terminal size={140} strokeWidth={1} />
          </div>
          <div className="relative z-10 flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-[#c9d1d9] tracking-tight mb-1">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-[#7ee787] text-xs md:text-sm font-mono">
              <span className="text-[#8b949e]">~/</span> {project.id}
              <span className="animate-pulse w-2 h-4 bg-[#7ee787] inline-block ml-1"></span>
            </div>
          </div>
          <div className="relative z-10 flex flex-wrap gap-2 items-center">
            <Code2 size={16} className="text-[#8b949e] hidden lg:block mr-1" />
            {project.tech.map((t) => (
              <span 
                key={t} 
                className="px-2.5 py-1 bg-[#161b22] border border-[#30363d] rounded-md text-[11px] md:text-xs font-mono text-[#79c0ff] cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Main Image Card (Row 2, Span 2, Row-Span 2) */}
        <div className="md:col-span-2 md:row-span-2 bg-[#0d1117] border border-[#30363d] rounded-2xl relative flex flex-col items-center justify-end overflow-hidden group min-h-[400px] md:min-h-[600px] pt-12 md:pt-20 px-4 md:px-0">
          
          {/* External Monitor Frame (Background) */}
          <div className="absolute top-4 right-[-10%] md:top-8 md:right-[-5%] w-[350px] md:w-[650px] -rotate-3 opacity-40 group-hover:opacity-70 group-hover:-rotate-1 transition-all duration-700 pointer-events-none z-0">
            <div className="bg-zinc-800 p-2 md:p-3 rounded-xl md:rounded-2xl border border-zinc-700 shadow-2xl">
              <div className="bg-black rounded-lg overflow-hidden border border-zinc-900 aspect-video relative">
                <img src="/projects/suitesecurity_02.png" alt="SuiteSeguridad Monitor" className="w-full h-full object-cover object-left-top" />
              </div>
              <div className="h-4 md:h-6 w-16 md:w-24 bg-zinc-700 mx-auto mt-2 rounded-b-sm"></div>
              <div className="h-1 md:h-1.5 w-24 md:w-36 bg-zinc-600 mx-auto mt-0.5 rounded-full"></div>
            </div>
          </div>

          {/* MacBook Frame (Foreground) */}
          <div className="relative z-10 w-[110%] md:w-[115%] md:-ml-[5%] group-hover:translate-y-[-10px] transition-transform duration-700 flex flex-col items-center mt-auto">
            {/* Screen */}
            <div className="bg-zinc-800 p-1.5 md:p-3 rounded-t-xl md:rounded-t-3xl border-t border-l border-r border-zinc-700 shadow-[0_20px_50px_rgba(0,0,0,0.8)] w-full">
              <div className="bg-black rounded-lg md:rounded-xl overflow-hidden border border-zinc-900 aspect-[16/10] relative">
                <img src="/projects/suitesecurity_01.png" alt="SuiteSeguridad MacBook" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            {/* Keyboard base */}
            <div className="bg-zinc-700 h-2 md:h-5 w-[104%] rounded-b-xl md:rounded-b-3xl border-b border-l border-r border-zinc-600 relative flex justify-center shadow-2xl z-20">
              <div className="w-1/6 h-1 md:h-1.5 bg-zinc-500 rounded-b-lg"></div>
            </div>
          </div>

          {project.githubUrl && (
            <div className="absolute bottom-4 right-4 z-20">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 bg-[#21262d]/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-[#30363d] hover:bg-[#30363d] hover:text-[#c9d1d9] transition-all text-[#8b949e] font-mono text-xs md:text-sm"
              >
                <GitBranch size={14} />
                <span>Source</span>
              </a>
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 z-20">
            <div className="flex items-center gap-1.5 md:gap-2 text-[#8b949e] text-[10px] md:text-xs font-mono bg-[#0d1117]/80 px-2 py-1 rounded-md">
              <Shield size={12} className="text-[#ff7b72]"/>
              <span>SYS_SEC_ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Description Card (Manifest) */}
        <div className="md:col-span-1 bg-[#0d1117] border border-[#30363d] rounded-2xl p-5 md:p-6 flex flex-col">
          <div className="flex items-center gap-2 text-[#8b949e] mb-4">
            <FileJson size={16} />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider">manifest.xml</span>
          </div>
          
          <div className="flex flex-col gap-5 mt-auto">
            <div className="group/desc">
              <div className="text-[9px] md:text-[10px] font-mono text-[#8b949e] mb-1.5 flex items-center gap-2">
                <span className="text-[#ff7b72]">&lt;</span>
                <span className="text-[#7ee787]">desc</span>
                <span className="text-[#79c0ff]"> lang</span>
                <span className="text-[#c9d1d9]">=</span>
                <span className="text-[#a5d6ff]">"en"</span>
                <span className="text-[#ff7b72]">&gt;</span>
              </div>
              <p className="text-xs md:text-sm text-[#c9d1d9] leading-relaxed group-hover/desc:text-white transition-colors">
                {project.descriptionEN}
              </p>
              <div className="text-[9px] md:text-[10px] font-mono text-[#8b949e] mt-1.5">
                <span className="text-[#ff7b72]">&lt;/</span>
                <span className="text-[#7ee787]">desc</span>
                <span className="text-[#ff7b72]">&gt;</span>
              </div>
            </div>

            <div className="group/desc">
              <div className="text-[9px] md:text-[10px] font-mono text-[#8b949e] mb-1.5 flex items-center gap-2">
                <span className="text-[#ff7b72]">&lt;</span>
                <span className="text-[#7ee787]">desc</span>
                <span className="text-[#79c0ff]"> lang</span>
                <span className="text-[#c9d1d9]">=</span>
                <span className="text-[#a5d6ff]">"es"</span>
                <span className="text-[#ff7b72]">&gt;</span>
              </div>
              <p className="text-xs md:text-sm text-[#8b949e] leading-relaxed group-hover/desc:text-[#c9d1d9] transition-colors">
                {project.descriptionES}
              </p>
              <div className="text-[9px] md:text-[10px] font-mono text-[#8b949e] mt-1.5">
                <span className="text-[#ff7b72]">&lt;/</span>
                <span className="text-[#7ee787]">desc</span>
                <span className="text-[#ff7b72]">&gt;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Text Card */}
        <div className="md:col-span-1 bg-[#0d1117] border border-[#30363d] rounded-2xl p-5 md:p-6 flex flex-col">
          <div className="flex items-center gap-2 text-[#8b949e] mb-4">
            <Cpu size={16} />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider">system_arch.yml</span>
          </div>

          <div className="flex flex-col gap-5 mt-auto">
            <div className="group/arch">
              <div className="text-[9px] md:text-[10px] font-mono text-[#79c0ff] mb-1.5">
                architecture_en: <span className="text-[#d2a8ff]">|</span>
              </div>
              <p className="text-xs md:text-sm text-[#c9d1d9] leading-relaxed border-l-2 border-[#30363d] pl-3 py-1 group-hover/arch:border-[#d2a8ff] transition-colors">
                {project.architectureEN}
              </p>
            </div>

            <div className="group/arch">
              <div className="text-[9px] md:text-[10px] font-mono text-[#79c0ff] mb-1.5">
                architecture_es: <span className="text-[#d2a8ff]">|</span>
              </div>
              <p className="text-xs md:text-sm text-[#8b949e] leading-relaxed border-l-2 border-[#30363d] pl-3 py-1 group-hover/arch:border-[#d2a8ff] transition-colors">
                {project.architectureES}
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Diagram Card (Row 4, Span 3) */}
        <div className="md:col-span-3 bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between mb-8 gap-2">
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">Flujo de Detección y Mitigación</h3>
            <div className="flex items-center gap-2 text-[#8b949e]">
              <Cpu size={16} />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider">Architecture Diagram</span>
            </div>
          </div>
          <div className="w-full max-w-4xl flex items-center justify-center p-4 md:p-8 bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-inner">
             <svg viewBox="0 0 800 400" className="w-full h-auto text-[#8b949e] font-mono text-[10px] md:text-xs">
                {/* ETW Provider */}
                <rect x="50" y="50" width="160" height="80" rx="8" fill="#21262d" stroke="#30363d" strokeWidth="2" />
                <text x="130" y="90" textAnchor="middle" fill="#c9d1d9" className="font-bold">Windows ETW</text>
                <text x="130" y="110" textAnchor="middle" fill="#8b949e" className="text-[8px] md:text-[10px]">Kernel Telemetry</text>
                
                {/* Sysmon */}
                <rect x="50" y="250" width="160" height="80" rx="8" fill="#21262d" stroke="#30363d" strokeWidth="2" />
                <text x="130" y="290" textAnchor="middle" fill="#c9d1d9" className="font-bold">Sysmon</text>
                <text x="130" y="310" textAnchor="middle" fill="#8b949e" className="text-[8px] md:text-[10px]">Process Monitor</text>

                {/* Arrows to Data Ingestion */}
                <path d="M 210 90 L 320 170" stroke="#79c0ff" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                <path d="M 210 290 L 320 210" stroke="#79c0ff" strokeWidth="2" fill="none" strokeDasharray="4,4" />

                {/* Data Ingestion (C++) */}
                <rect x="320" y="150" width="160" height="100" rx="8" fill="#1f2428" stroke="#79c0ff" strokeWidth="2" />
                <text x="400" y="190" textAnchor="middle" fill="#79c0ff" className="font-bold">C++ Event Parser</text>
                <text x="400" y="210" textAnchor="middle" fill="#8b949e" className="text-[8px] md:text-[10px]">Low Latency Ingestion</text>

                {/* Arrow to Python Engine */}
                <path d="M 480 200 L 590 200" stroke="#7ee787" strokeWidth="2" fill="none" />
                <polygon points="590,200 580,195 580,205" fill="#7ee787" />

                {/* Python Detection Engine */}
                <rect x="590" y="150" width="160" height="100" rx="8" fill="#1f2428" stroke="#7ee787" strokeWidth="2" />
                <text x="670" y="190" textAnchor="middle" fill="#7ee787" className="font-bold">Python Engine</text>
                <text x="670" y="210" textAnchor="middle" fill="#8b949e" className="text-[8px] md:text-[10px]">YARA + Heuristics</text>

                {/* Mitigation Action */}
                <path d="M 670 150 L 670 90 L 210 90" stroke="#ff7b72" strokeWidth="2" fill="none" strokeDasharray="6,4" />
                <polygon points="210,90 220,85 220,95" fill="#ff7b72" />
                <text x="440" y="80" textAnchor="middle" fill="#ff7b72" className="text-[8px] md:text-[10px]">Kill Process (Mitigation)</text>
             </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
