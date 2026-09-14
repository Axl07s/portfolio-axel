import React from 'react';
import { Link } from 'react-router-dom';
import { personalProjects } from '../data/personalProjectsData';
import { ExternalLink, Database, Server, Smartphone, Monitor, Shield, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TECH_ICONS: Record<string, React.ReactNode> = {
  'Python': <Monitor className="w-4 h-4" />,
  'Flutter': <Smartphone className="w-4 h-4" />,
  'Spring Boot': <Server className="w-4 h-4" />,
  'SQLite': <Database className="w-4 h-4" />,
};

export function PersonalProjectsSection({ lang: propLang, hideHeader = false }: { lang?: 'es' | 'en' | 'ES' | 'EN', hideHeader?: boolean }) {
  const { lang: contextLang } = useLanguage();
  const lang = (propLang || contextLang).toLowerCase();
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {!hideHeader && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {lang.toLowerCase() === 'es' ? 'Laboratorio & Sistemas Deep Tech' : 'Labs & Deep Tech Systems'}
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              {lang.toLowerCase() === 'es' 
                ? 'Investigación técnica profunda: ingeniería de sistemas a bajo nivel en C/C++ (EDR/ETW) y desarrollo móvil offline-first con sincronización reactiva.'
                : 'In-depth technical research: low-level systems engineering in C/C++ (EDR/ETW) and offline-first mobile architectures with reactive sync.'}
            </p>
          </div>
        )}

        <div className="flex flex-col border-t border-zinc-800">
          {personalProjects.map((project) => (
            <Link 
              to={`/project/${project.id}`}
              key={project.id}
              className="group flex flex-col lg:flex-row lg:items-center justify-between py-8 border-b border-zinc-800 transition-colors hover:bg-zinc-900/50 relative cursor-pointer gap-6 px-2 sm:px-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:w-5/12">
                                {project.id === 'puce-connect-hub' ? (
                  <div className="w-full sm:w-40 md:w-44 h-28 rounded-xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-blue-900 to-zinc-950 shrink-0 relative group-hover:border-blue-500/50 transition-colors flex items-center justify-center shadow-inner">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full" />
                    <GraduationCap className="w-10 h-10 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ) : project.id === 'suiteseguridad' ? (
                  <div className="w-full sm:w-40 md:w-44 h-28 rounded-xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-emerald-950 to-zinc-950 shrink-0 relative group-hover:border-emerald-500/50 transition-colors flex items-center justify-center shadow-inner">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full" />
                    <Shield className="w-10 h-10 text-emerald-500 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ) : project.image && (
                  <div className="w-full sm:w-40 md:w-44 h-28 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shrink-0 relative group-hover:border-zinc-700 transition-colors flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105 object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zinc-500 hover:text-white transition-colors" 
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800 flex items-center gap-1">
                        {TECH_ICONS[t] || null}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-7/12 flex flex-col sm:flex-row gap-6">
                <div className="sm:w-1/2">
                  <h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-semibold">
                    {lang.toLowerCase() === 'es' ? 'El Desafío' : 'The Challenge'}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {lang.toLowerCase() === 'es' ? project.descriptionES : project.descriptionEN}
                  </p>
                </div>
                <div className="sm:w-1/2">
                  <h4 className="text-xs text-blue-500/80 uppercase tracking-wider mb-2 font-semibold">
                    {lang.toLowerCase() === 'es' ? 'Decisión de Arquitectura' : 'Architecture Decision'}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed border-l-2 border-blue-500/20 pl-3">
                    {lang.toLowerCase() === 'es' ? project.architectureES : project.architectureEN}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}




