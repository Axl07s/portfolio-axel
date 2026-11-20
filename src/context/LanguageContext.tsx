import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';
import type { TranslationKey } from '../data/translations';

export type Language = 'en' | 'es';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLang?: Language }> = ({ children, initialLang }) => {
  const getInitialLang = (): Language => {
    if (initialLang) return initialLang;
    if (typeof window === 'undefined') return 'es';
    try {
      const saved = localStorage.getItem('portfolio_lang') as Language;
      if (saved === 'en' || saved === 'es') return saved;
      const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
      return browserLang.toLowerCase().startsWith('en') ? 'en' : 'es';
    } catch {
      return 'es';
    }
  };

  const [lang, setLangState] = useState<Language>(getInitialLang);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('portfolio_lang', newLang);
      } catch {}
    }
  };

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
