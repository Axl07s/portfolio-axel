import { PersonalProjectsSection } from '../components/PersonalProjectsSection';
import { ExpertiseSection } from '../components/ExpertiseSection';

import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';

import { getPortfolioProjects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  const { lang } = useLanguage();
  
  // Only show the first 3 projects on the home page
  const portfolioProjects = getPortfolioProjects(lang).slice(0, 3);

  return (
    <main className="w-full overflow-x-hidden">
      <Hero />

      <ExpertiseSection />

      <PersonalProjectsSection lang={lang} hideHeader={false} />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
              {lang === 'es' ? 'Trabajo ' : 'Selected '}
              <span className="text-zinc-500">
                {lang === 'es' ? 'Destacado' : 'Work'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              {lang === 'es' 
                ? 'Sistemas desplegados en producción: plataformas multi-tenant, centros de comando con IA en tiempo real y arquitecturas de alto rendimiento.' 
                : 'Systems deployed to production: multi-tenant platforms, real-time AI command centers, and high-performance architectures.'}
            </p>
          </div>
          
          <Link 
            to="/projects" 
            className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-white transition-colors"
          >
            <span>{lang === 'es' ? 'Ver Todos' : 'View All'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
    </main>
  );
}





