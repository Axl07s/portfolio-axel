import React from 'react';
import { Info } from 'lucide-react';

export const AmazonDisclaimer: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="glass-panel p-4 rounded-2xl border border-zinc-800/80 flex items-start sm:items-center gap-3 text-zinc-400 text-xs">
        <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5 sm:mt-0" />
        <p className="leading-relaxed text-[11px] sm:text-xs">
          <strong>Amazon Associates Disclosure:</strong> GearStack is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and Amazon.es. Prices, ratings, and product availability are subject to change by Amazon merchants.
        </p>
      </div>
    </div>
  );
};
