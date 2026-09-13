import { useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { ArrowRight, Star, ChefHat, Utensils, CreditCard } from 'lucide-react';

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

  const rotateX = (0.5 - mousePos.y) * 20;
  const rotateY = (mousePos.x - 0.5) * 20;

  return (
    <article className="min-h-screen bg-[#0a0908] text-[#f5f2eb] font-serif selection:bg-[#c9a96e]/30 overflow-hidden">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-8 flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="flex flex-col items-center">
          <div className="flex gap-1 mb-8 animate-pulse">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-[#c9a96e] fill-[#c9a96e]" />)}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-[#f5f2eb] mb-8 font-serif leading-none">
            {project.title}
          </h1>
          <div className="h-px w-32 bg-[#c9a96e]/50 mb-8"></div>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light italic leading-relaxed tracking-wide mb-8">
            {project.description}
          </p>
        </div>
      </header>

      {/* The Isometric Cascade */}
      <section 
         className="relative w-full h-[600px] md:h-[800px] py-12 z-20 flex items-center justify-center cursor-crosshair"
         ref={containerRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
         style={{ perspective: '2000px' }}
      >
         {/* Radial Glow */}
         <div 
           className="absolute inset-0 bg-[#c9a96e]/5 blur-[100px] rounded-full pointer-events-none transition-transform duration-1000 ease-out"
           style={{ transform: `translate(${(mousePos.x - 0.5) * 200}px, ${(mousePos.y - 0.5) * 200}px)` }}
         ></div>

         <div 
           className="relative w-full max-w-5xl h-full transition-transform duration-500 ease-out"
           style={{ 
             transform: `rotateX(${55 + rotateX}deg) rotateZ(${-45 + rotateY}deg)`,
             transformStyle: 'preserve-3d' 
           }}
         >
            {/* LAYER 1: The POS Terminal (Desktop) */}
            <div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] aspect-video bg-[#111] rounded-2xl border border-white/10 shadow-[-20px_20px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-500"
               style={{ transform: `translateZ(-100px) translate(${(mousePos.x - 0.5) * -50}px, ${(mousePos.y - 0.5) * -50}px)` }}
            >
               <img src={project.images[0]?.url} alt="POS Terminal" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* LAYER 2: The Kitchen Display (Tablet) */}
            <div 
               className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-[4/3] bg-[#000] rounded-[2rem] border-[12px] border-[#1a1a1a] shadow-[-30px_30px_80px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-500"
               style={{ transform: `translateZ(100px) translate(${(mousePos.x - 0.5) * -20}px, ${(mousePos.y - 0.5) * -20}px)` }}
            >
               <img src={project.images[1]?.url} alt="Kitchen Display" className="w-full h-full object-cover opacity-90" />
               <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
                 <ChefHat className="w-3 h-3" /> New Order
               </div>
            </div>

            {/* LAYER 3: The Customer App (Phone) */}
            <div 
               className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/4 w-[250px] aspect-[9/19.5] bg-[#0a0a0a] rounded-[3rem] border-[14px] border-[#222] shadow-[-40px_40px_100px_rgba(0,0,0,1)] overflow-hidden transition-transform duration-500 flex flex-col"
               style={{ transform: `translateZ(300px) translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)` }}
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[#222] rounded-b-2xl z-40"></div>
               
               {/* Native Mobile Fake */}
               <div className="flex-1 bg-[#f5f2eb] pt-12 pb-6 px-4 flex flex-col font-sans">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-black tracking-tight">KURE</h4>
                      <p className="text-xs text-zinc-500 font-medium">Table 12</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <Utensils className="w-4 h-4 text-[#c9a96e]" />
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
                    <h5 className="font-bold text-black text-sm mb-2">Tasting Menu</h5>
                    <div className="flex justify-between text-xs text-zinc-600 mb-1">
                      <span>Course 1: Amuse-Bouche</span>
                      <span className="text-green-600 font-bold">Served</span>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-600">
                      <span>Course 2: Foie Gras</span>
                      <span className="text-amber-500 font-bold">Preparing</span>
                    </div>
                  </div>

                  <div className="mt-auto bg-black text-white p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-[#c9a96e]" />
                      <span className="font-bold text-sm">Pay Bill</span>
                    </div>
                    <span className="font-bold">$450.00</span>
                  </div>
               </div>
               
               {/* Glass Reflection */}
               <div 
                 className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none transition-transform duration-300"
                 style={{ transform: `translate(${(mousePos.x - 0.5) * 100}%, ${(mousePos.y - 0.5) * 100}%)` }}
               ></div>
            </div>

         </div>
      </section>

      {/* Editorial Features */}
      <section className="py-24 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 relative z-20 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#f5f2eb]">A Curated Digital Experience</h2>
          <div className="space-y-6">
            {project.features.map((feature, i) => (
              <p key={i} className="text-lg text-zinc-400 font-light leading-relaxed hover:text-[#c9a96e] transition-colors">
                {feature}
              </p>
            ))}
          </div>
        </div>
        
        <div className="order-1 md:order-2 grid grid-cols-2 gap-8">
           {project.metrics.map((m, i) => (
             <div key={i} className="group cursor-default border-t border-[#c9a96e]/30 pt-6">
               <div className="text-4xl font-light text-[#c9a96e] mb-2 group-hover:scale-110 transition-transform origin-left">{m.value}</div>
               <div className="text-xs uppercase tracking-widest font-sans text-zinc-500">{m.label}</div>
             </div>
           ))}
        </div>
      </section>

      <div className="pb-32 flex justify-center">
         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase font-sans text-black bg-[#c9a96e] px-8 py-4 rounded hover:bg-[#e0c48e] transition-colors">
            View Experience
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
         </a>
      </div>

    </article>
  );
}
