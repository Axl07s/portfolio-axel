const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', 'utf8');

// Find the section and replace it with the new layout-safe scaling wrapper
let sectionStart = content.indexOf('<section id="graph-blueprint"');
let sectionEnd = content.indexOf('</section>', sectionStart) + 10;

let oldSection = content.substring(sectionStart, sectionEnd);

// We need to rewrite the section to use the absolute-centered scaling trick for mobile
let newSection = `<section id="graph-blueprint"
          className="flex relative py-0 lg:py-24 w-full h-[400px] lg:h-auto items-center justify-center z-20 cursor-crosshair overflow-hidden"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePos({ x: 0.5, y: 0.5 });
          }}
          style={{ perspective: '2000px' }}
        >
           {/* SCALING WRAPPER FOR MOBILE: Keeps DOM footprint small while rendering 1000px 3D scene */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] lg:static lg:translate-x-0 lg:translate-y-0 lg:w-full lg:max-w-5xl aspect-video scale-[0.35] sm:scale-[0.5] lg:scale-100 transition-transform duration-700 ease-out flex items-center justify-center"
             style={{ 
               transform: window.innerWidth < 1024 
                 ? \`translate(-50%, -50%) scale(\${window.innerWidth < 640 ? 0.35 : 0.5}) rotateX(\${rotateX + (isHovered ? 25 : 0)}deg) rotateY(\${rotateY + (isHovered ? -15 : 0)}deg) rotateZ(\${isHovered ? 5 : 0}deg)\`
                 : \`rotateX(\${rotateX + (isHovered ? 25 : 0)}deg) rotateY(\${rotateY + (isHovered ? -15 : 0)}deg) rotateZ(\${isHovered ? 5 : 0}deg)\`,
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
        </section>`;

content = content.replace(oldSection, newSection);

// To avoid SSR issues with `window.innerWidth`, it's safer to rely ONLY on Tailwind classes for the translation/scaling.
// Let's modify the transform string above so we don't use `window.innerWidth` during initial render (which causes hydration mismatch).

content = content.replace(
`               transform: window.innerWidth < 1024 
                 ? \\\`translate(-50%, -50%) scale(\\\${window.innerWidth < 640 ? 0.35 : 0.5}) rotateX(\\\${rotateX + (isHovered ? 25 : 0)}deg) rotateY(\\\${rotateY + (isHovered ? -15 : 0)}deg) rotateZ(\\\${isHovered ? 5 : 0}deg)\\\`
                 : \\\`rotateX(\\\${rotateX + (isHovered ? 25 : 0)}deg) rotateY(\\\${rotateY + (isHovered ? -15 : 0)}deg) rotateZ(\\\${isHovered ? 5 : 0}deg)\\\`,`,
`               transform: \\\`rotateX(\\\${rotateX + (isHovered ? 25 : 0)}deg) rotateY(\\\${rotateY + (isHovered ? -15 : 0)}deg) rotateZ(\\\${isHovered ? 5 : 0}deg)\\\`,`
);

fs.writeFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', content);
console.log('GraphTerminalLayout rewritten');
