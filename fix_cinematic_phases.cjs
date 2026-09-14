const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CinematicHero.tsx', 'utf8');

// 1. Remove the later phase timeouts
content = content.replace(/setTimeout\(\(\) => setPhase\(3\), 4500\);\n/g, '');
content = content.replace(/setTimeout\(\(\) => setPhase\(4\), 6500\);\n/g, '');
content = content.replace(/setTimeout\(\(\) => setPhase\(5\), 8500\);\n/g, '');

// 2. Remove Phase 3 and Phase 4 JSX blocks entirely to clean up code
const phase3Regex = /\{\/\* PHASE 3: Metrics & Bento Pop \*\/}.*?\{\/\* PHASE 4: Outro \*\/}/s;
content = content.replace(phase3Regex, '{/* PHASE 4: Outro */}');

const phase4Regex = /\{\/\* PHASE 4: Outro \*\/}.*?<\/AnimatePresence>/s;
content = content.replace(phase4Regex, '</AnimatePresence>');

// 3. Make the condition for Phase 1/2 just >= 1 so it's always rendered after phase 0
content = content.replace(/\{\(phase === 1 \|\| phase === 2\) && \(/g, '{phase >= 1 && (');

fs.writeFileSync('src/components/project-layouts/CinematicHero.tsx', content);
