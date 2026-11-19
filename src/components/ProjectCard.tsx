import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const mainImage = project.images[0]?.url || '/projects/syntrosaas_01.png';

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative cursor-pointer w-full h-[320px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-[24px] bg-[#0f0f0f] flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      aria-label={`${t('projects.viewLive')} ${project.title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/project/${project.id}`);
        }
      }}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full bg-[#111]">
        <img
          src={mainImage}
          alt={project.title}
          className="w-full h-full object-cover object-top opacity-70 transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03] group-hover:opacity-100"
          loading="lazy"
        />
        {/* Soft bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col items-start z-10 transform transition-transform duration-500 ease-out translate-y-4 group-hover:translate-y-0">
        <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-wrap">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/20">
            {project.category}
          </span>
          {project.stack?.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-widest bg-[#0a0a0a]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-end w-full">
          <div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-50 mb-2 tracking-[-0.02em]">
              {project.title}
            </h3>
            <p className="text-base text-neutral-400 font-medium max-w-[45ch] line-clamp-2">
              {project.description}
            </p>
          </div>
          
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500 ease-[0.16,1,0.3,1] shadow-xl">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
