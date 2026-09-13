import { useState, useRef } from 'react';
import type { PersonalProject } from '../../data/personalProjectsData';
import { Smartphone, WifiOff, RefreshCcw, Cloud } from 'lucide-react';

export function EditorialLayout({ project }: { project: PersonalProject }) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const rotateX = (0.5 - mousePos.y) * 15;
  const rotateY = (mousePos.x - 0.5) * 15;

  return (
    <article className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-indigo-500/30 overflow-hidden">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-600 mb-8 uppercase tracking-widest">
          <Smartphone className="w-3.5 h-3.5" />
          <span>React Native Ecosystem</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-[#1a1a1a] mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
          {project.descriptionES}
        </p>
      </header>

      {/* 3D App Flow Presentation */}
      <section 
        className="relative py-24 w-full flex items-center justify-center z-20 cursor-crosshair h-[600px] md:h-[800px]"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        style={{ perspective: '2000px' }}
      >
         {/* Background Grid */}
         <div 
           className="absolute inset-0 opacity-40"
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             transform: `translate(${(mousePos.x - 0.5) * -50}px, ${(mousePos.y - 0.5) * -50}px)`
           }}
         ></div>

         <div 
           className="relative w-full max-w-6xl h-full transition-transform duration-300 ease-out flex items-center justify-center"
           style={{ 
             transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
             transformStyle: 'preserve-3d' 
           }}
         >
            {/* Phone 1: Login (Background Left) */}
            <div 
               className="absolute w-[240px] md:w-[280px] aspect-[9/19.5] bg-white rounded-[2.5rem] border-[12px] border-zinc-200 shadow-2xl overflow-hidden transition-transform duration-500"
               style={{ transform: `translateZ(-150px) translateX(-50%) translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px) rotateY(15deg)` }}
            >
               <img src="/projects/puce_login.png" alt="Login Screen" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Phone 2: Main Dashboard (Center Front) */}
            <div 
               className="absolute w-[260px] md:w-[320px] aspect-[9/19.5] bg-white rounded-[3rem] border-[14px] border-zinc-900 shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden transition-transform duration-500"
               style={{ transform: `translateZ(100px) translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)` }}
            >
               <img src="/projects/puce_dashboard.png" alt="Main Dashboard" className="w-full h-full object-cover" />
               
               {/* Glass Reflection */}
               <div 
                 className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 pointer-events-none transition-transform duration-300"
                 style={{ transform: `translate(${(mousePos.x - 0.5) * 100}%, ${(mousePos.y - 0.5) * 100}%)` }}
               ></div>
            </div>

            {/* Phone 3: Profile/Settings (Background Right) */}
            <div 
               className="absolute w-[240px] md:w-[280px] aspect-[9/19.5] bg-white rounded-[2.5rem] border-[12px] border-zinc-200 shadow-2xl overflow-hidden transition-transform duration-500"
               style={{ transform: `translateZ(-100px) translateX(50%) translate(${(mousePos.x - 0.5) * -40}px, ${(mousePos.y - 0.5) * -40}px) rotateY(-15deg)` }}
            >
               <img src="/projects/puce_profile.png" alt="Profile Screen" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Offline First Callout (Floating UI) */}
            <div 
               className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-64 bg-white border border-zinc-200 rounded-2xl p-5 shadow-2xl transition-transform duration-500"
               style={{ transform: `translateZ(200px) translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 40}px)` }}
            >
               <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-2">
                   <WifiOff className="w-5 h-5 text-indigo-500" />
                   <span className="text-zinc-900 font-bold text-sm">Modo Offline</span>
                 </div>
                 <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
               </div>
               <p className="text-xs text-zinc-500 leading-relaxed">
                 SQLite Database activa. Sirviendo horarios y notas desde la caché local sin conexión a internet en &lt;50ms.
               </p>
            </div>

            {/* Background Sync Callout (Floating UI) */}
            <div 
               className="absolute top-1/4 right-1/4 translate-x-1/2 w-64 bg-zinc-900 text-white rounded-2xl p-5 shadow-2xl transition-transform duration-500"
               style={{ transform: `translateZ(150px) translate(${(mousePos.x - 0.5) * -10}px, ${(mousePos.y - 0.5) * -10}px)` }}
            >
               <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-2">
                   <RefreshCcw className="w-5 h-5 text-indigo-400" />
                   <span className="font-bold text-sm">Background Sync</span>
                 </div>
                 <Cloud className="w-4 h-4 text-zinc-500" />
               </div>
               <p className="text-xs text-zinc-400 leading-relaxed">
                 Workers sincronizando mutaciones con Spring Boot en segundo plano al recuperar conexión.
               </p>
            </div>

         </div>
      </section>

      {/* Marketing B2B - Mobile Value */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Arquitectura Offline-First Real</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Una app universitaria no puede depender de la calidad del WiFi en el campus. Este proyecto fue diseñado con una arquitectura tolerante a desconexiones, garantizando acceso a la información 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-zinc-200 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
              <WifiOff className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Disponibilidad 100%</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Toda la información crítica (horarios, notas, perfil) se persiste en una base de datos local (SQLite). El usuario nunca ve un estado de "Sin Conexión" bloqueante.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
              <RefreshCcw className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Sincronización Silenciosa</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Las acciones realizadas sin internet se encolan. Background Workers detectan cuando vuelve la señal y sincronizan los cambios bidireccionalmente con el backend Spring Boot.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">React Native Nativo</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              No es una web-view. Interfaz fluida a 60fps con animaciones de transicin, navegacin nativa y consumo de recursos altamente optimizado para iOS y Android.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-zinc-200">
          <h4 className="text-lg font-bold text-zinc-900 mb-6">Tecnologías Base:</h4>
          <div className="flex flex-wrap gap-3">
             {project.tech.map((t, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-sm font-bold uppercase tracking-wider">{t}</span>
             ))}
          </div>
        </div>
      </section>

    </article>
  );
}

