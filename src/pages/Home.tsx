import { PersonalProjectsSection } from '../components/PersonalProjectsSection';
import { ExpertiseSection } from '../components/ExpertiseSection';
import { EcuadorB2BSection } from '../components/EcuadorB2BSection';

import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';

import { getPortfolioProjects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  const { lang } = useLanguage();
  
  // Show the first 4 projects on the home page
  const portfolioProjects = getPortfolioProjects(lang).slice(0, 4);

  return (
    <main className="w-full overflow-x-hidden">
      <Hero />

      <div className="h-20 md:h-28"></div>
      <ExpertiseSection />

      <div className="h-20 md:h-28"></div>
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-neutral-50">
              {lang === 'es' ? 'Trabajo ' : 'Selected '}
              <span className="text-neutral-500">
                {lang === 'es' ? 'Destacado' : 'Work'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              {lang === 'es' 
                ? 'Soluciones desplegadas en producción: reservas automatizadas, plataformas para clientes y sistemas con IA de alto rendimiento.' 
                : 'Solutions deployed to production: automated booking engines, client platforms, and high-performance AI systems.'}
            </p>
          </div>
          
          <Link 
            to="/projects" 
            className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-neutral-300 hover:text-neutral-50 transition-colors"
          >
            <span>{lang === 'es' ? 'Ver Todos' : 'View All'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      <div className="h-20 md:h-28"></div>
      <EcuadorB2BSection />

      <div className="h-20 md:h-28"></div>
      <PersonalProjectsSection lang={lang} hideHeader={false} />
    </main>
  );
}





