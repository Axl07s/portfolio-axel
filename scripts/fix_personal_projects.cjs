const fs = require('fs');
let content = fs.readFileSync('src/data/personalProjectsData.ts', 'utf8');

if (!content.includes('liveUrl?: string;')) {
  content = content.replace("images?: { url: string; captionES: string; captionEN: string }[];", "images?: { url: string; captionES: string; captionEN: string }[];\n  liveUrl?: string;\n  githubUrl?: string;");
}

fs.writeFileSync('src/data/personalProjectsData.ts', content);
