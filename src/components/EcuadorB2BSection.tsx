import React from 'react';
import { Sparkles, MessageCircle, Check, TrendingUp } from 'lucide-react';
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
        'Entrega lista en 7 a 10 días laborables',
      ] : [
        'Modern, elegant design tailored to your brand identity',
        'Floating WhatsApp button with preloaded message',
        'Google search optimization tailored to your local market',
        'Turnkey delivery in 7 to 10 business days',
      ],
      idealFor: lang === 'es' 
        ? 'Negocios, clínicas, consultorías y empresas de servicios'
        : 'Businesses, clinics, consulting firms, and service companies',
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
        'Cobro online con Payphone, Datafast o tarjeta de crédito',
        'Acompañamiento técnico y soporte continuo',
      ] : [
        'Administrative dashboard with clear metrics and reports',
        'Secure cloud database with automated backups',
        'Online checkout with Payphone, Datafast, or credit cards',
        'Technical onboarding and continuous direct support',
      ],
      idealFor: lang === 'es'
        ? 'Empresas en crecimiento, academias y negocios con membresías'
        : 'Growing companies, academies, and membership businesses',
    },
  ];

  return (
    <section id="solutions-overview" className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Banner Box */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-[#1f1f1d] border border-white/[0.08] overflow-hidden shadow-2xl">
        
        {/* Subtle warm glow background */}
        <div className="absolute top-0 right-0 w-full sm:w-[450px] h-[300px] bg-[#C8A97E]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141413] border border-white/[0.08] text-[#C8A97E] text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'SOLUCIONES DIGITALES & AUTOMATIZACIÓN' : 'DIGITAL SOLUTIONS & AUTOMATION'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] tracking-tight leading-tight">
            {lang === 'es' ? (
              <>¿Tu negocio necesita una plataforma web que <span className="text-[#C8A97E]">realmente venda</span> o automatizar procesos con IA?</>
            ) : (
              <>Does your business need a web platform that <span className="text-[#C8A97E]">actually sells</span> or automated customer workflows?</>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#A3A39E] leading-relaxed font-normal">
            {lang === 'es'
              ? 'Elimina páginas web lentas y anticuadas. Construyo plataformas digitales que transmiten autoridad inmediata y convierten visitas en clientes calificados directamente en tu WhatsApp.'
              : 'Eliminate slow and outdated websites. I engineer digital platforms that convey instant authority and convert visitors into qualified leads directly on your WhatsApp.'}
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {b2bServices.map((srv, idx) => (
            <div key={idx} className="bg-[#141413] p-7 rounded-2xl border border-white/[0.08] hover:border-[#C8A97E]/30 transition-all flex flex-col justify-between space-y-5">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-medium uppercase tracking-wider px-2.5 py-1 rounded bg-[#C8A97E]/10 text-[#C8A97E] border border-[#C8A97E]/20">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F5F5F0] leading-snug">{srv.title}</h3>
                <p className="text-xs text-[#A3A39E] leading-relaxed font-normal">{srv.description}</p>

                <div className="space-y-2 pt-2">
                  {srv.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#F5F5F0]">
                      <Check className="w-3.5 h-3.5 text-[#C8A97E] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-[#A3A39E]/70 block mb-1">
                  {lang === 'es' ? 'Ideal para:' : 'Ideal for:'}
                </span>
                <span className="text-xs text-[#A3A39E] font-medium block">{srv.idealFor}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#F5F5F0] flex items-center gap-2 justify-center sm:justify-start">
              <TrendingUp className="w-4 h-4 text-[#C8A97E]" />
              <span>{lang === 'es' ? 'Cotización Rápida & Asesoría Sin Compromiso' : 'Quick Quote & Free Consultation'}</span>
            </h4>
            <p className="text-xs text-[#A3A39E]">
              {lang === 'es' 
                ? 'Conversemos directamente sobre los requerimientos y el alcance de tu proyecto.' 
                : "Let's discuss the exact requirements and scope of your project directly."}
            </p>
          </div>

          <a
            href={lang === 'es'
              ? "https://wa.me/593995267503?text=Hola%20Axel,%20quisiera%20cotizar%20una%20soluci%C3%B3n%20web%20para%20mi%20negocio"
              : "https://wa.me/593995267503?text=Hi%20Axel,%20I%20would%20like%20to%20quote%20a%20web%20solution%20for%20my%20business"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#F5F5F0] hover:bg-[#E8E8E2] text-[#141413] shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#141413]" />
            <span>{lang === 'es' ? 'Solicitar Cotización por WhatsApp' : 'Request Quote via WhatsApp'}</span>
          </a>
        </div>

      </div>

    </section>
  );
};
