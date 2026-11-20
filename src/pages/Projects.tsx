
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
        <title>{lang === 'es' ? 'Proyectos B2B & Arquitectura SaaS - Axel.dev' : 'B2B Projects & SaaS Architecture - Axel.dev'}</title>
        <meta name="description" content={lang === 'es' ? 'Catálogo de plataformas SaaS multi-tenant, sistemas de IA y aplicaciones B2B en producción por Axel.dev.' : 'Production B2B applications, multi-tenant SaaS platforms, and applied AI systems engineered by Axel.dev.'} />
      </Helmet>

      <div className="max-w-3xl mb-16 space-y-4">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F0]">
          {lang === 'es' ? 'Soluciones & ' : 'Interactive '}
          <span className="text-[#C8A97E]">
            {lang === 'es' ? 'Sistemas Web' : 'Solutions'}
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#A3A39E] max-w-xl">
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
