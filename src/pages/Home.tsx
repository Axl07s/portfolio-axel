import { useState } from 'react';
import { Hero } from '../components/Hero';
import { DisciplinesSection } from '../components/DisciplinesSection';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { getPortfolioProjects, type Project } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { PersonalProjectsSection } from '../components/PersonalProjectsSection';

export function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { lang, t } = useLanguage();
  const portfolioProjects = getPortfolioProjects(lang);

  return (
    <>
      <Hero />

      <DisciplinesSection />

      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            {t('projects.title')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
            {lang === 'es' ? 'Construido para ' : 'Crafted for '}
            <span className="text-zinc-400">
              {lang === 'es' ? 'Producción.' : 'Production.'}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
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
      </section>

      <PersonalProjectsSection lang={lang.toUpperCase() as 'ES' | 'EN'} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
