import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const navLinks = [
    { path: '/projects', labelES: 'Soluciones', labelEN: 'Solutions' },
    { path: '/#services', labelES: 'Servicios', labelEN: 'Services' },
  ];

  const handleServicesClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
      scrolled 
        ? 'glass-obsidian border-b border-white/[0.08] py-3.5 shadow-xl bg-[#141413]/90 backdrop-blur-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#1f1f1d] flex items-center justify-center border border-white/[0.08] group-hover:border-[#C8A97E]/50 transition-colors">
            <span className="font-serif font-bold text-sm text-[#C8A97E]">A</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-[#F5F5F0]">AXEL.DEV</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-medium bg-[#1f1f1d] text-[#A3A39E] border border-white/[0.08] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
                {lang === 'es' ? 'DISPONIBLE' : 'AVAILABLE'}
              </span>
            </div>
            <p className="text-[11px] text-[#A3A39E] font-medium hidden sm:block">
              {lang === 'es' ? 'Sistemas Web y Automatización para Negocios' : 'Web Systems & Business Automation'}
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-[#A3A39E]">
          {navLinks.map((link) => {
            const isServices = link.path === '/#services';
            const isActive = !isServices && location.pathname.startsWith(link.path);
            
            if (isServices) {
              return (
                <a
                  key={link.path}
                  href="/#services"
                  onClick={handleServicesClick}
                  className="transition-colors uppercase tracking-widest hover:text-[#F5F5F0]"
                >
                  {lang === 'es' ? link.labelES : link.labelEN}
                </a>
              );
            }

            return (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-colors uppercase tracking-widest ${isActive ? 'text-[#F5F5F0] font-bold' : 'hover:text-[#F5F5F0]'}`}
              >
                {lang === 'es' ? link.labelES : link.labelEN}
              </Link>
            );
          })}
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-1.5 text-[#A3A39E] hover:text-[#F5F5F0] transition-colors uppercase font-bold"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold bg-[#F5F5F0] text-[#141413] hover:bg-[#E8E8E2] border border-transparent transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t('hero.cta.primary')}</span>
          </button>
        </div>

        {/* Mobile Language Switcher & Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleLanguage} 
            className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#1f1f1d] border border-white/[0.08] text-[#A3A39E] hover:text-[#F5F5F0] text-xs font-mono font-bold min-h-[44px] min-w-[44px]"
            aria-label={lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-[#1f1f1d] border border-white/[0.08] text-[#A3A39E] hover:text-[#F5F5F0] min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={lang === 'es' ? 'Abrir menú de navegación' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141413]/98 backdrop-blur-xl border-b border-white/[0.08] px-6 py-5 space-y-4 animate-fadeIn shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isServices = link.path === '/#services';
              if (isServices) {
                return (
                  <a
                    key={link.path}
                    href="/#services"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleServicesClick(e);
                    }}
                    className="flex items-center min-h-[48px] px-3 rounded-xl text-base font-medium text-[#A3A39E] hover:text-[#F5F5F0] hover:bg-white/[0.04] transition-colors"
                  >
                    {lang === 'es' ? link.labelES : link.labelEN}
                  </a>
                );
              }
              const isActive = location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center min-h-[48px] px-3 rounded-xl text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-[#F5F5F0] font-bold bg-white/[0.06]' 
                      : 'text-[#A3A39E] hover:text-[#F5F5F0] hover:bg-white/[0.04]'
                  }`}
                >
                  {lang === 'es' ? link.labelES : link.labelEN}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.08] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-[#F5F5F0] text-[#141413] hover:bg-[#E8E8E2] min-h-[48px] shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#141413]" />
              <span>{t('hero.cta.primary')}</span>
            </button>
            <button 
              onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} 
              className="w-full bg-[#1f1f1d] border border-white/[0.08] text-[#A3A39E] hover:text-[#F5F5F0] rounded-xl px-4 py-3 flex items-center justify-center gap-2 font-bold uppercase text-xs tracking-widest min-h-[44px]"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === "es" ? "Switch to English (EN)" : "Cambiar a Español (ES)"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};




