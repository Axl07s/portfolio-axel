const fs = require('fs');
['src/components/project-layouts/CommandCenterLayout.tsx', 
 'src/components/project-layouts/EnterpriseLayout.tsx', 
 'src/components/project-layouts/GraphTerminalLayout.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace("import { VirtualCanvas } from '../VirtualCanvas';\nimport { DeviceMockup }", "import { VirtualCanvas } from '../VirtualCanvas';\nimport { DeviceMockup } from '../DeviceMockup';");
  fs.writeFileSync(file, content);
});

let pd = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');
pd = pd.replace("import { ArrowLeft, ExternalLink, Github } from 'lucide-react';", "import { ArrowLeft, ExternalLink, GithubIcon } from 'lucide-react';");
pd = pd.replace("<Github ", "<GithubIcon ");
fs.writeFileSync('src/pages/ProjectDetail.tsx', pd);
