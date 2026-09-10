import React from 'react';
import { Layout, Server, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DisciplinesSection: React.FC = () => {
  const { lang } = useLanguage();

  const disciplinesES = [
    {
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      title: 'Frontend & UI Craft',
      tagline: 'Interfaces de usuario perfectas al píxel, accesibles e hiper-responsivas con el ecosistema React.',
      skillsTitle: 'Mi enfoque:',
      skills: 'Sistemas de Diseño, Micro-Interacciones, Rendimiento (100 Lighthouse), Arquitectura Responsiva',
      toolsTitle: 'Stack Principal:',
      tools: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    },
    {
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      title: 'Ingeniería SaaS Full-Stack',
      tagline: 'Backends listos para producción diseñados para multi-tenancy, flujos transaccionales y escala.',
      skillsTitle: 'Especialidades:',
      skills: 'Auth Multi-Tenant, Facturación Stripe, Zero-Trust RLS, Edge Functions',
      toolsTitle: 'Infraestructura:',
      tools: ['Supabase', 'PostgreSQL', 'FastAPI', 'Node.js', 'REST & GraphQL', 'Vercel / Docker'],
    },
    {
      icon: <Bot className="w-6 h-6 text-indigo-400" />,
      title: 'IA Autónoma & Voz',
      tagline: 'Redes de agentes inteligentes, pipelines de voz neuronal y sistemas de recuperación RAG empresariales.',
      skillsTitle: 'Capacidades de IA:',
      skills: 'Orquestación de Subagentes, Búsqueda Vectorial (RAG), Formas de Onda, Telemetría de Costos',
      toolsTitle: 'Ecosistema IA:',
      tools: ['ElevenLabs API', 'LangChain', 'pgvector', 'OpenAI / Anthropic', 'n8n Automations'],
    },
  ];

  const disciplinesEN = [
    {
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      title: 'Frontend & UI Craft',
      tagline: 'Pixel-perfect, accessible, and hyper-responsive user interfaces with modern React ecosystem.',
      skillsTitle: 'What I focus on:',
      skills: 'Design Systems, Micro-Interactions, Performance (100 Lighthouse), Responsive Architecture',
      toolsTitle: 'Core Stack:',
      tools: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    },
    {
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      title: 'Full-Stack SaaS Engineering',
      tagline: 'Production-ready backends designed for multi-tenancy, transactional workflows, and scale.',
      skillsTitle: 'System Specialties:',
      skills: 'Multi-Tenant Auth, Stripe Billing & Webhooks, Zero-Trust RLS, Edge Functions',
      toolsTitle: 'Infrastructure:',
      tools: ['Supabase', 'PostgreSQL', 'FastAPI', 'Node.js', 'REST & GraphQL', 'Vercel / Docker'],
    },
    {
      icon: <Bot className="w-6 h-6 text-indigo-400" />,
      title: 'Autonomous AI & Voice',
      tagline: 'Intelligent agent networks, neural voice pipelines, and grounded enterprise retrieval systems.',
      skillsTitle: 'AI Capabilities:',
      skills: 'Subagent Orchestration, Vector Search (RAG), Audio Waveforms, Cost Telemetry',
      toolsTitle: 'AI Ecosystem:',
      tools: ['ElevenLabs API', 'LangChain', 'pgvector', 'OpenAI / Anthropic', 'n8n Automations'],
    },
  ];

  const disciplines = lang === 'es' ? disciplinesES : disciplinesEN;

  return (
    <section id="disciplines" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md overflow-hidden p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            {lang === 'es' ? 'Competencias Centrales' : 'Core Competencies'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
            {lang === 'es' ? 'Diseñado para la ' : 'Engineered for '}
            <span className="text-zinc-400">{lang === 'es' ? 'Excelencia.' : 'Excellence.'}</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {lang === 'es' ? 'Cierro la brecha entre el diseño visual de clase mundial y la ingeniería de software robusta y escalable.' : 'I bridge the gap between world-class visual design and robust, scalable software engineering.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
          {disciplines.map((d, i) => (
            <div key={i} className={`flex flex-col text-center items-center ${i > 0 ? 'pt-8 md:pt-0 md:pl-8 lg:pl-12' : ''}`}>
              <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 shadow-inner">
                {d.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{d.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-1">{d.tagline}</p>

              <div className="w-full space-y-6 pt-6 border-t border-zinc-800/60">
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                    {d.skillsTitle}
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">{d.skills}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                    {d.toolsTitle}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {d.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

