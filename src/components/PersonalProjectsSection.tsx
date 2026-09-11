import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { personalProjects } from '../data/personalProjectsData';
import { ExternalLink, Database, Server, Smartphone, Monitor } from 'lucide-react';

const TECH_ICONS: Record<string, React.ReactNode> = {
  'Python': <Monitor className="w-4 h-4" />,
  'Flutter': <Smartphone className="w-4 h-4" />,
  'Spring Boot': <Server className="w-4 h-4" />,
  'SQLite': <Database className="w-4 h-4" />,
};

export function PersonalProjectsSection({ lang }: { lang: 'ES' | 'EN' }) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate relative position within the container
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => setHoveredProject(null)}>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
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

        <div className="flex flex-col border-t border-zinc-800">
          {personalProjects.map((project) => (
            <Link 
              to={`/project/${project.id}`}
              key={project.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-800 transition-colors hover:bg-zinc-900/50 relative cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
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

      {/* Floating Image Preview overlay for Desktop */}
      <div 
        className="pointer-events-none hidden md:block absolute top-0 left-0 w-80 h-48 rounded-xl overflow-hidden shadow-2xl border border-zinc-800 z-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: hoveredProject ? 1 : 0,
          transform: `translate3d(${mousePos.x + 20}px, ${mousePos.y - 100}px, 0)`,
          transition: 'transform 0.15s ease-out, opacity 0.3s ease'
        }}
      >
        {personalProjects.map(p => (
          <img 
            key={p.id}
            src={p.image} 
            alt={p.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredProject === p.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-20"></div>
      </div>
    </section>
  );
}
