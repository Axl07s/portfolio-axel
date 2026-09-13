import { useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { ChefHat, CreditCard, Clock, Utensils, ArrowRight, CheckCircle2 } from 'lucide-react';

export function LuxuryEditorialLayout({ project }: { project: Project }) {
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
    <article className="min-h-screen bg-[#050505] text-[#f5f2eb] font-serif selection:bg-[#c9a96e]/30 overflow-hidden">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-8 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a96e]/30 text-xs font-sans text-[#c9a96e] mb-8 tracking-[0.3em] uppercase">
          <Utensils className="w-3.5 h-3.5" />
          <span>Haute Cuisine OS</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-400 font-sans font-light max-w-2xl leading-relaxed">
          {project.description}
        </p>
      </header>

      {/* DESKTOP: 3D Isometric Cascade (Hidden on Mobile) */}
      <section 
        className="relative py-24 w-full hidden md:flex items-center justify-center z-20 cursor-crosshair h-[800px]"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        style={{ perspective: '3000px' }}
      >
         {/* Radial Glow */}
         <div 
           className="absolute inset-0 bg-[#c9a96e]/5 blur-[120px] rounded-full pointer-events-none transition-transform duration-1000 ease-out"
           style={{ transform: `translate(${(mousePos.x - 0.5) * 200}px, ${(mousePos.y - 0.5) * 200}px)` }}
         ></div>

         <div 
           className="relative w-full max-w-4xl h-full transition-transform duration-500 ease-out"
           style={{ 
             transform: `rotateX(${60 + rotateX}deg) rotateZ(${-35 + rotateY}deg) scale(0.9)`,
             transformStyle: 'preserve-3d' 
           }}
         >
            {/* LAYER 1: The POS Terminal (Desktop) */}
            {/* Centered, pushed slightly back and top-left in the grid */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] aspect-video bg-[#111] rounded-2xl border border-white/10 shadow-[-20px_20px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-500"
              style={{ transform: `translate(-50%, -50%) translateZ(-100px) translate(-100px, -100px) translate(${(mousePos.x - 0.5) * -50}px, ${(mousePos.y - 0.5) * -50}px)` }}
            >
               <img src={project.images[0]?.url} alt="POS Terminal" className="w-full h-full object-cover opacity-100" />
            </div>

            {/* LAYER 2: The Kitchen Display (Tablet) */}
            {/* Centered, floating up, pushed bottom-left in the grid */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-[4/3] bg-[#000] rounded-[2rem] border-[12px] border-[#1a1a1a] shadow-[-30px_30px_80px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-500"
              style={{ transform: `translate(-50%, -50%) translateZ(100px) translate(-250px, 150px) translate(${(mousePos.x - 0.5) * -20}px, ${(mousePos.y - 0.5) * -20}px)` }}
            >
               <img src={project.images[1]?.url} alt="Kitchen Display" className="w-full h-full object-cover opacity-100" />
               <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-sans font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-lg">
                 <ChefHat className="w-3 h-3" /> New Order
               </div>
            </div>

            {/* LAYER 3: The Customer App (Phone) */}
            {/* Centered, floating highest, pushed right in the grid */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] aspect-[9/19.5] bg-[#0a0a0a] rounded-[3rem] border-[14px] border-[#222] shadow-[-40px_40px_100px_rgba(0,0,0,1)] overflow-hidden transition-transform duration-500 flex flex-col"
              style={{ transform: `translate(-50%, -50%) translateZ(250px) translate(250px, 100px) translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)` }}
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[#222] rounded-b-2xl z-40"></div>
               
               <div className="flex-1 bg-[#f5f2eb] pt-12 pb-6 px-4 flex flex-col font-sans relative">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-black tracking-tight">KURE</h4>
                      <p className="text-xs text-zinc-500 font-medium">Table 12</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black text-[#c9a96e] flex items-center justify-center">
                      <Utensils className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm mb-4 border border-zinc-100">
                    <h5 className="font-bold text-black mb-3">Tasting Menu</h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center border-b border-zinc-50 pb-2">
                        <span className="text-zinc-600">Course 1</span>
                        <span className="text-emerald-600 text-xs font-bold uppercase">Served</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black font-medium">Course 2</span>
                        <span className="text-amber-500 text-xs font-bold uppercase flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Preparing
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button className="w-full bg-black text-[#c9a96e] font-bold py-3.5 rounded-xl flex justify-between items-center px-4 hover:bg-zinc-900 transition-colors">
                      <span className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> Pay Bill</span>
                      <span>$450.00</span>
                    </button>
                  </div>
               </div>

               {/* Glass Reflection */}
               <div 
                 className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none transition-transform duration-300 z-50"
                 style={{ transform: `translate(${(mousePos.x - 0.5) * 100}%, ${(mousePos.y - 0.5) * 100}%)` }}
               ></div>
            </div>

         </div>
      </section>

      {/* MOBILE: Unfolded Stack (Hidden on Desktop) */}
      <section className="flex md:hidden flex-col gap-16 py-12 px-6 w-full max-w-sm mx-auto">
         
         <div className="text-center font-sans space-y-2">
           <h3 className="text-2xl font-serif text-white tracking-tight">Ecosistema Completo</h3>
           <p className="text-sm text-zinc-400">Una suite de aplicaciones diseñada para sincronizar cocina, servicio y clientes en tiempo real.</p>
         </div>

         {/* Mobile View: POS */}
         <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#c9a96e] font-sans text-sm tracking-widest uppercase mb-2">
              <span className="w-8 h-px bg-[#c9a96e]"></span> Sistema Central (POS)
            </div>
            <div className="w-full aspect-video bg-[#111] rounded-xl border border-white/10 shadow-2xl overflow-hidden relative">
               <img src={project.images[0]?.url} alt="POS Terminal" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Gestión centralizada de mesas, facturación y comandas con interfaz oscura optimizada para ambientes de baja luminosidad.
            </p>
         </div>

         {/* Mobile View: Kitchen Display */}
         <div className="flex flex-col gap-4">
            <div className="flex items-center justify-end gap-2 text-white font-sans text-sm tracking-widest uppercase mb-2">
              Kitchen Display (KDS) <span className="w-8 h-px bg-white"></span>
            </div>
            <div className="w-full aspect-[4/3] bg-[#000] rounded-2xl border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden relative">
               <img src={project.images[1]?.url} alt="Kitchen Display" className="w-full h-full object-cover" />
               <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-sans font-bold px-2 py-1 rounded-full uppercase flex items-center gap-1 shadow-lg">
                 <ChefHat className="w-2.5 h-2.5" /> New
               </div>
            </div>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed text-right">
              Pantalla para cocineros con sincronización por WebSockets. Elimina las comandas de papel y reduce errores de tiempos.
            </p>
         </div>

         {/* Mobile View: Customer App UI Replica */}
         <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#c9a96e] font-sans text-sm tracking-widest uppercase mb-2">
              <span className="w-8 h-px bg-[#c9a96e]"></span> App Cliente
            </div>
            <div className="w-[85%] mx-auto aspect-[9/19.5] bg-[#0a0a0a] rounded-[2.5rem] border-[8px] border-[#222] shadow-2xl overflow-hidden flex flex-col relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-[#222] rounded-b-xl z-40"></div>
               
               <div className="flex-1 bg-[#f5f2eb] pt-10 pb-6 px-4 flex flex-col font-sans">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-black tracking-tight">KURE</h4>
                      <p className="text-[10px] text-zinc-500 font-medium">Table 12</p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-black text-[#c9a96e] flex items-center justify-center">
                      <Utensils className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 shadow-sm mb-4 border border-zinc-100">
                    <h5 className="font-bold text-black mb-3 text-sm">Tasting Menu</h5>
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center border-b border-zinc-50 pb-2">
                        <span className="text-zinc-600">Course 1</span>
                        <span className="text-emerald-600 font-bold uppercase">Served</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black font-medium">Course 2</span>
                        <span className="text-amber-500 font-bold uppercase flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Prep
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button className="w-full bg-black text-[#c9a96e] font-bold py-3 rounded-xl flex justify-between items-center px-4">
                      <span className="flex items-center gap-2 text-xs"><CreditCard className="w-3 h-3" /> Pay Bill</span>
                      <span className="text-sm">$450.00</span>
                    </button>
                  </div>
               </div>
            </div>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed text-center mt-2">
              Interfaz móvil interactiva para los comensales. Ver el estado de sus platos en tiempo real y pago sin fricción.
            </p>
         </div>

      </section>

      {/* Marketing & Business Value Section (B2B Focus) */}
      <section className="py-24 max-w-6xl mx-auto px-6 font-sans border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f5f2eb] mb-6 tracking-tight font-serif">Reimaginando la Operación Gastronómica</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Kure no es solo un menú digital. Es un ecosistema completo que sincroniza el salón y la cocina en tiempo real, eliminando cuellos de botella y elevando la experiencia del comensal a estándares Michelin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-[#c9a96e]/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-[#c9a96e]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Reducción de Tiempos</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Las comandas viajan del POS a la pantalla de cocina (KDS) en milisegundos mediante WebSockets. Sin tickets perdidos ni esperas innecesarias.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-[#c9a96e]/20 rounded-full flex items-center justify-center mb-6">
              <Utensils className="w-6 h-6 text-[#c9a96e]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Control de Stock Dinámico</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              El menú se actualiza en tiempo real. Si la cocina marca un ingrediente como agotado, desaparece instantáneamente de la vista de los meseros.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-[#c9a96e]/20 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-[#c9a96e]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Checkout sin Fricción</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Los clientes pueden solicitar la cuenta, dividirla y pagar directamente desde su mesa usando un código QR integrado a pasarelas de pago.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pb-24 max-w-6xl mx-auto px-6 font-sans">
        <div className="flex flex-wrap items-center justify-center gap-3">
           {project.stack.map((t, i) => (
              <span key={i} className="px-4 py-2 bg-[#111] border border-white/10 rounded-full text-zinc-300 text-sm tracking-wider uppercase">{t}</span>
           ))}
        </div>
      </section>

      <div className="pb-32 flex justify-center">
         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase font-sans text-black bg-[#c9a96e] px-8 py-4 rounded hover:bg-[#e0c48e] transition-colors font-bold shadow-[0_0_30px_rgba(201,169,110,0.3)]">
            Acceder al Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
         </a>
      </div>

    </article>
  );
}

