import { useState, useEffect } from 'react';
import type { Project } from '../../data/portfolioData';
import { Target, TrendingUp, Filter, BarChart, Zap, Briefcase, Activity } from 'lucide-react';
import { ScrollAffordance } from '../ScrollAffordance';
import { Lightbox } from '../Lightbox';
import { useLanguage } from '../../context/LanguageContext';

const getB2BSections = (lang: 'es' | 'en') => [
  { id: 'b2b-hero', label: 'Intro' },
  { id: 'b2b-showcase', label: lang === 'es' ? 'Producto' : 'Product' },
  { id: 'b2b-roi', label: 'ROI' },
  { id: 'b2b-architecture', label: lang === 'es' ? 'Arquitectura' : 'Architecture' },
  { id: 'b2b-stack', label: 'Stack' },
];

export function B2BFunnelLayout({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className="min-h-screen bg-[#0a0a0b] text-zinc-100 font-sans selection:bg-[#4f46e5] selection:text-white pb-32">
      <ScrollAffordance sections={getB2BSections(lang)} accentColor="indigo" />

      {/* 1. HERO SECTION - Dark & Technical */}
      <header id="b2b-hero" className="relative pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4f46e5_0%,transparent_50%)] opacity-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-400 mb-8 uppercase tracking-widest">
          <Target className="w-4 h-4" />
          <span>{project.category}</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-8 max-w-5xl">
          {project.title}
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-3xl leading-relaxed mb-16">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {project.metrics.map((m, i) => (
            <div key={i} className="bg-[#121214] border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-indigo-500/50 transition-colors">
              <div className="text-3xl font-black text-white mb-2">{m.value}</div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-indigo-400 transition-colors">{m.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* 2. MAIN BROWSER SHOWCASE - Hero & Diagnostic Funnel */}
      <section id="b2b-showcase" className="px-6 md:px-12 max-w-[90rem] mx-auto mb-32 relative">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
             {lang === 'es' ? 'Ingeniería de Adquisición' : 'Acquisition Engineering'}
           </h2>
           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
             {lang === 'es'
               ? 'Arquitectura de captación orientada a conversión. Un embudo interactivo con diagnóstico en 3 pasos diseñado para cualificar prospectos B2B de alto valor.'
               : 'Conversion-driven acquisition architecture. An interactive 3-step diagnostic funnel designed to qualify high-value B2B prospects.'}
           </p>
        </div>
        
        {/* DESKTOP BROWSER MOCKUP */}
        <div 
          className="hidden md:block relative rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_100px_rgba(79,70,229,0.15)] bg-zinc-950 transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${Math.max(0, 50 - scrollY * 0.05)}px)` }}
        >
           {/* macOS Browser Header */}
           <div className="h-12 bg-[#18181b] border-b border-zinc-800 flex items-center px-4 gap-4">
              <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                 <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                 <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <div className="flex-1 max-w-md mx-auto bg-zinc-900 rounded-md h-7 flex items-center justify-center border border-zinc-800">
                <span className="text-xs font-mono text-zinc-500">nexuscorp.agency</span>
              </div>
           </div>
           {/* Main Image */}
           <img src={project.images[0]?.url} alt="NexusCorp Hero" className="w-full h-auto object-cover" />
        </div>

        {/* MOBILE PHONE MOCKUP SHOWCASE (< md) */}
        <div className="md:hidden flex flex-col items-center gap-6">
           {/* iPhone Pro Frame */}
           <div 
             className="w-full max-w-[320px] aspect-[9/19.2] bg-zinc-950 rounded-[3rem] p-2.5 shadow-[0_25px_70px_rgba(79,70,229,0.25)] border-[4px] border-zinc-800 ring-1 ring-white/10 relative overflow-hidden cursor-pointer group"
             onClick={() => setLightboxImg('/projects/nexus_mobile_01.png')}
           >
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3 border border-zinc-800/80 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1e1e24]"></div>
                <div className="w-2 h-2 rounded-full bg-indigo-500/40 animate-pulse"></div>
              </div>

              {/* Inner Screen */}
              <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-zinc-950 relative">
                <img 
                  src="/projects/nexus_mobile_01.png" 
                  alt="NexusCorp Mobile View" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Subtle glass gradient reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                
                {/* Tap hint overlay */}
                <div className="absolute bottom-3 right-3 bg-zinc-950/80 border border-indigo-500/40 rounded-lg px-2.5 py-1 text-[10px] font-mono text-indigo-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <Activity className="w-3 h-3 text-indigo-400 animate-pulse" />
                  <span>{lang === 'es' ? 'Tocar para expandir' : 'Tap to expand'}</span>
                </div>
              </div>
           </div>

           {/* Mobile Caption Card */}
           <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-4 text-center w-full max-w-[320px] backdrop-blur-sm">
              <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-1.5">
                {lang === 'es' ? 'Embudo Táctil B2B' : 'B2B Touch Funnel'}
              </span>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {lang === 'es' 
                  ? 'Flujo de captación con diagnóstico interactivo en 3 pasos, optimizado para conversión en smartphones.'
                  : '3-step interactive diagnostic funnel, engineered for high-intent conversion on smartphones.'}
              </p>
           </div>
        </div>
      </section>

      {/* 3. DEEP DIVE: ROI CALCULATOR & QUALIFICATION */}
      <section id="b2b-roi" className="py-24 bg-[#050505] border-y border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Interactive/Mockup Text */}
            <div className="space-y-8">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 mb-2">
                 <BarChart className="w-6 h-6" />
               </div>
               <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                 {lang === 'es' ? 'Simulador de ROI Dinámico' : 'Dynamic ROI Simulator'}
               </h2>
               <p className="text-xl text-zinc-400 font-light leading-relaxed">
                 {lang === 'es' ? 'En servicios B2B de alto valor, la certidumbre cuantitativa acelera el ciclo de cierre. Desarrollé un simulador reactivo en TypeScript que calcula en tiempo real proyecciones de pipeline y retorno neto con base en las métricas comerciales del prospecto.' : 'In high-ticket B2B services, quantitative certainty accelerates the closing cycle. I developed a reactive TypeScript simulator that calculates real-time pipeline projections and net return based on the prospect commercial metrics.'}
               </p>
               
               <ul className="space-y-4 pt-4">
                 <li className="flex items-start gap-4">
                   <div className="mt-1 bg-zinc-900 p-1 rounded"><TrendingUp className="w-4 h-4 text-indigo-400" /></div>
                   <div>
                     <h4 className="font-bold text-white">Modelado Financiero Reactivo</h4>
                     <p className="text-zinc-500 text-sm">{lang === 'es' ? 'Cálculo de retorno proyectado, volumen de leads y valor anual de pipeline a 60fps con sliders interactivos.' : 'Projected return calculation, lead volume, and annual pipeline value at 60fps with interactive sliders.'}</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="mt-1 bg-zinc-900 p-1 rounded"><Filter className="w-4 h-4 text-indigo-400" /></div>
                   <div>
                     <h4 className="font-bold text-white">{lang === 'es' ? 'Cualificación Algorítmica en 3 Pasos' : '3-Step Algorithmic Qualification'}</h4>
                     <p className="text-zinc-500 text-sm">{lang === 'es' ? 'Filtra prospectos por umbrales presupuestarios mínimos y enruta leads calificados a booking de diagnóstico estratégico.' : 'Filters prospects by minimum budget thresholds and routes qualified leads to strategic diagnostic booking.'}</p>
                   </div>
                 </li>
               </ul>
            </div>

            {/* Right: Actual Image */}
            <div className="relative group">
               <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                 <img src={project.images[1]?.url} alt="ROI Calculator" className="w-full h-auto object-cover" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURE & CASE STUDIES */}
      <section id="b2b-architecture" className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            
            {/* Right Side (Text) */}
            <div className="space-y-8">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 mb-2">
                 <Briefcase className="w-6 h-6" />
               </div>
               <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                 {lang === 'es' ? 'Arquitectura y Casos de Estudio' : 'Architecture & Case Studies'}
               </h2>
               <p className="text-xl text-zinc-400 font-light leading-relaxed">
                 {lang === 'es' ? 'Demostración de capacidades respaldada por casos de estudio estructurados: problema operativo del cliente, stack tecnológico implementado y resultados cuantitativos verificados.' : 'Capability demonstration backed by structured case studies: client operational problem, implemented tech stack, and verified quantitative results.'}
               </p>
               
               <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="bg-[#121214] p-6 rounded-2xl border border-zinc-800">
                    <Zap className="w-6 h-6 text-indigo-400 mb-4" />
                    <h4 className="font-bold text-white mb-2">{lang === 'es' ? 'Modales de Inspección Profunda' : 'Deep Inspection Modals'}</h4>
                    <p className="text-xs text-zinc-500">{lang === 'es' ? 'Visualización asíncrona de arquitectura y métricas por cliente sin recarga de página ni pérdida de estado de navegación.' : 'Asynchronous visualization of architecture and client metrics without page reloads or loss of navigation state.'}</p>
                  </div>
                  <div className="bg-[#121214] p-6 rounded-2xl border border-zinc-800">
                    <Target className="w-6 h-6 text-indigo-400 mb-4" />
                    <h4 className="font-bold text-white mb-2">{lang === 'es' ? 'Puntos de Fricción Mínima' : 'Minimal Friction Points'}</h4>
                    <p className="text-xs text-zinc-500">{lang === 'es' ? 'Llamados a la acción contextuales integrados tras cada prueba cuantitativa de valor, maximizando la conversión a llamadas estratégicas.' : 'Contextual CTAs integrated after every quantitative proof of value, maximizing conversion to strategic calls.'}</p>
                  </div>
               </div>
            </div>

            {/* Left Side (Image) */}
            <div className="relative">
               <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                 <img src={project.images[2]?.url} alt="Architecture & Case Studies" className="w-full h-auto object-cover" />
               </div>
            </div>

        </div>
      </section>

      {/* 5. TECH STACK BENTO */}
      <section id="b2b-stack" className="px-6 md:px-12 max-w-screen-xl mx-auto">
         <div className="bg-[#121214] border border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
               <h3 className="text-2xl font-bold mb-2">
                 {lang === 'es' ? 'Stack Tecnológico Central' : 'Core Tech Stack'}
               </h3>
               <p className="text-zinc-500 max-w-md">
                 {lang === 'es'
                   ? 'Arquitectura frontend con Vite, React, TypeScript y Tailwind CSS, garantizando tiempos de carga inferiores a 800ms.'
                   : 'Frontend architecture with Vite, React, TypeScript, and Tailwind CSS, guaranteeing load times under 800ms.'}
               </p>
             </div>
            <div className="flex flex-wrap justify-end gap-3">
               {project.stack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-300 font-mono text-sm">
                    {tech}
                  </span>
               ))}
            </div>
         </div>
      </section>

      {lightboxImg && <Lightbox imgSrc={lightboxImg} altText="NexusCorp Mockup Preview" onClose={() => setLightboxImg(null)} />}
    </article>
  );
}



