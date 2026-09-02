import React from 'react';
import { ArrowRight, MessageCircle, Star, ShieldCheck, Zap, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Red Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-rose-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="text-center max-w-4xl mx-auto space-y-6">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-red-500/30 text-red-400 text-xs font-mono font-medium shadow-glow-red">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>FULL-STACK ARCHITECT &bull; QUITO, ECUADOR & REMOTE</span>
        </div>

        {/* Main Big Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
          I build <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">high-performance</span> SaaS & AI systems that scale.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Full-Stack Software Engineer specializing in modern Next.js 15 web apps, multi-agent AI command hubs, cross-platform Flutter mobile applications, and high-converting commercial software.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-red-600 to-red-800 text-white border border-red-500/40 shadow-glow-crimson hover:brightness-110 active:scale-95 transition-all"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>

          <a
            href="https://wa.me/593999999999?text=Hola%20Axel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold bg-zinc-900/90 text-zinc-200 border border-zinc-800 hover:border-red-500/40 hover:text-white hover:bg-zinc-800/90 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-red-400" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#certifications"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-mono text-zinc-400 hover:text-zinc-200 border border-zinc-800/80 hover:border-zinc-700 bg-zinc-950/60 transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Credentials</span>
          </a>

        </div>

      </div>

      {/* Verified Stats HUD Grid */}
      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        
        {/* Metric 1 */}
        <div className="glass-obsidian-card p-4 rounded-2xl border border-zinc-800/80 text-center relative overflow-hidden group">
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="font-mono font-extrabold text-lg text-white">5.0 ★</span>
          </div>
          <p className="text-[11px] text-zinc-400 font-mono">Fiverr Verified Review</p>
        </div>

        {/* Metric 2 */}
        <div className="glass-obsidian-card p-4 rounded-2xl border border-zinc-800/80 text-center relative overflow-hidden group">
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center gap-1 text-red-400 mb-1">
            <Code2 className="w-4 h-4 text-red-400" />
            <span className="font-mono font-extrabold text-lg text-white">6 Systems</span>
          </div>
          <p className="text-[11px] text-zinc-400 font-mono">Production Case Studies</p>
        </div>

        {/* Metric 3 */}
        <div className="glass-obsidian-card p-4 rounded-2xl border border-zinc-800/80 text-center relative overflow-hidden group">
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-mono font-extrabold text-lg text-white">Scrum + C2</span>
          </div>
          <p className="text-[11px] text-zinc-400 font-mono">English & Agile Certified</p>
        </div>

        {/* Metric 4 */}
        <div className="glass-obsidian-card p-4 rounded-2xl border border-zinc-800/80 text-center relative overflow-hidden group">
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center gap-1 text-cyan-400 mb-1">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="font-mono font-extrabold text-lg text-white">&lt; 14 Days</span>
          </div>
          <p className="text-[11px] text-zinc-400 font-mono">Rapid MVP Execution</p>
        </div>

      </div>

    </section>
  );
};
