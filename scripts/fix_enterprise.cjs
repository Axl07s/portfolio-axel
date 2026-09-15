const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');

let hookReplacement = `
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let animationFrameId;
    let startTime = Date.now();
    
    const animate = () => {
      if (window.innerWidth < 1024) {
        const elapsed = Date.now() - startTime;
        const speed = 0.001;
        setMousePos({
          x: 0.5 + Math.sin(elapsed * speed) * 0.3,
          y: 0.5 + Math.cos(elapsed * speed * 0.8) * 0.3
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
`;
content = content.replace(/const \[mousePos, setMousePos\] = useState\(\{ x: 0\.5, y: 0\.5 \}\);\s*const containerRef = useRef<HTMLDivElement>\(null\);/, hookReplacement);

content = content.replace(/className="hidden lg:flex relative py-12 w-full items-center justify-center z-20 cursor-crosshair h-\[700px\]"/g, 'className="flex relative py-12 w-full items-center justify-center z-20 cursor-crosshair h-[500px] lg:h-[700px] overflow-hidden"');

// Strip out the mobile fallback section
let fallbackStart = content.indexOf('{/* MOBILE: Threat detection visual fallback (< lg) */}');
if(fallbackStart !== -1) {
    let fallbackEnd = content.indexOf('<section id="enterprise-yara"');
    if(fallbackEnd !== -1) {
        let commentBlockStart = content.lastIndexOf('{/* ============================================================ */}', fallbackStart);
        content = content.substring(0, commentBlockStart) + content.substring(fallbackEnd);
    }
}

// Ensure useEffect is imported
if (!content.includes('useEffect')) {
    content = content.replace(/import \{ useState, useRef \}/, 'import { useState, useRef, useEffect }');
}

fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
