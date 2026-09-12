import { PersonalProjectsSection } from '../components/PersonalProjectsSection';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

export function Labs() {
  const { lang } = useLanguage();

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen animate-fadeIn">
      <Helmet>
        <title>Labs & Experiments - Axel Molineros</title>
        <meta name="description" content="Academic, experimental, and personal deep-dive projects." />
      </Helmet>

      <div className="max-w-3xl mb-16 space-y-6">
        <h1 className="text-5xl sm:text-7xl font-medium tracking-tighter text-white">
          {lang === 'es' ? 'Laboratorio & ' : 'Labs & '}
          <span className="text-zinc-500">
            {lang === 'es' ? 'Experimentos' : 'Experiments'}
          </span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl">
          {lang === 'es' 
            ? 'Proyectos de investigación profunda, sistemas a bajo nivel y experimentación tecnológica.' 
            : 'Deep-dive research projects, low-level systems, and technological experimentation.'}
        </p>
      </div>

      <PersonalProjectsSection lang={lang.toUpperCase() as 'ES' | 'EN'} hideHeader={true} />
    </div>
  );
}
