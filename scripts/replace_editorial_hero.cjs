const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EditorialLayout.tsx', 'utf8');

const replacement = `
      {/* Hero Section */}
      <section id="editorial-hero" className="pt-32 pb-16 px-6 text-center max-w-5xl mx-auto z-20 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-[10px] font-mono tracking-widest uppercase mb-6">
          Arquitectura Flutter & BLoC
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-tight">
          PUCE Connect Hub
        </h1>
        <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-12">
          {lang === 'es' ? 'Portal móvil offline-first para sincronización robusta de notas y asistencia académica bajo conectividad intermitente.' : 'Offline-first mobile portal for robust synchronization of grades and attendance under intermittent connectivity.'}
        </p>
      </section>
`;

content = content.replace(/<div id="editorial-hero"><CinematicEditorialHero[^>]*><\/div>/, replacement);
content = content.replace("import { CinematicEditorialHero } from './CinematicEditorialHero';", "");

fs.writeFileSync('src/components/project-layouts/EditorialLayout.tsx', content);
