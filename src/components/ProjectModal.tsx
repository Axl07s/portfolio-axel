import { useState } from 'react';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!project) return null;

  const images = project.images;
  const current = images[activeIdx] || images[0];

  const prev = () => setActiveIdx(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIdx(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden flex flex-col max-h-[95vh] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-zinc-800/80 flex items-center justify-between shrink-0 bg-zinc-900/50">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tighter text-white">{project.title}</h2>
            <p className="text-sm text-zinc-500 mt-0.5 font-medium">{project.role} &mdash; {project.category}</p>
          </div>
          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-zinc-900 text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all"
              >
                <Code2 className="w-4 h-4" />
                Source
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-all ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1">
          <div className="flex flex-col lg:flex-row h-full">

            {/* LEFT: Gallery (60%) */}
            <div className="lg:w-[60%] p-6 sm:p-8 space-y-4 flex flex-col">
              {/* Main Image */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group shadow-inner">
                <div className="aspect-[16/10] w-full">
                  <img
                    key={current.url}
                    src={current.url}
                    alt={current.caption}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-sm text-white font-medium bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
                    {current.caption}
                  </span>
                  <span className="text-xs text-zinc-300 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full font-mono border border-white/10">
                    {activeIdx + 1}/{images.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 pt-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-[16/10] w-28 shrink-0 border-2 transition-all ${
                        activeIdx === idx
                          ? 'border-indigo-500 ring-2 ring-indigo-500/30 shadow-md'
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Details (40%) */}
            <div className="lg:w-[40%] shrink-0 p-6 sm:p-8 lg:border-l border-zinc-800/80 space-y-10 bg-zinc-900/20">
              {/* Overview */}
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">Overview</h3>
                <p className="text-[15px] text-zinc-300 leading-relaxed font-medium">{project.description}</p>
              </div>

              {/* Metrics */}
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {project.metrics.map((m, i) => (
                    <div key={i}>
                      <span className="text-xl font-bold tracking-tight text-white block mb-0.5">{m.value}</span>
                      <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Capabilities</h3>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-zinc-400 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s, i) => (
                    <span key={i} className="text-[11px] font-mono px-3 py-1.5 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile CTAs */}
              <div className="sm:hidden flex flex-col gap-3 pt-6 border-t border-zinc-800">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-white text-black"
                  >
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-zinc-900 text-white border border-zinc-700"
                  >
                    <Code2 className="w-4 h-4" />
                    View Source
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
