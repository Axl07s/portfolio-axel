import { useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { Search, ArrowRight, Binary, Cpu, ShieldCheck, Zap, LineChart, FileText, CheckCircle2 } from 'lucide-react';
import { ScrollAffordance } from '../ScrollAffordance';

const GRAPH_SECTIONS = [
  { id: 'graph-hero', label: 'Intro' },
  { id: 'graph-blueprint', label: 'Arquitectura' },
  { id: 'graph-value', label: 'Valor B2B' },
];

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

  const rotateX = (0.5 - mousePos.y) * 15;
  const rotateY = (mousePos.x - 0.5) * 15;

  return (
    <article className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-blue-500/30 overflow-hidden">
      <ScrollAffordance sections={GRAPH_SECTIONS} accentColor="blue" />
      
      <header id="graph-hero" className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-400 mb-8">
          <Binary className="w-3.5 h-3.5" />
          <span>Enterprise AI Architecture</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          {project.description}
        </p>
      </header>

      {/* The Exploding Blueprint */}
      <section id="graph-blueprint"
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
                 <img src={project.images[0]?.url} alt="Main UI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               </div>

               {/* Metrics Tile 1 */}
               <div 
                 className="col-span-2 md:col-span-1 row-span-1 bg-black border border-blue-900/50 rounded-3xl p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-transform duration-700"
                 style={{ transform: `translateZ(${isHovered ? '140px' : '0px'})` }}
               >
                 <Cpu className="w-6 h-6 text-blue-400" />
                 <div>
                   <div className="text-3xl font-black text-white">{project.metrics[1]?.value || '< 240ms'}</div>
                   <div className="text-xs text-blue-400 uppercase tracking-widest mt-1">Avg Latency</div>
                 </div>
               </div>

               {/* Native UI Tile (Replaces badly cropped image) */}
               <div 
                 className="col-span-2 md:col-span-1 row-span-2 bg-zinc-950 border border-zinc-800 rounded-3xl p-5 flex flex-col transition-transform duration-700"
                 style={{ transform: `translateZ(${isHovered ? '40px' : '0px'})` }}
               >
                 <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                   <h3 className="text-xs font-mono text-zinc-400 uppercase">Vector Index</h3>
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                 </div>
                 
                 <div className="flex-1 space-y-4">
                   {/* Item 1 */}
                   <div className="flex items-start gap-3">
                     <div className="p-2 bg-blue-500/10 rounded-lg shrink-0 mt-0.5">
                       <FileText className="w-3 h-3 text-blue-400" />
                     </div>
                     <div className="min-w-0 flex-1">
                       <p className="text-xs text-zinc-300 font-medium truncate">q3_financials.pdf</p>
                       <div className="flex items-center gap-2 mt-1">
                         <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                         <span className="text-[9px] text-zinc-500 font-mono">1,024 chunks</span>
                       </div>
                     </div>
                   </div>
                   
                   {/* Item 2 */}
                   <div className="flex items-start gap-3">
                     <div className="p-2 bg-amber-500/10 rounded-lg shrink-0 mt-0.5">
                       <FileText className="w-3 h-3 text-amber-400" />
                     </div>
                     <div className="min-w-0 flex-1">
                       <p className="text-xs text-zinc-300 font-medium truncate">security_policy.md</p>
                       <div className="flex items-center gap-2 mt-1">
                         <div className="w-3 h-3 rounded-full border-2 border-amber-500 border-t-transparent animate-spin"></div>
                         <span className="text-[9px] text-zinc-500 font-mono">Processing...</span>
                       </div>
                     </div>
                   </div>

                   {/* Item 3 */}
                   <div className="flex items-start gap-3">
                     <div className="p-2 bg-blue-500/10 rounded-lg shrink-0 mt-0.5">
                       <FileText className="w-3 h-3 text-blue-400" />
                     </div>
                     <div className="min-w-0 flex-1">
                       <p className="text-xs text-zinc-300 font-medium truncate">api_v2_docs.json</p>
                       <div className="flex items-center gap-2 mt-1">
                         <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                         <span className="text-[9px] text-zinc-500 font-mono">4,520 chunks</span>
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-auto pt-4 border-t border-zinc-800">
                   <div className="flex justify-between items-end">
                     <div className="text-[9px] text-zinc-500 uppercase tracking-widest">Total Vectors</div>
                     <div className="text-sm text-blue-400 font-mono">2.4M</div>
                   </div>
                 </div>
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
                    <div className="text-zinc-500 mb-2"># Hybrid retrieval: pgvector cosine similarity + BM25 rerank</div>
                    <div className="text-blue-400">results = await hybrid_retriever.get_relevant_documents(query, k=5)</div>
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

      {/* Marketing & Business Value Section (No Exaggeration, Pure B2B Value) */}
      <section id="graph-value" className="max-w-5xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Arquitectura RAG Determinista y Anti-Alucinación</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Los LLMs generalistas alucinan ante falta de contexto factual. Este motor RAG inyecta la base de conocimiento corporativa directamente en el contexto del modelo con scoring de similitud, garantizando respuestas fundamentadas y trazables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Trazabilidad a Nivel de Chunk</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Cada respuesta generada cita explícitamente el documento fuente y fragmento vectorial original con score de relevancia. Umbrales de similitud estrictos fuerzan abstención determinista si la evidencia no supera el nivel de confianza.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Pipeline de Ingesta Asíncrona</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Extracción asíncrona de texto en FastAPI para PDF, DOCX y Markdown. Los documentos se segmentan en ventanas de chunks contextuales, se vectorizan con embeddings de alta dimensionalidad y se indexan en pgvector.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <LineChart className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Búsqueda Híbrida & Reranking</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Combina búsqueda densa por embeddings en pgvector con búsqueda por palabras clave BM25. Un pipeline de reranking contextual reordena los fragmentos más pertinentes en menos de 240ms.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-zinc-800/50">
          <h4 className="text-lg font-semibold text-white mb-6">Capacidades Técnicas Implementadas:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="text-zinc-300 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
}
