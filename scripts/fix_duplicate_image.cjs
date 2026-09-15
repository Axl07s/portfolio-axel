const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');

const imgRegex = /<div className="w-full bg-\[#020617\].*?<\/div>\s*<\/div>\s*<\/section>/s;

if (content.match(imgRegex)) {
  // Let's refine the regex or do a string replace for the image part
}

// Let's just find the image and remove it
let sectionParts = content.split('<img \n            src={project.image} \n            alt="SuiteSeguridad Interface" \n            className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" \n          />');
if (sectionParts.length === 2) {
  content = sectionParts.join('');
} else {
  // Try alternative whitespace
  content = content.replace(/<img\s*src=\{project\.image\}\s*alt="SuiteSeguridad Interface"\s*className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"\s*\/>/, '');
}

// Let's also check if there's an outer wrapper we should remove.
const wrapperRegex = /<div className="w-full bg-\[#020617\] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative group">\s*<div className="h-10 bg-\[#0f111a\].*?<\/div>\s*<\/div>/s;
content = content.replace(wrapperRegex, '');

fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
