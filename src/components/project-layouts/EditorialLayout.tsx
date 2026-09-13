import { useState, useEffect } from 'react';
import type { PersonalProject } from '../../data/personalProjectsData';
import { Smartphone, WifiOff, RefreshCcw, Cloud } from 'lucide-react';
import { ScrollAffordance } from '../ScrollAffordance';
import { useLanguage } from '../../context/LanguageContext';

const EDITORIAL_SECTIONS = [
  { id: 'editorial-hero', label: 'Intro' },
  { id: 'editorial-phones', label: 'App Flow' },
  { id: 'editorial-features', label: 'Arquitectura' },
];

export function EditorialLayout({ project }: { project: PersonalProject }) {
  const { lang } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/projects/puce_login.png',
    '/projects/puce_home.png',
    '/projects/puce_grades.png',
    '/projects/puce_attendance.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <article className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-indigo-500/30 overflow-hidden">
      <ScrollAffordance sections={EDITORIAL_SECTIONS} accentColor="indigo" />

      {/* Hero Section */}
      <header id="editorial-hero" className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-600 mb-8 uppercase tracking-widest">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Arquitectura Flutter &amp; BLoC</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-[#1a1a1a] mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
          {project.descriptionES}
        </p>
      </header>

      {/* ============================================================ */}
      {/* DESKTOP: 3D Phone Carousel (lg+) */}
      {/* ============================================================ */}
      <section id="editorial-phones" className="hidden lg:flex relative py-32 w-full items-center justify-center z-20 min-h-[850px]" style={{ perspective: '2000px' }}>
         {/* Background Grid */}
         <div 
           className="absolute inset-0 opacity-40"
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
             backgroundSize: '40px 40px',
           }}
         ></div>

         <div className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            
            {images.map((imgSrc, index) => {
              // Calculate relative position: 0 is center, 1 is right, 2 is back (hidden), 3 is left
              const diff = (index - currentImageIndex + images.length) % images.length;
              
              let transform = '';
              let opacity = '';
              let zIndex = 0;

              if (diff === 0) {
                // Center / Active
                transform = 'translateX(0) translateZ(100px) rotateY(0deg) scale(1.1)';
                opacity = 'opacity-100';
                zIndex = 40;
              } else if (diff === 1) {
                // Right
                transform = 'translateX(65%) translateZ(-150px) rotateY(-20deg) scale(0.9)';
                opacity = 'opacity-60';
                zIndex = 30;
              } else if (diff === images.length - 1) {
                // Left
                transform = 'translateX(-65%) translateZ(-150px) rotateY(20deg) scale(0.9)';
                opacity = 'opacity-60';
                zIndex = 30;
              } else {
                // Hidden in back
                transform = 'translateX(0) translateZ(-300px) rotateY(0deg) scale(0.8)';
                opacity = 'opacity-0';
                zIndex = 10;
              }

              return (
                <div 
                  key={imgSrc}
                  className={`absolute w-[280px] aspect-[9/19.5] bg-white rounded-[2.5rem] border-[12px] border-zinc-900 shadow-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${opacity}`}
                  style={{ transform, zIndex }}
                >
                  <img src={imgSrc} alt="App Screen" className="w-full h-full object-cover object-top" />
                  {/* Subtle glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                </div>
              );
            })}

         </div>

         {/* Callout Cards (Fixed to the sides, floating above) */}
         <div className="absolute top-1/4 left-4 xl:left-12 w-72 bg-white/95 backdrop-blur-md border border-zinc-200 rounded-2xl p-6 shadow-2xl z-30 hidden md:block">
           <div className="flex justify-between items-center mb-3">
             <div className="flex items-center gap-2">
               <WifiOff className="w-5 h-5 text-indigo-500" />
               <span className="text-zinc-900 font-bold text-sm">Modo Offline</span>
             </div>
             <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
           </div>
           <p className="text-sm text-zinc-600 leading-relaxed">
             Isar Database embebida activa. Despacho instantáneo de horarios, notas y asistencia desde almacenamiento NoSQL local en &lt;50ms.
           </p>
         </div>

         <div className="absolute bottom-1/4 right-4 xl:right-12 w-72 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 text-white rounded-2xl p-6 shadow-2xl z-30 hidden md:block">
           <div className="flex justify-between items-center mb-3">
             <div className="flex items-center gap-2">
               <RefreshCcw className="w-5 h-5 text-indigo-400" />
               <span className="font-bold text-sm">Background Sync</span>
             </div>
             <Cloud className="w-4 h-4 text-zinc-500" />
           </div>
           <p className="text-sm text-zinc-400 leading-relaxed">
             Workers en segundo plano encolando mutaciones transaccionales y sincronizando deltas con Spring Boot al reanudar red.
           </p>
         </div>
      </section>

      {/* ============================================================ */}
      {/* MOBILE: Stacked phone showcase with crossfade (< lg) */}
      {/* ============================================================ */}
      <section id="editorial-phones" className="lg:hidden relative py-16 px-6 z-20">
        {/* Centered phone with crossfade */}
        <div className="flex justify-center mb-8">
          <div className="w-[220px] aspect-[9/19.5] bg-white rounded-[2.5rem] border-[10px] border-zinc-900 shadow-2xl overflow-hidden relative">
            {images.map((imgSrc, index) => (
              <img 
                key={imgSrc}
                src={imgSrc} 
                alt={`App Screen ${index}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? 'bg-indigo-500' : 'bg-zinc-300'}`}
              aria-label={`Ver pantalla ${i + 1}`}
            />
          ))}
        </div>

        {/* Feature callout cards */}
        <div className="space-y-4 max-w-sm mx-auto">
          <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm flex items-start gap-3">
            <WifiOff className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-zinc-900 mb-1">Modo Offline</div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Isar Database embebida. Horarios, notas y asistencia disponibles sin red en &lt;50ms.
              </p>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-start gap-3">
            <RefreshCcw className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-white mb-1">Background Sync</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Mutaciones encoladas y sincronizadas con Spring Boot al recuperar conexión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing B2B - Mobile Value */}
      <section id="editorial-features" className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            {lang === 'es' ? 'Arquitectura Offline-First Real' : 'True Offline-First Architecture'}
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'es'
              ? 'Una app universitaria no puede depender de la calidad del WiFi en el campus. Este proyecto fue diseñado con una arquitectura tolerante a desconexiones, garantizando acceso a la información 24/7.'
              : 'A university app cannot depend on campus WiFi quality. This project was designed with a disconnect-tolerant architecture, guaranteeing 24/7 access to information.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-zinc-200 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
              <WifiOff className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Disponibilidad 100%</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Persistencia local íntegra de horarios, calificaciones y asistencia en Isar DB (NoSQL tipada y reactiva). Lecturas directas de almacenamiento sin bloqueos ni spinners ante caídas de red.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
              <RefreshCcw className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Sincronización Silenciosa</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Encolamiento idempotente de mutaciones offline. Los background workers resuelven marcas temporales y despachan deltas al backend Spring Boot sin interferir en la fluidez de la UI.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Rendimiento Nativo Flutter</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Compilación AOT directa a código máquina ARM a 60fps constantes. Gestión de estado reactiva y desacoplada mediante BLoC pattern para iOS y Android.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-zinc-200">
          <h4 className="text-lg font-bold text-zinc-900 mb-6">
            {lang === 'es' ? 'Tecnologías Base:' : 'Tech Stack:'}
          </h4>
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
