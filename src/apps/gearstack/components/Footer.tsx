import React from 'react';
import { Layers, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/80 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1 */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-black font-bold">
                <Layers className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-base text-white">Gear<span className="text-orange-500">Stack</span></span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Curated hardware benchmarks and workspace setups engineered for developers, designers, and high-focus remote builders.
            </p>
            <div className="text-[11px] font-mono text-zinc-500">
              Tracking ID: <span className="text-orange-400">axeltech0b-20</span> (Live Active)
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-zinc-200 uppercase tracking-wider font-mono">Categories</h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li>Curved Ultrawide Monitors</li>
              <li>Custom Mechanical Keyboards</li>
              <li>Dual-Motor Standing Desks</li>
              <li>Ergonomic Office Chairs</li>
              <li>Broadcast Microphones & Audio</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-zinc-200 uppercase tracking-wider font-mono">Platform Trust</h4>
            <div className="space-y-1.5 text-zinc-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Zero Sponsored Bias</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Every product is evaluated against verified developer telemetry and real-world durability standards.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} GearStack. Built for the developer ecosystem.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Next.js 15 & Tailwind Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
