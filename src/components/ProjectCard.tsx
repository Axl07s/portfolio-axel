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
      className="group relative flex flex-col cursor-pointer transition-all duration-300 h-full"
      onClick={() => onSelect(project)}
    >
      {/* Screenshot Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-colors duration-300 group-hover:border-zinc-700">
        <img
          src={mainImage}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="pt-6 pb-2 flex flex-col flex-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2 block">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tighter">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
        
        {/* Minimalist Pill CTA */}
        <div className="mt-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-950 group-hover:bg-zinc-900 group-hover:border-indigo-500/50 text-white text-sm font-semibold transition-all duration-200 shadow-sm">
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};
