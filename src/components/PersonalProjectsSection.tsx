import React from 'react';
import { Link } from 'react-router-dom';
import { personalProjects } from '../data/personalProjectsData';
import { ExternalLink, Database, Server, Smartphone, Monitor } from 'lucide-react';

const TECH_ICONS: Record<string, React.ReactNode> = {
  'Python': <Monitor className="w-4 h-4" />,
  'Flutter': <Smartphone className="w-4 h-4" />,
  'Spring Boot': <Server className="w-4 h-4" />,
  'SQLite': <Database className="w-4 h-4" />,
};

export function PersonalProjectsSection({ lang, hideHeader = false }: { lang: 'ES' | 'EN', hideHeader?: boolean }) {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {!hideHeader && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {lang === 'ES' ? 'Laboratorio & Experimentos' : 'Labs & Experiments'}
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              {lang === 'ES' 
                ? 'Proyectos académicos y de investigación personal donde exploro arquitecturas complejas a bajo nivel, seguridad y desarrollo móvil offline-first.'
                : 'Academic and personal research projects exploring low-level architecture, security, and offline-first mobile development.'}
            </p>
          </div>
        )}

        <div className="flex flex-col border-t border-zinc-800">
          {personalProjects.map((project) => (
            <Link 
              to={`/project/${project.id}`}
              key={project.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-800 transition-colors hover:bg-zinc-900/50 relative cursor-pointer"
            >
              <div className="md:w-1/3 mb-4 md:mb-0 px-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
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
              
              <div className="md:w-2/3 px-4 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-semibold">
                    {lang === 'ES' ? 'El Desafío' : 'The Challenge'}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {lang === 'ES' ? project.descriptionES : project.descriptionEN}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-xs text-blue-500/80 uppercase tracking-wider mb-2 font-semibold">
                    {lang === 'ES' ? 'Decisión de Arquitectura' : 'Architecture Decision'}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed border-l-2 border-blue-500/20 pl-3">
                    {lang === 'ES' ? project.architectureES : project.architectureEN}
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
