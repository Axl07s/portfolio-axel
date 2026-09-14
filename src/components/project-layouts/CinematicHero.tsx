import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroAbstract } from '../HeroAbstract';
import type { PersonalProject } from '../../data/personalProjectsData';
import { ScrambleText } from '../effects/ScrambleText';
import { Particles } from '../effects/Particles';

interface CinematicHeroProps {
  project: PersonalProject;
  lang: 'es' | 'en';
}

export function CinematicHero({ project, lang }: CinematicHeroProps) {
  const [phase, setPhase] = useState(0);

  const isCyber = project.id === 'suiteseguridad';
  const accentColor = isCyber ? '#10b981' : '#6366f1'; 

  

  useEffect(() => {
    // Just 2 fast phases, no loops.
    const t1 = setTimeout(() => setPhase(1), 500); // 0.5s scramble text
    const t2 = setTimeout(() => setPhase(2), 2000); // 1.5s visual pop

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh] bg-black overflow-hidden font-mono text-zinc-200">
      <Particles density={isCyber ? 100 : 50} color={accentColor} maxOpacity={0.3} />
      
      <AnimatePresence mode="wait">
        {/* PHASE 0: Terminal Boot Intro */}
        {phase === 0 && (
          <motion.div 
            key="phase0"
            className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50"
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-xs text-zinc-500 mb-4 tracking-[0.3em]"
              >
                {lang === 'es' ? '[ INICIALIZANDO SISTEMA ]' : '[ SYSTEM INITIALIZATION ]'}
              </motion.div>
              <div className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase drop-shadow-2xl px-4 text-center">
                <ScrambleText text={project.title} />
              </div>
              <motion.div 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ delay: 1.5, duration: 0.8 }}
                style={{ backgroundColor: accentColor }}
                className="h-[2px] w-full mt-6"
              />
            </div>
          </motion.div>
        )}

        {/* PHASE 1 & 2: Hero Visuals & 3D Pan */}
        {phase >= 1 && (
          <motion.div 
            key="phase1"
            className="absolute inset-0 flex items-center justify-center pt-16"
            initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            animate={{ 
              opacity: 1, 
              scale: phase === 2 ? 1.05 : 1,
              rotateX: phase === 2 ? 0 : 5 
            }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: phase === 2 ? 5 : 1.5, ease: 'easeOut' }}
            style={{ perspective: 1000 }}
          >
            <div className="relative w-[90vw] md:w-[80vw] h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
              
              <motion.div 
                className="w-full h-full absolute inset-0"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: 'linear' }}
              >
                {project.id === 'suiteseguridad' || project.id === 'jarvis-hud' || project.id === 'ai-rag-knowledge' ? (
                  <HeroAbstract theme={project.id === 'suiteseguridad' ? 'cyber' : project.id === 'jarvis-hud' ? 'ai' : 'data'} />
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                )}
              </motion.div>

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="text-xs md:text-sm font-bold tracking-widest mb-2"
                  style={{ color: accentColor }}
                >
                  {project.layoutStyle.toUpperCase()} ARCHITECTURE
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-4xl md:text-7xl font-black text-white"
                >
                  {project.title}
                </motion.h1>
              </div>
            </div>
          </motion.div>
        )}

        </AnimatePresence>
      
      {/* Scroll indicator hinting there is content below */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-40"
      >
        <span className="text-[10px] text-zinc-500 tracking-widest uppercase mb-2">{lang === 'es' ? 'Scroll' : 'Scroll'}</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-6 border-2 border-zinc-600 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-1 bg-zinc-400 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}


