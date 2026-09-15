const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');

// Update VirtualCanvas props
content = content.replace(
  '<VirtualCanvas\n             canvasWidth="1000px"\n             mobileHeight="450px"\n             desktopHeight="700px"\n             mobileScale="scale-[0.4]"\n             smScale="sm:scale-[0.6]"\n             className="py-0 lg:py-12"\n           >',
  `<VirtualCanvas
             canvasWidth="1000px"
             mobileCanvasWidth="400px"
             mobileHeight="650px"
             desktopHeight="700px"
             mobileScale="scale-[0.8]"
             smScale="sm:scale-[0.9]"
             className="py-0 lg:py-12"
           >`
);

// Update internal positioning of the 3D items to be portrait-friendly on mobile
// Base Plate
content = content.replace(
  `className="absolute w-[600px] h-[600px] bg-slate-900/50 border-4 border-emerald-500/20 rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.1)] flex items-center justify-center"`,
  `className="absolute w-[350px] lg:w-[600px] h-[350px] lg:h-[600px] bg-slate-900/50 border-4 border-emerald-500/20 rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.1)] flex items-center justify-center"`
);
// Inner rings
content = content.replace(
  `className="w-[450px] h-[450px] border-2 border-emerald-500/10 rounded-full animate-spin-slow flex items-center justify-center"`,
  `className="w-[280px] lg:w-[450px] h-[280px] lg:h-[450px] border-2 border-emerald-500/10 rounded-full animate-spin-slow flex items-center justify-center"`
);
content = content.replace(
  `className="w-[300px] h-[300px] border border-emerald-500/20 rounded-full flex items-center justify-center"`,
  `className="w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] border border-emerald-500/20 rounded-full flex items-center justify-center"`
);
content = content.replace(
  `className="w-[150px] h-[150px] border border-emerald-500/30 rounded-full"`,
  `className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] border border-emerald-500/30 rounded-full"`
);

// Threat (Ransomware)
content = content.replace(
  `className="absolute w-28 h-28 bg-red-950/80 border-2 border-red-500 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.5)] transition-transform duration-700"`,
  `className="absolute w-20 lg:w-28 h-20 lg:h-28 bg-red-950/80 border-2 border-red-500 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.5)] transition-transform duration-700"`
);

// Force Field Cylinder
content = content.replace(
  `className="absolute w-52 h-52 border-4 border-dashed border-emerald-500 rounded-full animate-spin-slow opacity-80 transition-transform duration-700"`,
  `className="absolute w-36 lg:w-52 h-36 lg:h-52 border-4 border-dashed border-emerald-500 rounded-full animate-spin-slow opacity-80 transition-transform duration-700"`
);

// Dashboard (Floating UI) - Position Top Center on Mobile, Top Left on Desktop
content = content.replace(
  `className="absolute top-[10%] left-[10%] w-72 bg-slate-950 border-2 border-emerald-500/30 rounded-2xl p-5 shadow-2xl transition-transform duration-500"`,
  `className="absolute top-[5%] lg:top-[10%] left-1/2 lg:left-[10%] -translate-x-1/2 lg:-translate-x-0 w-[300px] lg:w-72 bg-slate-950/90 backdrop-blur-md border-2 border-emerald-500/30 rounded-2xl p-4 lg:p-5 shadow-2xl transition-transform duration-500"`
);

// Metrics Widget - Position Bottom Center on Mobile, Bottom Right on Desktop
content = content.replace(
  `className="absolute bottom-[10%] right-[10%] w-56 bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl transition-transform duration-500"`,
  `className="absolute bottom-[5%] lg:bottom-[10%] left-1/2 lg:left-auto lg:right-[10%] -translate-x-1/2 lg:-translate-x-0 w-[300px] lg:w-56 bg-slate-950/90 backdrop-blur-md border-2 border-slate-800 rounded-2xl p-4 lg:p-5 shadow-2xl transition-transform duration-500"`
);

fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
