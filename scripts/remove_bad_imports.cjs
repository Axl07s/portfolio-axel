const fs = require('fs');

['src/components/project-layouts/EnterpriseLayout.tsx', 
 'src/components/project-layouts/CommandCenterLayout.tsx', 
 'src/components/project-layouts/GraphTerminalLayout.tsx'].forEach(file => {
   let content = fs.readFileSync(file, 'utf8');
   content = content.replace(/import \{ HeroAbstract \} from '\.\.\/VirtualCanvas';\n?/g, '');
   content = content.replace(/import \{ HeroAbstract \} from '\.\.\/HeroAbstract';\n?/g, '');
   fs.writeFileSync(file, content);
 });
