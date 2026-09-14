import { CinematicHero } from './CinematicHero';
import { useState, useRef } from 'react';
import type { PersonalProject } from '../../data/personalProjectsData';
import { Shield, Activity, AlertTriangle, Zap, Server, } from 'lucide-react';
import { ScrollAffordance } from '../ScrollAffordance';
import { useLanguage } from '../../context/LanguageContext';

const ENTERPRISE_SECTIONS = [
  { id: 'enterprise-hero', label: 'Intro' },
  { id: 'enterprise-hologram', label: 'Demo 3D' },
  { id: 'enterprise-dashboard', label: 'Dashboard' },
  { id: 'enterprise-gallery', label: 'Galería' },
  { id: 'enterprise-features', label: 'Características' },
];

export function EnterpriseLayout({ project }: { project: PersonalProject }) {
  const { lang } = useLanguage();
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
      <ScrollAffordance sections={ENTERPRISE_SECTIONS} accentColor="emerald" />

      {/* Hero Section */}
      <div id="enterprise-hero"><CinematicHero project={project} lang={lang} /></div>

      {/* ============================================================ */}
      {/* DESKTOP: 3D Threat Isolation Hologram (lg+) */}
      {/* ============================================================ */}
      {/* DESKTOP: 3D Threat Isolation Hologram (lg+) */}
      {/* ============================================================ */}
      <section id="enterprise-hologram"
        className="hidden lg:flex relative py-12 w-full items-center justify-center z-20 cursor-crosshair h-[700px]"
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

      {/* ============================================================ */}
      {/* MOBILE: Threat detection visual fallback (< lg) */}
      {/* ============================================================ */}
      <section id="enterprise-hologram" className="lg:hidden relative z-20 py-12 px-6">
        <div className="max-w-sm mx-auto space-y-4">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5" />
              Threat Isolation Demo
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              El motor EDR intercepta amenazas en el subsistema kernel antes de su ejecución.
            </p>
          </div>

          {/* Threat card */}
          <div className="bg-red-950/50 border-2 border-red-500/60 rounded-2xl p-5 flex items-center gap-4">
            <AlertTriangle className="w-10 h-10 text-red-500 shrink-0 animate-pulse" />
            <div>
              <div className="font-mono text-sm text-red-400 font-bold">RANSOM.EXE detectado</div>
              <div className="text-xs text-slate-400 mt-1">Entropía Shannon: 7.99 (cifrado masivo)</div>
            </div>
          </div>

          {/* ETW log card */}
          <div className="bg-slate-950 border-2 border-emerald-500/30 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs text-emerald-400 font-bold">ETW INGESTION</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
            <div className="space-y-2 font-mono text-[11px] text-slate-400">
              <div className="flex justify-between"><span className="text-slate-500">Event ID:</span> <span className="text-white">4688</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Entropy:</span> <span className="text-red-400">7.99 (High)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Latency:</span> <span className="text-emerald-400">&lt; 12ms</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Action:</span> <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">BLOCKED</span></div>
            </div>
          </div>

          {/* Performance metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-light text-white mb-1">&lt; 12ms</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest">Kernel Latency</div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-light text-white mb-1">0.8%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest">CPU Overhead</div>
            </div>
          </div>
        </div>
      </section>

            {/* Deep Technical Dive - YARA & Sysmon */}
      <section id="enterprise-yara" className="relative w-full max-w-6xl mx-auto px-6 py-24 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              {lang === 'es' ? 'Motor Heurístico de Comportamiento' : 'Behavioral Heuristic Engine'}
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {lang === 'es'
                ? 'El sistema no se basa únicamente en firmas. Analiza árboles de ejecución de procesos mediante Sysmon y realiza escaneo en memoria con YARA. Si detecta inyección de shellcode (API unhooking, Process Hollowing), aísla el proceso inmediatamente.'
                : 'The system does not rely solely on signatures. It analyzes process execution trees via Sysmon and performs in-memory scanning with YARA. If it detects shellcode injection (API unhooking, Process Hollowing), it isolates the process immediately.'}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{lang === 'es' ? 'Análisis de Memoria Dinámica' : 'Dynamic Memory Analysis'}</h4>
                  <p className="text-sm text-slate-500">Escaneo de regiones de memoria PAGE_EXECUTE_READWRITE en busca de payloads cifrados o ofuscados.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{lang === 'es' ? 'Aislamiento de Red Automático' : 'Automatic Network Isolation'}</h4>
                  <p className="text-sm text-slate-500">Bloqueo de comunicación C2 (Command & Control) manipulando la tabla de ruteo local del host comprometido.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0f] border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-[11px] md:text-xs">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#0f111a]">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              <span className="ml-2 text-slate-500">yara_engine_core.py</span>
            </div>
            <div className="p-4 md:p-6 text-slate-300 overflow-x-auto">
              <pre>
                <code className="language-python">
<span className="text-purple-400">import</span> yara{'\n'}
<span className="text-purple-400">import</span> win32api, win32process{'\n\n'}

<span className="text-emerald-400">def</span> <span className="text-blue-400">scan_process_memory</span>(pid):{'\n'}
{'    '}rules = yara.compile(filepath=<span className="text-amber-300">'/rules/ransomware.yar'</span>){'\n'}
{'    '}<span className="text-purple-400">try</span>:{'\n'}
{'        '}process_handle = win32api.OpenProcess({'\n'}
{'            '}win32con.PROCESS_VM_READ | win32con.PROCESS_QUERY_INFORMATION, False, pid){'\n'}
{'        '}matches = rules.match(pid=pid){'\n'}
{'        '}<span className="text-purple-400">if</span> matches:{'\n'}
{'            '}<span className="text-blue-400">trigger_mitigation</span>(pid, matches){'\n'}
{'            '}<span className="text-emerald-400">return</span> <span className="text-amber-500">True</span>{'\n'}
{'    '}<span className="text-purple-400">except</span> <span className="text-blue-200">Exception</span> <span className="text-purple-400">as</span> e:{'\n'}
{'        '}logger.error(<span className="text-amber-300">f"Failed to scan PID {"{"}pid{"}"}: {"{"}e{"}"}"</span>){'\n'}
{'    '}<span className="text-emerald-400">return</span> <span className="text-amber-500">False</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* The Actual Product / Application UI */}
      <section id="enterprise-dashboard" className="relative w-full max-w-6xl mx-auto px-6 py-12 z-20">
        <div className="text-center mb-10">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">
            {lang === 'es' ? 'Centro de Control EDR' : 'EDR Control Center'}
          </h2>
          <p className="text-2xl font-light text-slate-300">
            {lang === 'es'
              ? 'Interfaz principal desarrollada para el Centro de Operaciones de Seguridad (SOC).'
              : 'Main interface developed for the Security Operations Center (SOC).'}
          </p>
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

            {/* Dynamic Features from Data */}
      {(project.featuresES || project.featuresEN) && (
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-slate-900/40 border border-emerald-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-emerald-400" />
              {lang === 'es' ? 'Capacidades Críticas' : 'Critical Capabilities'}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {(lang === 'es' && project.featuresES ? project.featuresES : project.featuresEN || []).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                  <span className="text-slate-300 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Extended Gallery */}
      {project.images && project.images.length > 0 && (
        <section id="enterprise-gallery" className="max-w-7xl mx-auto px-6 py-12 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.images.map((img, idx) => (
              <div key={idx} className="flex flex-col gap-4 group">
                <div className="bg-[#0f111a] border border-slate-800 rounded-xl overflow-hidden shadow-lg relative aspect-video flex items-center justify-center">
                  <img src={img.url} alt={lang === 'es' ? img.captionES : img.captionEN} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>
                <p className="text-slate-400 text-sm font-medium border-l-2 border-emerald-500/50 pl-3">
                  {lang === 'es' ? img.captionES : img.captionEN}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Marketing B2B - Enterprise Security Value */}
      <section id="enterprise-features" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {lang === 'es' ? 'Protección Proactiva a Nivel Kernel' : 'Proactive Kernel-Level Protection'}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {lang === 'es'
              ? 'Los antivirus convencionales dependen de firmas estáticas reactivas. SuiteSeguridad EDR intercepta vectores de ataque en el subsistema del kernel de Windows mediante Event Tracing for Windows (ETW) y hooks de baja latencia, mitigando amenazas zero-day antes de su ejecución.'
              : 'Conventional antivirus relies on reactive static signatures. SuiteSeguridad EDR intercepts attack vectors in the Windows kernel subsystem via Event Tracing for Windows (ETW) and low-latency hooks, mitigating zero-day threats before execution.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mitigación de Ransomware</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {lang === 'es' ? 'Detección de patrones de cifrado masivo mediante cálculo de entropía de Shannon en buffers de I/O de disco. Suspende deterministamente el hilo del proceso atacante en menos de 12ms antes de comprometer archivos críticos.' : 'Detection of massive encryption patterns via Shannon entropy calculation on disk I/O buffers. Deterministically suspends the attacking process thread in under 12ms before critical files are compromised.'}
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Bajo Impacto Operativo</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {lang === 'es' ? 'Driver C/C++ en espacio de kernel con buffers circulares de memoria compartida. Procesa eventos de telemetría a escala con un overhead de CPU medido inferior al 0.8%.' : 'C/C++ driver in kernel space with shared memory ring buffers. Processes telemetry events at scale with a measured CPU overhead of less than 0.8%.'}
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Motor Heurístico &amp; Reglas YARA</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {lang === 'es' ? 'Canal asíncrono en espacio de usuario (Python) que correlaciona telemetría de Sysmon y evalúa binarios sospechosos contra un compendio de reglas YARA y heurísticas de comportamiento.' : 'Asynchronous user-space channel (Python) that correlates Sysmon telemetry and evaluates suspicious binaries against a compendium of YARA rules and behavioral heuristics.'}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-800/50">
          <h4 className="text-lg font-semibold text-white mb-6">
            {lang === 'es' ? 'Stack Tecnológico y Arquitectura:' : 'Tech Stack & Architecture:'}
          </h4>
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











