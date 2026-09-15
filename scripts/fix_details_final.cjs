const fs = require('fs');

let pp = fs.readFileSync('src/data/personalProjectsData.ts', 'utf8');
pp = pp.replace("liveUrl?: string;\n  githubUrl?: string;", "liveUrl?: string;");
fs.writeFileSync('src/data/personalProjectsData.ts', pp);

let pd = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');
pd = pd.replace("import { ArrowLeft, ExternalLink, GithubIcon } from 'lucide-react';", "import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';");
pd = pd.replace("<GithubIcon", "<Code2");
fs.writeFileSync('src/pages/ProjectDetail.tsx', pd);
