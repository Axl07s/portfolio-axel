const fs = require('fs');

function restore3D(filePath, mobileSectionId) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the DeviceMockup mobile showcase
  const mobileShowcaseRegex = /\s*\{\/\* =+ \*\/\}\n\s*\{\/\* MOBILE SHOWCASE.*?\{\/\* =+ \*\/\}\n.*?<\/section>/s;
  content = content.replace(mobileShowcaseRegex, '');

  // Restore the 3D Hologram visibility
  content = content.replace(/className="hidden lg:flex relative /g, 'className="relative flex ');
  content = content.replace(/className="hidden lg:flex relative/g, 'className="relative flex');

  // Clean up unused DeviceMockup import if present
  content = content.replace(/import { DeviceMockup } from '..\/DeviceMockup';\n?/g, '');
  content = content.replace(/import { DeviceMockup } from '\.\.\/DeviceMockup';\n?/g, '');

  fs.writeFileSync(filePath, content);
}

restore3D('src/components/project-layouts/EnterpriseLayout.tsx');
restore3D('src/components/project-layouts/CommandCenterLayout.tsx');
restore3D('src/components/project-layouts/GraphTerminalLayout.tsx');

// EditorialLayout.tsx: Shorten to Hero -> Phones -> Tech Stack
let editorial = fs.readFileSync('src/components/project-layouts/EditorialLayout.tsx', 'utf8');

// Replace the editorial-features section with just the tech stack
const featuresRegex = /<section id="editorial-features" className="max-w-6xl mx-auto px-6 pt-24 pb-32">.*?<h4 className="text-lg font-bold text-white mb-6">/s;
const newFeatures = `<section id="editorial-features" className="max-w-6xl mx-auto px-6 pt-12 pb-32">
        <div className="pt-12 border-t border-zinc-800">
          <h4 className="text-lg font-bold text-white mb-6">`;

editorial = editorial.replace(featuresRegex, newFeatures);

fs.writeFileSync('src/components/project-layouts/EditorialLayout.tsx', editorial);
