import React, { useState } from 'react';
import type { Project } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const images = project.images && project.images.length > 0
    ? project.images
    : [{ url: '/projects/syntrosaas_01.png', caption: project.title }];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentImageIdx];

  return (
    <div 
      className="bg-[#0b0c10] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 border border-zinc-800/80 hover:border-red-500/50 group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      
      {/* Top Media Header / Carousel Frame */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 select-none border-b border-zinc-800/80">
        <img
          key={currentImage.url}
          src={currentImage.url}
          alt={currentImage.caption || project.title}
          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-300 transform-gpu group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-black/30 pointer-events-none" />

        {/* Carousel Navigation Arrows */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full bg-black/75 hover:bg-red-600 text-white border border-white/10 backdrop-blur-md transition-all pointer-events-auto active:scale-95"
              title="Previous capture"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-full bg-black/75 hover:bg-red-600 text-white border border-white/10 backdrop-blur-md transition-all pointer-events-auto active:scale-95"
              title="Next capture"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Main Card Body (Matt Farley style: Minimalist, Direct) */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center items-center text-center space-y-4">
        
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-medium">
            {project.description}
          </p>
        </div>

        {/* Action Button Row */}
        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-bold bg-transparent text-white border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all group-hover:bg-red-600"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};
