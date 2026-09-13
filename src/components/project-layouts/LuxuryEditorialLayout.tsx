import { useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { ArrowRight, Star } from 'lucide-react';

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

  const rotateX = (0.5 - mousePos.y) * 12;
  const rotateY = (mousePos.x - 0.5) * 12;

  return (
    <article className="min-h-screen bg-[#0d0c0a] text-[#f5f2eb] font-serif selection:bg-[#c9a96e]/30 overflow-hidden">
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        
        {/* Abstract Gold Glow tracking mouse */}
        <div 
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/5 blur-[120px] rounded-full pointer-events-none transition-transform duration-1000 ease-out"
           style={{ transform: `translate(${(mousePos.x - 0.5) * 200}px, ${(mousePos.y - 0.5) * 200}px)` }}
        ></div>

        <div className="z-10 flex flex-col items-center">
          <div className="flex gap-1 mb-8 animate-pulse">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-[#c9a96e] fill-[#c9a96e]" />)}
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#f5f2eb] mb-8 font-serif leading-none hover:scale-105 transition-transform duration-700">
            {project.title}
          </h1>
          
          <div className="h-px w-32 bg-[#c9a96e]/50 mb-8"></div>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light italic leading-relaxed tracking-wide font-serif mb-12">
            {project.description}
          </p>

          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase font-sans text-[#c9a96e] hover:text-[#e0c48e] transition-colors">
            View Experience
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </header>

      {/* The 3D Tablet Showcase */}
      <section 
         className="relative w-full py-24 z-20"
         ref={containerRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
         style={{ perspective: '2000px' }}
      >
         <div 
           className="max-w-6xl mx-auto px-4 relative flex justify-center transition-transform duration-300 ease-out"
           style={{ 
             transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
             transformStyle: 'preserve-3d' 
           }}
         >
            {/* Fake iPad Pro Frame */}
            <div 
               className="w-[90%] md:w-[75%] aspect-[4/3] bg-black rounded-[2rem] md:rounded-[3rem] border-[12px] md:border-[16px] border-zinc-900 shadow-[0_50px_100px_rgba(0,0,0,0.9)] relative overflow-hidden"
               style={{ transform: 'translateZ(50px)' }}
            >
               {/* Camera dot */}
               <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-zinc-950 flex items-center justify-center z-50">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/10"></div>
               </div>
               
               <img src={project.images[0]?.url} alt="Tablet UI" className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-1000" />
               
               {/* Glass Reflection */}
               <div 
                 className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none transition-transform duration-300"
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
          <div className="pt-8 grid grid-cols-2 gap-8 border-t border-zinc-800">
             {project.metrics.slice(0, 2).map((m, i) => (
               <div key={i} className="group cursor-default">
                 <div className="text-3xl font-light text-[#c9a96e] mb-2 group-hover:scale-110 transition-transform origin-left">{m.value}</div>
                 <div className="text-xs uppercase tracking-widest font-sans text-zinc-500">{m.label}</div>
               </div>
             ))}
          </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-8">
           <img src={project.images[1]?.url} alt="Feature 1" className="w-full h-auto rounded-lg shadow-2xl sepia-[0.2] grayscale-[0.3] hover:grayscale-0 hover:sepia-0 hover:scale-105 transition-all duration-700" />
           <img src={project.images[2]?.url} alt="Feature 2" className="w-4/5 h-auto rounded-lg shadow-2xl ml-auto sepia-[0.2] grayscale-[0.3] hover:grayscale-0 hover:sepia-0 hover:scale-105 transition-all duration-700" />
        </div>
      </section>

    </article>
  );
}
