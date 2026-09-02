import React from 'react';
import type { Product, Currency } from '../types/product';
import { X, Scale, ExternalLink, Star, Trash2, Check } from 'lucide-react';
import { formatPrice, getAmazonAffiliateUrl } from '../lib/affiliate';

interface ComparisonDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  comparedProducts: Product[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  currency: Currency;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  isOpen,
  onOpen,
  onClose,
  comparedProducts,
  onRemoveProduct,
  onClearAll,
  currency,
}) => {
  if (!isOpen && comparedProducts.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Bar when Closed but Products are Selected */}
      {!isOpen && comparedProducts.length > 0 && (
        <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center px-4 animate-bounce-short">
          <div className="glass-panel px-5 py-3 rounded-2xl shadow-2xl border border-orange-500/40 flex items-center gap-4 bg-zinc-950/90 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-mono font-bold text-xs">
                {comparedProducts.length}
              </div>
              <span className="text-xs text-zinc-300 font-medium">
                {comparedProducts.length === 1 ? '1 product selected' : `${comparedProducts.length} products ready to compare`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpen}
                className="px-4 py-1.5 text-xs font-bold rounded-xl bg-orange-500 text-black shadow-glow-orange hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Open Matrix</span>
              </button>
              <button
                onClick={onClearAll}
                className="p-1.5 text-zinc-400 hover:text-rose-400 transition-colors"
                title="Clear comparison"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Modal Comparison Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-6xl glass-panel rounded-3xl border border-zinc-800 bg-zinc-950/95 overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/60 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    Side-by-Side Spec Benchmark
                    <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {comparedProducts.length} of 3 Items
                    </span>
                  </h2>
                  <p className="text-xs text-zinc-400">Direct technical comparison & real-time pricing analysis</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {comparedProducts.length > 0 && (
                  <button
                    onClick={onClearAll}
                    className="text-xs text-zinc-400 hover:text-rose-400 flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-zinc-900 transition-all font-mono"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {comparedProducts.length === 0 ? (
                <div className="py-16 text-center text-zinc-500">
                  <Scale className="w-12 h-12 mx-auto mb-3 text-zinc-600 stroke-[1.5]" />
                  <p className="text-sm font-medium text-zinc-300">No products selected for comparison.</p>
                  <p className="text-xs text-zinc-500 mt-1">Select "Compare" on 2 or 3 products from the main catalog.</p>
                </div>
              ) : (
                <>
                  {/* Top Grid: Cards Header */}
                  <div className={`grid gap-4 ${
                    comparedProducts.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                    comparedProducts.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                    'grid-cols-1 md:grid-cols-3'
                  }`}>
                    {comparedProducts.map((p) => {
                      const affiliateUrl = getAmazonAffiliateUrl(p.asin, currency);
                      return (
                        <div key={p.id} className="glass-card rounded-2xl p-4 flex flex-col justify-between relative border border-zinc-800 bg-zinc-900/70">
                          <button
                            onClick={() => onRemoveProduct(p.id)}
                            className="absolute top-2 right-2 p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition-all"
                            title="Remove"
                          >
                            <X className="w-4 h-4" />
                          </button>

                          <div className="flex gap-3">
                            <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded-xl shrink-0 bg-zinc-950 border border-zinc-800" />
                            <div className="pr-6">
                              <span className="text-[10px] uppercase font-mono text-orange-400 font-bold">{p.brand}</span>
                              <h4 className="font-bold text-xs text-zinc-100 line-clamp-2 leading-tight">{p.name}</h4>
                              <div className="flex items-center gap-1 mt-1">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                <span className="text-xs font-bold text-zinc-200">{p.rating}</span>
                                <span className="text-[10px] text-zinc-400">({p.reviewsCount})</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                            <div>
                              <span className="text-[9px] uppercase font-mono text-zinc-400 block">Price</span>
                              <span className="font-mono font-extrabold text-base text-white">
                                {formatPrice(p.priceUSD, p.priceEUR, currency)}
                              </span>
                            </div>
                            <a
                              href={affiliateUrl}
                              target="_blank"
                              rel="nofollow sponsored noopener noreferrer"
                              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-orange-500 text-black shadow-glow-orange hover:brightness-110 flex items-center gap-1 transition-all"
                            >
                              <span>Buy on Amazon</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Benchmark Scores Comparison */}
                  <div className="glass-panel p-5 rounded-2xl border border-zinc-800/80 space-y-4">
                    <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-orange-400">
                      Performance & Value Radar
                    </h3>

                    <div className="space-y-3 text-xs">
                      {/* Ergonomics */}
                      <div>
                        <div className="flex justify-between text-zinc-400 mb-1">
                          <span>Ergonomics & Comfort Score</span>
                          <div className="flex gap-6 font-mono text-zinc-200">
                            {comparedProducts.map(p => (
                              <span key={p.id} className="text-emerald-400 font-bold">{p.scores.ergonomics}/100</span>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {comparedProducts.map(p => (
                            <div key={p.id} className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${p.scores.ergonomics}%` }} />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Build Quality */}
                      <div>
                        <div className="flex justify-between text-zinc-400 mb-1">
                          <span>Build Quality & Durability</span>
                          <div className="flex gap-6 font-mono text-zinc-200">
                            {comparedProducts.map(p => (
                              <span key={p.id} className="text-cyan-400 font-bold">{p.scores.buildQuality}/100</span>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {comparedProducts.map(p => (
                            <div key={p.id} className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                              <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${p.scores.buildQuality}%` }} />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Performance */}
                      <div>
                        <div className="flex justify-between text-zinc-400 mb-1">
                          <span>Productivity & Performance</span>
                          <div className="flex gap-6 font-mono text-zinc-200">
                            {comparedProducts.map(p => (
                              <span key={p.id} className="text-amber-400 font-bold">{p.scores.performance}/100</span>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {comparedProducts.map(p => (
                            <div key={p.id} className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${p.scores.performance}%` }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deep Specs Comparison Table */}
                  <div className="glass-panel rounded-2xl border border-zinc-800/80 overflow-hidden">
                    <div className="px-5 py-3 border-b border-zinc-800 bg-zinc-900/60 font-mono text-xs font-bold text-zinc-300">
                      Technical Specifications
                    </div>
                    <div className="divide-y divide-zinc-800/60 text-xs">
                      {comparedProducts[0]?.specs.map((spec, i) => (
                        <div key={i} className="p-3.5 grid grid-cols-1 md:grid-cols-4 gap-2">
                          <span className="font-semibold text-zinc-400 md:col-span-1">{spec.label}</span>
                          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                            {comparedProducts.map(p => (
                              <span key={p.id} className="text-zinc-200">
                                {p.specs[i]?.value || 'N/A'}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pros & Cons Side-by-Side */}
                  <div className={`grid gap-4 ${
                    comparedProducts.length === 1 ? 'grid-cols-1' :
                    comparedProducts.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                    'grid-cols-1 md:grid-cols-3'
                  }`}>
                    {comparedProducts.map(p => (
                      <div key={p.id} className="glass-card rounded-2xl p-4 border border-zinc-800 space-y-3 text-xs">
                        <span className="font-bold text-zinc-200 truncate block">{p.name}</span>
                        <div>
                          <span className="text-[11px] font-bold text-emerald-400 block mb-1 uppercase tracking-wider">Top Advantages</span>
                          <ul className="space-y-1 text-zinc-300 pl-1">
                            {p.pros.map((pro, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                                <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-rose-400 block mb-1 uppercase tracking-wider">Limitations</span>
                          <ul className="space-y-1 text-zinc-400 pl-1">
                            {p.cons.map((con, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                                <span className="text-rose-400 shrink-0">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                </>
              )}

            </div>

          </div>
        </div>
      )}
    </>
  );
};
