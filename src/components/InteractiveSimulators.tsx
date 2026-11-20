import React, { useState } from 'react';
import { 
  Sparkles, 
  Play, 
  ExternalLink, 
  Bot, 
  Zap, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  RotateCcw, 
  Check, 
  MessageSquare,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TwitchScannerDemo: React.FC = () => {
  const { lang } = useLanguage();
  const [channel, setChannel] = useState('indie_dev_mike');
  const [scanning, setScanning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [scanComplete, setScanComplete] = useState(false);

  const runScan = () => {
    setScanning(true);
    setScanComplete(false);
    setLogs([]);

    const steps = [
      `$ gearstack scan --channel ${channel}`,
      'Connecting to Twitch API (v5 Helix)...',
      'Parsing stream description panels & about section...',
      '✓ Microphone detected: Blue Yeti X Dynamic USB',
      '✓ Camera detected: Logitech C922 Pro Stream (1080p)',
      '✓ Keyboard detected: Keychron K6 Wireless',
      '✗ Audio Interface: Not detected (Direct USB bottleneck)',
      '✗ Broadcast Controller: Stream Deck Not detected',
      '✗ Studio Lighting: No Elgato Key Light found in metadata',
      '→ 3 High-Impact Upgrade Opportunities Identified!',
      `▸ Automated Upgrade Bundle compiled for ${channel}@gmail.com`,
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setScanning(false);
          setScanComplete(true);
        }
      }, (index + 1) * 220);
    });
  };

  return (
    <div className="space-y-4 text-xs font-mono">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="flex-1 flex items-center bg-neutral-950 px-3 py-2 rounded-xl border border-neutral-800">
          <span className="text-neutral-500 mr-2">twitch.tv/</span>
          <select
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            className="bg-transparent text-neutral-50 font-mono text-xs focus:outline-none flex-1 appearance-none cursor-pointer min-h-[44px]"
          >
            <option value="indie_dev_mike">indie_dev_mike (Coding Streamer)</option>
            <option value="sarah_designs">sarah_designs (Art & UI/UX)</option>
            <option value="alex_fps">alex_fps (Esports Pro)</option>
          </select>
        </div>
        <button
          onClick={runScan}
          disabled={scanning}
          className="px-4 py-2 rounded-xl font-bold bg-cyan-500 hover:bg-cyan-400 text-black flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 min-h-[44px]"
        >
          <Play className="w-3.5 h-3.5 fill-black" />
          <span>{scanning ? (lang === 'es' ? 'Escaneando Stream...' : 'Scanning Stream...') : (lang === 'es' ? 'Ejecutar Escaneo' : 'Run Live Scan')}</span>
        </button>
      </div>
      <p className="text-[10px] text-neutral-500 italic px-1">{lang === 'es' ? 'Demo interactiva: datos de muestra' : 'Interactive demo: sample data'}</p>

      {/* Terminal Output */}
      <div className="p-4 rounded-2xl bg-[#090d16] border border-cyan-500/30 text-neutral-300 min-h-[160px] space-y-1 overflow-x-auto shadow-inner">
        <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-neutral-800/80 text-[10px] text-neutral-500">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2">gearstack-cli: {lang === 'es' ? 'sesion de auditoria automatizada' : 'automated audit session'}</span>
        </div>

        {logs.length === 0 && !scanning && (
          <p className="text-neutral-500 italic">{lang === 'es' ? 'Haz clic en "Ejecutar Escaneo" para auditar esta configuracion...' : 'Click "Run Live Scan" to audit this stream setup...'}</p>
        )}

        {logs.map((log, idx) => (
          <div key={idx} className={`leading-relaxed ${
            log.startsWith('✓') ? 'text-emerald-400 font-semibold' :
            log.startsWith('✗') ? 'text-rose-400 font-semibold' :
            log.startsWith('→') ? 'text-amber-400 font-bold' :
            log.startsWith('▸') ? 'text-cyan-400 font-bold' :
            log.startsWith('$') ? 'text-neutral-50 font-bold' : 'text-neutral-400'
          }`}>
            {log}
          </div>
        ))}
      </div>

      {/* Recommended Upgrades Bundle */}
      {scanComplete && (
        <div className="p-4 rounded-2xl bg-neutral-950 border border-cyan-500/40 animate-fadeIn space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-neutral-50 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'es' ? 'Bundle de Afiliados Recomendado' : 'Recommended Affiliate Bundle'}</span>
            </span>
            <span className="text-neutral-400 text-[10px]">Tag: <strong className="text-cyan-400">axeltech0b-20</strong></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-neutral-50 block">Elgato Wave XLR</span>
                <span className="text-neutral-400 text-[10px]">$159.99</span>
              </div>
              <a href="https://www.amazon.com/s?k=Elgato+Wave+XLR&tag=axeltech0b-20" target="_blank" rel="nofollow sponsored noopener noreferrer" className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-neutral-50 block">Elgato Stream Deck MK.2</span>
                <span className="text-neutral-400 text-[10px]">$149.99</span>
              </div>
              <a href="https://www.amazon.com/s?k=Elgato+Stream+Deck+MK2&tag=axeltech0b-20" target="_blank" rel="nofollow sponsored noopener noreferrer" className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-neutral-50 block">Elgato Key Light Air</span>
                <span className="text-neutral-400 text-[10px]">$129.99</span>
              </div>
              <a href="https://www.amazon.com/s?k=Elgato+Key+Light+Air&tag=axeltech0b-20" target="_blank" rel="nofollow sponsored noopener noreferrer" className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const JarvisVoiceDemo: React.FC = () => {
  const { lang } = useLanguage();
  const [isActive, setIsActive] = useState(true);
  const [state, setState] = useState<'idle' | 'listening' | 'speaking'>('idle');
  const [activeQuery, setActiveQuery] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  const queries = [
    {
      id: 'lead',
      labelES: 'Calificar prospecto B2B',
      labelEN: 'Qualify B2B prospect',
      promptES: 'Analizar empresa SaaS de 25 empleados interesada en plan Enterprise',
      promptEN: 'Analyze 25-employee SaaS lead requesting Enterprise tier quote',
      responseES: 'Prospecto validado: Empresa B2B con presupuesto aprobado ($1,200/mes). Score ICP: 94/100. Enrutado a WhatsApp de Axel con propuesta prellenada.',
      responseEN: 'Prospect validated: B2B company with approved budget ($1,200/mo). ICP Score: 94/100. Routed to Axel WhatsApp with pre-filled proposal.',
      latency: '118ms',
    },
    {
      id: 'proposal',
      labelES: 'Generar propuesta comercial',
      labelEN: 'Generate sales proposal',
      promptES: 'Redactar alcance de portal web con cobros Stripe y base de datos multi-tenant',
      promptEN: 'Draft scope for web portal with Stripe payments and multi-tenant database',
      responseES: 'Propuesta generada: Arquitectura Next.js 15, aislamiento Supabase RLS y facturacion Stripe en 3 semanas. Entregable llave en mano.',
      responseEN: 'Proposal generated: Next.js 15 architecture, Supabase RLS isolation, and Stripe billing in 3 weeks. Turnkey delivery ready.',
      latency: '142ms',
    },
    {
      id: 'metrics',
      labelES: 'Consultar metricas de venta',
      labelEN: 'Check sales metrics',
      promptES: 'Resumen de conversion del embudo y tasa de cierre de esta semana',
      promptEN: 'Summary of funnel conversion and closing rate for this week',
      responseES: 'Metricas actuales: 14 reuniones agendadas, 82% asistencia, tasa de cierre 28.5%. Cero caidas en pasarela de pagos.',
      responseEN: 'Live metrics: 14 meetings booked, 82% attendance, closing rate 28.5%. Zero downtime on payment gateways.',
      latency: '94ms',
    },
  ];

  const triggerVoice = (queryItem: typeof queries[0]) => {
    if (!isActive) return;
    setActiveQuery(queryItem.id);
    setState('listening');
    setMessage(lang === 'es' ? `Escuchando orden: "${queryItem.promptES}"...` : `Listening to command: "${queryItem.promptEN}"...`);
    
    setTimeout(() => {
      setState('speaking');
      setMessage(lang === 'es' ? queryItem.responseES : queryItem.responseEN);
    }, 600);
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#030611] border border-cyan-500/30 space-y-4 text-xs font-mono shadow-xl">
      {/* Top Header: Status & Toggle */}
      <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-cyan-400" />
          <div>
            <span className="font-bold text-neutral-50 uppercase tracking-wider block">
              {lang === 'es' ? 'Simulador Asistente Jarvis' : 'Jarvis Assistant Simulator'}
            </span>
            <span className="text-[10px] text-neutral-500">
              {lang === 'es' ? 'Respuestas instantaneas en tiempo real' : 'Real-time simulated streaming dispatch'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsActive(!isActive);
              if (isActive) {
                setState('idle');
                setMessage(lang === 'es' ? 'Asistente pausado temporalmente.' : 'Assistant temporarily paused.');
              } else {
                setMessage(null);
              }
            }}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all min-h-[44px] flex items-center gap-1.5 ${
              isActive 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                : 'bg-neutral-800 text-neutral-400 border-neutral-700'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-600'}`} />
            <span>{isActive ? (lang === 'es' ? 'Activo' : 'Active') : (lang === 'es' ? 'Pausado' : 'Paused')}</span>
          </button>
        </div>
      </div>

      {/* Reactive Visualizer Waveform */}
      <div className="h-12 bg-black/60 rounded-xl border border-cyan-500/20 flex items-center justify-center gap-1.5 px-4 overflow-hidden">
        {[20, 50, 85, 60, 95, 40, 75, 90, 30, 85, 65, 45, 90, 35, 70, 55].map((h, i) => (
          <div
            key={i}
            className={`w-1 sm:w-1.5 rounded-full transition-all duration-200 ${
              !isActive ? 'bg-neutral-800 h-2' :
              state === 'speaking' ? 'bg-cyan-400' :
              state === 'listening' ? 'bg-amber-400' : 'bg-neutral-700'
            }`}
            style={{ 
              height: !isActive ? '6px' : state === 'speaking' ? `${Math.max(20, (h * (0.8 + Math.random() * 0.4)))}%` : state === 'listening' ? `${Math.max(15, h * 0.5)}%` : '15%' 
            }}
          />
        ))}
      </div>

      {/* Output Message Container */}
      <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 min-h-[64px] flex flex-col justify-center">
        <p className="text-neutral-200 text-xs leading-relaxed font-sans">
          {message || (lang === 'es' 
            ? 'Toca uno de los escenarios de prueba para simular una consulta de negocio en tiempo real:' 
            : 'Tap one of the test scenarios below to simulate a real-time business inquiry:')}
        </p>
      </div>

      {/* Interactive Business Prompt Pills (Mobile Friendly 44px) */}
      <div className="space-y-2 pt-1">
        <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">
          {lang === 'es' ? 'Escenarios de prueba para clientes:' : 'Interactive test scenarios:'}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {queries.map((q) => (
            <button
              key={q.id}
              onClick={() => triggerVoice(q)}
              disabled={!isActive}
              className={`px-3 py-2.5 rounded-xl text-left border transition-all min-h-[44px] flex items-center justify-between ${
                activeQuery === q.id && state !== 'idle'
                  ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40 font-semibold'
                  : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border-neutral-800 hover:border-neutral-700'
              } disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              <span className="text-[11px] leading-tight font-sans">
                {lang === 'es' ? q.labelES : q.labelEN}
              </span>
              <span className="text-[9px] font-mono text-cyan-400/80 bg-cyan-950/60 px-1.5 py-0.5 rounded ml-2 shrink-0">
                {q.latency}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-neutral-500 italic px-1 text-center">
        {lang === 'es' ? 'Simulacion con datos de muestra: cero llamadas externas' : 'Sample data simulation: zero external API costs'}
      </p>
    </div>
  );
};

export const SaaSDashboardDemo: React.FC = () => {
  const { lang } = useLanguage();
  const [tier, setTier] = useState<'starter' | 'pro' | 'scale'>('pro');
  const [isCharging, setIsCharging] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [apiKey, setApiKey] = useState('sk_live_syntro_8f93a2b7e1');
  const [keyRotated, setKeyRotated] = useState(false);

  const handleSimulatePayment = () => {
    setIsCharging(true);
    setPaymentSuccess(false);
    setTimeout(() => {
      setIsCharging(false);
      setPaymentSuccess(true);
      setTimeout(() => setPaymentSuccess(false), 4500);
    }, 800);
  };

  const handleRotateKey = () => {
    setApiKey(`sk_live_syntro_${Math.random().toString(36).substring(2, 10)}`);
    setKeyRotated(true);
    setTimeout(() => setKeyRotated(false), 2500);
  };

  const tierPrices = {
    starter: '$29 / mes',
    pro: '$99 / mes',
    scale: '$299 / mes',
  };

  const tierPricesEN = {
    starter: '$29 / mo',
    pro: '$99 / mo',
    scale: '$299 / mo',
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4 text-xs font-mono animate-fadeIn shadow-xl">
      {/* Header and Tier Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-neutral-800 gap-3">
        <div>
          <span className="font-bold text-neutral-50 block text-sm">
            {lang === 'es' ? 'Suscripcion y Gobernanza SyntroSaaS' : 'SyntroSaaS Subscription & Governance'}
          </span>
          <span className="text-neutral-500 text-[10px]">
            {lang === 'es' ? 'Simulador de cobro Stripe y cuotas multi-tenant' : 'Stripe billing and multi-tenant quota simulator'}
          </span>
        </div>
        
        {/* Tier Pills with 44px touch target on mobile */}
        <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800 self-start sm:self-auto">
          {(['starter', 'pro', 'scale'] as const).map(t => (
            <button
              key={t}
              onClick={() => {
                setTier(t);
                setPaymentSuccess(false);
              }}
              className={`px-3 py-2 rounded-lg text-[10px] font-bold uppercase transition-all min-h-[44px] flex items-center justify-center ${
                tier === t 
                  ? 'bg-[#C8A97E] text-black shadow-md font-extrabold' 
                  : 'text-neutral-400 hover:text-neutral-50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
        <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
          <span className="text-[10px] text-neutral-400 block mb-1">
            {lang === 'es' ? 'Cuota Mensual API' : 'Monthly API Quota'}
          </span>
          <span className="font-bold text-neutral-50 text-sm">
            {tier === 'starter' ? '10K Peticiones' : tier === 'pro' ? '100K Peticiones' : (lang === 'es' ? '1M Peticiones' : '1M Requests')}
          </span>
          <span className="text-[9px] text-[#C8A97E] block mt-0.5">
            {lang === 'es' ? tierPrices[tier] : tierPricesEN[tier]}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
          <span className="text-[10px] text-neutral-400 block mb-1">
            {lang === 'es' ? 'Puestos de Equipo' : 'Team Seats'}
          </span>
          <span className="font-bold text-neutral-50 text-sm">
            {tier === 'starter' ? (lang === 'es' ? '2 Puestos' : '2 Seats') : tier === 'pro' ? (lang === 'es' ? '10 Puestos' : '10 Seats') : (lang === 'es' ? 'Ilimitado' : 'Unlimited')}
          </span>
          <span className="text-[9px] text-neutral-500 block mt-0.5">
            {lang === 'es' ? 'Aislamiento RLS activo' : 'Active RLS isolation'}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
          <span className="text-[10px] text-neutral-400 block mb-1">
            {lang === 'es' ? 'Estado de Facturacion' : 'Billing Status'}
          </span>
          <span className="font-bold text-emerald-400 text-sm flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{paymentSuccess ? (lang === 'es' ? 'Cobro Exitoso' : 'Charge Paid') : (lang === 'es' ? 'Al Dia' : 'Active')}</span>
          </span>
          <span className="text-[9px] text-neutral-500 block mt-0.5">
            {lang === 'es' ? 'Stripe Customer ID: cus_89a' : 'Stripe Customer ID: cus_89a'}
          </span>
        </div>
      </div>

      {/* Stripe Payment Simulator Button */}
      <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-semibold text-neutral-200 block">
            {lang === 'es' ? 'Pasarela Stripe en Modo Sandbox' : 'Stripe Sandbox Gateway'}
          </span>
          <p className="text-[10px] text-neutral-400 mt-0.5 font-sans">
            {paymentSuccess
              ? (lang === 'es' ? 'Webhook recibido: Factura #inv_9182 confirmada y procesada.' : 'Webhook received: Invoice #inv_9182 confirmed and processed.')
              : (lang === 'es' ? 'Simula un cobro instantaneo para verificar el flujo de facturacion.' : 'Simulate an instant charge to verify automated billing.')}
          </p>
        </div>

        <button
          onClick={handleSimulatePayment}
          disabled={isCharging}
          className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 min-h-[44px] shrink-0"
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>
            {isCharging 
              ? (lang === 'es' ? 'Procesando...' : 'Processing...') 
              : paymentSuccess 
              ? (lang === 'es' ? 'Cobrado Exitosamente' : 'Charge Successful') 
              : (lang === 'es' ? 'Simular Cobro Stripe' : 'Simulate Stripe Charge')}
          </span>
        </button>
      </div>

      {/* Scoped API Key Manager */}
      <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
        <div className="min-w-0 pr-2">
          <span className="text-[10px] text-neutral-500 block mb-0.5">
            {lang === 'es' ? 'Clave API activa (delimitada por RLS):' : 'Active API key (RLS scoped):'}
          </span>
          <code className="text-[#C8A97E] font-bold truncate block text-[11px]">{apiKey}</code>
        </div>
        <button
          onClick={handleRotateKey}
          className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-xs transition-colors shrink-0 min-h-[44px] flex items-center justify-center gap-1.5"
        >
          {keyRotated ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'es' ? 'Clave Rotada' : 'Key Rotated'}</span>
            </>
          ) : (
            <>
              <RotateCcw className="w-3.5 h-3.5 text-neutral-400" />
              <span>{lang === 'es' ? 'Rotar Clave' : 'Rotate Key'}</span>
            </>
          )}
        </button>
      </div>

      <p className="text-[10px] text-neutral-500 italic px-1 text-center">
        {lang === 'es' ? 'Demo interactiva: datos de muestra' : 'Interactive demo: sample data'}
      </p>
    </div>
  );
};

export const KureBookingDemo: React.FC = () => {
  const { lang } = useLanguage();
  const [guests, setGuests] = useState<number>(2);
  const [shift, setShift] = useState<'lunch' | 'dinner' | 'vip'>('dinner');
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const shiftLabels = {
    lunch: { es: 'Almuerzo (13:30)', en: 'Lunch (1:30 PM)', table: 'Salon Principal' },
    dinner: { es: 'Cena Degustacion (20:00)', en: 'Tasting Dinner (8:00 PM)', table: 'Chef Table' },
    vip: { es: 'Salon Privado VIP (21:30)', en: 'VIP Private Lounge (9:30 PM)', table: 'Cava Exclusiva' },
  };

  const handleConfirm = () => {
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
  };

  const currentShift = shiftLabels[shift];

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-[#080808] border border-[#C8A97E]/30 space-y-4 text-xs font-sans shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#C8A97E]" />
          <div>
            <h4 className="font-serif font-bold text-sm text-[#F5F5F0]">
              {lang === 'es' ? 'Reserva Digital en Vivo KURE' : 'KURE Live Digital Reservation'}
            </h4>
            <p className="text-[10px] text-[#A3A39E] font-mono">
              {lang === 'es' ? 'Flujo multipaso con confirmacion instantanea' : 'Multi-step booking flow with instant confirmation'}
            </p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-[#C8A97E] bg-[#C8A97E]/10 border border-[#C8A97E]/20">
          {step === 3 ? (lang === 'es' ? 'Paso 3 de 3' : 'Step 3 of 3') : step === 2 ? (lang === 'es' ? 'Paso 2 de 3' : 'Step 2 of 3') : (lang === 'es' ? 'Paso 1 de 3' : 'Step 1 of 3')}
        </span>
      </div>

      {/* Step 1: Comensales */}
      {step === 1 && (
        <div className="space-y-3 animate-fadeIn">
          <label className="text-[11px] font-mono text-[#A3A39E] uppercase tracking-wider block">
            {lang === 'es' ? '1. Selecciona el numero de comensales:' : '1. Select party size:'}
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[2, 4, 6, 8].map((num) => (
              <button
                key={num}
                onClick={() => setGuests(num)}
                className={`py-3 rounded-xl text-center border transition-all min-h-[44px] flex items-center justify-center font-serif text-sm ${
                  guests === num
                    ? 'bg-[#C8A97E] text-black font-bold border-[#C8A97E] shadow-md'
                    : 'bg-neutral-900 text-[#F5F5F0] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <span>{num} {lang === 'es' ? 'Pers.' : 'Guests'}</span>
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setStep(2)}
              className="w-full py-3 rounded-xl bg-[#F5F5F0] hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-all min-h-[44px] flex items-center justify-center gap-2"
            >
              <span>{lang === 'es' ? 'Continuar a Turno y Horario' : 'Continue to Seating & Time'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Turno y Fecha */}
      {step === 2 && (
        <div className="space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-mono text-[#A3A39E] uppercase tracking-wider block">
              {lang === 'es' ? '2. Elige el turno y ambiente:' : '2. Choose seating & atmosphere:'}
            </label>
            <button
              onClick={() => setStep(1)}
              className="text-[10px] text-[#A3A39E] hover:text-[#F5F5F0] underline"
            >
              {lang === 'es' ? 'Cambiar personas' : 'Edit guests'}
            </button>
          </div>

          <div className="space-y-2">
            {(['lunch', 'dinner', 'vip'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setShift(s)}
                className={`w-full p-3 rounded-xl text-left border transition-all min-h-[44px] flex items-center justify-between ${
                  shift === s
                    ? 'bg-[#C8A97E]/15 border-[#C8A97E] text-[#F5F5F0]'
                    : 'bg-neutral-900 text-[#A3A39E] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <span className="font-semibold text-xs block text-[#F5F5F0]">
                    {lang === 'es' ? shiftLabels[s].es : shiftLabels[s].en}
                  </span>
                  <span className="text-[10px] text-[#A3A39E] block">
                    {lang === 'es' ? `Zona: ${shiftLabels[s].table}` : `Area: ${shiftLabels[s].table}`}
                  </span>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${shift === s ? 'border-[#C8A97E] bg-[#C8A97E]' : 'border-neutral-700'}`}>
                  {shift === s && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                </div>
              </button>
            ))}
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-[#F5F5F0] border border-neutral-800 text-xs transition-colors min-h-[44px]"
            >
              {lang === 'es' ? 'Atras' : 'Back'}
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 py-3 rounded-xl bg-[#C8A97E] hover:bg-[#d6b78d] text-black font-bold text-xs uppercase tracking-wider transition-all min-h-[44px] flex items-center justify-center gap-2"
            >
              <span>{lang === 'es' ? 'Confirmar Reserva' : 'Confirm Reservation'}</span>
              <Check className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirmación Final */}
      {step === 3 && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-4 rounded-xl bg-[#141413] border border-[#C8A97E]/30 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-bold text-xs uppercase tracking-wider">
                {lang === 'es' ? 'Reserva Validada con Exito' : 'Reservation Successfully Confirmed'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-white/5 font-mono">
              <div>
                <span className="text-[#A3A39E] block">{lang === 'es' ? 'Comensales:' : 'Guests:'}</span>
                <span className="text-[#F5F5F0] font-bold">{guests} {lang === 'es' ? 'Personas' : 'Guests'}</span>
              </div>
              <div>
                <span className="text-[#A3A39E] block">{lang === 'es' ? 'Turno:' : 'Seating:'}</span>
                <span className="text-[#F5F5F0] font-bold">{lang === 'es' ? currentShift.es : currentShift.en}</span>
              </div>
              <div>
                <span className="text-[#A3A39E] block">{lang === 'es' ? 'Zona asignada:' : 'Assigned Zone:'}</span>
                <span className="text-[#C8A97E] font-bold">{currentShift.table}</span>
              </div>
              <div>
                <span className="text-[#A3A39E] block">{lang === 'es' ? 'Codigo Reserva:' : 'Booking Ref:'}</span>
                <span className="text-neutral-300 font-bold">#KUR-8429</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href={`https://wa.me/593988888888?text=${encodeURIComponent(
                lang === 'es'
                  ? `Hola Axel, vi la demo interactiva de KURE. Me gustaria cotizar un sistema de reservas web para mi restaurante.`
                  : `Hi Axel, I tried the KURE booking demo. I would like to get a quote for a custom restaurant booking portal.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Cotizar Sistema por WhatsApp' : 'Get Quote via WhatsApp'}</span>
            </a>

            <button
              onClick={handleReset}
              className="py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-[#A3A39E] border border-neutral-800 text-xs transition-colors min-h-[44px] flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Reiniciar Demo' : 'Reset Demo'}</span>
            </button>
          </div>
        </div>
      )}

      <p className="text-[10px] text-[#A3A39E] italic px-1 text-center font-mono">
        {lang === 'es' ? 'Demo interactiva: datos de muestra' : 'Interactive demo: sample data'}
      </p>
    </div>
  );
};

export const NexusRoiCalculatorDemo: React.FC = () => {
  const { lang } = useLanguage();
  const [adSpend, setAdSpend] = useState<number>(3500);
  const [dealSize, setDealSize] = useState<number>(2500);

  // Calculations:
  // Estimated CPL (cost per lead) = $45
  const estimatedLeads = Math.round(adSpend / 45);
  // Qualified lead rate = 22%
  const qualifiedLeads = Math.round(estimatedLeads * 0.22);
  // Closing rate = 25% of qualified
  const closedDeals = Math.max(1, Math.round(qualifiedLeads * 0.25));
  // Revenue = closedDeals * dealSize
  const revenue = closedDeals * dealSize;
  // Net ROI % = ((revenue - adSpend) / adSpend) * 100
  const netRoi = Math.round(((revenue - adSpend) / adSpend) * 100);

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-[#0d0d12] border border-indigo-500/30 space-y-5 text-xs font-mono shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-indigo-400" />
          <div>
            <h4 className="font-bold text-sm text-neutral-50 font-sans">
              {lang === 'es' ? 'Calculadora Interactiva de ROI B2B' : 'Interactive B2B ROI Calculator'}
            </h4>
            <p className="text-[10px] text-neutral-400">
              {lang === 'es' ? 'Ajusta los controles deslizantes con el pulgar para ver proyecciones en vivo' : 'Adjust the sliders with your thumb to see real-time projections'}
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          60 FPS React
        </span>
      </div>

      {/* Sliders Area */}
      <div className="space-y-4">
        {/* Slider 1: Ad Spend */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-neutral-400 font-sans">
              {lang === 'es' ? 'Inversion Mensual en Pauta / Trafico:' : 'Monthly Ad / Traffic Spend:'}
            </span>
            <span className="font-bold text-neutral-50 text-sm font-mono">
              ${adSpend.toLocaleString()} USD
            </span>
          </div>
          <input
            type="range"
            min={1000}
            max={20000}
            step={500}
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 min-h-[44px]"
            aria-label="Monthly Ad Spend"
          />
          <div className="flex justify-between text-[9px] text-neutral-500">
            <span>$1,000</span>
            <span>$10,000</span>
            <span>$20,000</span>
          </div>
        </div>

        {/* Slider 2: Average Deal Size */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-neutral-400 font-sans">
              {lang === 'es' ? 'Ticket Promedio de Venta (Valor de Cliente):' : 'Average Deal Size (Customer Value):'}
            </span>
            <span className="font-bold text-indigo-400 text-sm font-mono">
              ${dealSize.toLocaleString()} USD
            </span>
          </div>
          <input
            type="range"
            min={500}
            max={15000}
            step={250}
            value={dealSize}
            onChange={(e) => setDealSize(Number(e.target.value))}
            className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 min-h-[44px]"
            aria-label="Average Deal Size"
          />
          <div className="flex justify-between text-[9px] text-neutral-500">
            <span>$500</span>
            <span>$7,500</span>
            <span>$15,000</span>
          </div>
        </div>
      </div>

      {/* Results Live Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
          <span className="text-[9px] text-neutral-400 block mb-0.5 uppercase tracking-wider">
            {lang === 'es' ? 'Leads B2B' : 'B2B Leads'}
          </span>
          <span className="text-lg font-black text-neutral-50">~{estimatedLeads}</span>
          <span className="text-[9px] text-neutral-500 block mt-0.5">$45 CPL prom.</span>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
          <span className="text-[9px] text-neutral-400 block mb-0.5 uppercase tracking-wider">
            {lang === 'es' ? 'Cierres Est.' : 'Est. Closures'}
          </span>
          <span className="text-lg font-black text-neutral-50">{closedDeals} {lang === 'es' ? 'clientes' : 'deals'}</span>
          <span className="text-[9px] text-neutral-500 block mt-0.5">25% close rate</span>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
          <span className="text-[9px] text-neutral-400 block mb-0.5 uppercase tracking-wider">
            {lang === 'es' ? 'Facturacion' : 'Revenue'}
          </span>
          <span className="text-lg font-black text-indigo-400">${revenue.toLocaleString()}</span>
          <span className="text-[9px] text-neutral-500 block mt-0.5">USD / mes</span>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
          <span className="text-[9px] text-neutral-400 block mb-0.5 uppercase tracking-wider">
            {lang === 'es' ? 'Retorno Neto' : 'Net ROI'}
          </span>
          <span className={`text-lg font-black ${netRoi >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {netRoi >= 0 ? `+${netRoi}%` : `${netRoi}%`}
          </span>
          <span className="text-[9px] text-emerald-400/80 block mt-0.5">Retorno Proyectado</span>
        </div>
      </div>

      <p className="text-[10px] text-neutral-500 italic px-1 text-center font-mono">
        {lang === 'es' ? 'Demo interactiva: simulacion reactiva sin saltos de diseno' : 'Interactive demo: reactive calculation without layout shifts'}
      </p>
    </div>
  );
};

export const RagChatDemo: React.FC = () => {
  const { lang } = useLanguage();
  const defaultMessages = lang === 'es' ? [
    { role: 'user', text: '¿Como funciona la autenticacion multi-tenant y la base de datos vectorial?' },
    { role: 'assistant', text: 'SyntroSaaS utiliza Supabase PostgreSQL con Row-Level Security (RLS) estricto y la extension pgvector para busquedas semanticas hibridas.', citation: 'Source: architecture_spec.md § 4.2' },
  ] : [
    { role: 'user', text: 'How does multi-tenant authentication and the vector database work?' },
    { role: 'assistant', text: 'SyntroSaaS leverages Supabase PostgreSQL with strict Row-Level Security (RLS) and the pgvector extension for hybrid semantic search.', citation: 'Source: architecture_spec.md § 4.2' },
  ];
  const [messages, setMessages] = useState<Array<{ role: string; text: string; citation?: string }>>([]);
  const activeMessages = messages.length > 0 ? messages : defaultMessages;
  const [input, setInput] = useState('');

  const sendQuery = (text: string, simScore: string) => {
    if (input === text) return;
    setInput(text);
    setMessages(prev => [...(prev.length ? prev : defaultMessages), { role: 'user', text }]);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          text: lang === 'es' 
            ? `Respuesta generada con contexto verificado en PGVector para "${text}". Cero alucinaciones con guardrails activos.`
            : `Response generated with verified PGVector context for "${text}". Zero hallucinations with active guardrails.`,
          citation: `Document chunk [${simScore} cosine similarity]`,
        },
      ]);
    }, 600);
  };

  return (
    <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
        <span className="font-bold text-neutral-50 flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>PGVector RAG Stream Simulator</span>
        </span>
        <span className="text-[10px] text-emerald-400 font-bold">
          {lang === 'es' ? '● Guardrails Anti-Alucinacion Activos' : '● Anti-Hallucination Guardrails Active'}
        </span>
      </div>

      <div className="h-44 overflow-y-auto space-y-2.5 p-2 bg-black/50 rounded-xl border border-neutral-900">
        {activeMessages.map((m, i) => (
          <div key={i} className={`p-2.5 rounded-xl text-[11px] leading-relaxed ${
            m.role === 'user' ? 'bg-neutral-900 text-neutral-200 ml-8' : 'bg-red-950/40 text-neutral-100 border border-red-500/30 mr-8'
          }`}>
            <p>{m.text}</p>
            {m.citation && (
              <span className="mt-1.5 inline-block text-[9px] px-2 py-0.5 rounded bg-black/60 text-amber-300 border border-amber-500/30">
                {m.citation}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={() => sendQuery(
              lang === 'es' ? '¿Como evitan alucinaciones?' : 'How do you prevent hallucinations?',
              '0.94'
            )}
            className="flex-1 px-3 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-50 text-[11px] border border-neutral-800 transition-colors text-left min-h-[44px]"
          >
            {lang === 'es' ? '¿Como evitan alucinaciones?' : 'How do you prevent hallucinations?'}
          </button>
          <button
            onClick={() => sendQuery(
              lang === 'es' ? '¿Que formatos aceptan?' : 'What formats are supported?',
              '0.91'
            )}
            className="flex-1 px-3 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-50 text-[11px] border border-neutral-800 transition-colors text-left min-h-[44px]"
          >
            {lang === 'es' ? '¿Que formatos aceptan?' : 'What formats are supported?'}
          </button>
        </div>
        <p className="text-[10px] text-neutral-500 italic px-1 text-center">
          {lang === 'es' ? 'Demo interactiva: datos de muestra' : 'Interactive demo: sample data'}
        </p>
      </div>
    </div>
  );
};
