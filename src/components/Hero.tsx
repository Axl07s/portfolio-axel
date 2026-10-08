import React from 'react';
import { ArrowDown, MessageCircle, Code2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
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
    <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left overflow-hidden">
      
      <Particles />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
        }}
      />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8 max-w-3xl"
      >
        
        {/* Minimalist Role Pill */}
        <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 text-zinc-300 text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]" />
          <ScrambleText text={t('hero.status')} delay={800} />
        </motion.div>

        {/* Primary Authentic Headline */}
        <motion.div variants={item}>
          <h1 className="text-[2.5rem] leading-[1.05] sm:leading-[1.1] sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
            {lang === 'es' ? 'Hola, soy Axel. Construyo software en el que ' : "Hey, I'm Axel. I ship software "} 
            <br className="hidden sm:inline" />
            <span className="text-zinc-400">
              {lang === 'es' ? 'tu negocio puede confiar.' : 'your business can rely on.'}
            </span>
          </h1>
        </motion.div>

        {/* Honest, Personal Biography */}
        <motion.p variants={item} className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
          {t('hero.subtitle')}
        </motion.p>

        {/* Clean, Non-Marketing Action CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-start gap-4 pt-4">
          {/* Primary CTA: Quote / Contact */}
          <a
            href={lang === 'es' ? "https://wa.me/593995267503?text=Hola%20Axel,%20quiero%20cotizar%20un%20proyecto" : "https://wa.me/593995267503?text=Hi%20Axel,%20I%20would%20like%20to%20quote%20a%20project"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold bg-white text-black hover:bg-zinc-200 emil-btn"
          >
            <span>{t('hero.cta.primary')}</span>
            <MessageCircle className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
          </a>

          {/* Secondary CTA: Portfolio */}
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 emil-btn"
          >
            <span>{t('hero.cta.secondary')}</span>
            <ArrowDown className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform" />
          </Link>
          
          <a
            href="https://github.com/Axl07s"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 emil-btn"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

      </motion.div>

      {/* Minimalist Engineering Proof Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="mt-16 sm:mt-24 pt-8 sm:pt-10 border-t border-zinc-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left"
      >
        <div>
          <span className="text-2xl font-bold tracking-tight text-white font-mono block">10+</span>
          <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">{lang === 'es' ? 'Proyectos B2B' : 'B2B Projects'}</span>
        </div>
        <div>
          <span className="text-2xl font-bold tracking-tight text-white font-mono block">99/100</span>
          <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">{lang === 'es' ? 'Score de Lighthouse' : 'Lighthouse Score'}</span>
        </div>
        <div>
          <span className="text-2xl font-bold tracking-tight text-white font-mono block">Zero-Trust</span>
          <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">{lang === 'es' ? 'Aislamiento RLS / Auth' : 'RLS & Auth Isolation'}</span>
        </div>
        <div>
          <span className="text-2xl font-bold tracking-tight text-white font-mono flex items-center gap-2">
            5.0 <Sparkles className="w-4 h-4 text-yellow-500/80" />
          </span>
          <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">{lang === 'es' ? 'Fiverr Rating' : 'Fiverr Rating'}</span>
        </div>
      </motion.div>
      <motion.div variants={item} className="w-full">
        <TechCarousel />
      </motion.div>

    </section>
  );
};





