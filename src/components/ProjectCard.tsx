import React from 'react';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const mainImage = project.images[0]?.url || '/projects/syntrosaas_01.png';

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
      onClick={() => onSelect(project)}
    >
      {/* Studio Browser Window Chrome (Van Holtz / Dunks touch) */}
      <div className="h-9 px-4 bg-zinc-950/90 border-b border-zinc-800/80 flex items-center justify-between select-none shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-rose-500/80 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-amber-500/80 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-emerald-500/80 transition-colors" />
        </div>
        <div className="text-[11px] font-mono text-zinc-500 truncate max-w-[160px]">
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

        {/* Matt Farley Interactive Hover Overlay */}
        <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-center text-center p-6 sm:p-8 bg-zinc-950/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tighter">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed max-w-sm mb-6 font-normal">
            {project.description}
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold transition-all active:scale-95 shadow-lg"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-semibold transition-all hover:text-white"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Persistent Mobile Card Info (Fallback for small screens) */}
        <div className="sm:hidden p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
              {project.category}
            </span>
            <h4 className="text-sm font-bold text-white">{project.title}</h4>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400">
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
