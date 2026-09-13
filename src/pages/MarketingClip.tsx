import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personalProjects } from '../data/personalProjectsData';
import { ScrambleText } from '../components/effects/ScrambleText';
import { Particles } from '../components/effects/Particles';

export function MarketingClip() {
  const { id } = useParams();
  const project = personalProjects.find((p) => p.id === id);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 3000);
    const t2 = setTimeout(() => setPhase(2), 6500);
    const t3 = setTimeout(() => setPhase(3), 11000);
    const t4 = setTimeout(() => setPhase(4), 16000);
    
    const loop = setInterval(() => {
      setPhase(0);
      setTimeout(() => setPhase(1), 3000);
      setTimeout(() => setPhase(2), 6500);
      setTimeout(() => setPhase(3), 11000);
      setTimeout(() => setPhase(4), 16000);
    }, 22000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(loop);
    };
  }, []);

  if (!project) return <Navigate to="/" />;

  const isCyber = project.id === 'suiteseguridad';
  const accentColor = isCyber ? '#10b981' : '#6366f1'; 

  // Hardcode some metrics for the visual clip if they don't exist in PersonalProject
  const mockMetrics = [
    { value: '+99%', label: 'DETECCIÓN EDR' },
    { value: '< 5ms', label: 'LATENCIA KERNEL' },
    { value: 'ZERO', label: 'FALSOS POSITIVOS' },
  ];

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden font-mono text-zinc-200">
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
                [ SYSTEM INITIALIZATION ]
              </motion.div>
              <div className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase drop-shadow-2xl">
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
        {(phase === 1 || phase === 2) && (
          <motion.div 
            key="phase1"
            className="absolute inset-0 flex items-center justify-center"
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
            <div className="relative w-[80vw] h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: 'linear' }}
              />
              <div className="absolute bottom-10 left-10 z-20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="text-sm font-bold tracking-widest mb-2"
                  style={{ color: accentColor }}
                >
                  {project.layoutStyle.toUpperCase()} ARCHITECTURE
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-5xl md:text-7xl font-black text-white"
                >
                  {project.title}
                </motion.h1>
              </div>
            </div>
          </motion.div>
        )}

        {/* PHASE 3: Metrics & Bento Pop */}
        {phase === 3 && (
          <motion.div 
            key="phase3"
            className="absolute inset-0 flex items-center justify-center p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-3 gap-6 w-full max-w-6xl h-[70vh]">
              {mockMetrics.map((metric, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i * 0.2, type: 'spring' }}
                  className="bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: (i * 0.2) + 0.5, type: 'spring' }}
                    className="text-6xl font-black mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    style={{ color: accentColor }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-zinc-400 font-medium tracking-wide uppercase text-sm">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="col-span-3 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-wrap gap-4 justify-center items-center mt-8"
              >
                <div className="w-full text-center text-zinc-500 tracking-widest text-xs uppercase mb-2">Tech Stack</div>
                {project.tech.map((tech, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (i * 0.1) }}
                    className="px-4 py-2 bg-black/50 border border-white/5 rounded-lg text-white font-medium text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* PHASE 4: Outro */}
        {phase === 4 && (
          <motion.div 
            key="phase4"
            className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute inset-0 blur-3xl opacity-30" style={{ backgroundColor: accentColor }} />
              <div className="text-2xl font-light text-zinc-400 mb-2 text-center">Engineered & Designed by</div>
              <div className="text-5xl md:text-8xl font-black text-white tracking-tighter">
                AXEL
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="mt-12 text-zinc-500 uppercase tracking-[0.4em] text-xs"
            >
              Disponible para nuevos desafíos
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
