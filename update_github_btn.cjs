const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// Change the text to GitHub
content = content.replace("{lang === 'es' ? 'Ver Código' : 'View Code'}", "GitHub");

// Also let's try to restore the Github icon from lucide-react if possible
if (content.includes('Code2')) {
  content = content.replace("import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';", "import { ArrowLeft, ExternalLink, Github } from 'lucide-react';");
  content = content.replace("<Code2 ", "<Github ");
}

fs.writeFileSync('src/pages/ProjectDetail.tsx', content);
