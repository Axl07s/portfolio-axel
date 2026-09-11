import type { PersonalProject } from '../../data/personalProjectsData';
import { Terminal, Code2, Cpu, FileJson, GitBranch, Shield } from 'lucide-react';

export function BentoLayout({ project }: { project: PersonalProject }) {
  return (
    <div className="w-full font-sans selection:bg-emerald-500/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
        
        {/* Header / Title Card */}
        <div className="md:col-span-2 bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 flex flex-col relative group overflow-hidden">
          <div className="absolute -right-6 -top-6 text-[#21262d] group-hover:text-[#30363d] transition-colors duration-500">
            <Terminal size={120} strokeWidth={1} />
          </div>
          <div className="relative z-10 flex flex-col h-full min-h-[140px]">
            <h3 className="text-3xl font-bold text-[#c9d1d9] mb-2 tracking-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-[#7ee787] text-sm font-mono mt-auto pt-4">
              <span className="text-[#8b949e]">~/</span> {project.id}
              <span className="animate-pulse w-2 h-4 bg-[#7ee787] inline-block ml-1"></span>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="md:col-span-2 bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 flex flex-col">
          <div className="flex items-center gap-2 text-[#8b949e] mb-4">
            <Code2 size={16} />
            <span className="text-xs font-mono uppercase tracking-wider">dependencies.json</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t, i) => (
              <span 
                key={t} 
                className="px-3 py-1.5 bg-[#161b22] border border-[#21262d] rounded-lg text-xs font-mono text-[#79c0ff] hover:border-[#79c0ff]/50 transition-colors cursor-default"
              >
                <span className="text-[#ff7b72]">"</span>
                {t}
                <span className="text-[#ff7b72]">"</span>
                {i < project.tech.length - 1 && <span className="text-[#c9d1d9]">,</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Visual / Image Card */}
        <div className="md:col-span-2 md:row-span-2 bg-[#0d1117] border border-[#30363d] rounded-2xl overflow-hidden relative group min-h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/20 to-transparent opacity-80 z-10 pointer-events-none"></div>
          
          <div className="absolute top-4 left-4 z-20 flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>

          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
          
          {project.githubUrl && (
            <div className="absolute bottom-4 right-4 z-20">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 bg-[#21262d]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#30363d] hover:bg-[#30363d] hover:text-[#c9d1d9] transition-all text-[#8b949e] font-mono text-sm"
              >
                <GitBranch size={16} />
                <span>Source</span>
              </a>
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 z-20">
            <div className="flex items-center gap-2 text-[#8b949e] text-xs font-mono">
              <Shield size={14} className="text-[#ff7b72]"/>
              <span>SYS_SEC_ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Description Card */}
        <div className="md:col-span-1 md:row-span-2 bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 flex flex-col">
          <div className="flex items-center gap-2 text-[#8b949e] mb-5">
            <FileJson size={16} />
            <span className="text-xs font-mono uppercase tracking-wider">manifest.xml</span>
          </div>
          
          <div className="flex flex-col gap-6 mt-auto">
            <div className="group/desc">
              <div className="text-[10px] font-mono text-[#8b949e] mb-1.5 flex items-center gap-2">
                <span className="text-[#ff7b72]">&lt;</span>
                <span className="text-[#7ee787]">desc</span>
                <span className="text-[#79c0ff]"> lang</span>
                <span className="text-[#c9d1d9]">=</span>
                <span className="text-[#a5d6ff]">"en"</span>
                <span className="text-[#ff7b72]">&gt;</span>
              </div>
              <p className="text-sm text-[#c9d1d9] leading-relaxed group-hover/desc:text-white transition-colors">
                {project.descriptionEN}
              </p>
              <div className="text-[10px] font-mono text-[#8b949e] mt-1.5">
                <span className="text-[#ff7b72]">&lt;/</span>
                <span className="text-[#7ee787]">desc</span>
                <span className="text-[#ff7b72]">&gt;</span>
              </div>
            </div>

            <div className="group/desc">
              <div className="text-[10px] font-mono text-[#8b949e] mb-1.5 flex items-center gap-2">
                <span className="text-[#ff7b72]">&lt;</span>
                <span className="text-[#7ee787]">desc</span>
                <span className="text-[#79c0ff]"> lang</span>
                <span className="text-[#c9d1d9]">=</span>
                <span className="text-[#a5d6ff]">"es"</span>
                <span className="text-[#ff7b72]">&gt;</span>
              </div>
              <p className="text-sm text-[#8b949e] leading-relaxed group-hover/desc:text-[#c9d1d9] transition-colors">
                {project.descriptionES}
              </p>
              <div className="text-[10px] font-mono text-[#8b949e] mt-1.5">
                <span className="text-[#ff7b72]">&lt;/</span>
                <span className="text-[#7ee787]">desc</span>
                <span className="text-[#ff7b72]">&gt;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Card */}
        <div className="md:col-span-1 md:row-span-2 bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 flex flex-col">
          <div className="flex items-center gap-2 text-[#8b949e] mb-5">
            <Cpu size={16} />
            <span className="text-xs font-mono uppercase tracking-wider">system_arch.yml</span>
          </div>

          <div className="flex flex-col gap-6 mt-auto">
            <div className="group/arch">
              <div className="text-[10px] font-mono text-[#79c0ff] mb-1.5">
                architecture_en: <span className="text-[#d2a8ff]">|</span>
              </div>
              <p className="text-sm text-[#c9d1d9] leading-relaxed border-l-2 border-[#30363d] pl-3 py-1 group-hover/arch:border-[#d2a8ff] transition-colors">
                {project.architectureEN}
              </p>
            </div>

            <div className="group/arch">
              <div className="text-[10px] font-mono text-[#79c0ff] mb-1.5">
                architecture_es: <span className="text-[#d2a8ff]">|</span>
              </div>
              <p className="text-sm text-[#8b949e] leading-relaxed border-l-2 border-[#30363d] pl-3 py-1 group-hover/arch:border-[#d2a8ff] transition-colors">
                {project.architectureES}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
