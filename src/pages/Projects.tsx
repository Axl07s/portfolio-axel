
import { ProjectCard } from '../components/ProjectCard';

import { getPortfolioProjects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

export function Projects() {
  const { lang, t } = useLanguage();
  const portfolioProjects = getPortfolioProjects(lang);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen animate-fadeIn">
      <Helmet>
        <title>{lang === 'es' ? 'Proyectos B2B & Arquitectura SaaS - Axel Molineros' : 'B2B Projects & SaaS Architecture - Axel Molineros'}</title>
        <meta name="description" content={lang === 'es' ? 'Catálogo de plataformas SaaS multi-tenant, sistemas de IA y aplicaciones B2B en producción por Axel Molineros.' : 'Production B2B applications, multi-tenant SaaS platforms, and applied AI systems engineered by Axel Molineros.'} />
      </Helmet>

      <div className="max-w-3xl mb-16 space-y-6">
        <h1 className="text-5xl sm:text-7xl font-medium tracking-tighter text-neutral-50">
          {lang === 'es' ? 'Proyectos ' : 'B2B '}
          <span className="text-neutral-500">
            {lang === 'es' ? 'B2B' : 'Projects'}
          </span>
        </h1>
        <p className="text-lg text-neutral-400 max-w-xl">
          {t('projects.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {portfolioProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
