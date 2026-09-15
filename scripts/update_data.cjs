const fs = require('fs');
let content = fs.readFileSync('src/data/personalProjectsData.ts', 'utf8');

content = content.replace(
  "image: '/projects/suitesecurity_01.png',",
  "image: '/projects/suitesecurity_hero.png',"
);

fs.writeFileSync('src/data/personalProjectsData.ts', content);
