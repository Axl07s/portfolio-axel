import React from 'react';
import { ArrowDown, Mail, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      
      {/* Subtle Indigo Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="space-y-8">
        
        {/* Minimalist Role Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium shadow-sm">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>Frontend Engineer &bull; Software Craft &bull; AI Systems</span>
        </div>

        {/* Primary Authentic Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
          Building beautifully functional <br className="hidden sm:inline" />
          <span className="text-zinc-500">software for the modern web.</span>
        </h1>

        {/* Honest, Personal Biography (Matt Farley / Dunks pattern) */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Hi, I'm <strong className="text-white font-semibold">Axel Molineros</strong>. I'm a software engineering student based in Ecuador. I design and build production-grade SaaS platforms, interactive web apps, and autonomous AI systems with React, Next.js, and TypeScript.
        </p>

        {/* Clean, Non-Marketing Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white text-black hover:bg-zinc-200 transition-all shadow-lg active:scale-95"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 text-black" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Get in Touch</span>
          </a>

          <a
            href="https://github.com/Axl07s"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all"
            title="GitHub Profile"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Minimalist Engineering Proof Strip */}
      <div className="mt-20 pt-10 border-t border-zinc-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        <div>
          <span className="text-2xl font-bold tracking-tight text-white font-mono block">6</span>
          <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Live Deployments</span>
        </div>
        <div>
          <span className="text-2xl font-bold tracking-tight text-white font-mono block">99/100</span>
          <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Avg. Lighthouse Score</span>
        </div>
        <div>
          <span className="text-2xl font-bold tracking-tight text-white font-mono block">Zero-Trust</span>
          <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Database Architecture</span>
        </div>
        <div>
          <span className="text-2xl font-bold tracking-tight text-white font-mono block">5.0 / 5.0</span>
          <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Client Delivery Rating</span>
        </div>
      </div>

    </section>
  );
};
