import React, { useState } from 'react';
import type { Project } from '../data/portfolioData';
import { X, CheckCircle2, Layers, MessageCircle, ChevronLeft, ChevronRight, Code2, Play, Eye, ExternalLink } from 'lucide-react';
import { TwitchScannerDemo, JarvisVoiceDemo, SaaSDashboardDemo, RagChatDemo } from './InteractiveSimulators';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'interactive-demo'>('gallery');
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

  const renderInteractiveDemo = () => {
    switch (project.id) {
      case 'gearstack':
        return <TwitchScannerDemo />;
      case 'jarvis-hud':
        return <JarvisVoiceDemo />;
      case 'syntrosaas':
        return <SaaSDashboardDemo />;
      case 'ai-rag-knowledge':
        return <RagChatDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-obsidian rounded-3xl border border-red-500/30 bg-[#08080c] overflow-hidden flex flex-col max-h-[92vh] shadow-2xl">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-950/80 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono font-extrabold text-sm px-2.5 py-1 rounded-lg bg-red-600 text-white shadow-glow-red">
              {project.number}
            </span>
            <div>
              <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                {project.title}
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-zinc-900 text-red-400 border border-red-500/20">
                  {project.category}
                </span>
              </h2>
              <p className="text-xs text-zinc-400">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-glow-red transition-all"
              >
                <span>Abrir en Vercel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-3 border-b border-zinc-800/60 flex items-center gap-2 bg-zinc-950/40">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold font-mono border-b-2 transition-all ${
              activeTab === 'gallery'
                ? 'border-red-500 text-red-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Galería de Capturas ({images.length})</span>
          </button>

          {['gearstack', 'jarvis-hud', 'syntrosaas', 'ai-rag-knowledge'].includes(project.id) && (
            <button
              onClick={() => setActiveTab('interactive-demo')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold font-mono border-b-2 transition-all ${
                activeTab === 'interactive-demo'
                  ? 'border-red-500 text-red-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Simulador Rápido</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: SCREENSHOTS GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-3 animate-fadeIn">
              <div className={`relative w-full overflow-hidden ${
                project.isMobileDemo 
                  ? 'max-w-[320px] mx-auto aspect-[9/19.5] rounded-[2.5rem] border-[12px] border-[#1a1a1c] bg-black shadow-2xl ring-1 ring-white/10'
                  : 'aspect-video sm:aspect-[21/9] rounded-2xl border border-zinc-800 bg-zinc-950'
              }`}>
                {/* iPhone Dynamic Island Mockup (only for mobile) */}
                {project.isMobileDemo && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20"></div>
                )}
                
                <img
                  key={currentImage.url}
                  src={currentImage.url}
                  alt={currentImage.caption || project.title}
                  className="w-full h-full object-cover object-top animate-fadeIn"
                />

                {images.length > 1 && (
                  <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-black/75 hover:bg-red-600 text-white border border-white/10 backdrop-blur-md transition-all pointer-events-auto active:scale-95 shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-black/75 hover:bg-red-600 text-white border border-white/10 backdrop-blur-md transition-all pointer-events-auto active:scale-95 shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {!project.isMobileDemo && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 z-10">
                    <span className="text-xs text-white font-medium drop-shadow-md">
                      {currentImage.caption}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-red-600/90 text-white shrink-0 self-start sm:self-auto shadow-glow-red">
                      Captura {activeImageIdx + 1} de {images.length}
                    </span>
                  </div>
                )}
              </div>
              
              {project.isMobileDemo && (
                <div className="text-center pb-2">
                  <span className="text-xs text-zinc-400 font-medium">
                    {currentImage.caption} ({activeImageIdx + 1}/{images.length})
                  </span>
                </div>
              )}

              {images.length > 1 && (
                <div className="grid grid-cols-3 gap-2.5">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-video border transition-all ${
                        idx === activeImageIdx
                          ? 'border-red-500 ring-2 ring-red-500/50 scale-[1.02]'
                          : 'border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: LIVE INTERACTIVE SIMULATOR */}
          {activeTab === 'interactive-demo' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-1 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
                {renderInteractiveDemo()}
              </div>
            </div>
          )}

          {/* Deep Architecture Overview */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase font-bold tracking-wider text-red-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Architectural Blueprint & Implementation
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Radar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="glass-obsidian-card p-3 rounded-xl border border-zinc-800/80 text-center font-mono">
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">{m.label}</span>
                <span className="text-base font-extrabold text-red-400 block mt-1">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Full Production Features List */}
          <div className="space-y-3 glass-obsidian-card p-5 rounded-2xl border border-zinc-800/80">
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-200">
              Verified Production Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-900">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Callout Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-950/40 to-zinc-950 border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-white">¿Necesitas un sistema similar desarrollado para tu empresa?</h4>
              <p className="text-xs text-zinc-400">Disponible para desarrollo de MVP, dashboards corporativos y arquitectura de software.</p>
            </div>
            <div className="flex items-center gap-2">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 shadow-md transition-all"
                >
                  <span>Abrir App Completa</span>
                  <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                </a>
              )}
              <a
                href={`https://wa.me/593999999999?text=Hola%20Axel,%20me%20interesa%20un%20proyecto%20similar%20a%20${encodeURIComponent(project.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-red-800 text-white shadow-glow-red hover:brightness-110 active:scale-95 transition-all shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
