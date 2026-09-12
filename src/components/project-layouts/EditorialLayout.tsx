import type { PersonalProject } from '../../data/personalProjectsData';
import { ArrowRight, GitBranch, Smartphone } from 'lucide-react';

export function EditorialLayout({ project }: { project: PersonalProject }) {
  // Mobile frame placeholder since we don't have real app screenshots
  const MobileFrame = ({ title }: { title: string }) => (
    <div className="relative mx-auto border-zinc-800 border-[8px] bg-zinc-950 rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden ring-1 ring-white/10">
      <div className="absolute top-0 inset-x-0 h-6 bg-zinc-950 flex justify-center rounded-t-[2rem]">
        <div className="w-20 h-4 bg-zinc-950 rounded-b-xl border border-t-0 border-zinc-800"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <Smartphone className="w-12 h-12 text-zinc-700 mb-4" />
        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest border border-dashed border-zinc-700 p-2 rounded w-full">
          PLACEHOLDER: {title}
        </p>
      </div>
    </div>
  );

  return (
    <article className="w-full bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Hero Header */}
      <header className="px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl mx-auto border-b border-zinc-800/50">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter uppercase break-words text-white">
            {project.title}
          </h1>
          {project.githubUrl && (
            <div className="mt-12 flex items-center">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
              >
                <GitBranch className="w-5 h-5" />
                <span>View Source</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Mockups Hero */}
      <div className="w-full py-20 relative group overflow-hidden bg-zinc-900/20 border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 justify-center items-center">
          <MobileFrame title="Reemplazar con captura real de Calificaciones" />
          <div className="hidden md:block mt-24">
            <MobileFrame title="Reemplazar con captura real de Sincronización Offline" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Tech Stack - Left column on large screens */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6 border-b border-zinc-800 pb-4">
                Technology Stack
              </h2>
              <ul className="space-y-4">
                {project.tech.map((techItem, index) => (
                  <li key={index} className="text-lg md:text-xl font-light text-zinc-300 tracking-wide">
                    {techItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Text Content - Right side */}
          <div className="lg:col-span-9 space-y-32">
            
            {/* Overview */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-12 border-b border-zinc-800 pb-4">
                The Project
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-12">
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    Español
                  </p>
                  <p className="text-xl md:text-3xl font-light leading-snug text-zinc-200">
                    {project.descriptionES}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                    English
                  </p>
                  <p className="text-xl md:text-3xl font-light leading-snug text-zinc-400">
                    {project.descriptionEN}
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-12 border-b border-zinc-800 pb-4">
                Architecture & Design
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-12">
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">ESP</p>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-400">
                    {project.architectureES}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">ENG</p>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-400">
                    {project.architectureEN}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
}
