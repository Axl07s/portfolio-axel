import React from 'react';
import { Sparkles, MessageCircle, Check, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const EcuadorB2BSection: React.FC = () => {
  const { lang } = useLanguage();

  const b2bServices = [
    {
      title: lang === 'es' ? 'Web Corporativa & Landing Page' : 'Corporate Web & Landing Page',
      badge: lang === 'es' ? 'Más Solicitado' : 'Most Popular',
      description: lang === 'es'
        ? 'Páginas web modernas de alto impacto visual, optimizadas para móviles, con carga ultra rápida (<1s) y captación directa por WhatsApp.'
        : 'Modern high-impact visual websites, mobile-optimized, ultra-fast loading (<1s), and direct WhatsApp customer acquisition.',
      points: lang === 'es' ? [
        'Diseño moderno y elegante adaptado a tu marca',
        'Botón de WhatsApp flotante con mensaje precargado',
        'Posicionamiento en Google optimizado para tu sector',
        'Entrega llave en mano en 7 a 10 días laborables',
      ] : [
        'Modern, elegant design tailored to your brand identity',
        'Floating WhatsApp button with preloaded message',
        'Google search optimization tailored to your local market',
        'Turnkey delivery in 7 to 10 business days',
      ],
      idealFor: lang === 'es' 
        ? 'Negocios, clínicas, consultorías y empresas de servicios'
        : 'Businesses, clinics, consulting firms, and service companies',
      featured: false,
    },
    {
      title: lang === 'es' ? 'Cotizador Inteligente & Bot IA' : 'Smart Quoter & AI Assistant',
      badge: lang === 'es' ? 'Mayor Retorno' : 'Highest ROI',
      description: lang === 'es'
        ? 'Calculadoras interactivas de presupuesto y asistentes de IA para atender clientes las 24 horas y cerrar ventas en piloto automático.'
        : 'Interactive budget calculators and AI assistants to serve clients 24/7 and close sales on autopilot.',
      points: lang === 'es' ? [
        'Cotización en tiempo real según las opciones del cliente',
        'Envío automático del resumen de cotización a tu WhatsApp',
        'Integración con catálogo de productos o servicios',
        'Ahorra hasta 15 horas semanales de atención manual',
      ] : [
        'Real-time pricing estimation based on customer choices',
        'Automatic quote summary sent straight to your WhatsApp',
        'Full integration with your product or service catalog',
        'Saves up to 15 hours weekly of manual customer support',
      ],
      idealFor: lang === 'es'
        ? 'Imprentas, constructoras, eventos, talleres y distribuidores'
        : 'Print shops, construction, events, workshops, and distributors',
      featured: true,
    },
    {
      title: lang === 'es' ? 'Plataforma Web & Sistema a Medida' : 'Custom Web Platform & Portal',
      badge: lang === 'es' ? 'Solución Completa' : 'Full Solution',
      description: lang === 'es'
        ? 'Plataformas web completas con panel de control, base de datos en la nube, gestión de clientes y pasarelas de pago integradas.'
        : 'Complete web platforms with control panel, cloud database, client management, and integrated payment gateways.',
      points: lang === 'es' ? [
        'Panel administrativo con métricas y reportes claros',
        'Base de datos segura en la nube con copias de respaldo',
        'Cobro online directo con tarjeta de crédito sin intermediarios',
        'Acompañamiento técnico directo y soporte continuo',
      ] : [
        'Administrative dashboard with clear metrics and reports',
        'Secure cloud database with automated backups',
        'Direct online checkout with credit cards without middlemen',
        'Technical onboarding and continuous direct support',
      ],
      idealFor: lang === 'es'
        ? 'Empresas en crecimiento, academias y negocios con membresías'
        : 'Growing companies, academies, and membership businesses',
      featured: false,
    },
  ];

  return (
    <section id="services" className="w-full bg-[#141413] text-[#F5F5F0] py-24 sm:py-32 scroll-mt-20 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1f1f1d] border border-white/[0.08] text-[#C8A97E] text-xs font-mono font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Soluciones Web para Negocios' : 'Web Solutions for Business'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F5F5F0] tracking-[-0.03em] leading-tight">
              {lang === 'es' ? (
                <>Sistemas listos para <span className="text-[#C8A97E]">cerrar ventas</span> y automatizar tu operación.</>
              ) : (
                <>Systems engineered to <span className="text-[#C8A97E]">close sales</span> and automate operations.</>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#A3A39E] leading-relaxed font-normal max-w-2xl">
              {lang === 'es'
                ? 'Cada negocio tiene procesos y necesidades únicas. Desarrollo páginas de alto impacto, cotizadores interactivos y plataformas completas cotizadas a la medida de tus objetivos reales.'
                : 'Every business has unique workflows and requirements. I engineer high-impact landing pages, interactive calculators, and full-scale web platforms tailored to your operational goals.'}
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-[#A3A39E] pb-2">
            <span className="flex items-center gap-1.5 bg-[#1b1b19] px-3.5 py-1.5 rounded-full border border-white/[0.08]">
              <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />
              <span>{lang === 'es' ? 'Garantía de Entrega' : 'Delivery Guarantee'}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-[#1b1b19] px-3.5 py-1.5 rounded-full border border-white/[0.08]">
              <Zap className="w-4 h-4 text-[#C8A97E]" />
              <span>{lang === 'es' ? 'Carga < 1 Segundo' : 'Sub-second Load'}</span>
            </span>
          </div>
        </div>

        {/* 3 Services Cards Grid (Dark Cohesive Minimalist) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {b2bServices.map((srv, idx) => (
            <div 
              key={idx} 
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between space-y-6 transition-all duration-300 ${
                srv.featured 
                  ? 'bg-[#1b1b19] border border-[#C8A97E]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative' 
                  : 'bg-[#1b1b19] border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:border-white/20'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    srv.featured 
                      ? 'bg-[#C8A97E] text-[#141413] shadow-sm' 
                      : 'bg-[#1f1f1d] text-[#C8A97E] border border-white/[0.08]'
                  }`}>
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] tracking-tight leading-snug">
                  {srv.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#A3A39E] leading-relaxed font-normal">
                  {srv.description}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-white/[0.08]">
                  {srv.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F0]">
                      <div className="w-4 h-4 rounded-full bg-[#C8A97E]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#C8A97E]" />
                      </div>
                      <span className="font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                <div className="bg-[#141413] rounded-2xl p-4 border border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A39E]/70 block mb-1 font-semibold">
                    {lang === 'es' ? 'IDEAL PARA:' : 'IDEAL FOR:'}
                  </span>
                  <span className="text-xs text-[#F5F5F0] font-semibold block leading-relaxed">
                    {srv.idealFor}
                  </span>
                </div>

                <a
                  href={lang === 'es'
                    ? `https://wa.me/593995267503?text=${encodeURIComponent(`Hola Axel, me interesa consultar por el servicio "${srv.title}". Me gustaria recibir una cotizacion a medida para mi negocio.`)}`
                    : `https://wa.me/593995267503?text=${encodeURIComponent(`Hi Axel, I would like to inquire about the "${srv.title}" service and get a custom quote for my business.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-2xl text-xs font-bold transition-all min-h-[44px] flex items-center justify-center gap-2 ${
                    srv.featured
                      ? 'bg-[#F5F5F0] text-[#141413] hover:bg-[#E8E8E2] shadow-md'
                      : 'bg-white/[0.05] text-[#F5F5F0] hover:bg-white/[0.1] border border-white/10'
                  }`}
                >
                  <span>{lang === 'es' ? 'Cotizar a medida →' : 'Custom Quote →'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout (Dark Cohesive Minimalist) */}
        <div className="mt-16 rounded-3xl p-8 sm:p-10 bg-[#1b1b19] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-[#C8A97E] uppercase tracking-wider font-semibold block">
              {lang === 'es' ? 'Asesoría Directa sin Compromiso' : 'Direct Free Consultation'}
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] tracking-tight">
              {lang === 'es' 
                ? '¿No estás seguro de qué solución se adapta a tu negocio?' 
                : 'Not sure which solution best fits your business?'}
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A39E] max-w-xl">
              {lang === 'es'
                ? 'Escríbeme directamente por WhatsApp. Evaluamos juntos tus requerimientos y te propongo una solución clara con tiempos y presupuesto cerrado.'
                : 'Message me directly on WhatsApp. We will evaluate your requirements and I will propose a clear scope with fixed pricing and timelines.'}
            </p>
          </div>

          <a
            href={lang === 'es'
              ? "https://wa.me/593995267503?text=Hola%20Axel,%20quiero%20asesoria%20sobre%20cual%20solucion%20web%20se%20adapta%20a%20mi%20negocio"
              : "https://wa.me/593995267503?text=Hi%20Axel,%20I%20would%20like%20guidance%20on%20which%20web%20solution%20fits%20my%20business"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold bg-[#F5F5F0] hover:bg-[#E8E8E2] text-[#141413] shadow-xl transition-all min-h-[44px] shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'es' ? 'Consultar por WhatsApp →' : 'Chat on WhatsApp →'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
