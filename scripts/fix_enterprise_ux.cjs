const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');

if (!content.includes('DeviceMockup')) {
  content = content.replace("import { VirtualCanvas }", "import { VirtualCanvas } from '../VirtualCanvas';\nimport { DeviceMockup }");
}

let sectionStart = content.indexOf('<section id="enterprise-hologram"');
let sectionEnd = content.indexOf('</section>', sectionStart) + 10;
let oldSection = content.substring(sectionStart, sectionEnd);

// Replace the section with a wrapper that switches between 3D Desktop and DeviceMockup Mobile
let newSection = `
        {/* ========================================================== */}
        {/* MOBILE SHOWCASE: Native Desktop Mockup instead of 3D Canvas */}
        {/* ========================================================== */}
        <section className="lg:hidden relative z-20 py-12 px-4 w-full">
           <div className="mb-8">
             <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Security Dashboard</h3>
             <p className="text-zinc-400 text-sm">Monitoreo en tiempo real de amenazas, ingestión ETW y reglas YARA activas.</p>
           </div>
           <DeviceMockup type="mac" imgSrc={project.image || (project.images && project.images[0]?.url)} url="suitesecurity.local/admin" className="mb-8" />
        </section>

        {/* ========================================================== */}
        {/* DESKTOP 3D HOLOGRAM */}
        {/* ========================================================== */}
        <section id="enterprise-hologram"
          className="hidden lg:flex relative z-20 cursor-crosshair overflow-hidden w-full"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        >
           <VirtualCanvas
             canvasWidth="1000px"
             desktopHeight="700px"
             className="py-12"
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
                   className="absolute top-[10%] left-[10%] w-72 bg-slate-950/90 backdrop-blur-md border-2 border-emerald-500/30 rounded-2xl p-5 shadow-2xl transition-transform duration-500"
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
                   className="absolute bottom-[10%] right-[10%] w-56 bg-slate-950/90 backdrop-blur-md border-2 border-slate-800 rounded-2xl p-5 shadow-2xl transition-transform duration-500"
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
        </section>
`;

content = content.replace(oldSection, newSection);
fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
