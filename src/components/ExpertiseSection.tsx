import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Database, ShieldAlert, Cpu, Network } from 'lucide-react';

export function ExpertiseSection() {
  const { lang } = useLanguage();

  const features = [
    {
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      titleES: 'Arquitectura SaaS Multi-Tenant',
      titleEN: 'Multi-Tenant SaaS Architecture',
      descES: 'Aislamiento de datos nivel fila (RLS), sharding y escalabilidad horizontal con Supabase, Postgres y Next.js.',
      descEN: 'Row-level security (RLS), sharding, and horizontal scalability with Supabase, Postgres, and Next.js.'
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-emerald-400" />,
      titleES: 'Ciberseguridad & EDR',
      titleEN: 'Cybersecurity & EDR',
      descES: 'Desarrollo de sensores de bajo nivel en C/C++, intercepción ETW y motores heurísticos YARA en Windows.',
      descEN: 'Development of low-level C/C++ sensors, ETW interception, and YARA heuristic engines on Windows.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      titleES: 'IA & Sistemas RAG',
      titleEN: 'AI & RAG Systems',
      descES: 'Orquestación de LLMs, bases de datos vectoriales (pgvector) y síntesis de voz en tiempo real con latencia sub-500ms.',
      descEN: 'LLM orchestration, vector databases (pgvector), and real-time voice synthesis with sub-500ms latency.'
    },
    {
      icon: <Network className="w-6 h-6 text-amber-400" />,
      titleES: 'Infraestructura & DevOps',
      titleEN: 'Infrastructure & DevOps',
      descES: 'Despliegues automatizados, Vercel, Docker, y arquitecturas serverless orientadas a reducción radical de costos.',
      descEN: 'Automated deployments, Vercel, Docker, and serverless architectures aimed at radical cost reduction.'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/80 p-6 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="mb-4 p-3 bg-black/40 rounded-xl inline-block border border-white/5">
              {feat.icon}
            </div>
            <h3 className="text-sm font-bold text-white mb-2">{lang === 'es' ? feat.titleES : feat.titleEN}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{lang === 'es' ? feat.descES : feat.descEN}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
