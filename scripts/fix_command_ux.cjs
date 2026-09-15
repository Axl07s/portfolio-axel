const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CommandCenterLayout.tsx', 'utf8');

if (!content.includes('DeviceMockup')) {
  content = content.replace("import { VirtualCanvas }", "import { VirtualCanvas } from '../VirtualCanvas';\nimport { DeviceMockup }");
}

let sectionStart = content.indexOf('<section id="command-interactive"');
let sectionEnd = content.indexOf('</section>', sectionStart) + 10;
let oldSection = content.substring(sectionStart, sectionEnd);

let newSection = `
        {/* ========================================================== */}
        {/* MOBILE SHOWCASE: Native Desktop Mockup instead of 3D Canvas */}
        {/* ========================================================== */}
        <section className="lg:hidden relative z-20 py-12 px-4 w-full">
           <div className="mb-8 border-l-2 border-blue-500/30 pl-4">
             <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Chief Brain HUD</h3>
             <p className="text-zinc-400 text-sm">Dashboard de comando central con topología de agentes e interfaz de voz.</p>
           </div>
           <DeviceMockup type="mac" imgSrc={project.images[0]?.url} url="jarvis.local/dashboard" className="mb-8" />
        </section>

        {/* ========================================================== */}
        {/* DESKTOP 3D HOLOGRAM */}
        {/* ========================================================== */}
        <section id="command-interactive"
          className="hidden lg:flex relative z-10 w-full overflow-hidden"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        >
          <VirtualCanvas
             canvasWidth="1200px"
             desktopHeight="100vh"
          >
            {/* Holographic 3D Container */}
            <div className="relative w-full aspect-[21/9] flex items-center justify-center transition-transform duration-300 ease-out"
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
                className="absolute left-[5%] top-[20%] w-[250px] bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-xl p-4 shadow-2xl"
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
                className="absolute right-[5%] bottom-[15%] w-[220px] bg-slate-900/80 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-4 shadow-2xl"
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
        </section>
`;

content = content.replace(oldSection, newSection);
fs.writeFileSync('src/components/project-layouts/CommandCenterLayout.tsx', content);
