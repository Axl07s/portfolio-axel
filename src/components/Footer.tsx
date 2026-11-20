import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.08] bg-[#141413] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1f1f1d] border border-white/[0.08] flex items-center justify-center text-[#C8A97E] font-serif font-bold text-xs">
              A
            </div>
            <div>
              <span className="font-bold text-sm text-[#F5F5F0]">AXEL MOLINEROS</span>
              <p className="text-[11px] text-[#A3A39E] font-medium">
                {lang === 'es' ? 'Sistemas Web y Automatización para Negocios' : 'Web Systems & Business Automation'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#A3A39E]">
            <Link to="/projects" className="hover:text-[#F5F5F0] transition-colors">
              {lang === 'es' ? 'Soluciones' : 'Solutions'}
            </Link>
            <a href="/#services" className="hover:text-[#F5F5F0] transition-colors">
              {lang === 'es' ? 'Servicios' : 'Services'}
            </a>
            <a href="#contact" className="hover:text-[#F5F5F0] transition-colors">
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </a>
            <Link to="/labs" className="hover:text-[#C8A97E] text-[#A3A39E]/60 transition-colors font-mono text-[11px]">
              {lang === 'es' ? 'Laboratorio Técnico (/labs)' : 'Technical Lab (/labs)'}
            </Link>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3A39E]/80">
          <p>© {new Date().getFullYear()} Axel Molineros. {t('footer.legal')}</p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#A3A39E]/70">
            <span>Quito, Ecuador &bull; {lang === 'es' ? 'Remoto Global' : 'Worldwide Remote'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
