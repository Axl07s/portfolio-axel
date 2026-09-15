const fs = require('fs');
['src/components/project-layouts/CommandCenterLayout.tsx', 
 'src/components/project-layouts/EnterpriseLayout.tsx', 
 'src/components/project-layouts/GraphTerminalLayout.tsx'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/let animationFrameId;/g, 'let animationFrameId: number;');
    if (!content.includes('useEffect(')) { // Double check
       // already replaced probably
    }
    // Make sure useEffect is actually imported
    if (content.includes('useEffect(') && !content.includes('useEffect }')) {
        content = content.replace(/import \{ useState, useRef \}/g, 'import { useState, useRef, useEffect }');
    }
    fs.writeFileSync(file, content);
});
