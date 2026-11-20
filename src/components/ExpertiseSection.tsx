import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Bot, CalendarCheck, LayoutDashboard } from 'lucide-react';

export function ExpertiseSection() {
  const { lang } = useLanguage();

  const features = [
    {
      icon: <Globe className="w-5 h-5 text-[#C8A97E]" />,
      titleES: 'Páginas Web que Venden',
      titleEN: 'Websites that Sell',
      descES: 'Sitios modernos, rápidos y elegantes diseñados para proyectar prestigio y convertir visitas en clientes.',
      descEN: 'Modern, fast, and elegant sites designed to project prestige and convert visitors into clients.',
      span: 'md:col-span-2',
      badgeES: 'Presencia & Ventas',
      badgeEN: 'Presence & Sales',
      bg: 'bg-[#1f1f1d] border-white/[0.08] hover:border-[#C8A97E]/30'
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-[#C8A97E]" />,
      titleES: 'Sistemas de Reservas y Cobros Directos',
      titleEN: 'Direct Booking & Billing Systems',
      descES: 'Cobra citas, membresías o pedidos desde tu propia web sin pagar comisiones a plataformas intermediarias.',
      descEN: 'Collect appointments, memberships, or orders from your own site without paying middleman fees.',
      span: 'md:col-span-1',
      badgeES: '0% Comisiones',
      badgeEN: '0% Fees',
      bg: 'bg-[#1f1f1d] border-white/[0.08] hover:border-[#C8A97E]/30'
    },
    {
      icon: <Bot className="w-5 h-5 text-[#C8A97E]" />,
      titleES: 'Asistentes Inteligentes 24/7',
      titleEN: '24/7 Smart Assistants',
      descES: 'Automatiza la atención a tus clientes por WhatsApp y web para responder al instante y no perder ninguna venta.',
      descEN: 'Automate client support via WhatsApp and web to respond instantly and never lose a lead.',
      span: 'md:col-span-1',
      badgeES: 'Atención Continua',
      badgeEN: 'Continuous Care',
      bg: 'bg-[#1f1f1d] border-white/[0.08] hover:border-[#C8A97E]/30'
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-[#C8A97E]" />,
      titleES: 'Control Total sin Hojas de Cálculo',
      titleEN: 'Full Control without Spreadsheets',
      descES: 'Paneles privados y fáciles de usar para organizar tus clientes, pagos y operaciones en un solo lugar.',
      descEN: 'Private, easy-to-use dashboards to organize clients, payments, and operations in one place.',
      span: 'md:col-span-2',
      badgeES: 'Operaciones Claras',
      badgeEN: 'Clear Operations',
      bg: 'bg-[#1f1f1d] border-white/[0.08] hover:border-[#C8A97E]/30'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto w-full relative z-10 scroll-mt-24">
      <div className="mb-14 max-w-2xl">
        <h2 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] leading-[1.08] font-display font-bold text-[#F5F5F0] tracking-[-0.03em] mb-4">
          {lang === 'es' ? 'Servicios & Soluciones para Negocios.' : 'Services & Business Solutions.'}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#A3A39E] font-normal leading-relaxed">
          {lang === 'es' 
            ? 'Sistemas diseñados para generar ingresos, ahorrar tiempo de gestión y proyectar una imagen corporativa impecable.' 
            : 'Systems engineered to drive revenue, save management hours, and project an impeccable brand presence.'}
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
            className={`group relative border p-7 sm:p-9 rounded-[24px] flex flex-col justify-between transition-all duration-500 h-full min-h-[250px] ${feat.bg} ${feat.span}`}
          >
            {/* Top Bar: Icon + Badge */}
            <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
              <div className="p-3 rounded-xl bg-[#141413] border border-white/[0.08] inline-flex transition-transform duration-500 group-hover:-translate-y-0.5">
                {feat.icon}
              </div>
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#C8A97E] bg-[#C8A97E]/10 border border-[#C8A97E]/20 px-3 py-1 rounded-full">
                {lang === 'es' ? feat.badgeES : feat.badgeEN}
              </span>
            </div>
            
            {/* Content: Title, Description - NO tech tags */}
            <div className="relative z-10 mt-auto space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#F5F5F0] group-hover:text-[#C8A97E] transition-colors">
                {lang === 'es' ? feat.titleES : feat.titleEN}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#A3A39E] font-normal">
                {lang === 'es' ? feat.descES : feat.descEN}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
