import { useState, useEffect } from 'react';
import type { Project } from '../../data/portfolioData';
import { Target, TrendingUp, Filter, BarChart, Zap, Briefcase } from 'lucide-react';
import { ScrollAffordance } from '../ScrollAffordance';

const B2B_SECTIONS = [
  { id: 'b2b-hero', label: 'Intro' },
  { id: 'b2b-showcase', label: 'Producto' },
  { id: 'b2b-roi', label: 'ROI' },
  { id: 'b2b-architecture', label: 'Arquitectura' },
  { id: 'b2b-stack', label: 'Stack' },
];

export function B2BFunnelLayout({ project }: { project: Project }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className="min-h-screen bg-[#0a0a0b] text-zinc-100 font-sans selection:bg-[#4f46e5] selection:text-white pb-32">
      <ScrollAffordance sections={B2B_SECTIONS} accentColor="indigo" />

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
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Ingeniería de Adquisición</h2>
           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
             Arquitectura de captación orientada a conversión. Un embudo interactivo con diagnóstico en 3 pasos diseñado para cualificar prospectos B2B de alto valor.
           </p>
        </div>
        
        <div 
          className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_100px_rgba(79,70,229,0.15)] bg-zinc-950 transition-transform duration-1000 ease-out"
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
               <h2 className="text-4xl md:text-5xl font-black tracking-tight">Simulador de ROI Dinámico</h2>
               <p className="text-xl text-zinc-400 font-light leading-relaxed">
                 En servicios B2B de alto valor, la certidumbre cuantitativa acelera el ciclo de cierre. Desarrollé un simulador reactivo en TypeScript que calcula en tiempo real proyecciones de pipeline y retorno neto con base en las métricas comerciales del prospecto.
               </p>
               
               <ul className="space-y-4 pt-4">
                 <li className="flex items-start gap-4">
                   <div className="mt-1 bg-zinc-900 p-1 rounded"><TrendingUp className="w-4 h-4 text-indigo-400" /></div>
                   <div>
                     <h4 className="font-bold text-white">Modelado Financiero Reactivo</h4>
                     <p className="text-zinc-500 text-sm">Cálculo de retorno proyectado, volumen de leads y valor anual de pipeline a 60fps con sliders interactivos.</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="mt-1 bg-zinc-900 p-1 rounded"><Filter className="w-4 h-4 text-indigo-400" /></div>
                   <div>
                     <h4 className="font-bold text-white">Cualificación Algorítmica en 3 Pasos</h4>
                     <p className="text-zinc-500 text-sm">Filtra prospectos por umbrales presupuestarios mínimos y enruta leads calificados a booking de diagnóstico estratégico.</p>
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
               <h2 className="text-4xl md:text-5xl font-black tracking-tight">Arquitectura y Casos de Estudio</h2>
               <p className="text-xl text-zinc-400 font-light leading-relaxed">
                 Demostración de capacidades respaldada por casos de estudio estructurados: problema operativo del cliente, stack tecnológico implementado y resultados cuantitativos verificados.
               </p>
               
               <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="bg-[#121214] p-6 rounded-2xl border border-zinc-800">
                    <Zap className="w-6 h-6 text-indigo-400 mb-4" />
                    <h4 className="font-bold text-white mb-2">Modales de Inspección Profunda</h4>
                    <p className="text-xs text-zinc-500">Visualización asíncrona de arquitectura y métricas por cliente sin recarga de página ni pérdida de estado de navegación.</p>
                  </div>
                  <div className="bg-[#121214] p-6 rounded-2xl border border-zinc-800">
                    <Target className="w-6 h-6 text-indigo-400 mb-4" />
                    <h4 className="font-bold text-white mb-2">Puntos de Fricción Mínima</h4>
                    <p className="text-xs text-zinc-500">Llamados a la acción contextuales integrados tras cada prueba cuantitativa de valor, maximizando la conversión a llamadas estratégicas.</p>
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
              <h3 className="text-2xl font-bold mb-2">Stack Tecnológico Central</h3>
              <p className="text-zinc-500 max-w-md">Arquitectura frontend con Vite, React, TypeScript y Tailwind CSS, garantizando tiempos de carga inferiores a 800ms.</p>
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

    </article>
  );
}

