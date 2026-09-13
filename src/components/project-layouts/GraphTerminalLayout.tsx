import { useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { Search, ArrowRight, Binary, Cpu } from 'lucide-react';

export function GraphTerminalLayout({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  // Base rotation
  const rotateX = (0.5 - mousePos.y) * 15;
  const rotateY = (mousePos.x - 0.5) * 15;

  return (
    <article className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-blue-500/30 overflow-hidden">
      
      <header className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-400 mb-8">
          <Binary className="w-3.5 h-3.5" />
          <span>Vercel Architecture Blueprint</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Pasa el ratn sobre la cuadrcula para revelar la arquitectura subyacente.
        </p>
      </header>

      {/* The Exploding Blueprint */}
      <section 
        className="relative py-24 w-full flex items-center justify-center z-20 cursor-crosshair"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: 0.5, y: 0.5 });
        }}
        style={{ perspective: '2000px' }}
      >
         <div 
           className="relative w-full max-w-5xl aspect-video transition-transform duration-700 ease-out"
           style={{ 
             transform: `rotateX(${rotateX + (isHovered ? 25 : 0)}deg) rotateY(${rotateY + (isHovered ? -15 : 0)}deg) rotateZ(${isHovered ? 5 : 0}deg)`,
             transformStyle: 'preserve-3d' 
           }}
         >
            {/* Background Wireframe Layer */}
            <div 
              className={`absolute inset-[-10%] border-2 border-blue-500/20 bg-[linear-gradient(to_right,#1e3a8a22_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a22_1px,transparent_1px)] bg-[size:40px_40px] rounded-[40px] flex items-center justify-center transition-all duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              style={{ transform: `translateZ(${isHovered ? '-250px' : '0px'})` }}
            >
               <div className="font-mono text-6xl font-black text-blue-500/10 tracking-tighter uppercase border-8 border-blue-500/10 p-12 rounded-[3rem]">
                 RAG VECTOR ENGINE
               </div>
            </div>

            {/* The Bento Grid (Front Layer) */}
            <div 
              className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-4 md:gap-6 transition-all duration-700 ease-out"
              style={{ transform: `translateZ(${isHovered ? '150px' : '0px'})`, transformStyle: 'preserve-3d' }}
            >
               {/* Main UI Tile */}
               <div 
                 className="col-span-4 md:col-span-2 row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 relative group"
                 style={{ transform: `translateZ(${isHovered ? '80px' : '0px'})` }}
               >
                 <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                 <img src={project.images[0]?.url} alt="Main UI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
               </div>

               {/* Metrics Tile 1 */}
               <div 
                 className="col-span-2 md:col-span-1 row-span-1 bg-black border border-blue-900/50 rounded-3xl p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-transform duration-700"
                 style={{ transform: `translateZ(${isHovered ? '140px' : '0px'})` }}
               >
                 <Cpu className="w-6 h-6 text-blue-400" />
                 <div>
                   <div className="text-3xl font-black text-white">142ms</div>
                   <div className="text-xs text-blue-400 uppercase tracking-widest mt-1">Avg Query</div>
                 </div>
               </div>

               {/* Image Tile */}
               <div 
                 className="col-span-2 md:col-span-1 row-span-2 bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden transition-transform duration-700"
                 style={{ transform: `translateZ(${isHovered ? '40px' : '0px'})` }}
               >
                 <img src={project.images[1]?.url} alt="Data" className="w-full h-full object-cover opacity-60" />
               </div>

               {/* Tech Stack Tile */}
               <div 
                 className="col-span-2 md:col-span-1 row-span-1 bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-3xl p-6 transition-transform duration-700"
                 style={{ transform: `translateZ(${isHovered ? '110px' : '0px'})` }}
               >
                 <h3 className="text-sm font-mono text-blue-300 mb-3">Stack</h3>
                 <div className="flex flex-wrap gap-2">
                   {project.stack.slice(0, 3).map(s => (
                     <span key={s} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-black/50 rounded border border-blue-500/20 text-white">{s}</span>
                   ))}
                 </div>
               </div>

               {/* Wide Terminal Tile */}
               <div 
                 className="col-span-4 md:col-span-3 row-span-1 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-6 flex items-center transition-transform duration-700"
                 style={{ transform: `translateZ(${isHovered ? '180px' : '0px'})` }}
               >
                 <div className="flex-1 font-mono text-sm">
                   <div className="text-zinc-500 mb-2">// Semantic Search execution</div>
                   <div className="text-blue-400">await db.vectors.similaritySearch(query, 5);</div>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                   <Search className="w-5 h-5 text-blue-400" />
                 </div>
               </div>

               {/* Action Tile */}
               <div 
                 className="col-span-4 md:col-span-1 row-span-1 bg-blue-600 rounded-3xl p-6 flex flex-col justify-between hover:bg-blue-500 transition-colors cursor-pointer"
                 style={{ transform: `translateZ(${isHovered ? '200px' : '0px'})` }}
               >
                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between h-full group">
                    <span className="font-bold text-white uppercase tracking-widest">Deploy<br/>System</span>
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                 </a>
               </div>

            </div>
         </div>
      </section>

      {/* Details Section */}
      <section className="max-w-4xl mx-auto px-6 pb-32 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Arquitectura del Conocimiento</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {project.features.map((f, i) => (
            <div key={i} className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300">
              {f}
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}

