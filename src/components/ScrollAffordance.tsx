import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export interface SectionItem {
  id: string;
  label: string;
}

interface ScrollAffordanceProps {
  sections: SectionItem[];
  accentColor?: string;
}

function resolveAccent(accentColor?: string) {
  if (accentColor?.startsWith('#') || accentColor?.startsWith('rgb')) {
    return { useCss: true, value: accentColor as string };
  }
  return { useCss: false, value: accentColor ?? 'white' };
}

export function ScrollAffordance({ sections, accentColor }: ScrollAffordanceProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id ?? '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!sections.length) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [sections]);

  const handleDotClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const accent = resolveAccent(accentColor);

  const activeDotStyle = accent.useCss
    ? { backgroundColor: accent.value, boxShadow: `0 0 8px ${accent.value}80` }
    : {};

  const getActiveDotClass = () => {
    if (accent.useCss) return 'scale-125';
    const map: Record<string, string> = {
      emerald: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
      indigo: 'bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]',
      blue: 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]',
      sky: 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]',
      white: 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]',
    };
    return `scale-125 ${map[accent.value] ?? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]'}`;
  };

  return (
    <>
      {/* Scroll Indicator */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-1 transition-opacity duration-700 ease-out"
        style={{ opacity: scrolled ? 0 : 1 }}
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-zinc-400" strokeWidth={1.5} />
      </div>

      {/* Section Dots - desktop only */}
      <nav
        aria-label="Navegacion por secciones"
        className="pointer-events-none fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
      >
        {sections.map(({ id, label }, i) => {
          const isActive = activeSection === id;
          return (
            <div key={id} className="group relative flex items-center pointer-events-auto">
              <span
                className="absolute right-6 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[11px] font-medium text-zinc-300 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
                style={{ pointerEvents: 'none' }}
              >
                {String(i + 1).padStart(2, '0')} {label}
              </span>
              <button
                onClick={() => handleDotClick(id)}
                aria-label={`Ir a ${label}`}
                className={[
                  'h-2 w-2 rounded-full transition-all duration-300 ease-out focus:outline-none',
                  isActive ? getActiveDotClass() : 'bg-zinc-500 hover:bg-zinc-300 hover:scale-110',
                ].join(' ')}
                style={isActive && accent.useCss ? activeDotStyle : {}}
              />
            </div>
          );
        })}
      </nav>
    </>
  );
}
