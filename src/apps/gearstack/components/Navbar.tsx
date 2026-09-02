import React from 'react';
import { Layers, Sparkles, Scale, Search, Globe } from 'lucide-react';
import type { Currency } from '../types/product';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  compareCount: number;
  onOpenCompare: () => void;
  onOpenSetupBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  currency,
  setCurrency,
  compareCount,
  onOpenCompare,
  onOpenSetupBuilder,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-glow-orange">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white">Gear<span className="text-orange-500">Stack</span></span>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                PRO 2026
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden sm:block">Developer & Creator Workspace Engine</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search curved monitors, mechanical keyboards, standing desks..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          
          {/* Currency Switcher */}
          <button
            onClick={() => setCurrency(currency === 'USD' ? 'EUR' : 'USD')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
            title="Toggle Currency & Amazon Region"
          >
            <Globe className="w-3.5 h-3.5 text-orange-400" />
            <span>{currency === 'USD' ? '🇺🇸 USD ($)' : '🇪🇸 EUR (€)'}</span>
          </button>

          {/* Setup Builder Trigger */}
          <button
            onClick={onOpenSetupBuilder}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-glow-orange hover:brightness-110 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">Setup Builder</span>
          </button>

          {/* Compare Button with Badge */}
          <button
            onClick={onOpenCompare}
            disabled={compareCount === 0}
            className={`relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              compareCount > 0
                ? 'bg-zinc-800 text-orange-400 border-orange-500/40 shadow-glow-orange cursor-pointer hover:bg-zinc-700'
                : 'bg-zinc-900/50 text-zinc-500 border-zinc-800 cursor-not-allowed'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Compare</span>
            {compareCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-orange-500 text-black font-bold text-[10px] flex items-center justify-center ml-0.5">
                {compareCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
};
