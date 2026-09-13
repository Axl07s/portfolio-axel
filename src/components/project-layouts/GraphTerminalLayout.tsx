import { useEffect, useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { Network, Search, Terminal } from 'lucide-react';

export function GraphTerminalLayout({ project }: { project: Project }) {
  const [terminalText, setTerminalText] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const codeString = "> Initializing pgvector connection...\n> Loading embeddings model (text-embedding-ada-002)...\n> Embedding query: 'Show me Q3 revenue metrics'\n> Performing cosine similarity search...\n> Retrieved 4 relevant chunks in 142ms\n> Generating augmented response...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(codeString.substring(0, i));
      i++;
      if (i > codeString.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const rotateX = (0.5 - mousePos.y) * 10;
  const rotateY = (mousePos.x - 0.5) * 10;

  return (
    <article className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-cyan-500/30 overflow-hidden">
      
      {/* Dynamic Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)', 
          backgroundSize: '50px 50px',
          transform: `translate(${mousePos.x * 20 - 10}px, ${mousePos.y * 20 - 10}px)`
        }}
      ></div>

      {/* Header */}
      <header className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 z-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {project.metrics.map((m, i) => (
             <div key={i} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl min-w-[120px] hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all">
               <div className="text-2xl font-semibold text-cyan-400 mb-1">{m.value}</div>
               <div className="text-xs uppercase tracking-widest text-zinc-500">{m.label}</div>
             </div>
          ))}
        </div>
      </header>

      {/* 3D Split Screen Strategy */}
      <section 
        className="relative py-12 max-w-[1400px] mx-auto px-4 md:px-8 z-20"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        style={{ perspective: '2000px' }}
      >
        <div 
           className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 transition-transform duration-300 ease-out"
           style={{ 
             transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
             transformStyle: 'preserve-3d' 
           }}
        >
          {/* Left: Terminal */}
          <div 
            className="bg-black border border-zinc-800 rounded-2xl overflow-hidden flex flex-col h-[500px] md:h-[600px] shadow-2xl transition-transform duration-300"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
              <Terminal className="w-4 h-4 text-zinc-500" />
              <span className="text-xs font-mono text-zinc-400">rag_engine_worker.py</span>
            </div>
            <div className="p-6 font-mono text-sm md:text-base text-cyan-500 whitespace-pre-wrap flex-1 overflow-auto shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
              {terminalText}
              <span className="animate-pulse inline-block w-2 h-4 bg-cyan-500 ml-1 translate-y-1"></span>
            </div>
            
            <div className="p-4 bg-zinc-900/50 border-t border-zinc-800 grid grid-cols-2 gap-4">
               <img src={project.images[2]?.url} alt="Vectors" className="w-full h-auto rounded border border-zinc-700 opacity-60 hover:opacity-100 transition-opacity" />
               <div className="text-xs font-mono text-zinc-500 flex flex-col justify-center gap-2">
                  <div>[INFO] PGVector Indexed: 142,030 chunks</div>
                  <div>[INFO] Dimensions: 1536</div>
               </div>
            </div>
          </div>

          {/* Right: Web UI */}
          <div 
            className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col h-[500px] md:h-[600px] shadow-[0_0_80px_rgba(6,182,212,0.15)] transition-transform duration-300"
            style={{ transform: 'translateZ(80px)' }}
          >
            <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
              <Search className="w-4 h-4 text-zinc-500" />
              <span className="text-xs font-mono text-zinc-400">enterprise-rag-app.vercel.app</span>
            </div>
            <div className="flex-1 relative overflow-hidden bg-black group">
               <img src={project.images[0]?.url} alt="RAG Interface" className="absolute inset-0 w-full h-full object-cover object-left-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
               {/* Glass reflection */}
               <div 
                 className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none transition-transform duration-300"
                 style={{ transform: `translateX(${(mousePos.x - 0.5) * 100}%)` }}
               ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Deep Dive */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {project.features.map((f, i) => (
          <div key={i} className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition-colors group cursor-default">
            <Network className="w-6 h-6 text-cyan-500 mb-4 group-hover:rotate-12 transition-transform" />
            <p className="text-sm text-zinc-300 leading-relaxed group-hover:text-white transition-colors">{f}</p>
          </div>
        ))}
      </section>

    </article>
  );
}
