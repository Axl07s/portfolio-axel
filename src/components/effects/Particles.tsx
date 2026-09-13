import React from 'react';
import { motion } from 'framer-motion';

interface ParticlesProps {
  density?: number;
  color?: string;
  maxOpacity?: number;
}

export const Particles: React.FC<ParticlesProps> = ({ 
  density = 30, 
  color = '#6366f1', // default indigo-500 equivalent
  maxOpacity = 0.5 
}) => {
  const particles = Array.from({ length: density });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ backgroundColor: color, width: '4px', height: '4px' }}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * maxOpacity + 0.1,
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            x: [null, (Math.random() - 0.5) * 100],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};
