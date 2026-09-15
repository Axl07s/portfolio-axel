const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');

// Use margin-left hack to avoid translate conflicts with inline transforms
content = content.replace(
  `className="absolute top-[5%] lg:top-[10%] left-1/2 lg:left-[10%] -translate-x-1/2 lg:-translate-x-0 w-[300px] lg:w-72 bg-slate-950/90 backdrop-blur-md border-2 border-emerald-500/30 rounded-2xl p-4 lg:p-5 shadow-2xl transition-transform duration-500"`,
  `className="absolute top-[5%] lg:top-[10%] left-1/2 lg:left-[10%] ml-[-150px] lg:ml-0 w-[300px] lg:w-72 bg-slate-950/90 backdrop-blur-md border-2 border-emerald-500/30 rounded-2xl p-4 lg:p-5 shadow-2xl transition-transform duration-500"`
);

content = content.replace(
  `className="absolute bottom-[5%] lg:bottom-[10%] left-1/2 lg:left-auto lg:right-[10%] -translate-x-1/2 lg:-translate-x-0 w-[300px] lg:w-56 bg-slate-950/90 backdrop-blur-md border-2 border-slate-800 rounded-2xl p-4 lg:p-5 shadow-2xl transition-transform duration-500"`,
  `className="absolute bottom-[2%] lg:bottom-[10%] left-1/2 lg:left-auto lg:right-[10%] ml-[-150px] lg:ml-0 lg:mr-0 w-[300px] lg:w-56 bg-slate-950/90 backdrop-blur-md border-2 border-slate-800 rounded-2xl p-4 lg:p-5 shadow-2xl transition-transform duration-500"`
);

fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
