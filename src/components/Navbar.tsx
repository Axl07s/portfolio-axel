import React, { useState, useEffect } from 'react';
import { Terminal, MessageCircle, Menu, X, Globe } from 'lucide-react';
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
    { path: '/projects', labelES: 'Proyectos B2B', labelEN: 'B2B Projects' },
    { path: '/labs', labelES: 'Ingeniería', labelEN: 'Labs' }
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
      scrolled 
        ? 'glass-obsidian border-b border-neutral-800/60 py-3 shadow-xl bg-neutral-950/80 backdrop-blur-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-neutral-50" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-neutral-50">AXEL<span className="text-neutral-500">.DEV</span></span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-neutral-950/80 text-neutral-300 border border-neutral-800 shadow-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]" />
                {lang === 'es' ? 'DISPONIBLE' : 'AVAILABLE'}
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-mono hidden sm:block">
              {lang === 'es' ? 'Full-Stack & AI Product Engineer' : 'Full-Stack & AI Product Engineer'}
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-300">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-colors uppercase tracking-widest ${isActive ? 'text-neutral-50 font-bold' : 'hover:text-neutral-50'}`}
              >
                {lang === 'es' ? link.labelES : link.labelEN}
              </Link>
            );
          })}
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-1.5 text-neutral-400 hover:text-neutral-50 transition-colors uppercase font-bold"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold bg-neutral-50 text-black border border-white hover:bg-neutral-200 hover:border-neutral-200 emil-btn"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t('hero.cta.primary')}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-neutral-50 md:hidden"
          aria-label={lang === 'es' ? 'Abrir menú de navegación' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 px-6 py-4 space-y-3 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm py-1 font-medium ${isActive ? 'text-neutral-50' : 'text-neutral-400 hover:text-neutral-50'}`}
              >
                {lang === 'es' ? link.labelES : link.labelEN}
              </Link>
            );
          })}
          <button onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} className="w-full mt-4 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-neutral-50 rounded-md px-4 py-3 flex items-center justify-center gap-2 font-bold uppercase text-xs tracking-widest emil-btn"><Globe className="w-4 h-4" />{lang === "es" ? "Switch to English" : "Cambiar a Español"}</button>
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-bold bg-neutral-50 text-black hover:bg-neutral-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('hero.cta.primary')}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};




