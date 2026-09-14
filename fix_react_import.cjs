const fs = require('fs');
let content = fs.readFileSync('src/components/HeroAbstract.tsx', 'utf8');
content = content.replace("import React from 'react';\n", "");
fs.writeFileSync('src/components/HeroAbstract.tsx', content);
