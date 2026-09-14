import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const mainImage = project.images[0]?.url || '/projects/syntrosaas_01.png';

  const handleCardClick = (e: React.MouseEvent) => {
    // Only navigate if the click wasn't on the live link
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      aria-label={`${t('projects.viewLive')} ${project.title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/project/${project.id}`);
        }
      }}
    >
      {/* Studio Browser Window Chrome */}
      <div className="h-9 px-4 bg-zinc-950/90 border-b border-zinc-800/80 flex items-center justify-between select-none shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-rose-500/80 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-amber-500/80 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-emerald-500/80 transition-colors" />
        </div>
        <div className="text-[11px] font-mono text-zinc-400 truncate max-w-[160px]">
          {project.title.toLowerCase().replace(/\s+/g, '-')}.app
        </div>
        <div className="w-8" />
      </div>

      {/* Main Canvas / Screenshot (16:10) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        <img
          src={mainImage}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-center text-center p-5 sm:p-6 pb-6 bg-zinc-950/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm mb-4 line-clamp-2 font-normal">
            {project.description}
          </p>

          <div className="flex items-center justify-center gap-2.5">
            <span
              className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-all active:scale-95 shadow-md shadow-white/10"
            >
              <span>{lang === 'es' ? 'Ver Estudio' : 'View Case Study'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
            </span>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group/link inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-xs font-medium transition-all hover:text-white active:scale-95 backdrop-blur-sm"
              >
                <span>{lang === 'es' ? 'Sitio en Vivo' : 'Live Site'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover/link:text-white shrink-0 transition-colors" />
              </a>
            )}
          </div>
        </div>

        {/* Persistent Mobile Card Info */}
        <div className="sm:hidden p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
              {project.category}
            </span>
            <h3 className="text-sm font-bold text-white">{project.title}</h3>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400">
            <span>{lang === 'es' ? 'Explorar' : 'Explore'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
