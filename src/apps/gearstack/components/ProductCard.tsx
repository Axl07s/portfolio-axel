import React, { useState } from 'react';
import type { Product, Currency } from '../types/product';
import { Star, ChevronDown, ChevronUp, Check, ExternalLink, CheckSquare, Square, Zap } from 'lucide-react';
import { formatPrice, getAmazonAffiliateUrl } from '../lib/affiliate';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  isCompared: boolean;
  onToggleCompare: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  isCompared,
  onToggleCompare,
}) => {
  const [expanded, setExpanded] = useState(false);
  const affiliateUrl = getAmazonAffiliateUrl(product.asin, currency);

  return (
    <div className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 border ${
      isCompared ? 'border-orange-500/70 ring-1 ring-orange-500/50 bg-zinc-900/90' : 'border-zinc-800/80 bg-zinc-900/50'
    }`}>
      
      {/* Top Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-orange-500 text-black shadow-lg">
            {product.badge}
          </div>
        )}

        {/* Compare Toggle Button on Image */}
        <button
          onClick={() => onToggleCompare(product)}
          className={`absolute top-3 right-3 p-1.5 rounded-lg text-xs flex items-center gap-1.5 backdrop-blur-md transition-all ${
            isCompared
              ? 'bg-orange-500 text-black font-semibold shadow-glow-orange'
              : 'bg-black/60 text-zinc-300 hover:text-white border border-white/10 hover:bg-black/80'
          }`}
          title={isCompared ? 'Remove from compare' : 'Add to compare'}
        >
          {isCompared ? <CheckSquare className="w-3.5 h-3.5 text-black" /> : <Square className="w-3.5 h-3.5" />}
          <span className="text-[11px] pr-0.5">{isCompared ? 'Comparing' : 'Compare'}</span>
        </button>

        {/* Best For Tag at bottom of image */}
        <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5 truncate">
          <Zap className="w-3 h-3 text-amber-400 shrink-0" />
          <span className="truncate"><strong>Best For:</strong> {product.bestFor}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Brand & Ratings */}
          <div className="flex items-center justify-between gap-2 text-xs text-zinc-400 mb-1.5">
            <span className="font-mono uppercase tracking-wider text-orange-400/90 font-semibold">{product.brand}</span>
            <div className="flex items-center gap-1 bg-zinc-800/80 px-2 py-0.5 rounded-md border border-zinc-700/50">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-bold text-zinc-100">{product.rating}</span>
              <span className="text-[10px] text-zinc-400">({product.reviewsCount.toLocaleString()})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-sm text-zinc-100 line-clamp-2 leading-snug hover:text-orange-400 transition-colors">
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Score Metrics Grid */}
          <div className="mt-3 grid grid-cols-4 gap-1 text-center bg-zinc-950/60 p-2 rounded-xl border border-zinc-800/60">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-zinc-400 block font-mono">Ergo</span>
              <span className="text-xs font-bold text-emerald-400 font-mono">{product.scores.ergonomics}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-zinc-400 block font-mono">Build</span>
              <span className="text-xs font-bold text-cyan-400 font-mono">{product.scores.buildQuality}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-zinc-400 block font-mono">Perf</span>
              <span className="text-xs font-bold text-amber-400 font-mono">{product.scores.performance}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-zinc-400 block font-mono">Value</span>
              <span className="text-xs font-bold text-orange-400 font-mono">{product.scores.value}</span>
            </div>
          </div>
        </div>

        {/* Collapsible Tech Specs & Pros */}
        <div className="mt-4 border-t border-zinc-800/80 pt-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors py-1"
          >
            <span>{expanded ? 'Hide Technical Specs & Pros' : 'View Specs, Pros & Cons'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {expanded && (
            <div className="mt-2.5 space-y-3 text-xs animate-fadeIn">
              {/* Specs Table */}
              <div className="bg-zinc-950/70 rounded-lg p-2.5 space-y-1.5 border border-zinc-800/50">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between gap-2 text-[11px]">
                    <span className="text-zinc-400 shrink-0">{spec.label}:</span>
                    <span className="text-zinc-200 font-medium text-right truncate">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Pros */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 uppercase tracking-wider">
                  <Check className="w-3 h-3" /> Key Advantages
                </span>
                <ul className="space-y-1 pl-1 text-[11px] text-zinc-300">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 shrink-0">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-rose-400 flex items-center gap-1 uppercase tracking-wider">
                  Considerations
                </span>
                <ul className="space-y-1 pl-1 text-[11px] text-zinc-400">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-400 shrink-0">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer: Price & Direct Amazon CTA */}
        <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-mono text-zinc-400 block">Amazon Price</span>
            <span className="text-lg font-extrabold font-mono text-white tracking-tight">
              {formatPrice(product.priceUSD, product.priceEUR, currency)}
            </span>
          </div>

          <a
            href={affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-glow-orange hover:brightness-110 active:scale-95 transition-all shrink-0"
          >
            <span>View on Amazon</span>
            <ExternalLink className="w-3.5 h-3.5 text-black" />
          </a>
        </div>

      </div>

    </div>
  );
};
