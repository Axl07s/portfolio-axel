const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

content = content.replace("import { ArrowLeft, ExternalLink, Github } from from 'lucide-react';", "import { ArrowLeft, ExternalLink, Github } from 'lucide-react';");

fs.writeFileSync('src/pages/ProjectDetail.tsx', content);
