import { PersonalProjectsSection } from '../components/PersonalProjectsSection';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

export function Labs() {
  const { lang } = useLanguage();

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen animate-fadeIn">
      <Helmet>
        <title>{lang === 'es' ? 'Laboratorio & Sistemas de Bajo Nivel - Axel Molineros' : 'Labs & Low-Level Systems - Axel Molineros'}</title>
        <meta name="description" content={lang === 'es' ? 'Ingeniería de sistemas a bajo nivel en C/C++ (EDR/ETW) y arquitecturas móviles offline-first desarrolladas por Axel Molineros.' : 'Low-level systems engineering in C/C++ (EDR/ETW) and offline-first mobile architectures by Axel Molineros.'} />
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
            ? 'Ingeniería de sistemas e investigación aplicada: detección de amenazas a nivel de kernel en C/C++ (EDR/ETW) y arquitecturas móviles offline-first.' 
            : 'Systems engineering and applied research: low-level threat detection in C/C++ (EDR/ETW) and offline-first mobile architectures.'}
        </p>
      </div>

      <PersonalProjectsSection lang={lang.toUpperCase() as 'ES' | 'EN'} hideHeader={true} />
    </div>
  );
}
