import { useState, useRef, useEffect } from 'react';
import type { Project } from '../../data/portfolioData';
import { Search, ArrowRight, Binary, Cpu, ShieldCheck, Zap, LineChart, Database } from 'lucide-react';
import { VirtualCanvas } from '../VirtualCanvas';
import { DeviceMockup } from '../DeviceMockup';
import { ScrollAffordance } from '../ScrollAffordance';
import { useLanguage } from '../../context/LanguageContext';

const GRAPH_SECTIONS = [
  { id: 'graph-hero', label: 'Intro' },
  { id: 'graph-blueprint', label: 'Arquitectura' },
  { id: 'graph-value', label: 'Valor B2B' },
];

export function GraphTerminalLayout({ project }: { project: Project }) {
  const { lang } = useLanguage();
  
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let startTime = Date.now();
    let cycleCounter = 0;
    
    const animate = () => {
      if (window.innerWidth < 1024) {
        const elapsed = Date.now() - startTime;
        const speed = 0.001;
        setMousePos({
          x: 0.5 + Math.sin(elapsed * speed) * 0.25,
          y: 0.5 + Math.cos(elapsed * speed * 0.7) * 0.25
        });
        
        // Auto cycle the "exploded" hover state on mobile every 4 seconds
        cycleCounter++;
        if (cycleCounter % 400 === 0) {
            setIsHovered(prev => !prev);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);


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

      {/* ============================================================ */}
      {/* DESKTOP: Exploding 3D Blueprint Bento (lg+) */}
      {/* ============================================================ */}
      
        {/* ========================================================== */}
        {/* MOBILE SHOWCASE: Native Desktop Mockup instead of 3D Canvas */}
        {/* ========================================================== */}
        <section className="lg:hidden relative z-20 py-12 px-4 w-full">
           <div className="mb-8 border-l-2 border-blue-500/30 pl-4">
             <h3 className="text-xl font-bold text-white mb-2 tracking-tight">RAG Vector Engine</h3>
             <p className="text-zinc-400 text-sm">Pipeline de ingesta de documentos e interfaz de terminal de consultas.</p>
           </div>
           <DeviceMockup type="terminal" imgSrc={project.images[0]?.url} className="mb-8 shadow-[0_0_50px_rgba(59,130,246,0.15)]" />
           <DeviceMockup type="mac" imgSrc={project.images[1]?.url} url="rag-engine.local/pipeline" className="mb-8 opacity-80" />
        </section>

        {/* ========================================================== */}
        {/* DESKTOP 3D HOLOGRAM */}
        {/* ========================================================== */}
        <section id="graph-blueprint"
          className="hidden lg:flex relative z-20 cursor-crosshair overflow-hidden w-full"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePos({ x: 0.5, y: 0.5 });
          }}
        >
           <VirtualCanvas
             canvasWidth="1000px"
             desktopHeight="auto"
             className="py-24"
           >
             <div 
               className="relative w-full aspect-video transition-transform duration-700 ease-out flex items-center justify-center"
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
                  className="w-full h-full grid grid-cols-4 grid-rows-3 gap-6 relative z-10 transition-transform duration-700"
                  style={{ transform: `translateZ(${isHovered ? '100px' : '0px'})` }}
                >
                   {/* Main Stat Tile */}
                   <div 
                     className="col-span-2 row-span-2 bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-transform duration-700"
                     style={{ transform: `translateZ(${isHovered ? '50px' : '0px'})` }}
                   >
                     <div className="flex items-center gap-3 mb-6">
                       <Database className="w-6 h-6 text-blue-400" />
                       <span className="font-mono text-blue-400 tracking-widest uppercase">Knowledge Base</span>
                     </div>
                     <div>
                       <div className="text-7xl font-black text-white tracking-tighter mb-2">2.4M</div>
                       <div className="text-blue-500/80 font-mono text-sm uppercase">Vector Embeddings</div>
                     </div>
                   </div>
    
                   {/* Secondary Tile */}
                   <div 
                     className="col-span-2 row-span-1 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex items-center justify-between transition-transform duration-700"
                     style={{ transform: `translateZ(${isHovered ? '120px' : '0px'})` }}
                   >
                     <div>
                       <div className="text-zinc-500 text-sm font-mono mb-1">Avg Retrieval Latency</div>
                       <div className="text-3xl font-bold text-white"><span className="text-emerald-400">~</span>240ms</div>
                     </div>
                     <Cpu className="w-10 h-10 text-zinc-700" />
                   </div>
    
                   {/* Pipeline Tile */}
                   <div 
                     className="col-span-2 row-span-1 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden transition-transform duration-700"
                     style={{ transform: `translateZ(${isHovered ? '80px' : '0px'})` }}
                   >
                     <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 blur-3xl"></div>
                     <div className="flex items-center gap-2 mb-4">
                       <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                       <span className="text-xs font-mono text-zinc-400 uppercase">Ingestion Pipeline</span>
                     </div>
                     <div className="flex gap-2">
                       <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono text-zinc-500">PDFs</span>
                       <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono text-zinc-500">Notion</span>
                       <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono text-zinc-500">Confluence</span>
                     </div>
                   </div>
    
                   {/* Wide Terminal Tile */}
                   <div 
                     className="col-span-3 row-span-1 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-6 flex items-center transition-transform duration-700"
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
                     className="col-span-1 row-span-1 bg-blue-600 rounded-3xl p-6 flex flex-col justify-between hover:bg-blue-500 transition-colors cursor-pointer"
                     style={{ transform: `translateZ(${isHovered ? '200px' : '0px'})` }}
                   >
                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between h-full group">
                        <span className="font-bold text-white uppercase tracking-widest">Deploy<br/>System</span>
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                     </a>
                   </div>
                </div>
             </div>
           </VirtualCanvas>
        </section>


      <section id="graph-value" className="max-w-5xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{lang === 'es' ? 'Arquitectura RAG Determinista y Anti-Alucinación' : 'Deterministic Anti-Hallucination RAG Architecture'}</h2>
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
              {lang === 'es' ? 'Cada respuesta generada cita explícitamente el documento fuente y fragmento vectorial original con score de relevancia. Umbrales de similitud estrictos fuerzan abstención determinista si la evidencia no supera el nivel de confianza.' : 'Each generated response explicitly cites the source document and original vector chunk with relevance score. Strict similarity thresholds force deterministic abstention if evidence does not meet confidence levels.'}
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{lang === 'es' ? 'Pipeline de Ingesta Asíncrona' : 'Asynchronous Ingestion Pipeline'}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {lang === 'es' ? 'Extracción asíncrona de texto en FastAPI para PDF, DOCX y Markdown. Los documentos se segmentan en ventanas de chunks contextuales, se vectorizan con embeddings de alta dimensionalidad y se indexan en pgvector.' : 'Asynchronous text extraction in FastAPI for PDF, DOCX, and Markdown. Documents are segmented into contextual chunk windows, vectorized with high-dimensional embeddings, and indexed in pgvector.'}
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <LineChart className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{lang === 'es' ? 'Búsqueda Híbrida & Reranking' : 'Hybrid Search & Reranking'}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {lang === 'es' ? 'Combina búsqueda densa por embeddings en pgvector con búsqueda por palabras clave BM25. Un pipeline de reranking contextual reordena los fragmentos más pertinentes en menos de 240ms.' : 'Combines dense embedding search in pgvector with BM25 keyword search. A contextual reranking pipeline reorders the most pertinent fragments in less than 240ms.'}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-zinc-800/50">
          <h4 className="text-lg font-semibold text-white mb-6">{lang === 'es' ? 'Capacidades Técnicas Implementadas:' : 'Implemented Technical Capabilities:'}</h4>
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


