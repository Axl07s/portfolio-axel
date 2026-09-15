const fs = require('fs');
['src/components/project-layouts/CommandCenterLayout.tsx', 
 'src/components/project-layouts/EnterpriseLayout.tsx', 
 'src/components/project-layouts/GraphTerminalLayout.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace("import { DeviceMockup } from '../DeviceMockup'; from '../VirtualCanvas';", "import { DeviceMockup } from '../DeviceMockup';");
  fs.writeFileSync(file, content);
});

let pd = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');
if (pd.includes("from from")) {
  pd = pd.replace("from from", "from");
}
fs.writeFileSync('src/pages/ProjectDetail.tsx', pd);
