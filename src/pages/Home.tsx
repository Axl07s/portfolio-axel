import { ExpertiseSection } from '../components/ExpertiseSection';
import { EcuadorB2BSection } from '../components/EcuadorB2BSection';

import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';

import { getPortfolioProjects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal } from 'lucide-react';

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

      {/* High-Authority Bridge to Labs for Technical Buyers & CTOs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl bg-gradient-to-b from-[#0f1118] to-[#08090d] border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Para Directores de Tecnología & Equipos Técnicos' : 'For CTOs & Technical Leaders'}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold text-neutral-50 tracking-tight">
              {lang === 'es' 
                ? '¿Tu proyecto requiere ciberseguridad, arquitectura de kernel o sistemas offline?' 
                : 'Does your project require kernel systems, cybersecurity or offline architecture?'}
            </h3>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
              {lang === 'es'
                ? 'Más allá de soluciones comerciales web, diseño sistemas de misión crítica: motores EDR en C/C++ con telemetría ETW en Ring 0 y aplicaciones móviles offline-first con Isar NoSQL embebido en Flash memory.'
                : 'Beyond web platforms, I engineer mission-critical systems: C/C++ EDR engines with Windows ETW Ring 0 telemetry and offline-first mobile applications with embedded Isar NoSQL.'}
            </p>

            <div className="pt-4 flex items-center gap-4 flex-wrap">
              <Link
                to="/labs"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-emerald-500 hover:text-neutral-950 text-neutral-200 transition-all font-bold text-sm border border-white/10 group-hover:border-emerald-500/40"
              >
                <span>{lang === 'es' ? 'Explorar Laboratorio & Deep Tech' : 'Explore Labs & Deep Tech'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs font-mono text-neutral-500">
                {lang === 'es' ? 'SuiteSeguridad EDR & PUCE Connect Hub' : 'SuiteSeguridad EDR & PUCE Connect Hub'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}





