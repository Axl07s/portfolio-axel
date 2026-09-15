const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CinematicHero.tsx', 'utf8');

// Inject import
if (!content.includes('HeroAbstract')) {
  content = content.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';\nimport { HeroAbstract } from '../HeroAbstract';");
}

// Find the floating mockup and replace it
const floatingMockupRegex = /<motion\.div \n\s*className="w-full h-full absolute inset-0 flex items-center justify-center p-6 md:p-24 overflow-hidden".*?<\/motion\.div>/s;

const abstractCall = `
              <motion.div 
                className="w-full h-full absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'linear' }}
              >
                {project.id === 'suiteseguridad' || project.id === 'jarvis-hud' || project.id === 'ai-rag-knowledge' ? (
                  <HeroAbstract theme={project.id === 'suiteseguridad' ? 'cyber' : project.id === 'jarvis-hud' ? 'ai' : 'data'} />
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                )}
              </motion.div>
`;

if (content.match(floatingMockupRegex)) {
  content = content.replace(floatingMockupRegex, abstractCall);
}

fs.writeFileSync('src/components/project-layouts/CinematicHero.tsx', content);
