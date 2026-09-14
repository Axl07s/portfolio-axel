const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', 'utf8');

content = content.replace(
  "import { Search, ArrowRight, Binary, Cpu, ShieldCheck, Zap, LineChart, FileText, CheckCircle2 } from 'lucide-react';",
  "import { Search, ArrowRight, Binary, Cpu, ShieldCheck, Zap, LineChart, Database } from 'lucide-react';"
);

fs.writeFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', content);
