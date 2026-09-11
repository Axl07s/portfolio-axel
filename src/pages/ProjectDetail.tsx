import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { personalProjects } from '../data/personalProjectsData';
import { NotFound } from './NotFound';
import { BentoLayout } from '../components/project-layouts/BentoLayout';
import { EditorialLayout } from '../components/project-layouts/EditorialLayout';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = personalProjects.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Axel Molineros</title>
        <meta name="description" content={project.seoDescription} />
        <meta property="og:title" content={`${project.title} - Axel Molineros`} />
        <meta property="og:description" content={project.seoDescription} />
        <meta property="og:image" content={`https://portfolio-axel-nine.vercel.app${project.seoImage}`} />
        <meta property="og:url" content={`https://portfolio-axel-nine.vercel.app/project/${project.id}`} />
        <link rel="canonical" href={`https://portfolio-axel-nine.vercel.app/project/${project.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="project-detail-loaded relative w-full flex-1 flex flex-col min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Navigation / Back button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Volver al Portafolio</span>
          </Link>
        </div>

        {project.layoutStyle === 'bento' ? (
          <BentoLayout project={project} />
        ) : (
          <EditorialLayout project={project} />
        )}
      </div>
    </>
  );
}
