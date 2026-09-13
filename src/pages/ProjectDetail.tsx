import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { personalProjects } from '../data/personalProjectsData';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
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
  
  const personalProject = personalProjects.find((p) => p.id === id);
  const freelanceProject = PORTFOLIO_PROJECTS.find((p) => p.id === id);

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
        default: return <div className="p-8 text-white">Layout not found</div>;
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} - Axel Molineros</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Axel Molineros`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://portfolio-axel-nine.vercel.app${image}`} />
        <meta property="og:url" content={`https://portfolio-axel-nine.vercel.app/project/${id}`} />
        <link rel="canonical" href={`https://portfolio-axel-nine.vercel.app/project/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="project-detail-loaded relative w-full flex-1 flex flex-col min-h-screen pt-24 pb-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 z-50 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Volver al Portafolio</span>
          </Link>
        </div>
        
        {renderLayout()}
      </div>
    </>
  );
}
