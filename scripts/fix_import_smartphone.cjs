const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EditorialLayout.tsx', 'utf8');

content = content.replace("import { WifiOff, Cloud, RefreshCcw, Smartphone } from 'lucide-react';", "import { WifiOff, Cloud, RefreshCcw } from 'lucide-react';");

fs.writeFileSync('src/components/project-layouts/EditorialLayout.tsx', content);
