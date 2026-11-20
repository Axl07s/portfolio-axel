import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Database, Bot, CalendarCheck, CloudLightning } from 'lucide-react';

export function ExpertiseSection() {
  const { lang } = useLanguage();

  const features = [
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      titleES: 'Plataformas Web y SaaS a Medida',
      titleEN: 'Custom Web & SaaS Platforms',
      descES: 'Sistemas listos para cobrar suscripciones, gestionar clientes y escalar tu operación sin depender de hojas de cálculo.',
      descEN: 'Turnkey systems to bill subscriptions, manage clients, and scale operations without relying on spreadsheets.',
      tags: ['Next.js 15', 'Stripe Checkout', 'Supabase', 'PostgreSQL'],
      span: 'md:col-span-2',
      badgeES: 'Facturación & SaaS',
      badgeEN: 'Billing & SaaS',
      visual: (
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20 transition-opacity duration-700 group-hover:opacity-35">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute right-10 top-10 w-[200px] h-[150px] border border-emerald-500/10 rounded-xl bg-[#0a0a0a]/50 backdrop-blur-md transform rotate-12" />
        </div>
      ),
      bg: 'bg-[#0f0f12] border-white/[0.08] hover:border-emerald-500/30'
    },
    {
      icon: <Bot className="w-5 h-5 text-indigo-400" />,
      titleES: 'Automatización y Asistentes con IA',
      titleEN: 'AI Automation & Smart Assistants',
      descES: 'Equipos de agentes inteligentes 24/7 que atienden clientes, califican prospectos y automatizan tareas repetitivas.',
      descEN: '24/7 intelligent agent teams that handle clients, qualify leads, and automate repetitive operational tasks.',
      tags: ['OpenAI / Anthropic', 'Voz Neural <180ms', 'Agentes Autónomos', 'n8n'],
      span: 'md:col-span-1',
      badgeES: 'Operación 24/7',
      badgeEN: '24/7 Operations',
      visual: null,
      bg: 'bg-[#121218] border-white/[0.08] hover:border-indigo-500/30'
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-emerald-400" />,
      titleES: 'Portales Comerciales y Reservas Directas',
      titleEN: 'Commercial Portals & Direct Booking',
      descES: 'Sitios de alto nivel diseñados para convertir visitas en clientes y eliminar comisiones de plataformas intermediarias.',
      descEN: 'High-end platforms designed to convert visitors into clients and eliminate third-party middleman commissions.',
      tags: ['React / Vite', 'Reservas en Vivo', 'UI Alta Conversión', '0% Comisiones'],
      span: 'md:col-span-1',
      badgeES: '0% Comisiones',
      badgeEN: '0% Fees',
      visual: null,
      bg: 'bg-[#0f0f12] border-white/[0.08] hover:border-emerald-500/30'
    },
    {
      icon: <CloudLightning className="w-5 h-5 text-emerald-400" />,
      titleES: 'Optimización e Infraestructura Cloud',
      titleEN: 'Optimization & Cloud Infrastructure',
      descES: 'Sistemas rápidos, seguros y desplegados con arquitectura moderna para reducir costos mensuales de servidor.',
      descEN: 'Fast, secure systems deployed with modern architecture to cut monthly server bills and prevent downtime.',
      tags: ['Vercel / Cloudflare', 'Docker', 'CDN Global', 'Cero Downtime'],
      span: 'md:col-span-2',
      badgeES: 'Alta Eficiencia',
      badgeEN: 'High Efficiency',
      visual: (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px)', backgroundSize: '40px 100%' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-transparent" />
        </div>
      ),
      bg: 'bg-[#0f0f12] border-white/[0.08] hover:border-emerald-500/30'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto w-full relative z-10">
      <div className="mb-14 max-w-2xl">
        <h2 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] leading-[1.08] font-display font-bold text-neutral-50 tracking-[-0.03em] mb-4">
          {lang === 'es' ? 'Servicios & Soluciones Digitales.' : 'Services & Digital Solutions.'}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-medium leading-relaxed">
          {lang === 'es' 
            ? 'Sistemas orientados a resultados de negocio: cobrar suscripciones, automatizar procesos y escalar sin fricción técnica.' 
            : 'Business outcome-driven systems: billing subscriptions, automating workflows, and scaling without technical friction.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative border p-6 sm:p-8 rounded-[24px] flex flex-col justify-between transition-all duration-500 h-full min-h-[260px] ${feat.bg} ${feat.span}`}
          >
            {feat.visual}
            
            {/* Top Bar: Icon + Badge */}
            <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 inline-flex transition-transform duration-500 group-hover:-translate-y-0.5">
                {feat.icon}
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-full">
                {lang === 'es' ? feat.badgeES : feat.badgeEN}
              </span>
            </div>
            
            {/* Content: Title, Description, and Subtle Tech Tags */}
            <div className="relative z-10 mt-auto space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-neutral-50 group-hover:text-emerald-400 transition-colors">
                {lang === 'es' ? feat.titleES : feat.titleEN}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-normal">
                {lang === 'es' ? feat.descES : feat.descEN}
              </p>

              {/* 3-4 Subtle Tech Tags as visual backing */}
              <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/[0.05]">
                {feat.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] font-mono text-neutral-400 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
