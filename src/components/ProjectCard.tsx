import React, { useState } from 'react';
import type { Project } from '../data/portfolioData';
import { CheckCircle2, Star, ChevronLeft, ChevronRight, ExternalLink, Layers, Smartphone, ShieldCheck } from 'lucide-react';

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
    <div className="glass-obsidian-card rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 border border-zinc-800/80 hover:border-red-500/50 group">
      
      {/* Top Media Header / Carousel Frame */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 select-none border-b border-zinc-800/80">
        <img
          key={currentImage.url}
          src={currentImage.url}
          alt={currentImage.caption || project.title}
          className={`w-full h-full ${project.isMobileDemo ? 'object-contain object-center scale-90' : 'object-cover object-top'} opacity-90 group-hover:opacity-100 transition-all duration-300 transform-gpu`}
          loading="lazy"
        />

        {/* Subtle Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="font-mono font-extrabold text-xs px-2.5 py-1 rounded-lg bg-red-600/90 text-white shadow-glow-red">
              {project.number}
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-zinc-300 border border-white/10">
              {project.category}
            </span>
          </div>

          {project.badge && (
            <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1 ${
              project.badge.includes('5★')
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-glow-red'
                : 'bg-red-500/20 text-red-300 border border-red-500/40'
            }`}>
              {project.badge.includes('5★') && <Star className="w-3 h-3 fill-amber-400 text-amber-400" />}
              <span>{project.badge}</span>
            </div>
          )}
        </div>

        {/* Carousel Navigation Arrows */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between z-20 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full bg-black/75 hover:bg-red-600 text-white border border-white/10 backdrop-blur-md transition-all pointer-events-auto active:scale-95 shadow-md"
              title="Previous capture"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-full bg-black/75 hover:bg-red-600 text-white border border-white/10 backdrop-blur-md transition-all pointer-events-auto active:scale-95 shadow-md"
              title="Next capture"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Carousel Indicators & Caption */}
        <div className="absolute bottom-2.5 left-3.5 right-3.5 z-10 flex flex-col gap-1 pointer-events-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIdx(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all pointer-events-auto ${
                    idx === currentImageIdx ? 'w-5 bg-red-500 shadow-glow-red' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                  title={`Capture ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-zinc-300 border border-white/10">
              {currentImageIdx + 1}/{images.length} Capturas Reales
            </span>
          </div>

          <p className="text-[11px] text-zinc-200 font-medium truncate drop-shadow-md">
            {currentImage.caption}
          </p>
        </div>

      </div>

      {/* Main Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-300 font-medium">{project.subtitle}</p>

          <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 p-2 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-center font-mono">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="px-1">
              <span className="text-[8px] uppercase tracking-wider text-zinc-400 block truncate">{m.label}</span>
              <span className="text-xs font-bold text-red-400 truncate block mt-0.5">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Key Architectural Highlights */}
        <div className="space-y-1.5 text-xs text-zinc-300">
          {project.features.slice(0, 3).map((f, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
              <span className="text-[11px] text-zinc-300 line-clamp-1">{f}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-zinc-800/80">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800 group-hover:border-zinc-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="pt-2 flex items-center gap-2">
          
          {/* PRIMARY: Open Real Vercel Application in New Tab or Open Modal for Desktop/Mobile */}
          {project.isDesktopOnly ? (
            <button
              onClick={() => onSelect(project)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white shadow-glow-red hover:brightness-110 active:scale-95 transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Consola & EDR Desktop</span>
            </button>
          ) : project.isMobileDemo ? (
            <button
              onClick={() => onSelect(project)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white shadow-glow-red hover:brightness-110 active:scale-95 transition-all"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Demo Móvil Interactivo</span>
            </button>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white shadow-glow-red hover:brightness-110 active:scale-95 transition-all"
            >
              <span>Abrir Proyecto en Vivo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {/* SECONDARY: Architecture Deep Dive Modal */}
          <button
            onClick={() => onSelect(project)}
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all flex items-center gap-1 text-xs font-mono"
            title="Ver Ficha Técnica"
          >
            <Layers className="w-3.5 h-3.5 text-red-400" />
          </button>

        </div>

      </div>

    </div>
  );
};
