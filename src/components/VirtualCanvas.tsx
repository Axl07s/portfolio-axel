import React from 'react';

interface VirtualCanvasProps {
  children: React.ReactNode;
  canvasWidth?: string;
  mobileCanvasWidth?: string; // e.g., '1200px'
  mobileHeight?: string; // e.g., '400px'
  desktopHeight?: string; // e.g., '100vh', 'auto', '800px'
  mobileScale?: string; // e.g., 'scale-[0.32]'
  smScale?: string; // e.g., 'sm:scale-[0.45]'
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Lienzo Virtual Absoluto (Absolute Virtual Canvas)
 * 
 * Resuelve el problema matematico de escalar interfaces 3D complejas a movil.
 * En lugar de forzar el DOM 3D de 1200px a colapsar en 390px, reserva un espacio
 * en el flujo normal (mobileHeight), ancla el Canvas original de 1200px al centro 
 * absoluto, y le aplica un scale() CSS.
 */
export function VirtualCanvas({
  children,
  canvasWidth = '1200px',
  mobileCanvasWidth,
  mobileHeight = '400px',
  desktopHeight = '100vh',
  mobileScale = 'scale-[0.32]',
  smScale = 'sm:scale-[0.45]',
  className = '',
  style = {}
}: VirtualCanvasProps) {
  const id = React.useId().replace(/:/g, '');

  return (
    <div 
      className={`virtual-canvas-wrapper-${id} flex relative w-full items-center justify-center overflow-hidden z-20 ${className}`}
      style={style}
    >
      <style>{`
        .virtual-canvas-wrapper-${id} {
          height: ${mobileHeight};
        }
        @media (min-width: 1024px) {
          .virtual-canvas-wrapper-${id} {
            height: ${desktopHeight};
          }
        }
        @media (max-width: 1023px) {
          .virtual-inner-${id} {
            width: ${mobileCanvasWidth || canvasWidth} !important;
            max-width: none !important;
          }
        }
      `}</style>

      {/* Contenedor Absoluto de Escalado */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 flex items-center justify-center transition-transform duration-300 ease-out ${mobileScale} ${smScale} lg:scale-100`}
        style={{
          width: '100%',
          maxWidth: canvasWidth
        }}
      >
        <div className={`virtual-inner-${id} w-full flex items-center justify-center`} style={{ perspective: '2000px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
