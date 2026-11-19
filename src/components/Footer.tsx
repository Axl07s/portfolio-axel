import React from 'react';
import { Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="border-t border-neutral-800/80 bg-[#050508] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800/60">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-neutral-50">
              <Terminal className="w-4 h-4 text-neutral-50" />
            </div>
            <div>
              <span className="font-extrabold text-sm text-neutral-50">AXEL<span className="text-indigo-400">.DEV</span></span>
              <p className="text-[11px] text-neutral-400">{lang === 'es' ? 'Full-Stack & AI Product Engineer' : 'Full-Stack & AI Product Engineer'}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <Link to="/projects" className="hover:text-indigo-400 transition-colors">{t('nav.projects')}</Link>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">{lang === 'es' ? 'Contacto' : 'Contact'}</a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Axel Molineros. {t('footer.legal')}</p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
            <span>Quito, Ecuador &bull; {lang === 'es' ? 'Remoto Global' : 'Worldwide Remote'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

