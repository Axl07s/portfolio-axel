import type { PersonalProject } from '../../data/personalProjectsData';
import { ArrowRight, GitBranch, Smartphone, WifiOff } from 'lucide-react';

export function EditorialLayout({ project }: { project: PersonalProject }) {
  // Enhanced Mobile frame with purely minimalist screen (Edge-to-Edge)
  const MobileFrame = ({ title, className = "", imagePath = "" }: { title: string, className?: string, imagePath?: string }) => (
    <div className={`relative w-full h-full flex-shrink-0 border-zinc-800 border-[8px] bg-zinc-950 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden ring-1 ring-white/10 flex flex-col ${className}`}>
      
      {/* Side Buttons */}
      <div className="absolute -right-[14px] top-[120px] w-[6px] h-12 bg-zinc-800 rounded-r-md border-y border-r border-zinc-700 z-0"></div>
      <div className="absolute -right-[14px] top-[180px] w-[6px] h-20 bg-zinc-800 rounded-r-md border-y border-r border-zinc-700 z-0"></div>

      {/* Screen Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 overflow-hidden z-10 rounded-[2rem] md:rounded-[2.5rem]">
        {imagePath ? (
          <img src={imagePath} alt={title} className="absolute inset-0 w-full h-full object-cover object-top" />
        ) : (
          <div className="p-6 text-center z-10">
            <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-zinc-700 mb-4 mx-auto" />
            <p className="text-zinc-500 font-mono text-[9px] md:text-[10px] uppercase tracking-widest border border-dashed border-zinc-700 p-2 md:p-3 rounded w-full">
              PLACEHOLDER:<br/><span className="text-zinc-400 font-bold">{title}</span>
            </p>
          </div>
        )}
        {/* Screen Glare effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-30"></div>
      </div>
    </div>
  );

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30">
      
      {/* Hero Header */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center text-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-64 bg-indigo-500/10 blur-[100px] pointer-events-none"></div>

        <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter uppercase break-words text-white z-10 max-w-4xl">
          {project.title}
        </h1>
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto z-10 leading-relaxed">
          {project.descriptionES}
        </p>

        {project.githubUrl && (
          <div className="mt-12 flex items-center z-10">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
            >
              <GitBranch className="w-5 h-5" />
              <span>View Source</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}

        {/* Tech Stack Minimal Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 z-10 max-w-2xl">
          {project.tech.map((tech: string) => (
            <span key={tech} className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs font-mono tracking-widest uppercase backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Storytelling Block 1 */}
      <section className="px-4 py-16 md:py-24 max-w-3xl mx-auto text-center space-y-8 relative z-20">
         <div className="flex justify-center mb-6">
           <WifiOff className="w-8 h-8 text-zinc-700" />
         </div>
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
           La conectividad es un privilegio,<br className="hidden md:block"/>
           <span className="text-zinc-500">no una garantía.</span>
         </h2>
         <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
           Los estudiantes que transitan entre bloques de concreto grueso o viajan desde zonas rurales suelen enfrentar desconexiones severas. 
           Este proyecto nació de una premisa innegociable: el acceso a la vida académica no debería pausarse cuando se cae el Wi-Fi.
         </p>
      </section>

      {/* Cinematic Hero: Brutalist Editorial Style */}
      <section className="relative w-full pb-20 md:pb-40 bg-[#09090b] flex flex-col items-center justify-center min-h-[800px] md:min-h-[1000px] border-b border-zinc-800/50 overflow-hidden font-sans">
        
        {/* Subtle Vertical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px)] bg-[size:10vw_100%] pointer-events-none z-0"></div>
        
        {/* Massive Opaque Background Typography (Absolute Wallpaper) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
          {/* OFFLINE: Pushed to the absolute top edge, slightly bleeding off screen */}
          <h1 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[15%] text-[18vw] font-black tracking-tighter leading-none text-[#b490ff] whitespace-nowrap text-center">
            OFFLINE
          </h1>
          {/* CONNECT: Pushed to the absolute bottom edge, slightly bleeding off screen */}
          <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%] text-[18vw] font-black tracking-tighter leading-none text-[#b490ff] whitespace-nowrap text-center">
            CONNECT
          </h1>
        </div>

        {/* Central Phone & Floating Cards Container */}
        <div className="relative w-[280px] h-[560px] md:w-[325px] md:h-[650px] z-20 mt-12 mb-12">
           
           {/* Center Phone */}
           <div className="absolute inset-0 z-30 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
             <MobileFrame title="Captura de Inicio / Home" imagePath="/projects/puce_home.png" />
           </div>

           {/* --- SVG Connecting Lines --- */}
           <svg className="absolute inset-0 w-full h-full overflow-visible z-20 pointer-events-none" style={{ width: '100%', height: '100%' }}>
              {/* Line to Top Left */}
              <path d="M -50 150 L 100 200" stroke="#52525b" strokeWidth="1" fill="none" />
              <circle cx="-50" cy="150" r="3" fill="#52525b" />
              <circle cx="100" cy="200" r="3" fill="#52525b" />

              {/* Line to Top Right */}
              <path d="M 380 180 L 250 240" stroke="#52525b" strokeWidth="1" fill="none" />
              <circle cx="380" cy="180" r="3" fill="#52525b" />
              <circle cx="250" cy="240" r="3" fill="#52525b" />

              {/* Line to Bottom Left */}
              <path d="M -40 400 L 80 360" stroke="#52525b" strokeWidth="1" fill="none" />
              <circle cx="-40" cy="400" r="3" fill="#52525b" />
              <circle cx="80" cy="360" r="3" fill="#52525b" />

              {/* Line to Bottom Right */}
              <path d="M 360 420 L 220 460" stroke="#52525b" strokeWidth="1" fill="none" />
              <circle cx="360" cy="420" r="3" fill="#52525b" />
              <circle cx="220" cy="460" r="3" fill="#52525b" />
           </svg>

           {/* --- Brutalist Cards --- */}

           {/* Card 1: Top Left (Scarcity Tactics style) */}
           <div className="absolute top-[20%] -left-[60%] md:-left-[85%] w-52 md:w-60 p-3 rounded-lg bg-[#0f0f11] border border-zinc-800 shadow-2xl z-40 hidden sm:block">
              <h4 className="text-[12px] font-bold tracking-wide text-[#eab308] uppercase mb-1">LOCAL STORAGE ENGINE</h4>
              <p className="text-xs font-medium text-zinc-300">= Acceso a notas sin internet</p>
           </div>

           {/* Card 2: Top Right (Sheep style) */}
           <div className="absolute top-[25%] -right-[50%] md:-right-[75%] w-48 md:w-56 p-3 rounded-lg bg-[#0f0f11] border border-zinc-800 shadow-2xl z-40 hidden sm:block flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-[#b490ff]/20 flex-shrink-0 border border-[#b490ff]/30 overflow-hidden flex items-center justify-center">
                 <span className="text-[#b490ff] text-lg">★</span>
              </div>
              <div className="flex-1">
                <h4 className="text-[11px] font-bold tracking-widest text-zinc-100 uppercase mb-0.5">BACKGROUND SYNC</h4>
                <p className="text-[10px] leading-tight text-zinc-400">Workers en segundo plano sincronizan tus datos silenciosamente.</p>
              </div>
           </div>

           {/* Card 3: Bottom Left (Permissions style) */}
           <div className="absolute bottom-[35%] -left-[60%] md:-left-[80%] w-56 md:w-64 p-3 rounded-xl bg-[#0f0f11] border border-zinc-800 shadow-2xl z-40 hidden sm:block">
              <ul className="space-y-2 mb-3">
                <li className="flex justify-between items-center border-b border-zinc-800 pb-1">
                  <span className="text-[10px] text-zinc-300 font-mono">+ Biometría (FaceID)</span>
                  <div className="w-6 h-3 bg-[#b490ff] rounded-full relative"><div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div></div>
                </li>
                <li className="flex justify-between items-center border-b border-zinc-800 pb-1">
                  <span className="text-[10px] text-zinc-300 font-mono">+ Push Notifications</span>
                  <div className="w-6 h-3 bg-[#b490ff] rounded-full relative"><div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div></div>
                </li>
                <li className="flex justify-between items-center border-b border-zinc-800 pb-1">
                  <span className="text-[10px] text-zinc-300 font-mono">+ JWT Encryption</span>
                  <div className="w-6 h-3 bg-[#b490ff] rounded-full relative"><div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div></div>
                </li>
              </ul>
              <div className="w-full py-1.5 bg-[#b490ff] text-black text-[10px] font-bold text-center rounded uppercase tracking-wider">
                 Security Hub
              </div>
           </div>

           {/* Card 4: Bottom Right (Timer style) */}
           <div className="absolute bottom-[20%] -right-[50%] md:-right-[70%] w-48 md:w-56 p-4 rounded-lg bg-[#0f0f11] border border-zinc-800 shadow-2xl z-40 hidden sm:block text-center">
              <div className="mb-2 opacity-80">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" className="mx-auto"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <p className="text-[10px] text-zinc-400 mb-1">Optimizada para consumir...</p>
              <h4 className="text-[16px] font-black tracking-wide text-[#eab308] uppercase">CERO DATOS</h4>
           </div>

        </div>

      </section>

      {/* Key Metrics Section */}
      <section className="px-4 py-16 md:py-24 max-w-5xl mx-auto relative z-20 border-t border-zinc-800/50 mt-12 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Metric 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Latencia Local</h3>
            <p className="text-5xl md:text-6xl font-light text-white tracking-tighter">&lt; 50<span className="text-3xl text-indigo-400 font-normal">ms</span></p>
            <p className="text-sm text-zinc-400 mt-2 max-w-xs">Tiempo de respuesta al consultar la base SQLite en modo offline.</p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Disponibilidad</h3>
            <p className="text-5xl md:text-6xl font-light text-white tracking-tighter">100<span className="text-3xl text-indigo-400 font-normal">%</span></p>
            <p className="text-sm text-zinc-400 mt-2 max-w-xs">Acceso ininterrumpido a datos cacheados sin conexión a internet.</p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Workers</h3>
            <p className="text-5xl md:text-6xl font-light text-white tracking-tighter">3</p>
            <p className="text-sm text-zinc-400 mt-2 max-w-xs">Hilos en segundo plano para sincronización silenciosa bidireccional.</p>
          </div>

        </div>
      </section>

      {/* Storytelling Block 2 */}
      <section className="px-4 py-16 md:py-24 max-w-3xl mx-auto text-center space-y-8 relative z-20">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
           Arquitectura <span className="text-indigo-400 font-normal italic">Offline-First.</span>
         </h2>
         <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
           Mediante el uso de una caché local en SQLite y colas de procesos en segundo plano, la app permite consultar horarios, notas y faltas incluso en modo avión. En el instante en que se recupera la señal, workers silenciosos sincronizan las mutaciones con el backend en Spring Boot sin interrumpir al usuario.
         </p>
      </section>

      {/* Collage 2: Sync State */}
      <section className="relative w-full pb-20 md:pb-40 bg-zinc-950 flex items-center justify-center min-h-[500px] md:min-h-[800px] border-b border-zinc-800/50 overflow-hidden">
         {/* True Absolute Stacking Container */}
         <div className="relative w-[260px] h-[520px] md:w-[325px] md:h-[650px] z-10">
           
           {/* Back phone */}
           <div className="absolute inset-0 z-10 rotate-[10deg] translate-x-[30%] md:translate-x-[40%] translate-y-16 md:translate-y-24 opacity-40 transition-transform duration-700 hover:-translate-y-4 hover:translate-x-[60%] hover:rotate-0 hover:scale-105 hover:opacity-100 hover:z-30 origin-bottom">
             <MobileFrame title="Estado de Sincronización" imagePath="/projects/puce_login.png" />
           </div>

           {/* Front phone */}
           <div className="absolute inset-0 z-20 -rotate-2 -translate-x-[15%] md:-translate-x-[20%] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-105">
             <MobileFrame title="Perfil Estudiantil" imagePath="/projects/puce_profile.png" />
           </div>

         </div>
      </section>

      {/* Specs Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Tech Stack - Left column on large screens */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6 border-b border-zinc-800 pb-4">
                Technology Stack
              </h2>
              <ul className="space-y-4">
                {project.tech.map((techItem, index) => (
                  <li key={index} className="text-lg md:text-xl font-light text-zinc-300 tracking-wide">
                    {techItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Text Content - Right side */}
          <div className="lg:col-span-9 space-y-24 md:space-y-32">
            
            {/* Overview */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8 md:mb-12 border-b border-zinc-800 pb-4">
                The Project
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    Español
                  </p>
                  <p className="text-lg md:text-2xl font-light leading-relaxed text-zinc-300">
                    {project.descriptionES}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                    English
                  </p>
                  <p className="text-lg md:text-2xl font-light leading-relaxed text-zinc-500">
                    {project.descriptionEN}
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8 md:mb-12 border-b border-zinc-800 pb-4">
                Architecture & Design
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">ESP</p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-zinc-400">
                    {project.architectureES}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">ENG</p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-zinc-500">
                    {project.architectureEN}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
}
