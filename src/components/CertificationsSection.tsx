import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-lg">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>VERIFIED CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Professional <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Certifications</span> & Rigor.
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          International standards in Agile development, English communication proficiency, and modern project governance.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <div key={idx} className="glass-obsidian-card p-6 rounded-3xl border border-zinc-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                  {cert.date}
                </span>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-white leading-snug">{cert.name}</h3>
                <p className="text-xs font-mono text-emerald-400 mt-1 font-semibold">{cert.issuer}</p>
              </div>

              {/* Skills Tags */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block font-bold">Validated Competencies</span>
                <ul className="space-y-1 text-xs text-zinc-300">
                  {cert.skills.map((s, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-[11px]">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>Status: Active & Verified</span>
              <span className="text-emerald-400 font-bold">100% Validated</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
