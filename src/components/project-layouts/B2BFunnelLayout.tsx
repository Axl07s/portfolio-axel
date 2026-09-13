import { useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { Target } from 'lucide-react';

export function B2BFunnelLayout({ project }: { project: Project }) {
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
    <article className="min-h-screen bg-[#f4f4f5] text-zinc-950 font-sans selection:bg-[#ff4400] selection:text-white">
      
      {/* Brutalist Header */}
      <header className="pt-32 pb-16 px-6 md:px-12 max-w-screen-2xl mx-auto border-b-8 border-zinc-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
           <div className="lg:col-span-8">
             <div className="inline-block bg-zinc-950 text-white font-mono text-sm font-bold uppercase tracking-widest px-4 py-2 mb-8">
               {project.category}
             </div>
             <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
               {project.title}
             </h1>
             <p className="text-xl md:text-2xl font-bold text-zinc-600 max-w-3xl leading-snug">
               {project.description}
             </p>
           </div>
           
           <div className="lg:col-span-4 flex flex-col justify-end space-y-8">
             {project.metrics.map((m, i) => (
                <div key={i} className="border-l-4 border-[#ff4400] pl-4 group hover:border-black transition-colors cursor-default">
                  <div className="text-4xl font-black transition-transform group-hover:translate-x-2">{m.value}</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-zinc-500">{m.label}</div>
                </div>
             ))}
           </div>
        </div>
      </header>

      {/* The Matrix Cascade Mockup (3D Interactive) */}
      <section 
        className="py-24 bg-zinc-950 overflow-hidden relative cursor-crosshair"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        style={{ perspective: '2000px' }}
      >
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

         <div 
           className="max-w-screen-2xl mx-auto px-4 relative h-[700px] md:h-[900px] transition-transform duration-300 ease-out flex items-center justify-center"
           style={{ 
             transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
             transformStyle: 'preserve-3d' 
           }}
         >
            
            {/* Desktop - Background layer */}
            <div 
              className="absolute top-[5%] right-[5%] w-[80%] md:w-[60%] aspect-video bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden z-10 transition-transform duration-500"
              style={{ transform: 'translateZ(-100px) rotate(-2deg)' }}
            >
               <img src={project.images[0]?.url} alt="Desktop Layout" className="w-full h-full object-cover object-top opacity-70 hover:opacity-100 transition-opacity" />
            </div>

            {/* Tablet - Middle layer */}
            <div 
              className="absolute top-[35%] left-[5%] w-[50%] md:w-[40%] aspect-[4/3] bg-zinc-900 border-[8px] border-zinc-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden z-20 transition-transform duration-500 flex flex-col"
              style={{ transform: 'translateZ(50px) rotate(3deg)' }}
            >
               <img src={project.images[1]?.url} alt="Tablet Layout" className="w-full h-full object-cover object-top" />
            </div>

            {/* Phone - Foreground layer */}
            <div 
              className="absolute bottom-[5%] left-[55%] md:left-[40%] w-[30%] md:w-[20%] aspect-[9/19.5] bg-zinc-900 border-[10px] border-zinc-800 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden z-30 transition-transform duration-500 flex flex-col"
              style={{ transform: 'translateZ(200px) rotate(-6deg)' }}
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-zinc-800 rounded-b-xl z-40"></div>
               
               <img src={project.images[2]?.url} alt="Mobile Layout" className="w-full h-full object-cover object-top" />

               {/* Glass Reflection overlay */}
               <div 
                 className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none transition-transform duration-300 z-50"
                 style={{ transform: `translate(${(mousePos.x - 0.5) * 150}%, ${(mousePos.y - 0.5) * 150}%)` }}
               ></div>
            </div>

         </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
         <div className="absolute top-0 left-12 right-12 h-1 bg-zinc-950"></div>
         {project.features.map((f, i) => (
            <div key={i} className="p-8 border-2 border-zinc-950 bg-white shadow-[8px_8px_0_0_#ff4400] hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-1 transition-all duration-300 group">
               <Target className="w-8 h-8 text-[#ff4400] mb-6 group-hover:scale-125 transition-transform" />
               <p className="font-bold text-lg leading-snug">{f}</p>
            </div>
         ))}
      </section>

    </article>
  );
}

