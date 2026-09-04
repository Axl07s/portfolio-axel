import React from 'react';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const mainImage = project.images[0]?.url || '/projects/syntrosaas_01.png';

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group border border-zinc-800/80 hover:border-red-500/50 transition-all duration-300 bg-zinc-950 shadow-xl"
      onClick={() => onSelect(project)}
    >
      {/* Screenshot Frame */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        <img
          src={mainImage}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Persistent Info Footer on Mobile / Fallback */}
      <div className="p-5 sm:hidden bg-zinc-900/90 border-t border-zinc-800">
        <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-semibold block mb-1">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-1.5 text-xs font-bold text-red-400">
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Matt Farley Interactive Hover Overlay (Visible on hover & focus) */}
      <div
        className="hidden sm:flex absolute inset-0 flex-col items-center justify-center text-center p-8 bg-zinc-950/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold mb-3 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30">
          {project.category}
        </span>
        <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-300 leading-relaxed max-w-sm mb-6 font-medium">
          {project.description}
        </p>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-red-500 bg-red-600/20 hover:bg-red-600 text-white text-sm font-bold shadow-lg shadow-red-900/40 hover:shadow-red-600/50 transition-all duration-200 active:scale-95"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
