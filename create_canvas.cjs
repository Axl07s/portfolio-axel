const fs = require('fs');

const virtualCanvasCode = `import React from 'react';

interface VirtualCanvasProps {
  children: React.ReactNode;
  canvasWidth?: string; 
  mobileHeight?: string; 
  desktopHeight?: string;
  mobileScale?: string;
  smScale?: string;
  className?: string;
}

export function VirtualCanvas({
  children,
  canvasWidth = '1200px',
  mobileHeight = '400px',
  desktopHeight = '100vh',
  mobileScale = 'scale-[0.32]',
  smScale = 'sm:scale-[0.45]',
  className = ''
}: VirtualCanvasProps) {
  return (
    <div 
      className={\`flex relative w-full items-center justify-center overflow-hidden z-20 \${className}\`}
      style={{ 
        // Use custom properties that Tailwind can read, or just standard inline styles for the wrapper
      }}
    >
      {/* Dynamic height handling via inline style tag scoped to this instance */}
      <style>{\`
        .canvas-wrapper-\${Math.abs(Math.random().toString().hashCode || 12345)} {
          height: \${mobileHeight};
        }
        @media (min-width: 1024px) {
          .canvas-wrapper-\${Math.abs(Math.random().toString().hashCode || 12345)} {
            height: \${desktopHeight};
          }
        }
      \`}</style>

      {/* 
        On mobile: absolute center + forced width + CSS scale 
        On desktop (lg): static layout + 100% width or custom desktop width 
      */}
      <div 
        className={\`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 flex items-center justify-center transition-transform duration-300 ease-out \${mobileScale} \${smScale} lg:scale-100\`}
        style={{
          width: 'var(--canvas-width, 100%)',
          maxWidth: canvasWidth
        }}
      >
        <style>{\`
           @media (max-width: 1023px) {
             .virtual-inner { width: \${canvasWidth} !important; max-width: none !important; }
           }
        \`}</style>
        <div className="virtual-inner w-full flex items-center justify-center" style={{ perspective: '2000px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
\`;

fs.writeFileSync('src/components/VirtualCanvas.tsx', virtualCanvasCode);
console.log("VirtualCanvas component created.");
