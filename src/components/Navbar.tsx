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
    { path: '/labs', labelES: 'Laboratorio', labelEN: 'Labs' }
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
      scrolled 
        ? 'glass-obsidian border-b border-indigo-500/20 py-3 shadow-2xl bg-zinc-950/80 backdrop-blur-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-900 flex items-center justify-center border border-indigo-500/40 shadow-glow-indigo group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white">AXEL<span className="text-indigo-400">.DEV</span></span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-zinc-950/80 text-zinc-300 border border-zinc-800 shadow-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {lang === 'es' ? 'DISPONIBLE' : 'AVAILABLE'}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono hidden sm:block">
              {lang === 'es' ? 'Full-Stack & AI Product Engineer' : 'Full-Stack & AI Product Engineer'}
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-300">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-colors uppercase tracking-widest ${isActive ? 'text-indigo-400 font-bold' : 'hover:text-indigo-400'}`}
              >
                {lang === 'es' ? link.labelES : link.labelEN}
              </Link>
            );
          })}
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 transition-colors uppercase font-bold"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 text-white border border-indigo-500/40 shadow-glow-indigo hover:brightness-110 active:scale-95 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t('hero.cta.primary')}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white md:hidden"
          aria-label={lang === 'es' ? 'Abrir menú de navegación' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-indigo-500/20 px-6 py-4 space-y-3 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm py-1 font-medium ${isActive ? 'text-indigo-400' : 'text-zinc-200 hover:text-indigo-400'}`}
              >
                {lang === 'es' ? link.labelES : link.labelEN}
              </Link>
            );
          })}
          <button onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} className="w-full mt-4 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-lg px-4 py-3 flex items-center justify-center gap-2 font-bold uppercase text-xs tracking-widest active:scale-95 transition-transform"><Globe className="w-4 h-4" />{lang === "es" ? "Switch to English" : "Cambiar a Español"}</button>
          <div className="pt-2 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white"
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




