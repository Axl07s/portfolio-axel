import { useState, useRef, useEffect } from 'react';
import type { Project } from '../../data/portfolioData';
import { Mic, Activity, Network } from 'lucide-react';
import { VirtualCanvas } from '../VirtualCanvas';
import { ScrollAffordance } from '../ScrollAffordance';
import { useLanguage } from '../../context/LanguageContext';

const COMMAND_SECTIONS = [
  { id: 'command-interactive', label: 'Interfaz' },
  { id: 'command-features', label: 'Funciones' },
];

export function CommandCenterLayout({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [bootSequence, setBootSequence] = useState(true);
  const [bootText, setBootText] = useState('');
  
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let startTime = Date.now();
    
    const animate = () => {
      if (window.innerWidth < 1024) {
        const elapsed = Date.now() - startTime;
        const speed = 0.0008;
        setMousePos({
          x: 0.5 + Math.sin(elapsed * speed) * 0.2,
          y: 0.5 + Math.cos(elapsed * speed * 1.2) * 0.2
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  // Boot sequence logic
  useEffect(() => {
    const lines = lang === 'es' ? [
      lang === 'es' ? '[SYS] Inicializando Núcleo Neural...' : '[SYS] Initializing Neural Core...',
      '[NET] Estableciendo WebSocket seguro a la API de OpenAI...',
      '[AUTH] Protocolo zero-trust confirmado.',
      '[MEM] Cargando Base de Datos Vectorial RAG (Pinecone).',
      '[UI] Compilando Interfaz Espacial...',
      lang === 'es' ? 'SISTEMA EN LÍNEA.' : 'SYSTEM ONLINE.'
    ] : [
      '[SYS] Initializing Neural Kernel...',
      '[NET] Establishing secure WebSocket to OpenAI API...',
      '[AUTH] Zero-trust protocol confirmed.',
      '[MEM] Loading RAG Vector Database (Pinecone).',
      '[UI] Compiling Spatial Interface...',
      'SYSTEM ONLINE.'
    ];
    
    let currentLine = 0;
    let currentChar = 0;
    let text = '';

    const typeWriter = setInterval(() => {
      if (currentLine >= lines.length) {
        clearInterval(typeWriter);
        setTimeout(() => setBootSequence(false), 800);
        return;
      }
      
      if (currentChar < lines[currentLine].length) {
        text += lines[currentLine][currentChar];
        setBootText(text);
        currentChar++;
      } else {
        text += '\n';
        currentLine++;
        currentChar = 0;
      }
    }, 20); // very fast typing

    return () => clearInterval(typeWriter);
  }, [lang]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || bootSequence) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const rotateX = (0.5 - mousePos.y) * 20;
  const rotateY = (mousePos.x - 0.5) * 20;

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans overflow-hidden relative">
      <ScrollAffordance sections={COMMAND_SECTIONS} accentColor="sky" />

      {/* BOOT SEQUENCE OVERLAY */}
      <div 
        className={`fixed inset-0 z-50 bg-black flex flex-col p-6 pt-32 md:p-12 md:pt-32 transition-all duration-1000 ease-in-out ${
          bootSequence ? 'opacity-100 pointer-events-auto' : 'opacity-0 scale-110 pointer-events-none'
        }`}
      >
        <div className="font-mono text-green-500 text-sm md:text-lg whitespace-pre-wrap">
          {bootText}
          <span className="animate-pulse">_</span>
        </div>
      </div>

      {/* BACKGROUND NODE GRAPH (CSS Fake) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(56, 189, 248, 0.15) 0%, transparent 40%),
            linear-gradient(rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 1))
          `
        }}
      ></div>

      {/* ============================================================ */}
      {/* DESKTOP: Interactive 3D Space (lg+) */}
      {/* ============================================================ */}

        {/* ========================================================== */}
        {/* DESKTOP 3D HOLOGRAM */}
        {/* ========================================================== */}
        <section id="command-interactive"
          className="relative flex z-10 w-full overflow-hidden"
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
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
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
                         height: `${Math.max(10, Math.random() * 100)}%`,
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


      <section id="command-features" className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1 border-l-2 border-blue-500/30 pl-6">
              <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-md text-xs text-blue-300 font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {project.features.map((feature, i) => (
                 <div key={i} className="bg-slate-900/40 border border-slate-800/50 p-5 rounded-xl flex items-start gap-4 hover:border-blue-500/30 transition-colors">
                   <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                     <Network className="w-4 h-4 text-blue-400" />
                   </div>
                   <p className="text-sm text-slate-300 leading-relaxed">{feature}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </article>
  );
}




