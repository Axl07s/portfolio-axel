const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CinematicHero.tsx', 'utf8');

// Replace the HeroAbstract usage with a beautiful floating mockup implementation.
const abstractRegex = /<motion\.div \n\s*className="w-full h-full absolute inset-0"[^>]*>.*?<\/motion\.div>/s;

const floatingMockup = `
              <motion.div 
                className="w-full h-full absolute inset-0 flex items-center justify-center p-6 md:p-24 overflow-hidden"
              >
                {/* Dynamic Pro Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black/40 to-black z-0"></div>
                <div className="absolute w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] opacity-20 blur-[100px] rounded-full z-0" style={{ backgroundColor: accentColor }}></div>
                
                {/* Floating Mockup */}
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="relative z-10 max-w-full max-h-[80%] md:max-h-full object-contain rounded-2xl shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] border border-white/5"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }}
                  transition={{ 
                    scale: { duration: 1.5, ease: "easeOut" },
                    opacity: { duration: 1.5 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                  }}
                />
              </motion.div>
`;

if (content.match(abstractRegex)) {
  content = content.replace(abstractRegex, floatingMockup);
} else {
  console.log("Could not find abstract regex");
}

fs.writeFileSync('src/components/project-layouts/CinematicHero.tsx', content);
