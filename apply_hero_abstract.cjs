const fs = require('fs');

function replaceHero(filePath, theme) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Inject import
  if (!content.includes('HeroAbstract')) {
    content = content.replace("import { VirtualCanvas }", "import { VirtualCanvas } from '../VirtualCanvas';\nimport { HeroAbstract }");
  }

  // Replace <img src={project.image}.../> with <HeroAbstract theme={theme} />
  const imgRegex = /<img\s*src=\{project\.image(?:\s*\|\|\s*project\.images\[0\]\?\.url)?\}\s*alt="[^"]*"\s*className="[^"]*"\s*\/>/s;
  
  // Wait, let's look closely at how the img tag is written in those files.
  // Enterprise: <img src={project.image} alt="SuiteSeguridad Interface" className="w-full h-[60vh] md:h-screen object-cover opacity-30 md:opacity-50" />
  // We can just use a generic regex to replace the img tag inside the sticky div.
  
  const stickyDivRegex = /(<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">)\s*<img[^>]*>/s;
  
  if (content.match(stickyDivRegex)) {
    content = content.replace(stickyDivRegex, `$1\n           <HeroAbstract theme="${theme}" />`);
  } else {
    // try alternative if slightly different
    const stickyAlt = /(<div className="sticky top-0 h-screen w-full overflow-hidden">)\s*<img[^>]*>/s;
    content = content.replace(stickyAlt, `$1\n           <HeroAbstract theme="${theme}" />`);
  }
  
  fs.writeFileSync(filePath, content);
}

replaceHero('src/components/project-layouts/EnterpriseLayout.tsx', 'cyber');
replaceHero('src/components/project-layouts/CommandCenterLayout.tsx', 'ai');
replaceHero('src/components/project-layouts/GraphTerminalLayout.tsx', 'data');

