import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import { motion } from 'framer-motion';
import { ScrambleText } from './effects/ScrambleText';
import { Particles } from './effects/Particles';
import { TechCarousel } from './TechCarousel';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto text-left overflow-hidden min-h-[90dvh] flex items-center">
      
      <Particles />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left text column */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 col-span-1 lg:col-span-5 relative z-10"
        >
          
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] uppercase font-mono tracking-widest font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]" />
            <ScrambleText text={t('hero.status')} delay={800} />
          </motion.div>

          <motion.div variants={item}>
            <h1 className="font-display text-[3.5rem] leading-[0.95] md:text-[72px] lg:text-[84px] font-bold tracking-tighter text-white">
              {lang === 'es' ? 'Construyo software' : 'I ship software'}
              <br/>
              <span className="text-zinc-500">
                {lang === 'es' ? 'en el que tu negocio puede confiar.' : 'your business can rely on.'}
              </span>
            </h1>
          </motion.div>

          <motion.p variants={item} className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-[45ch]">
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={item} className="pt-4">
            <a
              href={lang === 'es' ? "https://wa.me/593995267503?text=Hola%20Axel,%20quiero%20cotizar%20un%20proyecto" : "https://wa.me/593995267503?text=Hi%20Axel,%20I%20would%20like%20to%20quote%20a%20project"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-sm text-sm font-bold bg-white text-black hover:bg-zinc-200 emil-btn"
            >
              <span>{t('hero.cta.primary')}</span>
              <MessageCircle className="w-4 h-4 text-black" />
            </a>
          </motion.div>
          
          <motion.div variants={item} className="w-full pt-12">
            <TechCarousel />
          </motion.div>
        </motion.div>

        {/* Right asset column */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="col-span-1 lg:col-span-7 relative"
        >
          {/* Subtle gradient behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent blur-3xl -z-10 rounded-[40px]" />
          
          {/* Mockup Frame */}
          <div className="relative rounded-[20px] bg-zinc-900 border border-zinc-800 p-2 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="rounded-[12px] overflow-hidden border border-zinc-800/50 bg-zinc-950">
              <div className="flex items-center px-4 py-3 bg-zinc-900/50 border-b border-zinc-800/50 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700/50" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700/50" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700/50" />
                </div>
                <div className="mx-auto px-6 py-1 rounded bg-zinc-950/50 text-[10px] font-mono text-zinc-500 border border-zinc-800/50">
                  nexus-dashboard.app
                </div>
              </div>
              <img 
                src="/projects/nexus_01.png" 
                alt="Nexus B2B Platform Mockup" 
                className="w-full h-auto aspect-[16/10] object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};





