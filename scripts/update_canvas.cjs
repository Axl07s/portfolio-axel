const fs = require('fs');
let content = fs.readFileSync('src/components/VirtualCanvas.tsx', 'utf8');

// Replace canvasWidth with mobileCanvasWidth and desktopCanvasWidth
content = content.replace(/canvasWidth\?: string;/g, "canvasWidth?: string;\n  mobileCanvasWidth?: string;");
content = content.replace(/canvasWidth = '1200px',/g, "canvasWidth = '1200px',\n  mobileCanvasWidth,");
content = content.replace(
  `width: \${canvasWidth} !important;`,
  `width: \${mobileCanvasWidth || canvasWidth} !important;`
);

fs.writeFileSync('src/components/VirtualCanvas.tsx', content);
