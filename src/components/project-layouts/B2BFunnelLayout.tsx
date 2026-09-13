import { useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { Target, ArrowRight, Building2, BarChart3, Users } from 'lucide-react';

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
      <header className="pt-32 pb-16 px-6 md:px-12 max-w-screen-2xl mx-auto border-b-4 border-zinc-950">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
           <div className="max-w-4xl">
             <div className="inline-block bg-[#ff4400] text-white font-bold tracking-widest uppercase px-3 py-1 text-sm mb-6 shadow-[4px_4px_0_0_#000]">
               {project.category}
             </div>
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
               {project.title}
             </h1>
             <p className="text-xl md:text-3xl font-medium text-zinc-600 max-w-2xl leading-tight">
               {project.description}
             </p>
           </div>
           
           <div className="flex flex-col gap-6 md:min-w-[300px]">
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
               <img src={project.images[0]?.url} alt="Desktop" className="w-full h-full object-cover object-top opacity-70 hover:opacity-100 transition-opacity" />
            </div>

            {/* Tablet - Middle layer (Native Brutalist UI Fake) */}
            <div 
              className="absolute top-[35%] left-[5%] w-[50%] md:w-[40%] aspect-[4/3] bg-white border-4 border-zinc-950 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden z-20 transition-transform duration-500 flex flex-col"
              style={{ transform: 'translateZ(50px) rotate(3deg)' }}
            >
               <div className="h-12 border-b-4 border-zinc-950 bg-[#f4f4f5] flex items-center px-4 justify-between">
                 <div className="font-black text-xl uppercase tracking-tighter">NEXUS</div>
                 <div className="flex gap-4 font-bold text-sm">
                   <span className="border-b-2 border-transparent hover:border-black">DASHBOARD</span>
                   <span className="border-b-2 border-transparent hover:border-black">REPORTS</span>
                 </div>
               </div>
               <div className="flex-1 p-6 grid grid-cols-2 gap-6 bg-[linear-gradient(45deg,#f4f4f5_25%,transparent_25%,transparent_75%,#f4f4f5_75%,#f4f4f5),linear-gradient(45deg,#f4f4f5_25%,transparent_25%,transparent_75%,#f4f4f5_75%,#f4f4f5)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]">
                 <div className="bg-white border-4 border-zinc-950 shadow-[8px_8px_0_0_#ff4400] p-6 flex flex-col justify-between">
                   <h3 className="font-black text-3xl uppercase leading-none">Global<br/>Reach</h3>
                   <div className="text-6xl font-black mt-4">2.4M</div>
                 </div>
                 <div className="bg-zinc-950 text-white border-4 border-zinc-950 shadow-[8px_8px_0_0_#ff4400] p-6">
                   <BarChart3 className="w-12 h-12 text-[#ff4400] mb-4" />
                   <h3 className="font-black text-2xl uppercase">Conversion</h3>
                   <p className="text-zinc-400 mt-2 font-medium">B2B Lead gen optimized</p>
                 </div>
               </div>
            </div>

            {/* Phone - Foreground layer (Native Mobile Fake) */}
            <div 
              className="absolute bottom-[5%] left-[55%] md:left-[40%] w-[30%] md:w-[20%] aspect-[9/19.5] bg-white border-[10px] border-zinc-950 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden z-30 transition-transform duration-500 flex flex-col"
              style={{ transform: 'translateZ(200px) rotate(-6deg)' }}
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-zinc-950 rounded-b-xl z-40"></div>
               
               {/* Mobile App Fake UI */}
               <div className="flex-1 pt-10 pb-6 px-4 flex flex-col overflow-hidden bg-[#f4f4f5]">
                 <div className="flex items-center justify-between mb-6">
                   <div className="w-8 h-8 bg-[#ff4400] border-2 border-zinc-950 rounded-full flex items-center justify-center">
                     <Building2 className="w-4 h-4 text-white" />
                   </div>
                   <div className="font-black text-lg tracking-tighter">NEXUS_B2B</div>
                 </div>

                 <div className="bg-white border-4 border-zinc-950 p-4 rounded-xl shadow-[4px_4px_0_0_#000] mb-4 transform -rotate-1">
                   <h4 className="font-black text-2xl uppercase leading-none mb-1">Q3 Target</h4>
                   <p className="text-sm font-bold text-zinc-500 mb-4">Enterprise Leads</p>
                   <div className="text-4xl font-black text-[#ff4400]">84%</div>
                   <div className="w-full h-2 bg-zinc-200 mt-2 border border-zinc-950"><div className="w-[84%] h-full bg-zinc-950"></div></div>
                 </div>

                 <div className="flex-1 space-y-3 overflow-hidden">
                   <div className="bg-zinc-950 text-white p-3 border-2 border-zinc-950 flex items-center justify-between group">
                     <div className="flex items-center gap-2">
                       <Users className="w-4 h-4 text-[#ff4400]" />
                       <span className="font-bold text-sm uppercase">Acme Corp</span>
                     </div>
                     <span className="text-xs font-mono bg-[#ff4400] px-2 py-0.5 font-bold">HOT</span>
                   </div>
                   <div className="bg-white p-3 border-2 border-zinc-950 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                       <Users className="w-4 h-4 text-zinc-950" />
                       <span className="font-bold text-sm uppercase">Globex Inc</span>
                     </div>
                     <span className="text-xs font-mono bg-zinc-200 px-2 py-0.5 font-bold">WARM</span>
                   </div>
                 </div>

                 <div className="mt-4 bg-[#ff4400] text-white p-3 border-4 border-zinc-950 shadow-[4px_4px_0_0_#000] font-black uppercase text-center flex items-center justify-center gap-2">
                   View Funnel <ArrowRight className="w-4 h-4" />
                 </div>
               </div>

               <div 
                 className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 pointer-events-none transition-transform duration-300"
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
