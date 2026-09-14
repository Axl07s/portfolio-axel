const fs = require('fs');

const lightboxCode = `
import { X } from 'lucide-react';
import { useEffect } from 'react';

export function Lightbox({ imgSrc, altText, onClose }: { imgSrc: string; altText: string; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center cursor-pointer"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/10"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      <img 
        src={imgSrc} 
        alt={altText} 
        className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-[0_0_100px_rgba(255,255,255,0.1)] cursor-default"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
}
`;

fs.writeFileSync('src/components/Lightbox.tsx', lightboxCode);
