const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CommandCenterLayout.tsx', 'utf8');

let hookReplacement = `
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId;
    let startTime = Date.now();
    
    const animate = () => {
      if (window.innerWidth < 1024) {
        const elapsed = Date.now() - startTime;
        const speed = 0.0008;
        setMousePos({
          x: 0.5 + Math.sin(elapsed * speed) * 0.2,
          y: 0.5 + Math.cos(elapsed * speed * 1.2) * 0.2
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
`;
content = content.replace(/const \[mousePos, setMousePos\] = useState\(\{ x: 0\.5, y: 0\.5 \}\);\s*const containerRef = useRef<HTMLDivElement>\(null\);/, hookReplacement);

// Make the 3D container visible on mobile
content = content.replace(/className="hidden lg:flex relative z-10 min-h-screen w-full items-center justify-center pt-20 pb-20 px-4"/g, 'className="flex relative z-10 min-h-[60vh] lg:min-h-screen w-full items-center justify-center pt-32 pb-20 px-4 overflow-hidden"');

// We also need to strip out the mobile fallback section
let fallbackStart = content.indexOf('{/* MOBILE: Stacked fallback (< lg) */}');
if(fallbackStart !== -1) {
    let fallbackEnd = content.indexOf('<section id="command-features"');
    if(fallbackEnd !== -1) {
        let commentBlockStart = content.lastIndexOf('{/* ============================================================ */}', fallbackStart);
        content = content.substring(0, commentBlockStart) + content.substring(fallbackEnd);
    }
}

// Ensure useEffect is imported
if (!content.includes('useEffect')) {
    content = content.replace(/import \{ useState, useRef \}/, 'import { useState, useRef, useEffect }');
}

fs.writeFileSync('src/components/project-layouts/CommandCenterLayout.tsx', content);
