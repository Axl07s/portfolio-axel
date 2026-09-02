import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, ShieldAlert, Search } from 'lucide-react';

interface SuiteSecurityViewProps {
  onBack: () => void;
}

export const SuiteSecurityView: React.FC<SuiteSecurityViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'monitor' | 'yara' | 'quarantine'>('monitor');
  const [scanInput, setScanInput] = useState('');
  const [scanLog, setScanLog] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const processes = [
    { pid: '4120', name: 'svchost.exe', path: 'C:\\Windows\\System32\\svchost.exe', status: 'Clean', threat: 'Low', mem: '14.2 MB' },
    { pid: '8904', name: 'powershell.exe', path: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe', status: 'Clean', threat: 'Low', mem: '45.1 MB' },
    { pid: '1240', name: 'chrome.exe', path: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', status: 'Clean', threat: 'Low', mem: '180.4 MB' },
    { pid: '9912', name: 'mimikatz_test.exe', path: 'C:\\Users\\Admin\\AppData\\Local\\Temp\\mimikatz_test.exe', status: 'Blocked', threat: 'Critical', mem: '8.4 MB' },
  ];

  const handleScan = () => {
    if (!scanInput) return;
    setIsScanning(true);
    setScanLog([]);

    const steps = [
      `Evaluating target: "${scanInput}"`,
      'Hashing target binary via SHA-256...',
      'Matching against local YARA ruleset (5,240 signatures)...',
      'Querying VirusTotal Threat Intelligence API (v3)...',
      'Heuristic Analysis: 0 suspicious entropy sections detected.',
      'Target status verified: SAFE (0/72 engines flagged).',
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setScanLog(prev => [...prev, step]);
        if (idx === steps.length - 1) setIsScanning(false);
      }, (idx + 1) * 250);
    });
  };

  return (
    <div className="min-h-screen bg-[#080b0f] text-emerald-100 flex flex-col font-mono animate-fadeIn">
      
      {/* Return Bar */}
      <div className="bg-gradient-to-r from-red-950 via-zinc-950 to-zinc-950 border-b border-red-500/30 px-4 py-2.5 flex items-center justify-between z-40 sticky top-0 backdrop-blur-md">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-red-600 hover:bg-red-500 text-white shadow-glow-red transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio Maestro</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
            ● Windows Kernel ETW Monitor Active (&lt;45MB RAM)
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-emerald-500/20 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold text-white tracking-wider">SUITESECURITY EDR</h1>
            <span className="text-[10px] text-emerald-400">Windows Native Endpoint Detection & Threat Intelligence</span>
          </div>
        </div>

        <nav className="flex items-center gap-1 bg-black/60 p-1 rounded-2xl border border-emerald-500/30 text-xs">
          {(['monitor', 'yara', 'quarantine'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-xl font-bold uppercase transition-all ${
                activeTab === tab ? 'bg-emerald-500 text-black shadow-md' : 'text-zinc-400 hover:text-emerald-200'
              }`}
            >
              {tab === 'monitor' ? 'Process Monitor' : tab === 'yara' ? 'YARA Scanner' : 'Quarantine Vault'}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {activeTab === 'monitor' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-2xl bg-black/60 border border-zinc-800">
                <span className="text-[9px] text-zinc-400 block uppercase">Active Processes</span>
                <span className="text-xl font-bold text-white mt-1 block">184 Live</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/60 border border-zinc-800">
                <span className="text-[9px] text-zinc-400 block uppercase">Threat Score</span>
                <span className="text-xl font-bold text-emerald-400 mt-1 block">0 (Protected)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/60 border border-zinc-800">
                <span className="text-[9px] text-zinc-400 block uppercase">Memory Footprint</span>
                <span className="text-xl font-bold text-white mt-1 block">38.4 MB</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/60 border border-zinc-800">
                <span className="text-[9px] text-zinc-400 block uppercase">Driver Hook</span>
                <span className="text-xl font-bold text-emerald-400 mt-1 block">ETW Subscribed</span>
              </div>
            </div>

            <div className="rounded-2xl bg-black/70 border border-zinc-800 overflow-hidden shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400">
                  <tr>
                    <th className="p-3">PID</th>
                    <th className="p-3">Process Name</th>
                    <th className="p-3">Executable Path</th>
                    <th className="p-3">RAM</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {processes.map(p => (
                    <tr key={p.pid} className="hover:bg-zinc-900/50">
                      <td className="p-3 font-mono text-zinc-400">{p.pid}</td>
                      <td className="p-3 font-bold text-white">{p.name}</td>
                      <td className="p-3 text-[10px] text-zinc-500 truncate max-w-xs">{p.path}</td>
                      <td className="p-3 font-mono text-zinc-400">{p.mem}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          p.status === 'Clean' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'yara' && (
          <div className="space-y-4 animate-fadeIn max-w-2xl mx-auto">
            <h2 className="text-sm font-bold text-white uppercase">YARA Signature & VirusTotal Evaluator</h2>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={scanInput}
                onChange={e => setScanInput(e.target.value)}
                placeholder="Enter process name, file path or SHA-256 hash..."
                className="flex-1 bg-black/80 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleScan}
                disabled={isScanning}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{isScanning ? 'Scanning...' : 'Scan Binary'}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-black/80 border border-zinc-800 min-h-[160px] space-y-1 text-xs">
              {scanLog.length === 0 && (
                <p className="text-zinc-500 italic">Type a file path above (e.g. C:\Windows\explorer.exe) and click Scan Binary...</p>
              )}
              {scanLog.map((log, i) => (
                <div key={i} className={`leading-relaxed ${
                  log.includes('SAFE') ? 'text-emerald-400 font-bold' : 'text-zinc-400'
                }`}>
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quarantine' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-rose-400" />
                <div>
                  <span className="font-bold text-white text-xs block">1 Malicious Threat Quarantined</span>
                  <span className="text-[10px] text-zinc-400">Isolated in AES-256 encrypted sandbox directory.</span>
                </div>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs">
                Purge All
              </button>
            </div>
          </div>
        )}

      </main>

    </div>
  );
};

export default SuiteSecurityView;
