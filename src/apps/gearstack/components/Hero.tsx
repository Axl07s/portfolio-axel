import React from 'react';
import type { Category } from '../types/product';
import { Monitor, Keyboard, Layers, Armchair, Mic, Cable, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
  totalProductsCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  activeCategory,
  setActiveCategory,
  totalProductsCount,
}) => {
  const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Hardware', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'monitors', label: 'Curved Monitors', icon: <Monitor className="w-3.5 h-3.5" /> },
    { id: 'keyboards', label: 'Mechanical Keyboards', icon: <Keyboard className="w-3.5 h-3.5" /> },
    { id: 'desks', label: 'Standing Desks', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'chairs', label: 'Ergonomic Chairs', icon: <Armchair className="w-3.5 h-3.5" /> },
    { id: 'audio', label: 'Microphones & ANC', icon: <Mic className="w-3.5 h-3.5" /> },
    { id: 'accessories', label: 'Docks & Lights', icon: <Cable className="w-3.5 h-3.5" /> },
  ];

  return (
    <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      
      {/* Top Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-orange-500/30 text-orange-400 text-xs font-medium mb-6 shadow-glow-orange">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span>Curated Workspace Hardware & In-Depth Benchmarks</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
        Find the <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">Peak Performance</span> Gear For Your Coding Setup.
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-normal">
        Side-by-side technical comparisons, ergonomic scoring, and verified developer feedback. Eliminate purchase paralysis with curated hardware.
      </p>

      {/* Live Value Badges */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-zinc-400">
        <div className="flex items-center gap-1.5 font-mono">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{totalProductsCount} Developer-Grade Products</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono">
          <CheckCircle2 className="w-4 h-4 text-orange-400" />
          <span>Side-by-Side Spec Matrix</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span>Direct Amazon Official Pricing</span>
        </div>
      </div>

      {/* Categories Filter Pills */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-orange-500 text-black font-semibold shadow-glow-orange scale-105'
                : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800/80'
            }`}
          >
            {cat.icon}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

    </section>
  );
};
