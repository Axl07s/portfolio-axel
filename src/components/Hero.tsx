import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto text-left overflow-hidden min-h-[90dvh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center w-full">
        {/* Left text column */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 col-span-1 lg:col-span-7 relative z-10 lg:pr-12"
        >
          <motion.div variants={item}>
            <h1 className="font-display text-[3.25rem] leading-[1.08] sm:text-[4rem] md:text-[76px] lg:text-[88px] font-bold tracking-[-0.04em] text-neutral-50">
              {lang === 'es' ? 'Plataformas web modernas' : 'High-performance web'}
              <br/>
              <span className="text-neutral-500">
                {lang === 'es' ? 'y sistemas con IA listos para producción.' : '& applied AI systems for business.'}
              </span>
            </h1>
          </motion.div>

          <motion.p variants={item} className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed max-w-[40ch]">
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={item} className="pt-6 flex flex-wrap items-center gap-4">
            <a
              href={lang === 'es' ? "https://wa.me/593995267503?text=Hola%20Axel,%20quiero%20cotizar%20un%20proyecto" : "https://wa.me/593995267503?text=Hi%20Axel,%20I%20would%20like%20to%20quote%20a%20project"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold bg-neutral-50 text-neutral-950 hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              <span>{t('hero.cta.primary')}</span>
              <ArrowRight className="w-4 h-4 text-neutral-950 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-neutral-300 hover:text-neutral-50 hover:bg-white/5 border border-white/10 transition-all duration-300"
            >
              <span>{t('hero.cta.secondary')}</span>
            </a>
          </motion.div>

          {/* Minimalist Commercial Proof Strip */}
          <motion.div variants={item} className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <span className="text-2xl font-bold tracking-tight text-white font-mono block">10+</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-mono">
                {lang === 'es' ? 'Sistemas B2B' : 'B2B Systems'}
              </span>
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-white font-mono block">&lt; 1s</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-mono">
                {lang === 'es' ? 'Carga Instantánea' : 'Instant Loading'}
              </span>
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-white font-mono block">100%</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-mono">
                {lang === 'es' ? 'Datos Aislados' : 'Data Isolation'}
              </span>
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-emerald-400 font-mono block">5.0 ★</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-mono">
                {lang === 'es' ? 'Fiverr Verificado' : 'Fiverr Verified'}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right asset column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="col-span-1 lg:col-span-5 relative"
        >
          {/* Subtle gradient behind image */}
          <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] -z-10 rounded-[40px] transform-gpu" />
          
          {/* High-end Mockup Frame */}
          <div className="relative rounded-[24px] bg-[#0a0a0a] border border-white/[0.08] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="flex items-center px-4 py-3 bg-[#0f0f0f] border-b border-white/[0.05] gap-2">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              </div>
              <div className="mx-auto px-6 py-1 rounded-md bg-[#1a1a1a] text-[10px] font-mono text-neutral-500 border border-white/[0.05]">
                nexus-dashboard.app
              </div>
            </div>
            <img 
              src="/projects/nexus_01.png" 
              alt="Nexus B2B Platform Mockup" 
              className="w-full h-auto aspect-[16/10] object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};





