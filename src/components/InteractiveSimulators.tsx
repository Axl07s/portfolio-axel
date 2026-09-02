import React, { useState } from 'react';
import { Sparkles, Play, ExternalLink, Bot, Zap, Key } from 'lucide-react';

export const TwitchScannerDemo: React.FC = () => {
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
        <div className="flex-1 flex items-center bg-zinc-950 px-3 py-2 rounded-xl border border-zinc-800">
          <span className="text-zinc-500 mr-2">twitch.tv/</span>
          <select
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            className="bg-transparent text-white font-mono text-xs focus:outline-none flex-1 appearance-none cursor-pointer"
          >
            <option value="indie_dev_mike">indie_dev_mike (Coding Streamer)</option>
            <option value="sarah_designs">sarah_designs (Art & UI/UX)</option>
            <option value="alex_fps">alex_fps (Esports Pro)</option>
          </select>
        </div>
        <button
          onClick={runScan}
          disabled={scanning}
          className="px-4 py-2 rounded-xl font-bold bg-cyan-500 hover:bg-cyan-400 text-black flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-black" />
          <span>{scanning ? 'Scanning Stream...' : 'Run Live Scan'}</span>
        </button>
      </div>
      <p className="text-[10px] text-zinc-500 italic px-1">Interactive demo — sample data</p>

      {/* Terminal Output */}
      <div className="p-4 rounded-2xl bg-[#090d16] border border-cyan-500/30 text-zinc-300 min-h-[160px] space-y-1 overflow-x-auto shadow-inner">
        <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-zinc-800/80 text-[10px] text-zinc-500">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2">gearstack-cli — automated audit session</span>
        </div>

        {logs.length === 0 && !scanning && (
          <p className="text-zinc-500 italic">Click "Run Live Scan" to audit this stream setup...</p>
        )}

        {logs.map((log, idx) => (
          <div key={idx} className={`leading-relaxed ${
            log.startsWith('✓') ? 'text-emerald-400 font-semibold' :
            log.startsWith('✗') ? 'text-rose-400 font-semibold' :
            log.startsWith('→') ? 'text-amber-400 font-bold' :
            log.startsWith('▸') ? 'text-cyan-400 font-bold' :
            log.startsWith('$') ? 'text-white font-bold' : 'text-zinc-400'
          }`}>
            {log}
          </div>
        ))}
      </div>

      {/* Recommended Upgrades Bundle */}
      {scanComplete && (
        <div className="p-4 rounded-2xl bg-zinc-950 border border-cyan-500/40 animate-fadeIn space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Recommended Affiliate Bundle</span>
            </span>
            <span className="text-zinc-400 text-[10px]">Tag: <strong className="text-cyan-400">axeltech0b-20</strong></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Elgato Wave XLR</span>
                <span className="text-zinc-400 text-[10px]">$159.99</span>
              </div>
              <a href="https://www.amazon.com/s?k=Elgato+Wave+XLR&tag=axeltech0b-20" target="_blank" rel="nofollow sponsored noopener noreferrer" className="p-1.5 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Elgato Stream Deck MK.2</span>
                <span className="text-zinc-400 text-[10px]">$149.99</span>
              </div>
              <a href="https://www.amazon.com/s?k=Elgato+Stream+Deck+MK2&tag=axeltech0b-20" target="_blank" rel="nofollow sponsored noopener noreferrer" className="p-1.5 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Elgato Key Light Air</span>
                <span className="text-zinc-400 text-[10px]">$129.99</span>
              </div>
              <a href="https://www.amazon.com/s?k=Elgato+Key+Light+Air&tag=axeltech0b-20" target="_blank" rel="nofollow sponsored noopener noreferrer" className="p-1.5 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400">
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
  const [state, setState] = useState<'idle' | 'listening' | 'speaking'>('idle');
  const [message, setMessage] = useState('Jarvis Chief Brain ready. Select a voice trigger to simulate neural dispatch.');

  const triggerVoice = (text: string) => {
    setState('listening');
    setMessage(`Analyzing input: "${text}"...`);
    setTimeout(() => {
      setState('speaking');
      setMessage(`ElevenLabs Voice Synthesis active. Dispatched subagent mesh. Task latency: 142ms.`);
    }, 800);
  };

  return (
    <div className="p-5 rounded-2xl bg-[#030611] border border-cyan-500/40 space-y-4 text-xs font-mono">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-cyan-400" />
          <span className="font-bold text-white uppercase tracking-wider">Jarvis Neural HUD Simulation</span>
        </div>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
          state === 'speaking' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 animate-pulse' :
          state === 'listening' ? 'bg-amber-500/20 text-amber-300 border-amber-500' :
          'bg-zinc-800 text-zinc-400 border-zinc-700'
        }`}>
          {state.toUpperCase()}
        </span>
      </div>

      {/* Visualizer */}
      <div className="h-14 bg-black/60 rounded-xl border border-cyan-500/20 flex items-center justify-center gap-1.5 px-4">
        {[20, 45, 80, 60, 95, 40, 75, 90, 30, 85, 65, 40, 90, 30].map((h, i) => (
          <div
            key={i}
            className={`w-1.5 rounded-full transition-all duration-150 ${
              state === 'speaking' ? 'bg-cyan-400' :
              state === 'listening' ? 'bg-amber-400' : 'bg-zinc-700'
            }`}
            style={{ height: state === 'speaking' ? `${Math.max(15, (h * Math.random() * 1.2))}%` : '15%' }}
          />
        ))}
      </div>

      <p className="text-zinc-300 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
        {message}
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        <button
          onClick={() => triggerVoice('Audit current token spend across OpenAI and Anthropic models')}
          className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-cyan-950 text-zinc-200 border border-zinc-800 hover:border-cyan-500 text-[11px] transition-all"
        >
          Audit Token Spend
        </button>
        <button
          onClick={() => triggerVoice('Deploy research subagent to scrape latest security CVEs')}
          className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-cyan-950 text-zinc-200 border border-zinc-800 hover:border-cyan-500 text-[11px] transition-all"
        >
          Dispatch Research Agent
        </button>
      </div>
      <p className="text-[10px] text-zinc-500 italic px-1 text-center">Interactive demo — sample data</p>
    </div>
  );
};

export const SaaSDashboardDemo: React.FC = () => {
  const [isDemoAuthenticated, setIsDemoAuthenticated] = useState(false);
  const [tier, setTier] = useState<'starter' | 'pro' | 'scale'>('pro');
  const [apiKey, setApiKey] = useState('sk_live_syntro_8f93a2b7e1');

  if (!isDemoAuthenticated) {
    return (
      <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-center space-y-5 font-sans relative overflow-hidden min-h-[340px]">
        <div className="absolute inset-0 bg-indigo-500/5 blur-[50px] pointer-events-none"></div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg text-xl z-10">
          S
        </div>
        <div className="z-10">
          <h3 className="text-white font-extrabold text-base">SyntroSaaS</h3>
          <p className="text-zinc-400 text-xs mt-1">Enterprise Auth & Governance</p>
        </div>
        
        <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 max-w-xs z-10">
          <p className="text-[10px] leading-relaxed text-indigo-300">
            Para proteger datos reales, este simulador usa una sesión de Sandbox automática. No se requieren credenciales.
          </p>
        </div>

        <div className="w-full max-w-xs space-y-2 z-10">
          <button
            onClick={() => setIsDemoAuthenticated(true)}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-all shadow-lg active:scale-95"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            Iniciar Demo Automático
          </button>
          <button disabled className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[10px] font-medium bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed">
            <Key className="w-3 h-3" />
            Single Sign-On (SSO) Bloqueado
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4 text-xs font-mono animate-fadeIn">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div>
          <span className="font-bold text-white block">SyntroSaaS Organization Governance</span>
          <span className="text-zinc-500 text-[10px]">Multi-Tenant RBAC & Stripe Billing Simulator</span>
        </div>
        <div className="flex gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          {(['starter', 'pro', 'scale'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTier(t)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all ${
                tier === t ? 'bg-red-600 text-white shadow-glow-red' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
          <span className="text-[9px] text-zinc-400 block">Monthly Quota</span>
          <span className="font-bold text-white text-xs">{tier === 'starter' ? '10K API Calls' : tier === 'pro' ? '100K API Calls' : 'Unlimited'}</span>
        </div>
        <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
          <span className="text-[9px] text-zinc-400 block">Team Seats</span>
          <span className="font-bold text-white text-xs">{tier === 'starter' ? '2 Seats' : tier === 'pro' ? '10 Seats' : 'Unlimited'}</span>
        </div>
        <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
          <span className="text-[9px] text-zinc-400 block">Stripe Status</span>
          <span className="font-bold text-emerald-400 text-xs">Active (Paid)</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
        <div className="min-w-0 pr-2">
          <span className="text-[10px] text-zinc-500 block">Active Scoped API Key:</span>
          <code className="text-red-400 font-bold truncate block">{apiKey}</code>
        </div>
        <button
          onClick={() => setApiKey(`sk_live_syntro_${Math.random().toString(36).substring(2, 10)}`)}
          className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-[10px] shrink-0"
        >
          Rotate Key
        </button>
      </div>
      <p className="text-[10px] text-zinc-500 italic px-1 text-center">Interactive demo — sample data</p>
    </div>
  );
};

export const RagChatDemo: React.FC = () => {
  const [messages, setMessages] = useState([
    { role: 'user', text: '¿Cómo funciona la autenticación multi-tenant y la base de datos vectorial?' },
    { role: 'assistant', text: 'SyntroSaaS utiliza Supabase PostgreSQL con Row-Level Security (RLS) estricto y la extensión pgvector para búsquedas semánticas híbridas.', citation: 'Source: architecture_spec.md § 4.2' },
  ]);
  const [input, setInput] = useState('');

  return (
    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 text-xs font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
        <span className="font-bold text-white flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>PGVector RAG Stream Simulator</span>
        </span>
        <span className="text-[10px] text-emerald-400 font-bold">● Anti-Hallucination Guardrails Active</span>
      </div>

      <div className="h-44 overflow-y-auto space-y-2.5 p-2 bg-black/50 rounded-xl border border-zinc-900">
        {messages.map((m, i) => (
          <div key={i} className={`p-2.5 rounded-xl text-[11px] leading-relaxed ${
            m.role === 'user' ? 'bg-zinc-900 text-zinc-200 ml-8' : 'bg-red-950/40 text-zinc-100 border border-red-500/30 mr-8'
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
            onClick={() => {
              if (input === '¿Cómo evitan alucinaciones?') return;
              setInput('¿Cómo evitan alucinaciones?');
              const text = '¿Cómo evitan alucinaciones?';
              setMessages(prev => [...prev, { role: 'user', text }]);
              setTimeout(() => {
                setMessages(prev => [
                  ...prev,
                  {
                    role: 'assistant',
                    text: `Respuesta generada con contexto verificado en PGVector para "${text}". Cero alucinaciones con guardrails activos.`,
                    citation: `Document chunk [0.94 cosine similarity]`,
                  },
                ]);
              }, 600);
            }}
            className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] border border-zinc-800 transition-colors text-left"
          >
            ¿Cómo evitan alucinaciones?
          </button>
          <button
            onClick={() => {
              if (input === '¿Qué formatos aceptan?') return;
              setInput('¿Qué formatos aceptan?');
              const text = '¿Qué formatos aceptan?';
              setMessages(prev => [...prev, { role: 'user', text }]);
              setTimeout(() => {
                setMessages(prev => [
                  ...prev,
                  {
                    role: 'assistant',
                    text: `Respuesta generada con contexto verificado en PGVector para "${text}". Cero alucinaciones con guardrails activos.`,
                    citation: `Document chunk [0.91 cosine similarity]`,
                  },
                ]);
              }, 600);
            }}
            className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] border border-zinc-800 transition-colors text-left"
          >
            ¿Qué formatos aceptan?
          </button>
        </div>
        <p className="text-[10px] text-zinc-500 italic px-1 text-center">Interactive demo — sample data</p>
      </div>
    </div>
  );
};
