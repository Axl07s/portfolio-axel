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

        {/* Mobile & Desktop Conversion Action Bar */}
        <div className="fixed bottom-0 inset-x-0 z-50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#141413]/95 backdrop-blur-2xl border-t border-white/[0.08] shadow-[0_-10px_30px_rgba(0,0,0,0.8)] sm:bottom-6 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:rounded-full sm:border sm:border-white/10 sm:p-1.5 sm:max-w-max">
          <div className="flex items-center gap-2 max-w-md mx-auto w-full">
          {/* Main Action: WhatsApp Quote */}
          <a
            href={`https://wa.me/593995267503?text=${encodeURIComponent(
              lang === 'es'
                ? `Hola Axel, vi el caso de estudio de "${title}" y me gustaria cotizar un sistema similar para mi negocio.`
                : `Hi Axel, I checked the "${title}" case study and would like to quote a similar system for my business.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F5F5F0] hover:bg-[#E8E8E2] active:bg-[#E8E8E2] text-[#141413] rounded-xl sm:rounded-full transition-all font-bold text-xs sm:text-sm shadow-md active:scale-[0.98] min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{lang === 'es' ? 'Cotizar por WhatsApp' : 'Quote on WhatsApp'}</span>
          </a>

          {/* Secondary Action: Discrete Desktop Version Link */}
          {(personalProject?.liveUrl || freelanceProject?.liveUrl) && (
            <a
              href={personalProject?.liveUrl || freelanceProject?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white/[0.06] hover:bg-white/10 active:bg-white/[0.12] text-[#F5F5F0] border border-white/10 rounded-xl sm:rounded-full transition-colors text-xs font-medium min-h-[44px] shrink-0"
              title={lang === 'es' ? 'Abrir aplicación completa en pestaña nueva' : 'Open full application in new tab'}
            >
              <span>{lang === 'es' ? 'Probar App' : 'Live App'}</span>
              <span className="text-xs text-[#C8A97E]">↗</span>
            </a>
          )}
          </div>

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
