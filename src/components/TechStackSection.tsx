import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Server, Smartphone, Shield, Check, Cpu } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-red-400" />;
      case 'Server': return <Server className="w-5 h-5 text-rose-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-amber-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-emerald-400" />;
      default: return <Cpu className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-red-500/30 text-red-400 text-xs font-mono font-medium shadow-glow-red">
          <Cpu className="w-3.5 h-3.5" />
          <span>ENGINEERING MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Battle-Tested <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">Tech Stack</span>.
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          I build with high-throughput modern frameworks designed for rapid scale, enterprise security, and clean maintainability.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="glass-obsidian-card p-6 rounded-3xl border border-zinc-800/80 space-y-4 hover:border-red-500/40 transition-all flex flex-col justify-between">
            
            <div>
              {/* Pillar Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  {getIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{cat.title}</h3>
                  <span className="text-[10px] font-mono text-zinc-400">{cat.skills.length} Core Technologies</span>
                </div>
              </div>

              {/* Skills List */}
              <ul className="mt-4 space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center justify-between text-xs">
                    <span className="text-zinc-300 font-medium">{skill.name}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      skill.level === 'Expert'
                        ? 'bg-red-500/10 text-red-400 border-red-500/30'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Status */}
            <div className="pt-3 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
              <Check className="w-3.5 h-3.5 text-red-500" />
              <span>Production Tested</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
