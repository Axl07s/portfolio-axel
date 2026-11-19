import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Database, ShieldAlert, Cpu, Network } from 'lucide-react';

export function ExpertiseSection() {
  const { lang } = useLanguage();

  const features = [
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      titleES: 'Plataformas Web & SaaS',
      titleEN: 'Web Platforms & SaaS',
      descES: 'Sistemas web completos con panel de control, gestión de clientes, pagos en línea y base de datos segura. Tu negocio operando 24/7 sin intervención manual.',
      descEN: 'Full web systems with admin panel, client management, online payments, and secure database. Your business running 24/7 without manual intervention.',
      span: 'md:col-span-2 md:row-span-2',
      visual: (
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20 transition-opacity duration-700 group-hover:opacity-40">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute right-10 top-10 w-[200px] h-[150px] border border-emerald-500/10 rounded-xl bg-[#0a0a0a]/50 backdrop-blur-md transform rotate-12" />
        </div>
      ),
      bg: 'bg-[#111111] border-neutral-800 hover:border-emerald-500/30'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-neutral-300" />,
      titleES: 'Seguridad & Protección',
      titleEN: 'Security & Protection',
      descES: 'Sistemas con autenticación robusta, datos cifrados y auditoría de accesos. Tu información y la de tus clientes siempre protegida.',
      descEN: 'Systems with robust authentication, encrypted data, and access auditing. Your data and your clients\' data always protected.',
      span: 'md:col-span-1',
      visual: null,
      bg: 'bg-[#1a1a1a] border-neutral-800'
    },
    {
      icon: <Cpu className="w-5 h-5 text-neutral-300" />,
      titleES: 'Automatización con IA',
      titleEN: 'AI Automation',
      descES: 'Chatbots, cotizadores automáticos y asistentes virtuales que atienden a tus clientes y capturan leads mientras duermes.',
      descEN: 'Chatbots, automated quoters, and virtual assistants that attend clients and capture leads while you sleep.',
      span: 'md:col-span-1',
      visual: null,
      bg: 'bg-[#161616] border-neutral-800'
    },
    {
      icon: <Network className="w-5 h-5 text-emerald-950" />,
      titleES: 'Despliegue & Soporte Continuo',
      titleEN: 'Deployment & Ongoing Support',
      descES: 'Tu producto llega a usuarios reales, corre sin interrupciones y escala sin costos adicionales conforme tu negocio crece.',
      descEN: 'Your product reaches real users, runs without downtime, and scales at no extra cost as your business grows.',
      span: 'md:col-span-3',
      visual: (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px)', backgroundSize: '40px 100%' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00b978] via-[#00b978]/80 to-transparent" />
        </div>
      ),
      bg: 'bg-emerald-500 border-emerald-400 text-emerald-950',
      titleColor: 'text-emerald-950',
      descColor: 'text-emerald-950/80',
      iconContainer: 'bg-emerald-400/20 border-emerald-400/30'
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto w-full relative z-10">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-display font-bold text-neutral-50 tracking-[-0.03em] mb-4">
          {lang === 'es' ? 'Lo que construyo.' : 'What I build.'}
        </h2>
        <p className="text-xl text-neutral-400 font-medium">
          {lang === 'es' ? 'Soluciones digitales que funcionan para tu negocio, no solo para los desarrolladores.' : 'Digital solutions that work for your business, not just for developers.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative border p-10 rounded-[24px] overflow-hidden flex flex-col justify-between transition-all duration-500 ${feat.bg} ${feat.span}`}
          >
            {feat.visual}
            
            <div className={`mb-12 p-4 rounded-xl inline-flex self-start relative z-10 border transition-transform duration-500 group-hover:-translate-y-1 ${feat.iconContainer || 'bg-[#0a0a0a] border-white/5'}`}>
              {feat.icon}
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className={`text-2xl font-bold mb-3 tracking-[-0.02em] ${feat.titleColor || 'text-neutral-50'}`}>
                {lang === 'es' ? feat.titleES : feat.titleEN}
              </h3>
              <p className={`text-base leading-relaxed max-w-[45ch] ${feat.descColor || 'text-neutral-400'}`}>
                {lang === 'es' ? feat.descES : feat.descEN}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
