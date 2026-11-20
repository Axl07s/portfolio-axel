import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink, Code2, Cpu, Briefcase, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [showTech, setShowTech] = useState(false);
  const mainImage = project.images[0]?.url || '/projects/syntrosaas_01.png';

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
      return;
    }
    navigate(`/project/${project.id}`);
  };

  const domainMap: Record<string, string> = {
    'syntrosaas': 'syntrosaas-app.vercel.app',
    'jarvis-hud': 'jarvis-command-center.app',
    'kure-gastronomy': 'kure-finedining.com',
    'nexuscorp-b2b': 'nexus-acquisition.io',
    'ai-rag-knowledge': 'enterprise-rag.internal',
  };
  const domain = domainMap[project.id] || `${project.id}.app`;

  return (
    <div
      onClick={handleCardClick}
      className="group relative cursor-pointer w-full rounded-[24px] bg-[#0c0c0e] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.08)]"
      aria-label={`${t('projects.viewLive')} ${project.title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/project/${project.id}`);
        }
      }}
    >
      {/* Top Header: Category, Mode Toggle, Title, and Dual Layer Body */}
      <div className="p-6 sm:p-8 flex flex-col gap-4">
        {/* Badges Bar & Toggle Pill */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              {project.category}
            </span>
            {/* Toggle Dual-Layer Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowTech(!showTech);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-300 border ${
                showTech
                  ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25'
                  : 'bg-white/[0.04] border-white/10 text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.08]'
              }`}
              title={showTech ? (lang === 'es' ? 'Ver beneficio de negocio' : 'View business outcome') : (lang === 'es' ? 'Ver arquitectura y stack' : 'View Architecture & Stack')}
            >
              {showTech ? (
                <>
                  <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'es' ? 'Ver Beneficio de Negocio' : 'View Business Outcome'}</span>
                </>
              ) : (
                <>
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{lang === 'es' ? 'Ver arquitectura y stack' : 'View Architecture & Stack'}</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-emerald-500 hover:text-neutral-950 text-neutral-200 transition-all border border-white/10 shadow-sm"
                title={lang === 'es' ? 'Probar Demo en Vivo' : 'Try Live Demo'}
              >
                <span>{lang === 'es' ? 'Probar Demo en Vivo' : 'Try Live Demo'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <div className="w-9 h-9 rounded-full bg-white/[0.06] group-hover:bg-white text-neutral-400 group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-50 tracking-[-0.02em] group-hover:text-emerald-400 transition-colors flex items-center gap-2">
            <span>{project.title}</span>
            {showTech && (
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-normal">
                Engineering Layer
              </span>
            )}
          </h3>
        </div>

        {/* Dual Layer View Switcher (Business vs Technical) */}
        {!showTech ? (
          /* Layer 1: Business Outcome View (Default) */
          <div className="transition-opacity duration-300 animate-fadeIn">
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              {project.description}
            </p>
            {/* Business metrics pill bar */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {project.metrics.map((m, i) => (
                <span key={i} className="text-[11px] font-mono text-neutral-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-lg">
                  <span className="text-neutral-500 mr-1.5">{m.label}:</span>
                  <span className="text-neutral-200 font-semibold">{m.value}</span>
                </span>
              ))}
            </div>
          </div>
        ) : (
          /* Layer 2: Technical Architecture & Stack View */
          <div className="transition-opacity duration-300 animate-fadeIn space-y-3 bg-[#111116] border border-white/[0.08] p-4 rounded-xl">
            {/* Architecture Mechanism */}
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-indigo-400 mb-1">
                <Layers className="w-3 h-3" />
                <span>{lang === 'es' ? 'Arquitectura & Patrones' : 'Architecture & Patterns'}</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                {project.architecture || project.features[0]}
              </p>
            </div>

            {/* Stack Tags */}
            <div className="pt-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                {lang === 'es' ? 'Tecnologías Clave' : 'Key Stack'}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Repo Button if present */}
            {project.githubUrl && (
              <div className="pt-1 flex items-center justify-between border-t border-white/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{lang === 'es' ? 'Ver Repositorio GitHub' : 'View GitHub Repo'}</span>
                </a>
                <span className="text-[10px] font-mono text-neutral-500">
                  Código de Producción
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Framed Browser Window (No text overlay, crisp interface presentation) */}
      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 mt-auto">
        <div className="relative rounded-xl overflow-hidden bg-[#050505] border border-white/[0.08] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
          {/* Browser Window Chrome */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141416] border-b border-white/[0.06] gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="px-3 py-0.5 rounded-md bg-[#0a0a0a] text-[10px] font-mono text-neutral-400 border border-white/5 truncate max-w-[180px] sm:max-w-none">
              {domain}
            </div>
            <div className="w-8" />
          </div>

          {/* Screenshot in 16:10 aspect ratio */}
          <div className="aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a] relative">
            <img
              src={mainImage}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
