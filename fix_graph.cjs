const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', 'utf8');

let hookReplacement = `
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId;
    let startTime = Date.now();
    let cycleCounter = 0;
    
    const animate = () => {
      if (window.innerWidth < 1024) {
        const elapsed = Date.now() - startTime;
        const speed = 0.001;
        setMousePos({
          x: 0.5 + Math.sin(elapsed * speed) * 0.25,
          y: 0.5 + Math.cos(elapsed * speed * 0.7) * 0.25
        });
        
        // Auto cycle the "exploded" hover state on mobile every 4 seconds
        cycleCounter++;
        if (cycleCounter % 400 === 0) {
            setIsHovered(prev => !prev);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
`;
content = content.replace(/const \[isHovered, setIsHovered\] = useState\(false\);\s*const \[mousePos, setMousePos\] = useState\(\{ x: 0\.5, y: 0\.5 \}\);\s*const containerRef = useRef<HTMLDivElement>\(null\);/, hookReplacement);

// Make the 3D grid visible on mobile
content = content.replace(/className="hidden lg:flex relative py-24 w-full items-center justify-center z-20 cursor-crosshair"/g, 'className="flex relative py-12 lg:py-24 w-full items-center justify-center z-20 cursor-crosshair overflow-hidden"');

// Fix the grid width/scale so it fits on mobile screens (scale down to 0.5 on small screens)
content = content.replace(/className="relative w-full max-w-5xl aspect-video transition-transform duration-700 ease-out"/g, 'className="relative w-[800px] lg:w-full lg:max-w-5xl aspect-video transition-transform duration-700 ease-out scale-[0.45] sm:scale-[0.6] lg:scale-100"');

// Strip out the mobile fallback section
let fallbackStart = content.indexOf('{/* MOBILE: Flat bento cards stacked (< lg) */}');
if(fallbackStart !== -1) {
    let fallbackEnd = content.indexOf('<section id="graph-value"');
    if(fallbackEnd !== -1) {
        let commentBlockStart = content.lastIndexOf('{/* ============================================================ */}', fallbackStart);
        content = content.substring(0, commentBlockStart) + content.substring(fallbackEnd);
    }
}

// Ensure useEffect is imported
if (!content.includes('useEffect')) {
    content = content.replace(/import \{ useState, useRef \}/, 'import { useState, useRef, useEffect }');
}

fs.writeFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', content);
