import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PersonalProject } from '../../data/personalProjectsData';
import { Smartphone } from 'lucide-react';

interface CinematicEditorialHeroProps {
  project: PersonalProject;
  lang: 'es' | 'en';
}

export function CinematicEditorialHero({ project, lang }: CinematicEditorialHeroProps) {
  const [phase, setPhase] = useState(0);

  // Phone mockup images cycle
  const images = [
    '/projects/puce_login.png',
    '/projects/puce_home.png',
    '/projects/puce_grades.png',
    '/projects/puce_attendance.png'
  ];

  useEffect(() => {
    // Cinematic Timeline for Editorial Layout
    const t1 = setTimeout(() => setPhase(1), 2500);
    const t2 = setTimeout(() => setPhase(2), 5500);
    const t3 = setTimeout(() => setPhase(3), 10000);
    const t4 = setTimeout(() => setPhase(4), 16000);
    
    const loop = setInterval(() => {
      setPhase(0);
      setTimeout(() => setPhase(1), 2500);
      setTimeout(() => setPhase(2), 5500);
      setTimeout(() => setPhase(3), 10000);
      setTimeout(() => setPhase(4), 16000);
    }, 20000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(loop);
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh] bg-[#f8f9fa] dark:bg-[#0a0a0b] overflow-hidden font-sans text-zinc-900 dark:text-zinc-100 transition-colors duration-1000">
      <AnimatePresence mode="wait">
        {/* PHASE 0: Minimalist statement */}
        {phase === 0 && (
          <motion.div 
            key="phase0"
            className="absolute inset-0 flex flex-col items-center justify-center z-50"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-400"
            >
              {lang === 'es' ? 'Diseñado para Estudiantes' : 'Designed for Students'}
            </motion.div>
          </motion.div>
        )}

        {/* PHASE 1: Massive Typography & Subtitle */}
        {phase === 1 && (
          <motion.div 
            key="phase1"
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // smooth easeOut
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-500 dark:text-indigo-400 mb-8 uppercase tracking-widest">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Arquitectura Flutter & BLoC</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-8 max-w-5xl text-zinc-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl font-light text-zinc-500 dark:text-zinc-400 max-w-3xl leading-relaxed">
              {lang === 'es' ? project.descriptionES : project.descriptionEN}
            </p>
          </motion.div>
        )}

        {/* PHASE 2: Phone Mockups Cascade */}
        {phase === 2 && (
          <motion.div 
            key="phase2"
            className="absolute inset-0 flex items-center justify-center pt-24"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2 }}
          >
            <div className="relative w-full max-w-5xl h-full flex justify-center items-end gap-6 pb-12">
              {/* Left Phone (offset) */}
              <motion.div 
                initial={{ y: 200, opacity: 0, rotate: -10 }}
                animate={{ y: 40, opacity: 1, rotate: -5 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="hidden md:block w-64 h-[500px] rounded-[3rem] border-8 border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl relative bg-black"
              >
                <img src={images[1]} alt="Home" className="w-full h-full object-cover" />
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-b-3xl mx-16"></div>
              </motion.div>

              {/* Center Phone (Main) */}
              <motion.div 
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: -40, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="w-72 md:w-80 h-[550px] md:h-[600px] rounded-[3rem] border-8 border-zinc-800 dark:border-zinc-700 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative bg-black z-20"
              >
                <img src={images[0]} alt="Login" className="w-full h-full object-cover" />
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 dark:bg-zinc-700 rounded-b-3xl mx-20"></div>
              </motion.div>

              {/* Right Phone (offset) */}
              <motion.div 
                initial={{ y: 200, opacity: 0, rotate: 10 }}
                animate={{ y: 40, opacity: 1, rotate: 5 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="hidden md:block w-64 h-[500px] rounded-[3rem] border-8 border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl relative bg-black"
              >
                <img src={images[2]} alt="Grades" className="w-full h-full object-cover" />
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-b-3xl mx-16"></div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* PHASE 3: Features & Tech Stack */}
        {phase === 3 && (
          <motion.div 
            key="phase3"
            className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-zinc-900 dark:text-white mb-4 tracking-tight">{lang === 'es' ? 'Arquitectura Offline-First' : 'Offline-First Architecture'}</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">{lang === 'es' ? 'Sincronización transparente en segundo plano cuando la conectividad es restaurada.' : 'Seamless background synchronization when connectivity is restored.'}</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
              {project.tech.map((tech, i) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-6 py-3 bg-white dark:bg-zinc-900 shadow-xl dark:shadow-none border border-zinc-100 dark:border-zinc-800 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* PHASE 4: Outro */}
        {phase === 4 && (
          <motion.div 
            key="phase4"
            className="absolute inset-0 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="text-xl font-medium text-zinc-400 mb-4 tracking-widest uppercase">Experience</div>
              <div className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter">
                ELEGANCE
              </div>
            </motion.div>
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
        <span className="text-[10px] text-zinc-400 tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-6 border-2 border-zinc-400 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-1 bg-zinc-400 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}


