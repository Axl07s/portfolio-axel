import { useEffect, useState, useRef } from 'react';
import type { Project } from '../../data/portfolioData';
import { Server, Shield, CheckCircle2, ArrowRight, User, Activity, Settings, Database, Cloud } from 'lucide-react';
import { ScrollAffordance } from '../ScrollAffordance';
import { useLanguage } from '../../context/LanguageContext';

const getSaaSSections = (lang: 'es' | 'en') => [
  { id: 'saas-hero', label: 'Intro' },
  { id: 'saas-showcase', label: lang === 'es' ? 'Producto' : 'Product' },
  { id: 'saas-features', label: lang === 'es' ? 'Arquitectura' : 'Architecture' },
];

export function SaaSScaleLayout({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const rotateX = (0.5 - mousePos.y) * 10;
  const rotateY = (mousePos.x - 0.5) * 10;
  const phoneOffset = Math.max(-100, -scrollY * 0.15);

  return (
    <article className="min-h-screen bg-[#0a0a0a] text-zinc-50 font-sans overflow-hidden">
      <ScrollAffordance sections={getSaaSSections(lang)} accentColor="indigo" />

      {/* Hero Section */}
      <header id="saas-hero" className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div 
          className="absolute left-0 top-0 -z-10 w-[150vw] sm:w-[600px] h-[150vw] sm:h-[600px] rounded-full bg-indigo-600/20 blur-[120px] transition-transform duration-1000 ease-out pointer-events-none"
          style={{ transform: `translate(${mousePos.x * 200 - 100}px, ${mousePos.y * 200 - 100}px)` }}
        ></div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-8 animate-pulse">
            <Server className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mx-auto mb-4">
            {project.metrics.map((m, i) => (
              <div key={i} className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 text-center">
                <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{m.value}</div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* DESKTOP: 3D Parallax Device Showcase (lg+) */}
      {/* ============================================================ */}
      <section id="saas-showcase"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
        className="hidden lg:flex relative w-full max-w-7xl mx-auto px-4 py-32 z-20 items-center justify-center"
        style={{ perspective: '2000px' }}
      >
        <div 
          className="relative w-full aspect-[21/9] flex items-center justify-center transition-transform duration-500 ease-out"
          style={{ 
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
            transformStyle: 'preserve-3d'
          }}
        >
          
          {/* Background MacBook-esque Container */}
          <div 
            className="absolute top-0 left-0 w-[85%] bg-zinc-900 rounded-t-3xl border border-zinc-700 border-b-0 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
            style={{ transform: 'translateZ(-50px)' }}
          >
            <div className="h-12 bg-zinc-950 flex items-center px-4 border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <div className="mx-auto bg-zinc-900 px-4 py-1 rounded-md text-xs text-zinc-500 font-mono flex items-center gap-2">
                <Shield className="w-3 h-3" />
                syntrosaas-app.vercel.app
              </div>
            </div>
            <img 
              src={project.images[0]?.url} 
              alt="Desktop UI" 
              className="w-full h-auto object-cover" 
            />
          </div>

          {/* Foreground iPhone-esque Container (Parallax + 3D Pop) */}
          <div 
            className="absolute bottom-[-20%] right-[5%] w-[22%] aspect-[9/19.5] bg-[#0c0c0e] rounded-[3rem] border-[10px] border-zinc-800 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)] z-30 transition-transform duration-300 ease-out flex flex-col"
            style={{ 
              transform: `translateZ(100px) translateY(${phoneOffset}px)`,
              backfaceVisibility: 'hidden' 
            }}
          >
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-full z-40"></div>
            
            {/* Native Mobile UI Mockup */}
            <div className="flex-1 overflow-hidden pt-16 pb-6 px-4 flex flex-col gap-4 relative">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">SyntroSaaS</h5>
                    <p className="text-[10px] text-zinc-500">Workspace</p>
                  </div>
                </div>
                <User className="w-5 h-5 text-zinc-400" />
              </div>

              {/* Mobile Stats Card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-2 mt-2">
                 <div className="flex justify-between items-center">
                   <span className="text-[11px] text-zinc-400 font-medium">Monthly API Ingest</span>
                   <Activity className="w-3 h-3 text-indigo-400" />
                 </div>
                 <h4 className="text-2xl font-bold text-white tracking-tight">1.42M</h4>
                 <div className="w-full bg-zinc-800 rounded-full h-1 mt-1">
                   <div className="bg-indigo-500 h-1 rounded-full w-[71%]"></div>
                 </div>
                 <span className="text-[9px] text-zinc-500 mt-0.5">71% of 2M Quota</span>
              </div>

              {/* List Items */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center gap-3">
                  <div className="p-2 bg-rose-500/10 rounded-lg">
                    <Database className="w-4 h-4 text-rose-500" />
                  </div>
                  <div className="flex-1">
                    <h6 className="text-xs font-semibold text-white">Database Storage</h6>
                    <p className="text-[10px] text-zinc-500">4.8 GB used</p>
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Cloud className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <h6 className="text-xs font-semibold text-white">Edge Gateway</h6>
                    <p className="text-[10px] text-zinc-500">42ms latency (P99)</p>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Fake */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 flex items-center justify-around px-2">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><Activity className="w-3 h-3 text-indigo-400" /></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center"><Database className="w-3 h-3 text-zinc-500" /></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center"><Settings className="w-3 h-3 text-zinc-500" /></div>
              </div>
            </div>

            {/* Dynamic Glass Reflection */}
            <div 
               className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none transition-transform duration-500"
               style={{ transform: `translateX(${(mousePos.x - 0.5) * 100}%) translateY(${(mousePos.y - 0.5) * 100}%)` }}
            ></div>
          </div>
          
        </div>
      </section>

      {/* ============================================================ */}
      {/* MOBILE: Clean Native SaaS Card (< lg) */}
      {/* ============================================================ */}
      <section id="saas-showcase-mobile" className="lg:hidden relative z-20 py-10 px-4">
        <div className="bg-gradient-to-b from-zinc-950 to-black border border-zinc-800 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(79,70,229,0.15)]">
          {/* Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111118] border-b border-zinc-800">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                <Shield className="w-3 h-3 text-indigo-400" />
                syntrosaas-app.vercel.app
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-400 uppercase">Production</span>
            </div>
          </div>

          {/* Main Desktop Screenshot in aspect-video with lightbox tap */}
          <div 
            className="relative aspect-video w-full cursor-pointer bg-zinc-950"
            onClick={() => project.images?.[0]?.url && window.open(project.liveUrl || '#', '_blank')}
          >
            <img 
              src={project.images[0]?.url} 
              alt="SyntroSaaS Desktop UI" 
              className="w-full h-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 border border-zinc-700 rounded-lg text-[10px] font-mono text-zinc-300">
              {lang === 'es' ? 'Next.js 15 + Supabase RLS' : 'Next.js 15 + Supabase RLS'}
            </div>
          </div>

          {/* Metric Tiles (Native, Crisp) */}
          <div className="grid grid-cols-2 gap-px bg-zinc-800">
            <div className="bg-[#0c0c12] p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Monthly Ingest</span>
                <Activity className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div className="text-3xl font-black text-white tracking-tight">1.42M</div>
              <div className="w-full bg-zinc-800 rounded-full h-1 mt-2">
                <div className="bg-indigo-500 h-1 rounded-full w-[71%]"></div>
              </div>
              <span className="text-[9px] font-mono text-zinc-500 mt-1">71% of 2M Quota</span>
            </div>

            <div className="bg-[#0c0c12] p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Edge Gateway</span>
                <Cloud className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-3xl font-black text-white tracking-tight"><span className="text-emerald-400 font-normal text-xl">&lt;</span>42ms</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[10px] font-mono text-emerald-400/90 font-semibold">P99 Global Latency</span>
              </div>
              <span className="text-[9px] font-mono text-zinc-500 mt-1">Vercel Edge Functions</span>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="px-4 py-3 bg-[#08080c] border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-rose-400" />
              <span className="text-[11px] font-mono text-zinc-400">PostgreSQL Multi-Tenant RLS</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active</span>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section id="saas-features" className="py-24 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-20">
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-white">{lang === 'es' ? 'Arquitectura Multi-Tenant & Aislamiento RLS' : 'Multi-Tenant Architecture & RLS Isolation'}</h3>
          <ul className="space-y-6">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-4 text-zinc-300 group">
                <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-indigo-300 transition-transform" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col gap-8">
           <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors">
              <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 font-semibold">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-300 hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default">{s}</span>
                ))}
              </div>
           </div>
           
           <div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/30 hover:border-indigo-400 rounded-2xl p-8 flex flex-col items-start justify-center transition-colors group">
             <h4 className="text-xl font-semibold text-white mb-2">{lang === 'es' ? 'Ver Código Fuente' : 'View Source Code'}</h4>
             <p className="text-zinc-400 text-sm mb-6">
               {lang === 'es'
                 ? 'Arquitectura full-stack en Next.js 15 y React 19 con Supabase RLS y Stripe, optimizada para despliegue edge en Vercel.'
                 : 'Full-stack architecture in Next.js 15 and React 19 with Supabase RLS and Stripe, optimized for edge deployment on Vercel.'}
             </p>
             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg font-medium transition-all group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
               {lang === 'es' ? 'Repositorio GitHub' : 'GitHub Repository'} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
           </div>
        </div>
      </section>

    </article>
  );
}



