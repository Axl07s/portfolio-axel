const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CinematicHero.tsx', 'utf8');

content = content.replace("import { HeroAbstract } from '../HeroAbstract';\n", "");

fs.writeFileSync('src/components/project-layouts/CinematicHero.tsx', content);

try {
  fs.unlinkSync('src/components/HeroAbstract.tsx');
} catch (e) {}
