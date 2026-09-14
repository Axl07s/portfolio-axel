const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');

content = content.replace(/rotateX\(-20deg\) rotateZ\(10deg\)/g, "");
content = content.replace(/rotateX\(-10deg\) rotateZ\(-5deg\)/g, "");

fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
