const fs = require('fs');
let cinematic = fs.readFileSync('src/components/project-layouts/CinematicHero.tsx', 'utf8');

// Inject HeroAbstract import
if (!cinematic.includes('HeroAbstract')) {
  cinematic = cinematic.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';\nimport { HeroAbstract } from '../HeroAbstract';");
}

// Replace <motion.img src={project.image} ... /> with HeroAbstract wrapper
// We need to match the block:
/*
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-top md:object-center"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: 'linear' }}
              />
*/
const imgRegex = /<motion\.img[^>]*src=\{project\.image\}[^>]*\/>/s;

const heroReplacement = `
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
`;

if (cinematic.match(imgRegex)) {
  cinematic = cinematic.replace(imgRegex, heroReplacement);
}

// Speed up the sequence! It's too slow.
// setTimeout(() => setPhase(1), 2000); // 1.5s
// setTimeout(() => setPhase(2), 6000); // 3s
// setTimeout(() => setPhase(3), 9000); // 4.5s
// setTimeout(() => setPhase(4), 12000); // 6.5s
// setTimeout(() => setPhase(5), 16000); // 8s
cinematic = cinematic.replace('setTimeout(() => setPhase(1), 2000);', 'setTimeout(() => setPhase(1), 1000);');
cinematic = cinematic.replace('setTimeout(() => setPhase(2), 6000);', 'setTimeout(() => setPhase(2), 2500);');
cinematic = cinematic.replace('setTimeout(() => setPhase(3), 9000);', 'setTimeout(() => setPhase(3), 4500);');
cinematic = cinematic.replace('setTimeout(() => setPhase(4), 12000);', 'setTimeout(() => setPhase(4), 6500);');
cinematic = cinematic.replace('setTimeout(() => setPhase(5), 16000);', 'setTimeout(() => setPhase(5), 8500);');

fs.writeFileSync('src/components/project-layouts/CinematicHero.tsx', cinematic);
