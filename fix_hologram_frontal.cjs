const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');

// Change rotateX(50...) to rotateX(0...) and rotateZ(-30...) to rotateZ(0...)
content = content.replace(/transform: `rotateX\(\$\{50 \+ rotateX\}deg\) rotateZ\(\$\{-30 \+ rotateY\}deg\)`/g, "transform: `rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`");
// Also remove transformZ translation from the base plate to keep it flat but parallaxed
content = content.replace(/style=\{\{ transform: `translateZ\(-150px\)` \}\}/g, "style={{ transform: `translateZ(-20px)` }}");

// For the UI cards, reduce the massive Z translations so they stay close to the screen (frontal)
content = content.replace(/translateZ\(100px\)/g, "translateZ(30px)");
content = content.replace(/translateZ\(150px\)/g, "translateZ(60px)");
content = content.replace(/translateZ\(180px\)/g, "translateZ(90px)");
content = content.replace(/translateZ\(50px\)/g, "translateZ(10px)");

fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
