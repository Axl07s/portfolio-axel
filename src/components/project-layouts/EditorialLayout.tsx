import { useState, useEffect } from 'react';
import type { PersonalProject } from '../../data/personalProjectsData';
import { 
  WifiOff, 
  RefreshCcw, 
  Database, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Play, 
  Pause,
  ArrowRight,
  Server
} from 'lucide-react';
import { ScrollAffordance } from '../ScrollAffordance';
import { useLanguage } from '../../context/LanguageContext';

const getEditorialSections = (lang: 'es' | 'en') => [
  { id: 'editorial-hero', label: 'Intro' },
  { id: 'editorial-metrics', label: lang === 'es' ? 'Métricas' : 'Metrics' },
  { id: 'editorial-phones', label: 'App Flow' },
  { id: 'editorial-architecture', label: lang === 'es' ? 'Arquitectura' : 'Architecture' },
  { id: 'editorial-pipeline', label: lang === 'es' ? 'Flujo de Datos' : 'Data Pipeline' },
  { id: 'editorial-features', label: lang === 'es' ? 'Especificaciones' : 'Specs' },
];

interface ScreenMeta {
  url: string;
  titleES: string;
  titleEN: string;
  descES: string;
  descEN: string;
  tag: string;
}

const SCREENS: ScreenMeta[] = [
  {
    url: '/projects/puce_login.png',
    titleES: '01. Autenticación & Keystore',
    titleEN: '01. Cryptographic Auth & Keystore',
    descES: 'Acceso seguro con tokens JWT cifrados con AES-256 en el hardware seguro del dispositivo (Android Keystore / iOS Keychain).',
    descEN: 'Secure login with AES-256 encrypted JWT tokens in device secure hardware (Android Keystore / iOS Keychain).',
    tag: 'Seguridad / Auth'
  },
  {
    url: '/projects/puce_home.png',
    titleES: '02. Gestión de Materias & Horarios',
    titleEN: '02. Subjects & Schedules Dashboard',
    descES: 'Dashboard académico con despacho instantáneo (<50ms) alimentado directamente por el motor NoSQL Isar embebido en Flash memory.',
    descEN: 'Academic dashboard with sub-50ms dispatch powered directly by embedded Isar NoSQL in Flash memory.',
    tag: 'NoSQL Local / UI'
  },
  {
    url: '/projects/puce_grades.png',
    titleES: '03. Sábana de Calificaciones',
    titleEN: '03. Grades Sheet & Weighted Averages',
    descES: 'Cálculo reactivo de notas acumuladas y promedios ponderados en el dispositivo con soporte 100% desconectado.',
    descEN: 'Reactive calculation of accumulated grades and weighted averages on-device with 100% offline support.',
    tag: 'Motor de Cálculo'
  },
  {
    url: '/projects/puce_attendance.png',
    titleES: '04. Control de Asistencia',
    titleEN: '04. Attendance Tracking & Validation',
    descES: 'Registro de firmas y faltas encoladas en transacciones locales ACID que se sincronizan con Spring Boot en cuanto se detecta señal Wi-Fi.',
    descEN: 'Attendance signatures queued in local ACID transactions that sync with Spring Boot as soon as Wi-Fi signal is detected.',
    tag: 'Delta Sync / Queues'
  }
];

export function EditorialLayout({ project }: { project: PersonalProject }) {
  const { lang } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Default to Home screen
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % SCREENS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeScreen = SCREENS[currentImageIndex];

  return (
    <article className="min-h-screen bg-[#070709] text-neutral-100 font-sans selection:bg-indigo-500/30 overflow-hidden">
      <ScrollAffordance sections={getEditorialSections(lang)} accentColor="indigo" />

      {/* Hero Section */}
      <section id="editorial-hero" className="pt-28 pb-12 px-6 text-center max-w-5xl mx-auto z-20 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-mono tracking-widest uppercase mb-6">
          <Smartphone className="w-3.5 h-3.5" />
          <span>{lang === 'es' ? 'Arquitectura Flutter 120 FPS & Spring Boot' : 'Flutter 120 FPS & Spring Boot Architecture'}</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-neutral-50 tracking-tighter mb-6 leading-tight">
          PUCE Connect Hub
        </h1>
        
        <p className="text-lg sm:text-2xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto mb-8">
          {lang === 'es' 
            ? 'Portal móvil offline-first con persistencia NoSQL local y sincronización transaccional con Spring Boot para entornos con conectividad universitaria intermitente.'
            : 'Offline-first mobile portal with local NoSQL persistence and transactional synchronization with Spring Boot for intermittent university connectivity.'}
        </p>

        {/* Action Controls Header */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            100% Offline-First Engine
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            <Zap className="w-3 h-3" />
            &lt; 50ms Local Query
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full">
            Isar NoSQL + BLoC + Spring Boot
          </span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION: KEY ENGINEERING METRICS */}
      {/* ============================================================ */}
      <section id="editorial-metrics" className="max-w-6xl mx-auto px-6 py-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/[0.08] hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center justify-between text-neutral-400 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider">{lang === 'es' ? 'Latencia Local' : 'Local Latency'}</span>
              <Zap className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-display font-bold text-neutral-50 mb-1">&lt; 50ms</div>
            <div className="text-xs text-neutral-400">{lang === 'es' ? 'Despacho NoSQL en Isar DB local' : 'Local Isar NoSQL dispatch'}</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/[0.08] hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center justify-between text-neutral-400 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider">{lang === 'es' ? 'Disponibilidad' : 'Availability'}</span>
              <WifiOff className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-display font-bold text-neutral-50 mb-1">100%</div>
            <div className="text-xs text-neutral-400">{lang === 'es' ? 'Navegación offline sin bloqueo de red' : 'Offline navigation without network lock'}</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/[0.08] hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center justify-between text-neutral-400 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider">{lang === 'es' ? 'Pérdida de Datos' : 'Data Loss'}</span>
              <RefreshCcw className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-display font-bold text-neutral-50 mb-1">0.0%</div>
            <div className="text-xs text-neutral-400">{lang === 'es' ? 'Colas de mutación transaccional delta' : 'Delta transactional mutation queues'}</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/[0.08] hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center justify-between text-neutral-400 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider">{lang === 'es' ? 'Cifrado' : 'Encryption'}</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-display font-bold text-neutral-50 mb-1">AES-256</div>
            <div className="text-xs text-neutral-400">{lang === 'es' ? 'Keystore seguro y tokens rotativos' : 'Hardware Keystore & rotating tokens'}</div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTERACTIVE SCREEN SELECTOR TABS & ROTATION TOGGLE */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto px-6 pt-6 pb-2 relative z-30">
        <div className="flex items-center justify-between gap-4 flex-wrap bg-[#101016]/90 backdrop-blur-md p-2 rounded-2xl border border-white/[0.08] shadow-xl">
          <div className="flex items-center gap-1.5 flex-wrap flex-1">
            {SCREENS.map((screen, index) => {
              const isActive = index === currentImageIndex;
              return (
                <button
                  key={screen.url}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsPlaying(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                    isActive 
                      ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/30 ring-1 ring-white/20' 
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.05]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-neutral-600'}`} />
                  <span>{lang === 'es' ? screen.titleES : screen.titleEN}</span>
                </button>
              );
            })}
          </div>

          {/* Play / Pause Rotation button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono text-neutral-400 hover:text-neutral-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-colors shrink-0"
            title={isPlaying ? 'Pausar carrusel 3D' : 'Reanudar carrusel 3D'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-indigo-400" />
                <span className="hidden sm:inline">Pausar 3D</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-400" />
                <span className="hidden sm:inline">Reanudar 3D</span>
              </>
            )}
          </button>
        </div>

        {/* Current Active Screen Description Banner */}
        <div className="mt-4 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-mono font-semibold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              {activeScreen.tag}
            </span>
            <span className="text-xs text-neutral-300 font-medium">
              {lang === 'es' ? activeScreen.descES : activeScreen.descEN}
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 hidden md:inline">
            1080 x 2340 FHD+ • Native Flutter Canvas
          </span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DESKTOP: 3D Phone Carousel (lg+) — PRESERVED & ELEVATED */}
      {/* ============================================================ */}
      <section 
        id="editorial-phones" 
        className="hidden lg:flex relative py-16 w-full items-center justify-center z-20 min-h-[780px]" 
        style={{ perspective: '2000px' }}
      >
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ 
            backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient Glow behind active phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[650px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div 
          className="relative w-full max-w-6xl mx-auto h-[680px] flex items-center justify-center" 
          style={{ transformStyle: 'preserve-3d' }}
        >
          {SCREENS.map((screen, index) => {
            const diff = (index - currentImageIndex + SCREENS.length) % SCREENS.length;
            
            let transform = '';
            let opacity = '';
            let zIndex = 0;
            let filter = '';

            if (diff === 0) {
              // Center / Active Screen - Crisp, prominent, sharp
              transform = 'translateX(0) translateZ(120px) rotateY(0deg) scale(1.05)';
              opacity = 'opacity-100';
              zIndex = 40;
              filter = 'drop-shadow(0 25px 60px rgba(0,0,0,0.9))';
            } else if (diff === 1) {
              // Right side
              transform = 'translateX(70%) translateZ(-140px) rotateY(-22deg) scale(0.88)';
              opacity = 'opacity-85 hover:opacity-100 cursor-pointer';
              zIndex = 30;
              filter = 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))';
            } else if (diff === SCREENS.length - 1) {
              // Left side
              transform = 'translateX(-70%) translateZ(-140px) rotateY(22deg) scale(0.88)';
              opacity = 'opacity-85 hover:opacity-100 cursor-pointer';
              zIndex = 30;
              filter = 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))';
            } else {
              // Back / Hidden
              transform = 'translateX(0) translateZ(-320px) rotateY(0deg) scale(0.75)';
              opacity = 'opacity-0 pointer-events-none';
              zIndex = 10;
            }

            return (
              <div 
                key={screen.url}
                onClick={() => {
                  if (diff !== 0) {
                    setCurrentImageIndex(index);
                    setIsPlaying(false);
                  }
                }}
                className={`absolute w-[320px] xl:w-[340px] h-[640px] xl:h-[680px] bg-neutral-950 rounded-[3.25rem] border-[8px] border-[#1c1c24] ring-1 ring-white/10 overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${opacity}`}
                style={{ transform, zIndex, filter }}
              >
                {/* Smartphone Dynamic Island / Hardware Top Pill */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-40 flex items-center justify-end px-2.5 shadow-inner">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700/60" />
                </div>

                {/* Speaker Earpiece Slit */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-neutral-800 rounded-full z-40" />

                {/* Full Resolution Mobile Screen Screenshot */}
                <div className="w-full h-full overflow-hidden bg-neutral-950 pt-2">
                  <img 
                    src={screen.url} 
                    alt={lang === 'es' ? screen.titleES : screen.titleEN} 
                    className="w-full h-full object-cover object-top select-none"
                    style={{ 
                      imageRendering: '-webkit-optimize-contrast',
                      transform: 'translateZ(0)',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden'
                    }}
                    loading="eager"
                    decoding="sync"
                  />
                </div>

                {/* Glass Reflection Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none z-30" />

                {/* Active Screen Indicator Tag */}
                {diff === 0 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono text-neutral-300 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{lang === 'es' ? screen.titleES : screen.titleEN}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Callout Left: Offline Engine */}
        <div className="absolute top-1/4 left-[4%] xl:left-[10%] w-80 bg-[#101016]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-2xl z-30">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <WifiOff className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="text-neutral-50 font-bold text-sm">
                {lang === 'es' ? 'Modo Offline Nativo' : 'Native Offline Mode'}
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            {lang === 'es'
              ? 'Isar NoSQL embebida en memoria Flash. Consultas de notas, horarios y materias indexadas con despacho sub-50ms sin esperar al servidor.'
              : 'Embedded Isar NoSQL in Flash memory. Indexed grades, schedules, and subjects queried with sub-50ms dispatch without waiting for the server.'}
          </p>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-indigo-400">
            <span>Query latency: &lt;50ms</span>
            <span>Zero IPC Bridge</span>
          </div>
        </div>

        {/* Floating Callout Right: Background Sync */}
        <div className="absolute bottom-1/4 right-[4%] xl:right-[10%] w-80 bg-[#101016]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-2xl z-30">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <RefreshCcw className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-bold text-sm text-neutral-50">Background Delta Sync</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              ACID Queue
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            {lang === 'es'
              ? 'Workers en segundo plano encolando mutaciones de asistencia con UUID idempotente. Sincronización delta con Spring Boot al reanudar Wi-Fi con 0% pérdida de datos.'
              : 'Background workers queueing attendance mutations with idempotent UUID. Delta sync with Spring Boot on Wi-Fi reconnect with 0% data loss.'}
          </p>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-emerald-400">
            <span>Spring Boot REST</span>
            <span>Idempotent Worker</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MOBILE: Stacked Phone Showcase (< lg) */}
      {/* ============================================================ */}
      <section id="editorial-phones-mobile" className="lg:hidden relative py-12 px-6 z-20">
        <div className="flex justify-center mb-6">
          <div className="relative w-[300px] sm:w-[330px] h-[600px] sm:h-[660px] bg-neutral-950 rounded-[3rem] border-[8px] border-[#1c1c24] ring-1 ring-white/10 shadow-2xl overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-40 flex items-center justify-end px-2.5 shadow-inner">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700/60" />
            </div>

            {/* Screen Images with Fade */}
            {SCREENS.map((screen, index) => (
              <img 
                key={screen.url}
                src={screen.url} 
                alt={lang === 'es' ? screen.titleES : screen.titleEN} 
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{ 
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translateZ(0)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden'
                }}
                loading="eager"
                decoding="sync"
              />
            ))}

            {/* Glass Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none z-30" />
          </div>
        </div>

        {/* Mobile Dot / Thumb indicators */}
        <div className="flex justify-center items-center gap-2 mb-8">
          {SCREENS.map((screen, i) => (
            <button
              key={screen.url}
              onClick={() => {
                setCurrentImageIndex(i);
                setIsPlaying(false);
              }}
              className={`h-2 rounded-full transition-all ${
                i === currentImageIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-neutral-700'
              }`}
              aria-label={`Ver pantalla ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile Feature Callouts */}
        <div className="space-y-3 max-w-md mx-auto">
          <div className="bg-[#0e0e14] border border-white/[0.08] rounded-2xl p-4 flex items-start gap-3">
            <WifiOff className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-neutral-50 mb-1">
                {lang === 'es' ? 'Isar Database Embebida' : 'Embedded Isar Database'}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === 'es'
                  ? 'Horarios, notas y asistencia en Flash memory local. Despacho instantáneo <50ms sin depender de la señal celular.'
                  : 'Schedules, grades, and attendance in local Flash memory. Sub-50ms instant dispatch independent of cellular signal.'}
              </p>
            </div>
          </div>

          <div className="bg-[#0e0e14] border border-white/[0.08] rounded-2xl p-4 flex items-start gap-3">
            <RefreshCcw className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-neutral-50 mb-1">
                Background Sync & Spring Boot
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === 'es'
                  ? 'Mutaciones encoladas de forma transaccional. Reintento automático y conciliación delta al volver a tener red.'
                  : 'Transactional queued mutations. Automatic retry and delta reconciliation upon network recovery.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION: ARCHITECTURE DEEP-DIVE (3 Pillars of Engineering) */}
      {/* ============================================================ */}
      <section id="editorial-architecture" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/[0.08] relative z-20">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'Fundamentos de Ingeniería' : 'Engineering Foundations'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-50 tracking-tight mb-4">
            {lang === 'es' 
              ? 'Arquitectura Móvil Desacoplada & Resiliente' 
              : 'Decoupled & Resilient Mobile Architecture'}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            {lang === 'es'
              ? 'Diseñada bajo el principio de desconexión por defecto. La interfaz nunca asume conectividad continua y despacha toda interacción de usuario desde memoria persistente local.'
              : 'Built under the offline-by-default principle. The UI never assumes persistent connectivity and dispatches all interactions from local persistent memory.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-[#0b0b10] border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Database className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-50 mb-3">
                {lang === 'es' ? 'Persistencia NoSQL (Isar DB)' : 'Embedded NoSQL (Isar DB)'}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                {lang === 'es'
                  ? 'Base de datos NoSQL ultrarrápida compilada a código binario nativo en Dart. Esquemas tipados con índices compuestos para consultas de notas y asistencia sin costo de serialización JSON.'
                  : 'Ultra-fast NoSQL database compiled to native binary code in Dart. Typed schemas with composite indices for queries with zero JSON serialization overhead.'}
              </p>
            </div>
            <ul className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-neutral-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Zero IPC Overhead</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>ACID Local Transactions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Sub-50ms Query Latency</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-[#0b0b10] border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-50 mb-3">
                {lang === 'es' ? 'Máquina de Estados (BLoC)' : 'State Machine (BLoC)'}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                {lang === 'es'
                  ? 'Patrón reactivo unidireccional. La UI emite eventos inmutables y reacciona a streams de estados deterministas: LoadedFromCache, SyncingBackground, OfflineNotice, SyncSuccess.'
                  : 'Unidirectional reactive pattern. UI emits immutable events and reacts to deterministic state streams: LoadedFromCache, SyncingBackground, OfflineNotice, SyncSuccess.'}
              </p>
            </div>
            <ul className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-neutral-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Deterministic State Flow</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>120 FPS Smooth Frame Render</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Decoupled Presentation</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-[#0b0b10] border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Server className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-50 mb-3">
                {lang === 'es' ? 'Delta Sync & Backend Spring Boot' : 'Delta Sync & Spring Boot Backend'}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                {lang === 'es'
                  ? 'Cola de mutaciones transaccionales en SQLite con reintentos exponenciales. Sincronización en ráfagas con Spring Boot REST y PostgreSQL con resolución determinista de conflictos.'
                  : 'Transactional mutation queue in SQLite with exponential retries. Batch sync with Spring Boot REST and PostgreSQL with deterministic conflict resolution.'}
              </p>
            </div>
            <ul className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-neutral-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Idempotent HTTP Endpoints</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Zero Data Loss Replay Log</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>PostgreSQL ACID Backing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION: DATA PIPELINE FLOW DIAGRAM */}
      {/* ============================================================ */}
      <section id="editorial-pipeline" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/[0.08] relative z-20">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-neutral-50 tracking-tight mb-3">
            {lang === 'es' ? 'Flujo de Mutación Offline a Cloud' : 'Offline-to-Cloud Mutation Pipeline'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            {lang === 'es' 
              ? 'Trazabilidad completa desde el tap del usuario en la pantalla hasta la persistencia final en la base de datos central.' 
              : 'Complete traceability from user screen tap to final persistence in the central database.'}
          </p>
        </div>

        {/* Visual Pipeline Chain */}
        <div className="bg-[#0b0b10] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between h-full">
              <span className="text-[10px] font-mono text-neutral-500 uppercase">Paso 1: Input</span>
              <div className="my-2">
                <div className="text-sm font-bold text-neutral-200">Flutter UI (120 FPS)</div>
                <div className="text-[11px] text-neutral-400 mt-1">Tap en Registro de Asistencia</div>
              </div>
              <span className="text-[10px] font-mono text-indigo-400">Latencia: 0ms</span>
            </div>

            <div className="hidden lg:flex justify-center text-neutral-600">
              <ArrowRight className="w-5 h-5 text-indigo-400" />
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col justify-between h-full">
              <span className="text-[10px] font-mono text-indigo-400 uppercase">Paso 2: BLoC Event</span>
              <div className="my-2">
                <div className="text-sm font-bold text-neutral-50">Isar NoSQL Cache</div>
                <div className="text-[11px] text-neutral-300 mt-1">Escritura local ACID inmediata</div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">&lt;50ms en Flash</span>
            </div>

            <div className="hidden lg:flex justify-center text-neutral-600">
              <ArrowRight className="w-5 h-5 text-indigo-400" />
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between h-full">
              <span className="text-[10px] font-mono text-neutral-500 uppercase">Paso 3: Queue</span>
              <div className="my-2">
                <div className="text-sm font-bold text-neutral-200">Background Worker</div>
                <div className="text-[11px] text-neutral-400 mt-1">Encolamiento con UUID idempotente</div>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">0% Pérdida</span>
            </div>

            <div className="hidden lg:flex justify-center text-neutral-600">
              <ArrowRight className="w-5 h-5 text-indigo-400" />
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between h-full">
              <span className="text-[10px] font-mono text-neutral-500 uppercase">Paso 4: Cloud Sync</span>
              <div className="my-2">
                <div className="text-sm font-bold text-neutral-200">Spring Boot REST</div>
                <div className="text-[11px] text-neutral-400 mt-1">Reintento exponencial al reanudar red</div>
              </div>
              <span className="text-[10px] font-mono text-indigo-400">PostgreSQL Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION: TECH STACK & SPECIFICATIONS */}
      {/* ============================================================ */}
      <section id="editorial-features" className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-white/[0.08] relative z-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-4">
              {lang === 'es' ? 'Pila Tecnológica del Sistema:' : 'System Tech Stack:'}
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t, i) => (
                <span 
                  key={i} 
                  className="px-3.5 py-1.5 bg-[#121218] text-neutral-300 border border-white/[0.08] hover:border-indigo-500/30 rounded-xl text-xs font-mono font-medium transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-right">
              <div className="text-xs font-mono text-neutral-400 uppercase">{lang === 'es' ? 'Entorno de Producción' : 'Production Environment'}</div>
              <div className="text-sm font-bold text-neutral-200 mt-0.5">Android 14+ / iOS 17+ • Cloud Spring Boot</div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
