import type { PersonalProject } from '../../data/personalProjectsData';
import { ArrowRight, GitBranch } from 'lucide-react';

export function EditorialLayout({ project }: { project: PersonalProject }) {
  return (
    <article className="w-full bg-white text-zinc-900 min-h-screen font-sans selection:bg-zinc-200">
      {/* Hero Header */}
      <header className="px-6 md:px-12 lg:px-24 pt-32 pb-16 max-w-[100rem] mx-auto">
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-medium leading-[0.85] tracking-tighter uppercase break-words">
          {project.title}
        </h1>
        {project.githubUrl && (
          <div className="mt-12 flex items-center">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase hover:text-zinc-600 transition-colors"
            >
              <GitBranch className="w-5 h-5" />
              <span>View Source</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </header>

      {/* Edge-to-edge Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] relative group overflow-hidden bg-zinc-100">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
        />
      </div>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Tech Stack - Left column on large screens */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-zinc-200 pb-4">
                Technology Stack
              </h2>
              <ul className="space-y-4">
                {project.tech.map((techItem, index) => (
                  <li key={index} className="text-lg md:text-xl font-light text-zinc-800 tracking-wide">
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
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12 border-b border-zinc-200 pb-4">
                The Project
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24">
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                    Español
                  </p>
                  <p className="text-2xl md:text-4xl font-light leading-snug text-zinc-900">
                    {project.descriptionES}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
                    English
                  </p>
                  <p className="text-2xl md:text-4xl font-light leading-snug text-zinc-900">
                    {project.descriptionEN}
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12 border-b border-zinc-200 pb-4">
                Architecture & Design
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24">
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">ESP</p>
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-600">
                    {project.architectureES}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">ENG</p>
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-600">
                    {project.architectureEN}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Footer whitespace for pacing */}
      <div className="h-24 md:h-48 w-full"></div>
    </article>
  );
}
