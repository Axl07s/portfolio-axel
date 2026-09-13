import { useState, useRef, useEffect } from 'react';
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
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    '/projects/puce_home.png',
    '/projects/puce_profile.png',
    '/projects/puce_grades.png',
    '/projects/puce_attendance.png',
    '/projects/puce_login.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

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
      {/* DESKTOP: 3D App Flow Presentation (lg+) */}
      {/* ============================================================ */}
      <section id="editorial-phones"
        className="hidden lg:flex relative py-24 w-full items-center justify-center z-20 cursor-crosshair h-[800px]"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        style={{ perspective: '2000px' }}
      >
         {/* Background Grid */}
         <div 
           className="absolute inset-0 opacity-40 transition-transform duration-700 ease-out"
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             transform: `translate(${(mousePos.x - 0.5) * -50}px, ${(mousePos.y - 0.5) * -50}px)`
           }}
         ></div>

         <div 
           className="relative w-full max-w-6xl h-full transition-transform duration-700 ease-out flex items-center justify-center"
           style={{ 
             transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
             transformStyle: 'preserve-3d' 
           }}
         >
            {/* Phone 1: Login (Background Left) */}
            <div 
               className="absolute w-[280px] aspect-[9/19.5] bg-white rounded-[2.5rem] border-[12px] border-zinc-200 shadow-2xl overflow-hidden transition-transform duration-700 ease-out"
               style={{ transform: `translateZ(-150px) translateX(-55%) translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px) rotateY(15deg)` }}
            >
               <img src="/projects/puce_login.png" alt="Login Screen" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Phone 3: Profile/Settings (Background Right) */}
            <div 
               className="absolute w-[280px] aspect-[9/19.5] bg-white rounded-[2.5rem] border-[12px] border-zinc-200 shadow-2xl overflow-hidden transition-transform duration-700 ease-out"
               style={{ transform: `translateZ(-100px) translateX(55%) translate(${(mousePos.x - 0.5) * -40}px, ${(mousePos.y - 0.5) * -40}px) rotateY(-15deg)` }}
            >
               <img src="/projects/puce_profile.png" alt="Profile Screen" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Phone 2: Main Dashboard (Center Front with Auto-Changing Images) */}
            <div 
               className="absolute w-[320px] aspect-[9/19.5] bg-white rounded-[3rem] border-[14px] border-zinc-900 shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden transition-transform duration-700 ease-out"
               style={{ transform: `translateZ(100px) translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)` }}
            >
               {/* Crossfading Images Container */}
               <div className="relative w-full h-full">
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
               
               {/* Glass Reflection overlaying the images */}
               <div 
                 className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 pointer-events-none transition-transform duration-300 z-20"
                 style={{ transform: `translate(${(mousePos.x - 0.5) * 100}%, ${(mousePos.y - 0.5) * 100}%)` }}
               ></div>
            </div>

            {/* Offline First Callout (Floating UI) */}
            <div 
               className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-64 bg-white border border-zinc-200 rounded-2xl p-5 shadow-2xl transition-transform duration-700 ease-out"
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
                 Isar Database embebida activa. Despacho instantáneo de horarios, notas y asistencia desde almacenamiento NoSQL local en &lt;50ms.
               </p>
            </div>

            {/* Background Sync Callout (Floating UI) */}
            <div 
               className="absolute top-1/4 right-1/4 translate-x-1/2 w-64 bg-zinc-900 text-white rounded-2xl p-5 shadow-2xl transition-transform duration-700 ease-out"
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
                 Workers en segundo plano encolando mutaciones transaccionales y sincronizando deltas con Spring Boot al reanudar red.
               </p>
            </div>

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
      <section id="editorial-features" className="max-w-6xl mx-auto px-6 pb-32">
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
