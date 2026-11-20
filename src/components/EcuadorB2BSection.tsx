import React from 'react';
import { Sparkles, MessageCircle, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const EcuadorB2BSection: React.FC = () => {
  const { lang } = useLanguage();

  const b2bServices = [
    {
      title: lang === 'es' ? 'Web Corporativa & Landing Page' : 'Corporate Web & Landing Page',
      badge: lang === 'es' ? 'Mas Solicitado' : 'Most Popular',
      price: lang === 'es' ? 'Desde $450' : 'From $450',
      description: lang === 'es'
        ? 'Paginas web modernas de alto impacto visual, optimizadas para moviles, con carga ultra rapida (<1s) y captacion directa por WhatsApp.'
        : 'Modern high-impact visual websites, mobile-optimized, ultra-fast loading (<1s), and direct WhatsApp customer acquisition.',
      points: lang === 'es' ? [
        'Diseno moderno y elegante adaptado a tu marca',
        'Boton de WhatsApp flotante con mensaje precargado',
        'Posicionamiento en Google optimizado para tu sector',
        'Entrega llave en mano en 7 a 10 dias laborables',
      ] : [
        'Modern, elegant design tailored to your brand identity',
        'Floating WhatsApp button with preloaded message',
        'Google search optimization tailored to your local market',
        'Turnkey delivery in 7 to 10 business days',
      ],
      idealFor: lang === 'es' 
        ? 'Negocios, clinicas, consultorias y empresas de servicios'
        : 'Businesses, clinics, consulting firms, and service companies',
      featured: false,
    },
    {
      title: lang === 'es' ? 'Cotizador Inteligente & Bot IA' : 'Smart Quoter & AI Assistant',
      badge: lang === 'es' ? 'Mayor Retorno' : 'Highest ROI',
      price: lang === 'es' ? 'Desde $850' : 'From $850',
      description: lang === 'es'
        ? 'Calculadoras interactivas de presupuesto y asistentes de IA para atender clientes las 24 horas y cerrar ventas en piloto automatico.'
        : 'Interactive budget calculators and AI assistants to serve clients 24/7 and close sales on autopilot.',
      points: lang === 'es' ? [
        'Cotizacion en tiempo real segun las opciones del cliente',
        'Envio automatico del resumen de cotizacion a tu WhatsApp',
        'Integracion con catalogo de productos o servicios',
        'Ahorra hasta 15 horas semanales de atencion manual',
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
      badge: lang === 'es' ? 'Solucion Completa' : 'Full Solution',
      price: lang === 'es' ? 'Desde $1,400' : 'From $1,400',
      description: lang === 'es'
        ? 'Plataformas web completas con panel de control, base de datos en la nube, gestion de clientes y pasarelas de pago integradas.'
        : 'Complete web platforms with control panel, cloud database, client management, and integrated payment gateways.',
      points: lang === 'es' ? [
        'Panel administrativo con metricas y reportes claros',
        'Base de datos segura en la nube con copias de respaldo',
        'Cobro online directo con tarjeta de credito sin intermediarios',
        'Acompanamiento tecnico directo y soporte continuo',
      ] : [
        'Administrative dashboard with clear metrics and reports',
        'Secure cloud database with automated backups',
        'Direct online checkout with credit cards without middlemen',
        'Technical onboarding and continuous direct support',
      ],
      idealFor: lang === 'es'
        ? 'Empresas en crecimiento, academias y negocios con membresias'
        : 'Growing companies, academies, and membership businesses',
      featured: false,
    },
  ];

  return (
    <section id="services" className="w-full bg-[#FAF9F6] text-[#141413] py-24 sm:py-32 scroll-mt-20 border-y border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-[#8C6D40] text-xs font-mono font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Paquetes de Soluciones para Negocios' : 'Turnkey Business Solutions'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-[-0.03em] leading-tight">
              {lang === 'es' ? (
                <>Sistemas listos para <span className="text-[#8C6D40]">cerrar ventas</span> y automatizar tu operacion.</>
              ) : (
                <>Systems engineered to <span className="text-[#8C6D40]">close sales</span> and automate operations.</>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#575752] leading-relaxed font-normal max-w-2xl">
              {lang === 'es'
                ? 'Elimina webs lentas y procesos manuales. Entrego plataformas con diseno premium, integracion directa a WhatsApp y sistemas de cobro sin comisiones abusivas.'
                : 'Say goodbye to sluggish websites and manual tasks. I deliver premium web platforms with direct WhatsApp integration and zero-commission payment setups.'}
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-[#575752] pb-2">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-black/[0.06] shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#8C6D40]" />
              <span>{lang === 'es' ? 'Garantia de Entrega' : 'Delivery Guarantee'}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-black/[0.06] shadow-sm">
              <Zap className="w-4 h-4 text-[#8C6D40]" />
              <span>{lang === 'es' ? 'Carga < 1 Segundo' : 'Sub-second Load'}</span>
            </span>
          </div>
        </div>

        {/* 3 Services Cards Grid (Light Editorial) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {b2bServices.map((srv, idx) => (
            <div 
              key={idx} 
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between space-y-6 transition-all duration-300 ${
                srv.featured 
                  ? 'bg-white border-2 border-[#8C6D40]/40 shadow-[0_20px_50px_rgba(140,109,64,0.1)] relative' 
                  : 'bg-white border border-black/[0.07] shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)]'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    srv.featured 
                      ? 'bg-[#8C6D40] text-white shadow-sm' 
                      : 'bg-[#C8A97E]/20 text-[#7A5B2E] border border-[#C8A97E]/30'
                  }`}>
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight leading-snug">
                  {srv.title}
                </h3>

                <div className="pt-1 pb-1 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-[#141413] tracking-tight">
                    {srv.price}
                  </span>
                  <span className="text-xs font-mono text-[#73736C]">USD</span>
                </div>
                
                <p className="text-xs sm:text-sm text-[#575752] leading-relaxed font-normal">
                  {srv.description}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-black/[0.06]">
                  {srv.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141413]">
                      <div className="w-4 h-4 rounded-full bg-[#8C6D40]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#8C6D40]" />
                      </div>
                      <span className="font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/[0.06]">
                <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-black/[0.05]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#73736C] block mb-1 font-semibold">
                    {lang === 'es' ? 'IDEAL PARA:' : 'IDEAL FOR:'}
                  </span>
                  <span className="text-xs text-[#141413] font-semibold block leading-relaxed">
                    {srv.idealFor}
                  </span>
                </div>

                <a
                  href={lang === 'es'
                    ? `https://wa.me/593995267503?text=${encodeURIComponent(`Hola Axel, me interesa el paquete "${srv.title}". Me gustaria recibir una cotizacion.`)}`
                    : `https://wa.me/593995267503?text=${encodeURIComponent(`Hi Axel, I am interested in the "${srv.title}" package. I would like to get a quote.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-2xl text-xs font-bold transition-all min-h-[44px] flex items-center justify-center gap-2 ${
                    srv.featured
                      ? 'bg-[#141413] text-[#FAF9F6] hover:bg-[#2A2A28] shadow-md'
                      : 'bg-black/[0.04] text-[#141413] hover:bg-black/[0.08] border border-black/[0.06]'
                  }`}
                >
                  <span>{lang === 'es' ? 'Cotizar este Paquete' : 'Quote this Package'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Discreet Pricing Disclaimer Note */}
        <p className="text-center text-xs font-mono text-[#73736C] mt-8 max-w-2xl mx-auto leading-relaxed">
          {lang === 'es'
            ? 'Valores referenciales para paquetes base. Proyectos corporativos o sistemas a medida se cotizan según alcance.'
            : 'Reference prices for base packages. Enterprise projects or custom systems are quoted based on scope.'}
        </p>

        {/* Bottom Banner Callout (Light Editorial) */}
        <div className="mt-16 rounded-3xl p-8 sm:p-10 bg-white border border-black/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-[#8C6D40] uppercase tracking-wider font-semibold block">
              {lang === 'es' ? 'Asesoria Directa sin Compromiso' : 'Direct Free Consultation'}
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight">
              {lang === 'es' 
                ? '¿No estas seguro de cual paquete se adapta a tu negocio?' 
                : 'Not sure which solution best fits your business?'}
            </h4>
            <p className="text-xs sm:text-sm text-[#575752] max-w-xl">
              {lang === 'es'
                ? 'Escribeme directamente por WhatsApp. Revisamos juntos tus requerimientos y te propongo una solucion clara con tiempos y presupuesto cerrado.'
                : 'Message me directly on WhatsApp. We will evaluate your requirements and I will propose a clear scope with fixed pricing and timelines.'}
            </p>
          </div>

          <a
            href={lang === 'es'
              ? "https://wa.me/593995267503?text=Hola%20Axel,%20quiero%20asesoria%20sobre%20cual%20solucion%20web%20se%20adapta%20a%20mi%20negocio"
              : "https://wa.me/593995267503?text=Hi%20Axel,%20I%20would%20like%20guidance%20on%20which%20web%20solution%20fits%20my%20business"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold bg-[#141413] hover:bg-[#2A2A28] text-[#FAF9F6] shadow-xl transition-all min-h-[44px] shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'es' ? 'Hablar con Axel por WhatsApp' : 'Chat with Axel on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
