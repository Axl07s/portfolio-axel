import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight, Code2, Layers } from 'lucide-react';
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
    'syntrosaas': 'syntrosaas.com',
    'jarvis-hud': 'jarvis-asistente.com',
    'kure-gastronomy': 'kure-finedining.com',
    'nexuscorp-b2b': 'nexus-captacion.com',
    'ai-rag-knowledge': 'base-conocimiento.internal',
  };
  const domain = domainMap[project.id] || `${project.id}.com`;

  return (
    <div
      onClick={handleCardClick}
      className="group relative cursor-pointer w-full rounded-[24px] bg-[#1f1f1d] border border-white/[0.08] hover:border-[#C8A97E]/30 transition-all duration-500 flex flex-col justify-between overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
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
            <span className="text-[10px] font-mono font-medium text-[#C8A97E] uppercase tracking-wider bg-[#C8A97E]/10 px-3 py-1 rounded-full border border-[#C8A97E]/20">
              {project.category}
            </span>
            {/* Discreet Technical details toggle (Comfortable touch target min-h-[44px]) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowTech(!showTech);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-mono transition-colors text-[#A3A39E] hover:text-[#F5F5F0] bg-white/[0.03] border border-white/[0.08] hover:border-white/20 min-h-[44px]"
              title={showTech ? (lang === 'es' ? 'Ocultar detalles' : 'Hide details') : (lang === 'es' ? 'Detalles técnicos' : 'Technical details')}
            >
              <span>
                {showTech 
                  ? (lang === 'es' ? 'Ocultar detalles' : 'Hide details') 
                  : (lang === 'es' ? 'Detalles técnicos' : 'Technical details')}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/project/${project.id}#interactive-demo`);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#F5F5F0] text-[#141413] hover:bg-[#E8E8E2] transition-all shadow-sm min-h-[44px]"
              title={lang === 'es' ? 'Probar Simulador Interactivo' : 'Try Interactive Simulator'}
            >
              <span>{lang === 'es' ? 'Probar Demo en Vivo' : 'Try Live Demo'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <div className="w-11 h-11 rounded-full bg-white/[0.06] group-hover:bg-[#F5F5F0] text-[#A3A39E] group-hover:text-[#141413] flex items-center justify-center transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F5F0] tracking-[-0.02em] group-hover:text-[#C8A97E] transition-colors flex items-center gap-2">
            <span>{project.title}</span>
          </h3>
        </div>

        {/* Dual Layer View Switcher (Business vs Technical) */}
        {!showTech ? (
          /* Layer 1: Business Outcome View (Default) */
          <div className="transition-opacity duration-300 animate-fadeIn">
            <p className="text-sm sm:text-base text-[#A3A39E] font-normal leading-relaxed">
              {project.description}
            </p>
            {/* Business metrics pill bar */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {project.metrics.map((m, i) => (
                <span key={i} className="text-[11px] font-mono text-[#A3A39E] bg-[#141413] border border-white/[0.06] px-2.5 py-1 rounded-lg">
                  <span className="text-[#A3A39E]/70 mr-1.5">{m.label}:</span>
                  <span className="text-[#F5F5F0] font-semibold">{m.value}</span>
                </span>
              ))}
            </div>
          </div>
        ) : (
          /* Layer 2: Technical Architecture & Stack View (Collapsible) */
          <div className="transition-opacity duration-300 animate-fadeIn space-y-3 bg-[#141413] border border-white/[0.08] p-4 rounded-xl">
            {/* Architecture Mechanism */}
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C8A97E] mb-1">
                <Layers className="w-3 h-3" />
                <span>{lang === 'es' ? 'Arquitectura & Componentes' : 'Architecture & Components'}</span>
              </div>
              <p className="text-xs text-[#A3A39E] leading-relaxed font-sans">
                {project.architecture || project.features[0]}
              </p>
            </div>

            {/* Stack Tags */}
            <div className="pt-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#A3A39E]/70 mb-1.5">
                {lang === 'es' ? 'Tecnologías Clave' : 'Key Stack'}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-[#C8A97E] bg-[#C8A97E]/10 border border-[#C8A97E]/20 px-2 py-0.5 rounded">
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A3A39E] hover:text-[#F5F5F0] transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#C8A97E]" />
                  <span>{lang === 'es' ? 'Ver Repositorio GitHub' : 'View GitHub Repo'}</span>
                </a>
                <span className="text-[10px] font-mono text-[#A3A39E]/60">
                  {lang === 'es' ? 'Código de Producción' : 'Production Code'}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Visual Window Preview */}
      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
        <div className="relative rounded-xl overflow-hidden bg-[#141413] border border-white/[0.08] shadow-xl transition-transform duration-500 group-hover:scale-[1.01]">
          {/* Window Header */}
          <div className="flex items-center justify-between px-3.5 py-2 bg-[#191918] border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <div className="px-3 py-0.5 rounded bg-[#141413] border border-white/[0.05] text-[10px] font-mono text-[#A3A39E]">
              {domain}
            </div>
            <div className="w-7" />
          </div>

          {/* Screenshot Display */}
          <div className="aspect-[16/10] w-full overflow-hidden bg-[#141413] relative">
            <img
              src={mainImage}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
