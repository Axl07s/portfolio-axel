import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Database, ShieldAlert, Cpu, Network } from 'lucide-react';

export function ExpertiseSection() {
  const { lang } = useLanguage();

  const features = [
    {
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      titleES: 'Arquitectura SaaS Multi-Tenant',
      titleEN: 'Multi-Tenant SaaS Architecture',
      descES: 'Aislamiento de datos nivel fila (RLS), sharding y escalabilidad horizontal con Supabase, Postgres y Next.js.',
      descEN: 'Row-level security (RLS), sharding, and horizontal scalability with Supabase, Postgres, and Next.js.',
      span: 'md:col-span-2'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-emerald-500" />,
      titleES: 'Ciberseguridad & EDR',
      titleEN: 'Cybersecurity & EDR',
      descES: 'Desarrollo de sensores de bajo nivel en C/C++, intercepción ETW y motores heurísticos YARA en Windows.',
      descEN: 'Development of low-level C/C++ sensors, ETW interception, and YARA heuristic engines on Windows.',
      span: 'md:col-span-1'
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      titleES: 'IA & Sistemas RAG',
      titleEN: 'AI & RAG Systems',
      descES: 'Orquestación de LLMs, bases de datos vectoriales (pgvector) y síntesis de voz en tiempo real con latencia sub-500ms.',
      descEN: 'LLM orchestration, vector databases (pgvector), and real-time voice synthesis with sub-500ms latency.',
      span: 'md:col-span-1'
    },
    {
      icon: <Network className="w-5 h-5 text-emerald-500" />,
      titleES: 'Infraestructura & DevOps',
      titleEN: 'Infrastructure & DevOps',
      descES: 'Despliegues automatizados, Vercel, Docker, y arquitecturas serverless orientadas a reducción radical de costos.',
      descEN: 'Automated deployments, Vercel, Docker, and serverless architectures aimed at radical cost reduction.',
      span: 'md:col-span-2'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-10">
      
      <div className="mb-12 max-w-xl">
        <h2 className="text-3xl font-display font-bold text-white tracking-tighter mb-4">
          {lang === 'es' ? 'Ingeniería Especializada.' : 'Specialized Engineering.'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            className={`group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-8 rounded-xl overflow-hidden flex flex-col justify-between ${feat.span}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="mb-12 p-4 bg-zinc-950 rounded-md inline-flex border border-zinc-800 self-start">
              {feat.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{lang === 'es' ? feat.titleES : feat.titleEN}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-[50ch]">{lang === 'es' ? feat.descES : feat.descEN}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
