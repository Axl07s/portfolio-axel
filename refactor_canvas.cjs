const fs = require('fs');

function refactorGraphTerminal() {
  let content = fs.readFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', 'utf8');
  
  if (!content.includes('VirtualCanvas')) {
    content = content.replace("import { ScrollAffordance }", "import { VirtualCanvas } from '../VirtualCanvas';\nimport { ScrollAffordance }");
  }

  // The wrapper div we manually created:
  // <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] lg:static lg:translate-x-0 lg:translate-y-0 lg:w-full lg:max-w-5xl aspect-video scale-[0.35] sm:scale-[0.5] lg:scale-100 transition-transform duration-700 ease-out flex items-center justify-center" ...>
  // We will replace the whole section to use VirtualCanvas cleanly
  
  let sectionStart = content.indexOf('<section id="graph-blueprint"');
  let sectionEnd = content.indexOf('</section>', sectionStart) + 10;
  
  let newSection = `<section id="graph-blueprint"
          className="relative z-20 cursor-crosshair overflow-hidden w-full"
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
             mobileHeight="400px"
             desktopHeight="auto"
             mobileScale="scale-[0.35]"
             smScale="sm:scale-[0.5]"
             className="py-0 lg:py-24"
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
        </section>`;
        
  content = content.substring(0, sectionStart) + newSection + content.substring(sectionEnd);
  fs.writeFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', content);
}

function refactorJarvis() {
  let content = fs.readFileSync('src/components/project-layouts/CommandCenterLayout.tsx', 'utf8');
  if (!content.includes('VirtualCanvas')) {
    content = content.replace("import { ScrollAffordance }", "import { VirtualCanvas } from '../VirtualCanvas';\nimport { ScrollAffordance }");
  }
  
  let sectionStart = content.indexOf('<section id="command-interactive"');
  let sectionEnd = content.indexOf('</section>', sectionStart) + 10;
  
  let newSection = `<section id="command-interactive"
          className="relative z-10 w-full overflow-hidden"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        >
          <VirtualCanvas
             canvasWidth="1200px"
             mobileHeight="400px"
             desktopHeight="100vh"
             mobileScale="scale-[0.32]"
             smScale="sm:scale-[0.45]"
          >
            {/* Holographic 3D Container */}
            <div className="relative w-full aspect-[16/10] md:aspect-[21/9] flex items-center justify-center transition-transform duration-300 ease-out"
              style={{ 
                transform: \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* LAYER 1: Background Blur / Glow */}
              <div 
                className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"
                style={{ transform: 'translateZ(-200px) scale(0.8)' }}
              ></div>
    
              {/* LAYER 2: The Core UI (Main Dashboard Image) */}
              <div 
                className="absolute w-[60%] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(56,189,248,0.2)] bg-black/40 backdrop-blur-xl"
                style={{ transform: 'translateZ(0px)' }}
              >
                 <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between backdrop-blur-md">
                   <div className="text-[10px] font-mono text-blue-400 tracking-widest uppercase">Jarvis Kernel v2.4</div>
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                     <div className="w-2 h-2 rounded-full bg-amber-500/80"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                   </div>
                 </div>
                 <img src={project.images[0]?.url} alt="Main Interface" className="w-full h-full object-cover opacity-90 mix-blend-screen pt-8" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none"></div>
              </div>
    
              {/* LAYER 3: Left Floating Widget (Telemetry) */}
              <div 
                className="absolute left-[5%] top-[20%] w-[250px] bg-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-xl p-4 shadow-2xl"
                style={{ transform: 'translateZ(80px) rotateY(15deg)' }}
              >
                 <div className="flex items-center gap-2 mb-4">
                   <Activity className="w-4 h-4 text-blue-400" />
                   <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Live Telemetry</span>
                 </div>
                 <div className="space-y-3">
                   <div>
                     <div className="flex justify-between text-[10px] text-slate-400 mb-1"><span>LLM Latency</span><span>42ms</span></div>
                     <div className="w-full h-1 bg-slate-800 rounded-full"><div className="w-1/3 h-full bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div></div>
                   </div>
                   <div>
                     <div className="flex justify-between text-[10px] text-slate-400 mb-1"><span>Context Window</span><span>14k / 128k</span></div>
                     <div className="w-full h-1 bg-slate-800 rounded-full"><div className="w-[12%] h-full bg-emerald-500 rounded-full"></div></div>
                   </div>
                 </div>
                 <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="text-[10px] text-slate-500 leading-tight block">
                      Connected to OpenAI gpt-4-turbo endpoint via secure tunnel.
                    </span>
                 </div>
              </div>
    
              {/* LAYER 4: Right Floating Widget (Voice / Audio) */}
              <div 
                className="absolute right-[5%] bottom-[15%] w-[220px] bg-slate-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-4 shadow-2xl"
                style={{ transform: 'translateZ(120px) rotateY(-15deg)' }}
              >
                 <div className="flex items-center gap-2 mb-3">
                   <Mic className="w-4 h-4 text-emerald-400" />
                   <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Voice Synth</span>
                 </div>
                 <div className="h-16 flex items-center justify-center gap-1 opacity-80">
                   {[...Array(12)].map((_, i) => (
                     <div 
                       key={i} 
                       className="w-2 bg-emerald-400 rounded-full"
                       style={{ 
                         height: \`\${Math.max(10, Math.random() * 100)}%\`,
                         transition: 'height 0.2s ease'
                       }}
                     ></div>
                   ))}
                 </div>
                 <div className="text-center mt-2 text-[9px] text-emerald-500/70 uppercase">ElevenLabs Neural Voice</div>
              </div>
    
              {/* LAYER 5: Foreground Holographic Grid */}
              <div 
                className="absolute inset-[-20%] border border-white/5 rounded-[40px] pointer-events-none"
                style={{ 
                  transform: 'translateZ(180px)',
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)',
                  backgroundSize: '100px 100px'
                }}
              >
                {/* Corner Markers */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/50"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/50"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50"></div>
              </div>
    
            </div>
          </VirtualCanvas>
        </section>`;
        
  content = content.substring(0, sectionStart) + newSection + content.substring(sectionEnd);
  fs.writeFileSync('src/components/project-layouts/CommandCenterLayout.tsx', content);
}

function refactorEnterprise() {
  let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');
  if (!content.includes('VirtualCanvas')) {
    content = content.replace("import { ScrollAffordance }", "import { VirtualCanvas } from '../VirtualCanvas';\nimport { ScrollAffordance }");
  }
  
  let sectionStart = content.indexOf('<section id="enterprise-hologram"');
  let sectionEnd = content.indexOf('</section>', sectionStart) + 10;
  
  let newSection = `<section id="enterprise-hologram"
          className="relative z-20 cursor-crosshair overflow-hidden w-full"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        >
           <VirtualCanvas
             canvasWidth="1000px"
             mobileHeight="450px"
             desktopHeight="700px"
             mobileScale="scale-[0.4]"
             smScale="sm:scale-[0.6]"
             className="py-0 lg:py-12"
           >
             <div 
               className="relative w-full h-[800px] lg:h-full flex items-center justify-center transition-transform duration-300 ease-out"
               style={{ 
                 transform: \`rotateX(\${50 + rotateX}deg) rotateZ(\${-30 + rotateY}deg)\`,
                 transformStyle: 'preserve-3d' 
               }}
             >
                {/* Background Grid */}
                <div 
                  className="absolute inset-[-50%] opacity-20"
                  style={{ 
                    backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    transform: \`translate(\${(mousePos.x - 0.5) * 50}px, \${(mousePos.y - 0.5) * 50}px)\`
                  }}
                ></div>
  
                {/* The Base Plate (OS Kernel) */}
                <div 
                  className="absolute w-[600px] h-[600px] bg-slate-900/50 border-4 border-emerald-500/20 rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.1)] flex items-center justify-center"
                  style={{ transform: \`translateZ(-150px)\` }}
                >
                   <div className="w-[450px] h-[450px] border-2 border-emerald-500/10 rounded-full animate-spin-slow flex items-center justify-center">
                     <div className="w-[300px] h-[300px] border border-emerald-500/20 rounded-full flex items-center justify-center">
                       <div className="w-[150px] h-[150px] border border-emerald-500/30 rounded-full"></div>
                     </div>
                   </div>
                   
                   <div className="absolute bottom-10 left-10 text-emerald-500/30 font-mono text-xl font-bold tracking-widest uppercase">
                     Ring 0 / Kernel Space
                   </div>
                </div>
    
                {/* The Isolated Threat (Ransomware) */}
                <div 
                  className="absolute w-28 h-28 bg-red-950/80 border-2 border-red-500 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.5)] transition-transform duration-700"
                  style={{ transform: \`translateZ(50px) translate(\${(mousePos.x - 0.5) * -30}px, \${(mousePos.y - 0.5) * -30}px)\` }}
                >
                   <AlertTriangle className="w-10 h-10 text-red-500 mb-2 animate-pulse" />
                   <span className="text-red-500 font-mono text-[10px] font-bold">RANSOM.EXE</span>
                </div>
    
                {/* Force Field Cylinder */}
                <div 
                  className="absolute w-52 h-52 border-4 border-dashed border-emerald-500 rounded-full animate-spin-slow opacity-80 transition-transform duration-700"
                  style={{ transform: \`translateZ(50px)\` }}
                ></div>
    
                {/* Security Analyst Dashboard (Floating UI) */}
                <div 
                   className="absolute top-[10%] left-[10%] w-72 bg-slate-950 border-2 border-emerald-500/30 rounded-2xl p-5 shadow-2xl transition-transform duration-500"
                   style={{ transform: \`translateZ(250px) translate(\${(mousePos.x - 0.5) * 50}px, \${(mousePos.y - 0.5) * 50}px) rotateX(-20deg) rotateZ(10deg)\` }}
                >
                   <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-800">
                     <div className="flex items-center gap-2">
                       <Activity className="w-4 h-4 text-emerald-400" />
                       <span className="text-emerald-400 font-mono text-xs font-bold">ETW INGESTION</span>
                     </div>
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   </div>
                   
                   <div className="space-y-2 font-mono text-[10px] text-slate-400">
                     <div className="flex justify-between"><span className="text-slate-500">Event ID:</span> <span className="text-white">4688</span></div>
                     <div className="flex justify-between"><span className="text-slate-500">Process:</span> <span className="text-red-400">C:\\Temp\\malware.exe</span></div>
                     <div className="flex justify-between"><span className="text-slate-500">Entropy:</span> <span className="text-red-400">7.99 (High)</span></div>
                     <div className="flex justify-between"><span className="text-slate-500">Action:</span> <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">BLOCKED</span></div>
                   </div>
                </div>
    
                {/* Metrics Widget */}
                <div 
                   className="absolute bottom-[10%] right-[10%] w-56 bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl transition-transform duration-500"
                   style={{ transform: \`translateZ(200px) translate(\${(mousePos.x - 0.5) * 20}px, \${(mousePos.y - 0.5) * 20}px) rotateX(-10deg) rotateZ(-5deg)\` }}
                >
                   <div className="flex items-center justify-between mb-4">
                     <Shield className="w-5 h-5 text-emerald-500" />
                     <span className="text-white font-bold">100% Secure</span>
                   </div>
                   <div className="h-12 flex items-end gap-1 opacity-50">
                      {[...Array(15)].map((_, i) => (
                        <div key={i} className="flex-1 bg-emerald-500" style={{ height: \`\${Math.max(20, Math.random() * 100)}%\` }}></div>
                      ))}
                   </div>
                </div>
             </div>
           </VirtualCanvas>
        </section>`;
        
  content = content.substring(0, sectionStart) + newSection + content.substring(sectionEnd);
  fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
}

refactorGraphTerminal();
refactorJarvis();
refactorEnterprise();
console.log('All 3 layouts refactored to use VirtualCanvas!');
