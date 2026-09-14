const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', 'utf8');

// Update VirtualCanvas props for Portrait Mobile
content = content.replace(
  '<VirtualCanvas\n             canvasWidth="1000px"\n             mobileHeight="400px"\n             desktopHeight="auto"\n             mobileScale="scale-[0.35]"\n             smScale="sm:scale-[0.5]"\n             className="py-0 lg:py-24"\n           >',
  `<VirtualCanvas
             canvasWidth="1000px"
             mobileCanvasWidth="400px"
             mobileHeight="800px"
             desktopHeight="auto"
             mobileScale="scale-[0.85]"
             smScale="sm:scale-[0.95]"
             className="py-0 lg:py-24"
           >`
);

// Inner Canvas Container
content = content.replace(
  `className="relative w-full aspect-video transition-transform duration-700 ease-out flex items-center justify-center"`,
  `className="relative w-full h-[900px] lg:h-auto lg:aspect-video transition-transform duration-700 ease-out flex items-center justify-center"`
);

// Grid Layout: 1 col on mobile, 4 cols on desktop
content = content.replace(
  `className="w-full h-full grid grid-cols-4 grid-rows-3 gap-6 relative z-10 transition-transform duration-700"`,
  `className="w-[90%] lg:w-full h-[90%] lg:h-full grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-4 lg:gap-6 relative z-10 transition-transform duration-700"`
);

// Main Stat Tile
content = content.replace(
  `className="col-span-2 row-span-2 bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-transform duration-700"`,
  `className="col-span-1 lg:col-span-2 row-span-1 lg:row-span-2 bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-transform duration-700"`
);

// Secondary Tile
content = content.replace(
  `className="col-span-2 row-span-1 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex items-center justify-between transition-transform duration-700"`,
  `className="col-span-1 lg:col-span-2 row-span-1 bg-zinc-950 border border-zinc-800 rounded-3xl p-5 lg:p-6 flex items-center justify-between transition-transform duration-700"`
);

// Pipeline Tile
content = content.replace(
  `className="col-span-2 row-span-1 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden transition-transform duration-700"`,
  `className="col-span-1 lg:col-span-2 row-span-1 bg-zinc-950 border border-zinc-800 rounded-3xl p-5 lg:p-6 relative overflow-hidden transition-transform duration-700"`
);
// Pipeline pills (wrap on mobile)
content = content.replace(
  `className="flex gap-2"`,
  `className="flex flex-wrap gap-2"`
);

// Wide Terminal Tile (Hide on mobile to save vertical space, or make it smaller)
content = content.replace(
  `className="col-span-3 row-span-1 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-6 flex items-center transition-transform duration-700"`,
  `className="hidden lg:flex col-span-3 row-span-1 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-6 items-center transition-transform duration-700"`
);

// Action Tile
content = content.replace(
  `className="col-span-1 row-span-1 bg-blue-600 rounded-3xl p-6 flex flex-col justify-between hover:bg-blue-500 transition-colors cursor-pointer"`,
  `className="col-span-1 lg:col-span-1 row-span-1 bg-blue-600 rounded-3xl p-5 lg:p-6 flex flex-col justify-center lg:justify-between hover:bg-blue-500 transition-colors cursor-pointer"`
);

fs.writeFileSync('src/components/project-layouts/GraphTerminalLayout.tsx', content);
