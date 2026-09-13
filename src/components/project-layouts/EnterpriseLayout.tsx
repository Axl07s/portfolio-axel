import { useState, useRef } from 'react';
import type { PersonalProject } from '../../data/personalProjectsData';
import { Shield, Activity, AlertTriangle, Zap, Server } from 'lucide-react';

export function EnterpriseLayout({ project }: { project: PersonalProject }) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const rotateX = (0.5 - mousePos.y) * 20;
  const rotateY = (mousePos.x - 0.5) * 20;

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-hidden">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-8 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-8 animate-pulse">
          <Shield className="w-3.5 h-3.5" />
          <span>ZERO-TRUST KERNEL EDR</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
          {project.title}
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          {project.descriptionES}
        </p>
      </header>

      {/* 3D Threat Isolation Hologram */}
      <section 
        className="relative py-12 w-full flex items-center justify-center z-20 cursor-crosshair h-[500px] md:h-[700px]"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        style={{ perspective: '2000px' }}
      >
         {/* Background Grid */}
         <div 
           className="absolute inset-0 opacity-20"
           style={{ 
             backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)',
             backgroundSize: '50px 50px',
             transform: `translate(${(mousePos.x - 0.5) * 50}px, ${(mousePos.y - 0.5) * 50}px)`
           }}
         ></div>

         <div 
           className="relative w-full max-w-5xl h-full transition-transform duration-300 ease-out flex items-center justify-center"
           style={{ 
             transform: `rotateX(${50 + rotateX}deg) rotateZ(${-30 + rotateY}deg)`,
             transformStyle: 'preserve-3d' 
           }}
         >
            {/* The Base Plate (OS Kernel) */}
            <div 
              className="absolute w-[600px] h-[600px] bg-slate-900/50 border-4 border-emerald-500/20 rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.1)] flex items-center justify-center"
              style={{ transform: `translateZ(-150px)` }}
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
              style={{ transform: `translateZ(50px) translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px)` }}
            >
               <AlertTriangle className="w-10 h-10 text-red-500 mb-2 animate-pulse" />
               <span className="text-red-500 font-mono text-[10px] font-bold">RANSOM.EXE</span>
            </div>

            {/* Force Field Cylinder */}
            <div 
              className="absolute w-52 h-52 border-4 border-dashed border-emerald-500 rounded-full animate-spin-slow opacity-80 transition-transform duration-700"
              style={{ transform: `translateZ(50px)` }}
            ></div>

            {/* Security Analyst Dashboard (Floating UI) */}
            <div 
               className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 bg-slate-950 border-2 border-emerald-500/30 rounded-2xl p-5 shadow-2xl transition-transform duration-500"
               style={{ transform: `translateZ(250px) translate(${(mousePos.x - 0.5) * 50}px, ${(mousePos.y - 0.5) * 50}px)` }}
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
                 <div className="flex justify-between"><span className="text-slate-500">Process:</span> <span className="text-red-400">C:\Temp\malware.exe</span></div>
                 <div className="flex justify-between"><span className="text-slate-500">Entropy:</span> <span className="text-red-400">7.99 (High)</span></div>
                 <div className="flex justify-between"><span className="text-slate-500">Action:</span> <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">BLOCKED</span></div>
               </div>
            </div>

            {/* Metrics Widget */}
            <div 
               className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-56 bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl transition-transform duration-500"
               style={{ transform: `translateZ(200px) translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)` }}
            >
               <div className="flex flex-col gap-1">
                 <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Kernel Latency</span>
                 <span className="text-3xl font-light text-white">{"< 12ms"}</span>
               </div>
               <div className="h-px w-full bg-slate-800 my-3"></div>
               <div className="flex flex-col gap-1">
                 <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">CPU Overhead</span>
                 <span className="text-xl font-light text-white">0.8%</span>
               </div>
            </div>

         </div>
      </section>

      {/* The Actual Product / Application UI */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-12 z-20">
        <div className="text-center mb-10">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">Centro de Control EDR</h2>
          <p className="text-2xl font-light text-slate-300">Interfaz principal desarrollada para el Centro de Operaciones de Seguridad (SOC).</p>
        </div>
        
        <div className="bg-[#0f111a] border border-slate-800 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative group">
          {/* Windows 11 Header */}
          <div className="h-10 bg-[#090a0f] flex items-center px-4 border-b border-slate-800">
             <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
             </div>
             <div className="flex-1 text-center font-mono text-xs text-slate-600 flex items-center justify-center gap-2">
                <Shield className="w-3 h-3" />
                SuiteSeguridad.exe
             </div>
          </div>
          
          <img 
            src={project.image} 
            alt="SuiteSeguridad Interface" 
            className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
          />
          
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none"></div>
        </div>
      </section>

      {/* Marketing B2B - Enterprise Security Value */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Protección Proactiva a Nivel Kernel</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Los antivirus tradicionales dependen de firmas conocidas. SuiteSeguridad EDR intercepta el comportamiento malicioso directamente en el Kernel de Windows usando ETW (Event Tracing for Windows), bloqueando amenazas zero-day antes de que ejecuten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mitigación de Ransomware</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Detecta operaciones masivas de cifrado de archivos (alta entropía de disco) y suspende el proceso origen en menos de 12 milisegundos, salvando la información crítica.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Bajo Impacto Operativo</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Motor C++ hiper-optimizado. Intercepta millones de eventos de sistema por segundo con un overhead de CPU inferior al 1%, invisible para el usuario final.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Análisis Python AI</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              La telemetría filtrada se envía a un motor asíncrono en Python que utiliza heurísticas avanzadas y reglas YARA para clasificación profunda de binarios.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-800/50">
          <h4 className="text-lg font-semibold text-white mb-6">Stack Tecnológico y Arquitectura:</h4>
          <div className="flex flex-wrap gap-3">
             {project.tech.map((t, i) => (
                <span key={i} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 text-sm font-mono uppercase tracking-wider">{t}</span>
             ))}
          </div>
        </div>
      </section>

    </article>
  );
}
