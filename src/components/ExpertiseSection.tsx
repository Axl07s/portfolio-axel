import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Database, ShieldCheck, Bot, Zap } from 'lucide-react';

export function ExpertiseSection() {
  const { lang } = useLanguage();

  const features = [
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      titleES: 'Plataformas Web & Cobro Recurrente (SaaS)',
      titleEN: 'Web Platforms & Recurring Billing (SaaS)',
      descES: 'Sistemas web listos para cobrar con tarjeta vía Stripe, panel de control administrativo, gestión de clientes y entrega automática de accesos. Tu negocio operando 24/7 sin tareas manuales.',
      descEN: 'Turnkey web platforms with integrated credit card billing, client dashboard, and automated customer provisioning. Your business generating revenue 24/7 without manual chores.',
      span: 'md:col-span-2',
      badgeES: 'Facturación & Pagos',
      badgeEN: 'Billing & Payments',
      visual: (
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20 transition-opacity duration-700 group-hover:opacity-40">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute right-10 top-10 w-[200px] h-[150px] border border-emerald-500/10 rounded-xl bg-[#0a0a0a]/50 backdrop-blur-md transform rotate-12" />
        </div>
      ),
      bg: 'bg-[#0f0f12] border-white/[0.08] hover:border-emerald-500/30'
    },
    {
      icon: <Bot className="w-5 h-5 text-indigo-400" />,
      titleES: 'Automatización & Asistentes con IA',
      titleEN: 'AI Automation & Smart Assistants',
      descES: 'Asistentes virtuales y cotizadores inteligentes que atienden a tus clientes, resuelven consultas y califican prospectos en tiempo real sin aumentar nómina.',
      descEN: 'Virtual assistants and intelligent quoters that handle customer inquiries, resolve doubts, and qualify high-value leads 24/7 with zero added payroll.',
      span: 'md:col-span-1',
      badgeES: 'Operación 24/7',
      badgeEN: '24/7 Operation',
      visual: null,
      bg: 'bg-[#121218] border-white/[0.08] hover:border-indigo-500/30'
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      titleES: 'Velocidad & Cero Caídas de Servidor',
      titleEN: 'Sub-Second Speed & Low Cloud Costs',
      descES: 'Sitios y sistemas optimizados para cargar en menos de 1 segundo, soportar picos de visitas sin interrupciones y reducir el gasto mensual en servidores.',
      descEN: 'Platforms optimized to load under 1 second, handle heavy traffic without downtime, and keep monthly hosting bills at an absolute minimum.',
      span: 'md:col-span-1',
      badgeES: 'Carga < 1s',
      badgeEN: 'Sub-1s Load',
      visual: null,
      bg: 'bg-[#0f0f12] border-white/[0.08] hover:border-emerald-500/30'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      titleES: 'Seguridad & Protección de Datos',
      titleEN: 'Enterprise Data Security & Privacy',
      descES: 'Aislamiento estricto de datos de clientes, pasarelas de pago cifradas y control de accesos. Cumplimiento de estándares de privacidad para blindar la reputación de tu empresa.',
      descEN: 'Strict customer data isolation, encrypted payment flows, and robust access governance to protect your company reputation and customer trust.',
      span: 'md:col-span-2',
      badgeES: 'Datos Blindados',
      badgeEN: 'Shielded Data',
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
          {lang === 'es' ? 'Soluciones de Ingeniería.' : 'What I build.'}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-medium leading-relaxed">
          {lang === 'es' 
            ? 'Plataformas digitales diseñadas para generar ingresos, automatizar operaciones y escalar sin fricción técnica.' 
            : 'Digital platforms engineered to generate revenue, automate workflows, and scale without technical bottlenecks.'}
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
            className={`group relative border p-6 sm:p-8 rounded-[24px] flex flex-col justify-between transition-all duration-500 h-full min-h-[240px] sm:min-h-[260px] ${feat.bg} ${feat.span}`}
          >
            {feat.visual}
            
            {/* Top Bar inside card: Icon + Badge */}
            <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 inline-flex transition-transform duration-500 group-hover:-translate-y-0.5">
                {feat.icon}
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-full">
                {lang === 'es' ? feat.badgeES : feat.badgeEN}
              </span>
            </div>
            
            {/* Text Content: Title + Unclipped Description */}
            <div className="relative z-10 mt-auto space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-neutral-50 group-hover:text-emerald-400 transition-colors">
                {lang === 'es' ? feat.titleES : feat.titleEN}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-normal">
                {lang === 'es' ? feat.descES : feat.descEN}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
