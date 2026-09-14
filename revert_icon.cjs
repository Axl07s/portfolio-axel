const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

content = content.replace("import { ArrowLeft, ExternalLink, Github } from 'lucide-react';", "import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';");
content = content.replace("<Github ", "<Code2 ");

fs.writeFileSync('src/pages/ProjectDetail.tsx', content);
