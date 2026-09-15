const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CinematicHero.tsx', 'utf8');

const regex = /useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/s;

const newUseEffect = `useEffect(() => {
    // Just 2 fast phases, no loops.
    const t1 = setTimeout(() => setPhase(1), 500); // 0.5s scramble text
    const t2 = setTimeout(() => setPhase(2), 2000); // 1.5s visual pop

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);`;

content = content.replace(regex, newUseEffect);
fs.writeFileSync('src/components/project-layouts/CinematicHero.tsx', content);
