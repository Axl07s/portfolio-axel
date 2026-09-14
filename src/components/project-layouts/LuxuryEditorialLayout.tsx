import { useState, useEffect, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { ChefHat, CreditCard, Utensils, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { ScrollAffordance } from '../ScrollAffordance';
import { useLanguage } from '../../context/LanguageContext';

const getLuxurySections = (lang: 'es' | 'en') => [
  { id: 'luxury-hero', label: 'Intro' },
  { id: 'luxury-cinematic', label: lang === 'es' ? 'Experiencia' : 'Experience' },
  { id: 'luxury-value', label: lang === 'es' ? 'Arquitectura' : 'Architecture' },
  { id: 'luxury-stack', label: 'Stack' },
];

export function LuxuryEditorialLayout({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the progress through the sticky section (0 to 1)
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScrollProgress = () => {
      if (scrollRef.current) {
        const rect = scrollRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // Total scrollable height of the sticky wrapper (300vh = 3 * viewportHeight)
        const totalHeight = viewportHeight * 2; 
        
        // Distance from top of viewport to top of element
        const offset = -rect.top;
        
        if (offset < 0) {
          setProgress(0);
        } else if (offset > totalHeight) {
          setProgress(1);
        } else {
          setProgress(offset / totalHeight);
        }
      }
    };
    window.addEventListener('scroll', handleScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // Determine active slide based on scroll progress (0, 1, or 2)
  const activeSlide = Math.min(2, Math.max(0, Math.floor(progress * 3)));

  return (
    <article className="min-h-screen bg-[#050505] text-[#f5f2eb] font-sans selection:bg-[#c9a96e]/30">
      <ScrollAffordance sections={getLuxurySections(lang)} accentColor="#c9a96e" />

      {/* 1. KINETIC TYPOGRAPHY HERO */}
      <header id="luxury-hero" className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Abstract Background Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        {/* Subtle Ambient Light */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] sm:w-[800px] h-[150vw] sm:h-[800px] rounded-full bg-[#c9a96e] opacity-5 blur-[150px] pointer-events-none"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.5}px)` }}
        ></div>

        <div className="z-10 flex flex-col items-center max-w-5xl">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c9a96e]/20 rounded-full text-xs tracking-[0.4em] uppercase text-[#c9a96e] mb-12">
            <Utensils className="w-3.5 h-3.5" />
            <span>Digital Haute Cuisine</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-[0.9] mb-8">
            {project.title.split(' ')[0]}
            <span className="block text-4xl md:text-7xl text-[#c9a96e] font-light italic mt-4 tracking-normal">
              {project.title.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed mt-4">
            {project.description}
          </p>

          <div className="absolute bottom-12 animate-bounce text-[#c9a96e]/50">
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </header>

      {/* 2. THE CINEMATIC STICKY SCROLL (Desktop Only, stacks on mobile) */}
      <section id="luxury-cinematic" className="hidden lg:block relative" ref={scrollRef} style={{ height: '300vh' }}>
         <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-[#050505]">
            
            {/* Left Content Column */}
            <div className="w-[40%] h-full flex items-center justify-center px-24 relative z-20">
               
               {/* SLIDE 0: POS */}
               <div className={`absolute transition-all duration-700 w-full max-w-md ${activeSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
                 <div className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 font-bold border-b border-[#c9a96e]/20 pb-4 inline-block">{lang === 'es' ? '01 / El Salón' : '01 / The Lounge'}</div>
                 <h2 className="text-5xl font-serif text-white mb-6">Control Central.</h2>
                 <p className="text-xl text-zinc-400 font-light leading-relaxed">
                   {lang === 'es' ? 'Un punto de venta (POS) en modo oscuro diseñado para no interrumpir la atmósfera tenue del salón. Gestión de reservas, facturación dividida y mapas dinámicos de mesas.' : 'A dark-mode Point of Sale (POS) designed not to interrupt the lounge dim atmosphere. Reservation management, split billing, and dynamic table maps.'}
                 </p>
               </div>

               {/* SLIDE 1: KDS */}
               <div className={`absolute transition-all duration-700 w-full max-w-md ${activeSlide === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
                 <div className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 font-bold border-b border-[#c9a96e]/20 pb-4 inline-block">{lang === 'es' ? '02 / La Cocina' : '02 / The Kitchen'}</div>
                 <h2 className="text-5xl font-serif text-white mb-6">Kitchen Display.</h2>
                 <p className="text-xl text-zinc-400 font-light leading-relaxed">
                   {lang === 'es' ? 'Cero tickets de papel. Sincronización vía WebSockets en tiempo real. Los chefs ven los tiempos (courses) codificados por colores para sincronizar el servicio perfecto.' : 'Zero paper tickets. Real-time WebSockets synchronization. Chefs see color-coded courses to synchronize perfect service.'}
                 </p>
               </div>

               {/* SLIDE 2: APP */}
               <div className={`absolute transition-all duration-700 w-full max-w-md ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
                 <div className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 font-bold border-b border-[#c9a96e]/20 pb-4 inline-block">{lang === 'es' ? '03 / El Comensal' : '03 / The Diner'}</div>
                 <h2 className="text-5xl font-serif text-white mb-6">{lang === 'es' ? 'Checkout Invisible.' : 'Invisible Checkout.'}</h2>
                 <p className="text-xl text-zinc-400 font-light leading-relaxed">
                   {lang === 'es' ? 'Una web-app escaneable por QR. El comensal ve el menú degustación, el estado de sus platos, y puede pagar la cuenta en 1-click con Apple Pay. Fricción cero.' : 'A QR-scannable web-app. The diner sees the tasting menu, their dish status, and can pay the bill in 1-click with Apple Pay. Zero friction.'}
                 </p>
               </div>

            </div>

            {/* Right Image Column */}
            <div className="w-[60%] h-[80%] rounded-l-[3rem] overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,1)] border-l border-t border-b border-white/10 bg-[#0a0a0a]">
               
               {/* Image 0: POS */}
               <div className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
                 <img src={project.images[0]?.url} alt="POS" className="w-full h-full object-cover object-left" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-80"></div>
               </div>

               {/* Image 1: KDS */}
               <div className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                 <img src={project.images[1]?.url} alt="KDS" className="w-full h-full object-cover object-left" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-80"></div>
               </div>

               {/* Image 2: APP */}
               <div className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
                 <img src={project.images[2]?.url} alt="APP" className="w-full h-full object-cover object-left" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-80"></div>
               </div>

            </div>

         </div>
      </section>

      {/* 2. MOBILE FALLBACK (Stack) */}
      <section className="lg:hidden flex flex-col gap-20 py-16 px-6 overflow-hidden">
        
        <div className="space-y-6 relative">
          <div className="absolute -left-10 top-20 w-40 h-40 bg-[#c9a96e]/10 blur-[50px] rounded-full pointer-events-none"></div>
          <div className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-bold">{lang === 'es' ? '01 / El Salón' : '01 / The Lounge'}</div>
          <h2 className="text-4xl font-serif text-white leading-tight">{lang === 'es' ? 'Control Central.' : 'Central Control.'}</h2>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(201,169,110,0.15)] relative">
            <img src={project.images[0]?.url} alt="POS" className="w-full h-auto scale-105 hover:scale-100 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-40"></div>
          </div>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            {lang === 'es'
              ? 'Un punto de venta (POS) en modo oscuro diseñado para no interrumpir la atmósfera tenue del salón.'
              : 'A dark-mode Point of Sale (POS) designed not to interrupt the lounge dim atmosphere.'}
          </p>
        </div>

        <div className="space-y-6 relative">
          <div className="absolute -right-10 top-20 w-40 h-40 bg-[#c9a96e]/10 blur-[50px] rounded-full pointer-events-none"></div>
          <div className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-bold">{lang === 'es' ? '02 / La Cocina' : '02 / The Kitchen'}</div>
          <h2 className="text-4xl font-serif text-white leading-tight">Kitchen Display.</h2>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(201,169,110,0.15)] relative">
            <img src={project.images[1]?.url} alt="KDS" className="w-full h-auto scale-105 hover:scale-100 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-40"></div>
          </div>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            {lang === 'es'
              ? 'Sincronización vía WebSockets en tiempo real. Los chefs ven los tiempos codificados por colores para el servicio perfecto.'
              : 'Real-time WebSockets synchronization. Chefs see color-coded courses to synchronize perfect service.'}
          </p>
        </div>

        <div className="space-y-6 relative">
          <div className="absolute -left-10 top-20 w-40 h-40 bg-[#c9a96e]/10 blur-[50px] rounded-full pointer-events-none"></div>
          <div className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-bold">{lang === 'es' ? '03 / El Comensal' : '03 / The Diner'}</div>
          <h2 className="text-4xl font-serif text-white leading-tight">{lang === 'es' ? 'Checkout Invisible.' : 'Invisible Checkout.'}</h2>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(201,169,110,0.15)] relative">
            <img src={project.images[2]?.url} alt="APP" className="w-full h-auto scale-105 hover:scale-100 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-40"></div>
          </div>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            {lang === 'es'
              ? 'El comensal ve el menú degustación, el estado de sus platos, y puede pagar la cuenta en 1-click. Fricción cero.'
              : 'The diner sees the tasting menu, their dish status, and can pay the bill in 1-click. Zero friction.'}
          </p>
        </div>

      </section>

      {/* 3. BUSINESS VALUE GRID */}
      <section id="luxury-value" className="py-32 max-w-7xl mx-auto px-6 border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#c9a96e]/30 to-transparent"></div>
        
        <div className="text-center mb-24 mt-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{lang === 'es' ? 'Arquitectura de Servicio' : 'Service Architecture'}</h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
            {lang === 'es' ? 'Resolviendo los cuellos de botella clásicos de la hostelería con ingeniería de software.' : 'Solving classic hospitality bottlenecks with software engineering.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0a0a0a] border border-white/5 p-10 hover:border-[#c9a96e]/30 transition-colors group">
            <CheckCircle2 className="w-8 h-8 text-[#c9a96e] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-serif text-white mb-4">{lang === 'es' ? 'Sincronización Instantánea' : 'Instant Synchronization'}</h3>
            <p className="text-zinc-400 leading-relaxed font-light">
              {lang === 'es'
                ? 'Despliegue de WebSockets y suscripciones GraphQL para garantizar que un pedido ingresado en el POS aparezca en cocina en milisegundos.'
                : 'Deployment of WebSockets and GraphQL subscriptions to ensure orders entered in POS appear in the kitchen within milliseconds.'}
            </p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/5 p-10 hover:border-[#c9a96e]/30 transition-colors group">
            <ChefHat className="w-8 h-8 text-[#c9a96e] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-serif text-white mb-4">{lang === 'es' ? 'Gestión de Tiempos (Courses)' : 'Course Management'}</h3>
            <p className="text-zinc-400 leading-relaxed font-light">
              {lang === 'es' ? 'Algoritmo de encolamiento que alerta a la cocina cuándo empezar el plato fuerte basado en el tiempo promedio de consumo de las entradas.' : 'Queuing algorithm that alerts the kitchen when to start the main course based on average appetizer consumption time.'}
            </p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/5 p-10 hover:border-[#c9a96e]/30 transition-colors group">
            <CreditCard className="w-8 h-8 text-[#c9a96e] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-serif text-white mb-4">{lang === 'es' ? 'Pagos Desacoplados' : 'Decoupled Payments'}</h3>
            <p className="text-zinc-400 leading-relaxed font-light">
              {lang === 'es' ? 'Microservicio de pagos que permite dividir cuentas por plato, por asiento o porcentajes de forma completamente asíncrona y segura.' : 'Payments microservice allowing bill splitting by dish, by seat, or percentages in a completely asynchronous and secure manner.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK & FOOTER */}
      <section id="luxury-stack" className="pb-32 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 max-w-4xl mx-auto px-6">
           {project.stack.map((t, i) => (
              <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 text-zinc-300 text-xs tracking-[0.2em] uppercase font-bold">{t}</span>
           ))}
        </div>

        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center overflow-hidden bg-[#c9a96e] px-12 py-5 text-black font-bold uppercase tracking-[0.2em] text-sm">
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <span className="relative flex items-center gap-4">
             {lang === 'es' ? 'Ingresar al Sistema' : 'Enter System'} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </span>
        </a>
      </section>

    </article>
  );
}



