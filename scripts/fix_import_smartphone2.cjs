const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EditorialLayout.tsx', 'utf8');

content = content.replace("import { Smartphone, WifiOff, RefreshCcw, Cloud } from 'lucide-react';", "import { WifiOff, RefreshCcw, Cloud } from 'lucide-react';");

fs.writeFileSync('src/components/project-layouts/EditorialLayout.tsx', content);
