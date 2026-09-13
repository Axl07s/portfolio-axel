import type { PersonalProject } from '../../data/personalProjectsData';
import { ArrowRight, GitBranch, Smartphone, WifiOff } from 'lucide-react';

export function EditorialLayout({ project }: { project: PersonalProject }) {
  // Enhanced Mobile frame with modern punch-hole design
  const MobileFrame = ({ title, className = "", imagePath = "" }: { title: string, className?: string, imagePath?: string }) => (
    <div className={`relative flex-shrink-0 border-zinc-800 border-[8px] bg-zinc-950 rounded-[2.5rem] md:rounded-[3rem] h-[550px] md:h-[650px] w-[275px] md:w-[325px] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden ring-1 ring-white/10 flex flex-col ${className}`}>
      
      {/* Side Buttons */}
      <div className="absolute -right-[14px] top-[120px] w-[6px] h-12 bg-zinc-800 rounded-r-md border-y border-r border-zinc-700"></div>
      <div className="absolute -right-[14px] top-[180px] w-[6px] h-20 bg-zinc-800 rounded-r-md border-y border-r border-zinc-700"></div>
      
      {/* Punch-hole Camera */}
      <div className="absolute top-3 inset-x-0 flex justify-center z-30 pointer-events-none">
          <div className="w-4 h-4 bg-black rounded-full shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)] border border-zinc-900 flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-indigo-900/40 rounded-full"></div>
          </div>
      </div>

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
    <article className="w-full bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-indigo-500/30 selection:text-white overflow-hidden">
      
      {/* Hero Header */}
      <header className="px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter uppercase break-words text-white">
            {project.title}
          </h1>
          {project.githubUrl && (
            <div className="mt-12 flex items-center">
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

      {/* Collage 1: 3 Phones (Home, Grades, Attendance) */}
      <section className="relative w-full py-20 md:py-32 bg-zinc-950 flex items-center justify-center min-h-[600px] md:min-h-[900px]">
         {/* Ambient Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

         <div className="relative w-full max-w-5xl h-[500px] md:h-[700px] flex justify-center items-center">
           {/* Left Phone (Grades) */}
           <MobileFrame 
             title="Captura de Calificaciones" 
             imagePath="/projects/puce_grades.png"
             className="absolute z-10 -rotate-6 -translate-x-[40%] sm:-translate-x-[60%] lg:-translate-x-[90%] translate-y-8 md:translate-y-16 scale-75 md:scale-90 opacity-70 transition-transform duration-700 hover:scale-100 hover:opacity-100 hover:z-40" 
           />
           
           {/* Right Phone (Attendance) */}
           <MobileFrame 
             title="Captura de Asistencia" 
             imagePath="/projects/puce_attendance.png"
             className="absolute z-10 rotate-6 translate-x-[40%] sm:translate-x-[60%] lg:translate-x-[90%] translate-y-12 md:translate-y-24 scale-75 md:scale-90 opacity-70 transition-transform duration-700 hover:scale-100 hover:opacity-100 hover:z-40" 
           />

           {/* Center Phone (Home/Login) */}
           <MobileFrame 
             title="Captura de Inicio / Home" 
             imagePath="/projects/puce_home.png"
             className="absolute z-30 rotate-0 scale-90 md:scale-100 -translate-y-4 md:-translate-y-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-[1.05]" 
           />
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
      <section className="relative w-full pb-20 md:pb-40 bg-zinc-950 flex items-center justify-center min-h-[500px] md:min-h-[800px] border-b border-zinc-800/50">
         <div className="relative w-full max-w-4xl h-[500px] md:h-[600px] flex justify-center items-center">
           {/* Back phone */}
           <MobileFrame 
             title="Estado de Sincronización" 
             imagePath="/projects/puce_login.png"
             className="absolute z-10 rotate-[12deg] translate-x-20 md:translate-x-40 translate-y-12 md:translate-y-16 scale-75 md:scale-90 opacity-40 md:opacity-60 transition-transform duration-700 hover:scale-100 hover:opacity-100 hover:z-30" 
           />
           {/* Front phone */}
           <MobileFrame 
             title="Perfil Estudiantil" 
             imagePath="/projects/puce_profile.png"
             className="absolute z-20 -rotate-2 -translate-x-8 md:-translate-x-16 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-[1.05]" 
           />
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
