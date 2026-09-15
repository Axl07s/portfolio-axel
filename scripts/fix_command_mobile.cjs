const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/CommandCenterLayout.tsx', 'utf8');

// Update VirtualCanvas props for Portrait Mobile
content = content.replace(
  '<VirtualCanvas\n             canvasWidth="1200px"\n             mobileHeight="400px"\n             desktopHeight="100vh"\n             mobileScale="scale-[0.32]"\n             smScale="sm:scale-[0.45]"\n          >',
  `<VirtualCanvas
             canvasWidth="1200px"
             mobileCanvasWidth="450px"
             mobileHeight="750px"
             desktopHeight="100vh"
             mobileScale="scale-[0.75]"
             smScale="sm:scale-[0.85]"
          >`
);

// Holographic Container Aspect Ratio
content = content.replace(
  `className="relative w-full aspect-[16/10] md:aspect-[21/9] flex items-center justify-center transition-transform duration-300 ease-out"`,
  `className="relative w-full h-[800px] lg:h-auto lg:aspect-[21/9] flex items-center justify-center transition-transform duration-300 ease-out"`
);

// Layer 2: Main Dashboard Image
content = content.replace(
  `className="absolute w-[60%] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(56,189,248,0.2)] bg-black/40 backdrop-blur-xl"`,
  `className="absolute w-[95%] lg:w-[60%] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(56,189,248,0.2)] bg-black/40 backdrop-blur-xl"`
);

// Layer 3: Left Widget -> Top Center on Mobile
content = content.replace(
  `className="absolute left-[5%] top-[20%] w-[250px] bg-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-xl p-4 shadow-2xl"`,
  `className="absolute left-1/2 lg:left-[5%] top-[5%] lg:top-[20%] ml-[-140px] lg:ml-0 w-[280px] lg:w-[250px] bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-xl p-4 shadow-2xl"`
);

// Layer 4: Right Widget -> Bottom Center on Mobile
content = content.replace(
  `className="absolute right-[5%] bottom-[15%] w-[220px] bg-slate-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-4 shadow-2xl"`,
  `className="absolute left-1/2 lg:left-auto lg:right-[5%] bottom-[5%] lg:bottom-[15%] ml-[-125px] lg:ml-0 w-[250px] lg:w-[220px] bg-slate-900/80 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-4 shadow-2xl"`
);

fs.writeFileSync('src/components/project-layouts/CommandCenterLayout.tsx', content);
