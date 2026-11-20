import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MessageCircle, Code2 } from 'lucide-react';
import { personalProjects } from '../data/personalProjectsData';
import { getPortfolioProjects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { NotFound } from './NotFound';

import { BentoLayout } from '../components/project-layouts/BentoLayout';
import { EditorialLayout } from '../components/project-layouts/EditorialLayout';
import { EnterpriseLayout } from '../components/project-layouts/EnterpriseLayout';
import { SaaSScaleLayout } from '../components/project-layouts/SaaSScaleLayout';
import { CommandCenterLayout } from '../components/project-layouts/CommandCenterLayout';
import { LuxuryEditorialLayout } from '../components/project-layouts/LuxuryEditorialLayout';
import { B2BFunnelLayout } from '../components/project-layouts/B2BFunnelLayout';
import { GraphTerminalLayout } from '../components/project-layouts/GraphTerminalLayout';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { lang } = useLanguage();
  
  const personalProject = personalProjects.find((p) => p.id === id);
  const freelanceProject = getPortfolioProjects(lang).find((p) => p.id === id);

  useEffect(() => {
    if (location.hash === '#interactive-demo') {
      const timer = setTimeout(() => {
        const visibleDemo = Array.from(document.querySelectorAll('[data-interactive-demo="true"]'))
          .find((el) => (el as HTMLElement).offsetParent !== null) || document.getElementById('interactive-demo') || document.getElementById('interactive-demo-mobile');
        
        if (visibleDemo) {
          visibleDemo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 250);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [id, location.hash]);

  if (!personalProject && !freelanceProject) {
    return <NotFound />;
  }

  // Common SEO properties
  const title = personalProject ? personalProject.title : freelanceProject?.title;
  const description = personalProject ? personalProject.seoDescription : freelanceProject?.description;
  const image = personalProject ? personalProject.seoImage : freelanceProject?.images[0]?.url;

  const renderLayout = () => {
    if (personalProject) {
      if (personalProject.layoutStyle === 'bento') {
        return <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><BentoLayout project={personalProject} /></div>;
      }
      if (personalProject.layoutStyle === 'enterprise') {
        return <EnterpriseLayout project={personalProject} />;
      }
      return <EditorialLayout project={personalProject} />;
    }

    if (freelanceProject) {
      switch (freelanceProject.id) {
        case 'syntrosaas': return <SaaSScaleLayout project={freelanceProject} />;
        case 'jarvis-hud': return <CommandCenterLayout project={freelanceProject} />;
        case 'kure-gastronomy': return <LuxuryEditorialLayout project={freelanceProject} />;
        case 'nexuscorp-b2b': return <B2BFunnelLayout project={freelanceProject} />;
        case 'ai-rag-knowledge': return <GraphTerminalLayout project={freelanceProject} />;
        default: return <div className="p-8 text-neutral-50">Layout not found</div>;
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${title} - Axel.dev`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Axel.dev`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://portfolio-axel-nine.vercel.app${image}`} />
        <meta property="og:url" content={`https://portfolio-axel-nine.vercel.app/project/${id}`} />
        <link rel="canonical" href={`https://portfolio-axel-nine.vercel.app/project/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="project-detail-loaded relative w-full flex-1 flex flex-col min-h-screen pt-24 pb-36">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 z-50 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-50 transition-colors group min-h-[44px]">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">
              {lang === 'es' ? 'Volver al Portafolio' : 'Back to Portfolio'}
            </span>
          </Link>
        </div>
        
        {renderLayout()}

        {/* Global Floating Dock for Actions */}
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 bg-neutral-950/90 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.8)] max-w-[95vw]">
          {/* Main Action: WhatsApp Quote */}
          <a
            href={`https://wa.me/593995267503?text=${encodeURIComponent(
              lang === 'es'
                ? `Hola Axel, vi el caso de estudio de "${title}" y me gustaria cotizar un sistema similar para mi negocio.`
                : `Hi Axel, I checked the "${title}" case study and would like to quote a similar system for my business.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#F5F5F0] hover:bg-[#E8E8E2] text-[#141413] rounded-full transition-all font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] min-h-[44px] shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline">
              {lang === 'es' ? 'Cotizar este Sistema por WhatsApp' : 'Quote this System on WhatsApp'}
            </span>
            <span className="sm:hidden">
              {lang === 'es' ? 'Cotizar por WhatsApp' : 'Quote on WhatsApp'}
            </span>
          </a>

          {/* Secondary Action: Discrete Desktop Version Link */}
          {(personalProject?.liveUrl || freelanceProject?.liveUrl) && (
            <a
              href={personalProject?.liveUrl || freelanceProject?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 text-neutral-400 hover:text-neutral-50 hover:bg-white/[0.06] rounded-full transition-colors text-xs font-mono min-h-[44px] shrink-0"
              title={lang === 'es' ? 'Abrir versión completa para computadoras de escritorio' : 'Open full desktop version'}
            >
              <span className="hidden md:inline">
                {lang === 'es' ? 'Abrir versión completa (Escritorio) ↗' : 'Open full desktop version ↗'}
              </span>
              <span className="md:hidden">
                {lang === 'es' ? 'Escritorio ↗' : 'Desktop ↗'}
              </span>
            </a>
          )}

          {/* GitHub Repo Button if available */}
          {(personalProject?.githubUrl || freelanceProject?.githubUrl) && (
            <a
              href={personalProject?.githubUrl || freelanceProject?.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-neutral-400 hover:text-neutral-50 hover:bg-white/[0.06] rounded-full transition-colors text-xs font-mono min-h-[44px] shrink-0"
              title={lang === 'es' ? 'Ver código fuente en GitHub' : 'View source code on GitHub'}
            >
              <Code2 className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>{lang === 'es' ? 'Código' : 'Code'}</span>
            </a>
          )}
        </div>

      </div>
    </>
  );
}
