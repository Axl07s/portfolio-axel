import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { getPortfolioProjects, type Project } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { lang, t } = useLanguage();
  const portfolioProjects = getPortfolioProjects(lang);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen animate-fadeIn">
      <Helmet>
        <title>Professional Projects - Axel Molineros</title>
        <meta name="description" content="A curated catalog of B2B applications and professional projects." />
      </Helmet>

      <div className="max-w-3xl mb-16 space-y-6">
        <h1 className="text-5xl sm:text-7xl font-medium tracking-tighter text-white">
          {lang === 'es' ? 'Proyectos ' : 'B2B '}
          <span className="text-zinc-500">
            {lang === 'es' ? 'B2B' : 'Projects'}
          </span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl">
          {t('projects.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
