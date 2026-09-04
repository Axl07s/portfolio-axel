import React, { useState } from 'react';
import type { Project } from '../data/portfolioData';
import { X, Layers, MessageCircle, ChevronLeft, ChevronRight, Code2, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!project) return null;

  const images = project.images && project.images.length > 0
    ? project.images
    : [{ url: '/projects/syntrosaas_01.png', caption: project.title }];

  const currentImage = images[activeImageIdx] || images[0];

  const handlePrev = () => {
    setActiveImageIdx(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIdx(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0b0c10]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#12131a] rounded-[2rem] border border-zinc-800/80 overflow-hidden flex flex-col max-h-[95vh] shadow-2xl">
        
        {/* Sleek Minimal Header */}
        <div className="px-8 py-5 border-b border-zinc-800/80 flex items-center justify-between shrink-0 bg-[#0b0c10]/50">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-white text-black hover:bg-zinc-200 transition-all"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            
            <button
              onClick={onClose}
              className="p-2.5 rounded-full text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-8 overflow-y-auto flex-1 flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Presentation Gallery (Van Holtz Style) */}
          <div className="flex-1 space-y-6">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] border border-zinc-800 bg-[#0b0c10] flex items-center justify-center overflow-hidden shadow-2xl group">
              
              <img
                key={currentImage.url}
                src={currentImage.url}
                alt={currentImage.caption || project.title}
                className="w-full h-full object-cover object-top animate-fadeIn rounded-[2rem]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 via-transparent to-transparent pointer-events-none" />

              {images.length > 1 && (
                <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all pointer-events-auto active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all pointer-events-auto active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-sm font-semibold text-white drop-shadow-md bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                  {currentImage.caption}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={elative rounded-2xl overflow-hidden aspect-[16/10] w-32 shrink-0 border-2 transition-all }
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Content & Case Study Details */}
          <div className="lg:w-[380px] shrink-0 flex flex-col space-y-10">
            
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold tracking-widest text-zinc-500 uppercase">
                Project Overview
              </h3>
              <p className="text-base text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold tracking-widest text-zinc-500 uppercase">
                Key Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-2xl font-bold text-white block">{m.value}</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <h3 className="text-sm font-mono font-bold tracking-widest text-zinc-500 uppercase">
                Core Capabilities
              </h3>
              <ul className="space-y-3">
                {project.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons for Mobile/Small Screens */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-col gap-3">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden flex w-full items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold bg-white text-black hover:bg-zinc-200 transition-all"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold bg-[#1a1b23] text-white hover:bg-[#23242f] transition-all border border-zinc-800"
                >
                  <Code2 className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
