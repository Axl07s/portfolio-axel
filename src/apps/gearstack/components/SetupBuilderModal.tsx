import React, { useState } from 'react';
import type { Product, Currency } from '../types/product';
import { SETUP_PRESETS } from '../data/products';
import { X, Sparkles, Terminal, Briefcase, Code2, ExternalLink } from 'lucide-react';
import { formatPrice, getAmazonAffiliateUrl } from '../lib/affiliate';

interface SetupBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currency: Currency;
}

export const SetupBuilderModal: React.FC<SetupBuilderModalProps> = ({
  isOpen,
  onClose,
  products,
  currency,
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(SETUP_PRESETS[0].id);

  if (!isOpen) return null;

  const currentPreset = SETUP_PRESETS.find(p => p.id === selectedPresetId) || SETUP_PRESETS[0];
  const presetProducts = products.filter(p => currentPreset.productIds.includes(p.id));

  // Calculate totals
  const totalUSD = presetProducts.reduce((sum, p) => sum + p.priceUSD, 0);
  const totalEUR = presetProducts.reduce((sum, p) => sum + p.priceEUR, 0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-orange-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-amber-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      default: return <Sparkles className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-zinc-800 bg-zinc-950/95 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-glow-orange">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Interactive Setup Architect</h2>
              <p className="text-xs text-zinc-400">Curated hardware bundles pre-engineered for specific developer workflows</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Preset Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {SETUP_PRESETS.map((preset) => {
              const isSelected = preset.id === selectedPresetId;
              return (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-zinc-900 border-orange-500/80 shadow-glow-orange ring-1 ring-orange-500/40'
                      : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
                  }`}
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center mb-3 border border-zinc-700/50">
                      {getIcon(preset.icon)}
                    </div>
                    <h3 className="font-bold text-sm text-zinc-100">{preset.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">{preset.description}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">{preset.productIds.length} Items</span>
                    <span className="text-orange-400 font-bold">~${preset.totalBudgetUSD.toFixed(0)}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bundle Breakdown */}
          <div className="glass-panel rounded-2xl p-5 border border-zinc-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-orange-400">Included Hardware</span>
                <h4 className="text-sm font-bold text-zinc-100">{currentPreset.name}</h4>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block">Total Bundle Estimate</span>
                <span className="text-xl font-mono font-extrabold text-white">
                  {formatPrice(totalUSD, totalEUR, currency)}
                </span>
              </div>
            </div>

            {/* List of items in bundle */}
            <div className="space-y-3">
              {presetProducts.map((p) => {
                const affiliateUrl = getAmazonAffiliateUrl(p.asin, currency);
                return (
                  <div key={p.id} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/60 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover bg-zinc-950 shrink-0 border border-zinc-800" />
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase font-mono font-semibold text-orange-400">{p.brand}</span>
                        <h5 className="text-xs font-bold text-zinc-100 truncate">{p.name}</h5>
                        <span className="text-[11px] text-zinc-400 truncate block">{p.bestFor}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono font-bold text-zinc-200">
                        {formatPrice(p.priceUSD, p.priceEUR, currency)}
                      </span>
                      <a
                        href={affiliateUrl}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="p-2 rounded-lg bg-orange-500 text-black hover:brightness-110 active:scale-95 transition-all shadow-glow-orange"
                        title="View on Amazon"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
