const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', 'utf8');

if (!content.includes('DeviceMockup')) {
  content = content.replace("import { VirtualCanvas }", "import { VirtualCanvas } from '../VirtualCanvas';\nimport { DeviceMockup }");
}

let sectionStart = content.indexOf('<section id="graph-blueprint"');
let sectionEnd = content.indexOf('</section>', sectionStart) + 10;
let oldSection = content.substring(sectionStart, sectionEnd);

let newSection = `
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
                 transform: \`rotateX(\${rotateX + (isHovered ? 25 : 0)}deg) rotateY(\${rotateY + (isHovered ? -15 : 0)}deg) rotateZ(\${isHovered ? 5 : 0}deg)\`,
                 transformStyle: 'preserve-3d' 
               }}
             >
                {/* Background Wireframe Layer */}
                <div 
                  className={\`absolute inset-[-10%] border-2 border-blue-500/20 bg-[linear-gradient(to_right,#1e3a8a22_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a22_1px,transparent_1px)] bg-[size:40px_40px] rounded-[40px] flex items-center justify-center transition-all duration-700 ease-out \${isHovered ? 'opacity-100' : 'opacity-0'}\`}
                  style={{ transform: \`translateZ(\${isHovered ? '-250px' : '0px'})\` }}
                >
                   <div className="font-mono text-6xl font-black text-blue-500/10 tracking-tighter uppercase border-8 border-blue-500/10 p-12 rounded-[3rem]">
                     RAG VECTOR ENGINE
                   </div>
                </div>
    
                {/* The Bento Grid (Front Layer) */}
                <div 
                  className="w-full h-full grid grid-cols-4 grid-rows-3 gap-6 relative z-10 transition-transform duration-700"
                  style={{ transform: \`translateZ(\${isHovered ? '100px' : '0px'})\` }}
                >
                   {/* Main Stat Tile */}
                   <div 
                     className="col-span-2 row-span-2 bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-transform duration-700"
                     style={{ transform: \`translateZ(\${isHovered ? '50px' : '0px'})\` }}
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
                     style={{ transform: \`translateZ(\${isHovered ? '120px' : '0px'})\` }}
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
                     style={{ transform: \`translateZ(\${isHovered ? '80px' : '0px'})\` }}
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
                     style={{ transform: \`translateZ(\${isHovered ? '180px' : '0px'})\` }}
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
                     style={{ transform: \`translateZ(\${isHovered ? '200px' : '0px'})\` }}
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
`;

content = content.replace(oldSection, newSection);
fs.writeFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', content);
