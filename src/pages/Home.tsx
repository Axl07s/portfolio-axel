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

      <div className="h-16 md:h-28"></div>
      <ExpertiseSection />

      <div className="h-16 md:h-28"></div>
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              {lang === 'es' ? 'Soluciones y ' : 'Interactive Solutions & '}
              <span className="text-[#C8A97E]">
                {lang === 'es' ? 'Demos Interactivas' : 'Live Demos'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A3A39E] font-normal leading-relaxed">
              {lang === 'es' 
                ? 'Plataformas funcionales listas para probar en vivo y adaptar a cualquier negocio en menos de 2 semanas.' 
                : 'Functional platforms ready to test live and adapt to any business in under 2 weeks.'}
            </p>
          </div>
          
          <Link 
            to="/projects" 
            className="group flex items-center gap-2 text-xs font-mono font-medium tracking-widest uppercase text-[#A3A39E] hover:text-[#F5F5F0] transition-colors"
          >
            <span>{lang === 'es' ? 'Ver Catálogo Completo' : 'View Full Catalog'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C8A97E]" />
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

      <div className="h-16 md:h-28"></div>
      <EcuadorB2BSection />

      {/* Discrete footer invitation to Labs for CTOs & Technical Founders */}
      <section className="py-20 px-4 sm:px-6 text-center border-t border-white/[0.06]">
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
          <span className="text-[#A3A39E]/70">
            {lang === 'es' 
              ? '¿Buscas proyectos de I+D o bajo nivel?' 
              : 'Looking for low-level systems or R&D?'}
          </span>
          <Link
            to="/labs"
            className="inline-flex items-center gap-1.5 text-[#A3A39E] hover:text-[#C8A97E] font-medium transition-colors uppercase tracking-wider"
          >
            <span>{lang === 'es' ? 'Laboratorio Técnico (/labs)' : 'Technical Lab (/labs)'}</span>
            <ArrowRight className="w-3 h-3 text-[#C8A97E]" />
          </Link>
        </div>
      </section>
    </main>
  );
}
