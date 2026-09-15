const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CinematicHero.tsx', 'utf8');

const mockMetricsRegex = /const mockMetrics = \[\s*\{ label: 'Uptime', value: '99\.99%' \},\s*\{ label: 'Latencia', value: '<50ms' \},\s*\{ label: 'Escalabilidad', value: 'Global' \}\s*\];/;
content = content.replace(mockMetricsRegex, '');

fs.writeFileSync('src/components/project-layouts/CinematicHero.tsx', content);
