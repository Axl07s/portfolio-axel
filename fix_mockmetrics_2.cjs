const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CinematicHero.tsx', 'utf8');

const regex = /const mockMetrics = \[\s*\{ value: '\+99%', label: lang === 'es' \? 'DETECCIÓN EDR' : 'EDR DETECTION' \},\s*\{ value: '< 5ms', label: lang === 'es' \? 'LATENCIA KERNEL' : 'KERNEL LATENCY' \},\s*\{ value: 'ZERO', label: lang === 'es' \? 'FALSOS POSITIVOS' : 'FALSE POSITIVES' \},\s*\];/s;
content = content.replace(regex, '');

fs.writeFileSync('src/components/project-layouts/CinematicHero.tsx', content);
