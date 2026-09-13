import { useState, useEffect } from 'react';
import type { PersonalProject } from '../../data/personalProjectsData';
import { Smartphone, WifiOff, RefreshCcw, Cloud } from 'lucide-react';

export function EditorialLayout({ project }: { project: PersonalProject }) {
  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-rotate the carousel
  useEffect(() => {
    let animationFrameId: number;
    let currentAngle = angle;
    
    const animate = () => {
      if (!isHovered) {
        currentAngle -= 0.3; // Rotation speed
        setAngle(currentAngle);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]); // re-bind when hover state changes

  const radius = window.innerWidth < 768 ? 150 : 250; // Radius of the carousel

  const screens = [
    { id: 1, src: '/projects/puce_home.png', title: 'Main Dashboard' },
    { id: 2, src: '/projects/puce_profile.png', title: 'User Profile' },
    { id: 3, src: '/projects/puce_login.png', title: 'Authentication' },
  ];

  return (
    <article className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-indigo-500/30 overflow-hidden">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-8 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
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

      {/* 3D Auto-Rotating Carousel */}
      <section 
        className="relative py-12 w-full flex items-center justify-center z-20 h-[600px] md:h-[800px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: '2000px' }}
      >
         {/* Background Grid */}
         <div 
           className="absolute inset-0 opacity-40"
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
         ></div>

         {/* Carousel Container */}
         <div 
           className="relative w-full max-w-md h-[400px] md:h-[550px] transition-transform duration-75 flex items-center justify-center"
           style={{ 
             transformStyle: 'preserve-3d',
             transform: `rotateX(-10deg) rotateY(${angle}deg)`
           }}
         >
            {screens.map((screen, index) => {
              // Calculate the angle for each item in the 360 degree circle
              const itemAngle = (360 / screens.length) * index;
              return (
                <div 
                  key={screen.id}
                  className="absolute w-[220px] md:w-[280px] aspect-[9/19.5] bg-white rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[14px] border-zinc-900 shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden"
                  style={{ 
                    // Rotate the item to face outward, then translate it outward by the radius
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden' // Optional: hide the back if you don't want to see it reversed when spinning
                  }}
                >
                  {/* Camera Dot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-zinc-900 rounded-b-xl z-40"></div>
                  
                  <img src={screen.src} alt={screen.title} className="w-full h-full object-cover" />
                  
                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none"></div>
                </div>
              );
            })}
         </div>

         {/* Floating Callouts (Static relative to screen, not rotating) */}
         <div className="absolute bottom-1/4 left-4 md:left-1/4 w-56 md:w-64 bg-white border border-zinc-200 rounded-2xl p-4 md:p-5 shadow-2xl z-30">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <WifiOff className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />
                <span className="text-zinc-900 font-bold text-xs md:text-sm">Modo Offline</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            </div>
            <p className="text-[10px] md:text-xs text-zinc-500 leading-relaxed">
              SQLite Database activa. Sirviendo datos sin conexión en &lt;50ms.
            </p>
         </div>

         <div className="absolute top-1/4 right-4 md:right-1/4 w-56 md:w-64 bg-zinc-900 text-white rounded-2xl p-4 md:p-5 shadow-2xl z-30">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <RefreshCcw className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                <span className="font-bold text-xs md:text-sm">Background Sync</span>
              </div>
              <Cloud className="w-4 h-4 text-zinc-500" />
            </div>
            <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed">
              Workers sincronizando mutaciones con Spring Boot en segundo plano.
            </p>
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

