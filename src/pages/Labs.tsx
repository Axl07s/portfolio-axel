import { PersonalProjectsSection } from '../components/PersonalProjectsSection';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Shield, Smartphone, Terminal, Cpu } from 'lucide-react';

export function Labs() {
  const { lang } = useLanguage();

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen animate-fadeIn">
      <Helmet>
        <title>{lang === 'es' ? 'Laboratorio & Sistemas Deep Tech - Axel Molineros' : 'Labs & Deep Tech Systems - Axel Molineros'}</title>
        <meta name="description" content={lang === 'es' ? 'Ingeniería de sistemas a bajo nivel en C/C++ (EDR/ETW) y arquitecturas móviles offline-first desarrolladas por Axel Molineros.' : 'Low-level systems engineering in C/C++ (EDR/ETW) and offline-first mobile architectures by Axel Molineros.'} />
      </Helmet>

      <div className="max-w-4xl mb-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5" />
          <span>{lang === 'es' ? 'Investigación Aplicada & Kernel Systems' : 'Applied Research & Kernel Systems'}</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-display font-bold tracking-tight text-neutral-50">
          {lang === 'es' ? 'Laboratorio & ' : 'Labs & '}
          <span className="text-neutral-500">
            {lang === 'es' ? 'Sistemas Deep Tech' : 'Deep Tech Systems'}
          </span>
        </h1>

        <p className="text-lg text-neutral-300 max-w-2xl leading-relaxed">
          {lang === 'es' 
            ? 'Investigación y desarrollo de software de misión crítica: detección de amenazas a nivel de kernel en C/C++ (EDR/ETW) y arquitecturas móviles offline-first con persistencia local ultrarrápida.' 
            : 'Research and development of mission-critical software: low-level kernel threat detection in C/C++ (EDR/ETW) and offline-first mobile architectures with ultra-fast local persistence.'}
        </p>

        {/* Lab Capabilities Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          <div className="p-3.5 rounded-xl bg-[#0d0d12] border border-white/[0.08] flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-neutral-200">Kernel ETW</div>
              <div className="text-neutral-500 text-[10px]">Windows Ring 0/3</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0d0d12] border border-white/[0.08] flex items-center gap-2.5">
            <Smartphone className="w-4 h-4 text-indigo-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-neutral-200">Offline-First</div>
              <div className="text-neutral-500 text-[10px]">Isar NoSQL &lt;50ms</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0d0d12] border border-white/[0.08] flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-neutral-200">C/C++ & Dart</div>
              <div className="text-neutral-500 text-[10px]">Zero IPC Bottlenecks</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0d0d12] border border-white/[0.08] flex items-center gap-2.5">
            <Terminal className="w-4 h-4 text-indigo-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-neutral-200">YARA & Heuristics</div>
              <div className="text-neutral-500 text-[10px]">Memory Threat Defense</div>
            </div>
          </div>
        </div>
      </div>

      <PersonalProjectsSection lang={lang} hideHeader={true} />
    </div>
  );
}
