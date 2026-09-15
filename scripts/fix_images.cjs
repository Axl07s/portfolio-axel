const fs = require('fs');
let content = fs.readFileSync('src/data/personalProjectsData.ts', 'utf8');

content = content.replace(/'\/projects\/suite_mockup\.png'/g, "'/projects/suitesecurity_01.png'");
content = content.replace(/'\/projects\/puce_mockup\.png'/g, "'/projects/puce_home.png'");

fs.writeFileSync('src/data/personalProjectsData.ts', content);
