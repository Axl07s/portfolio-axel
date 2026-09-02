import React, { useState, useEffect } from 'react';
import { Terminal, MessageCircle, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-obsidian border-b border-red-500/20 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center border border-red-500/40 shadow-glow-red group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white">AXEL<span className="text-red-500">.DEV</span></span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                AVAILABLE FOR HIRE
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono hidden sm:block">Full-Stack Engineer & SaaS Architect</p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-300">
          <a href="#projects" className="hover:text-red-400 transition-colors">Featured Projects</a>
          <a href="#tech-stack" className="hover:text-red-400 transition-colors">Tech Stack</a>
          <a href="#certifications" className="hover:text-red-400 transition-colors">Certifications</a>
          <a href="#ecuador-b2b" className="flex items-center gap-1 text-zinc-300 hover:text-red-400 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Servicios Ecuador</span>
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-red-800 text-white border border-red-500/40 shadow-glow-red hover:brightness-110 active:scale-95 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-obsidian border-b border-red-500/20 px-6 py-4 space-y-3 animate-fadeIn">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-200 hover:text-red-400 py-1"
          >
            Featured Projects
          </a>
          <a
            href="#tech-stack"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-200 hover:text-red-400 py-1"
          >
            Tech Stack
          </a>
          <a
            href="#certifications"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-200 hover:text-red-400 py-1"
          >
            Certifications
          </a>
          <a
            href="#ecuador-b2b"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-red-400 font-semibold py-1"
          >
            Servicios Ecuador (B2B)
          </a>
          <div className="pt-2 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-red-600 text-white shadow-glow-red"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
