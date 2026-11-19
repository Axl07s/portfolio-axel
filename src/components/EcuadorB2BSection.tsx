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
        'Diseño moderno 2026 estilo Dark / High-Tech',
        'Botón de WhatsApp flotante con mensaje precargado',
        'SEO local y posicionamiento optimizado para tu sector',
        'Entrega lista en 7 a 10 días laborables',
      ] : [
        'Modern 2026 Dark / High-Tech aesthetic',
        'Floating WhatsApp button with preloaded message',
        'Local SEO and organic positioning optimized for your niche',
        'Turnkey delivery in 7 to 10 business days',
      ],
      idealFor: lang === 'es' 
        ? 'Negocios, clínicas, consultorías y empresas de servicios'
        : 'Businesses, clinics, consulting firms, and service companies',
    },
    {
      title: lang === 'es' ? 'Cotizador Inteligente & Bot IA' : 'Smart Quoter & AI Bot',
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
      title: lang === 'es' ? 'SaaS & Sistema Web a Medida' : 'Custom SaaS & Web Platform',
      badge: lang === 'es' ? 'Solución Completa' : 'Full Solution',
      description: lang === 'es'
        ? 'Plataformas web completas con panel de control, base de datos en tiempo real, gestión de clientes y pasarelas de pago locales/globales.'
        : 'Complete web platforms with control panel, real-time database, client management, and local/global payment gateways.',
      points: lang === 'es' ? [
        'Panel administrativo con métricas y reportes',
        'Base de datos segura en Supabase / PostgreSQL',
        'Cobro online con Payphone, Datafast o Stripe',
        'Acompañamiento técnico y soporte continuo',
      ] : [
        'Administrative panel with metrics and business reports',
        'Secure relational database in Supabase / PostgreSQL',
        'Online checkout with Payphone, Datafast, or Stripe',
        'Technical onboarding and continuous engineering support',
      ],
      idealFor: lang === 'es'
        ? 'Startups, empresas en crecimiento y academias'
        : 'Startups, growth companies, and educational academies',
    },
  ];

  return (
    <section id="ecuador-b2b" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Banner Box */}
      <div className="relative rounded-3xl p-8 sm:p-12 glass-obsidian border border-emerald-500/30 overflow-hidden shadow-2xl">
        
        {/* Glow background */}
        <div className="absolute top-0 right-0 w-full sm:w-[450px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'SOLUCIONES DIGITALES & AUTOMATIZACIÓN' : 'DIGITAL SOLUTIONS & AUTOMATION'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-50 tracking-tight leading-tight">
            {lang === 'es' ? (
              <>¿Tu negocio necesita una plataforma web que <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">realmente venda</span> o automatizar procesos con IA?</>
            ) : (
              <>Does your business need a web platform that <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">actually sells</span> or AI automation?</>
            )}
          </h2>

          <p className="text-sm text-neutral-300 leading-relaxed">
            {lang === 'es'
              ? 'Elimina páginas web lentas y anticuadas. Construyo plataformas de ingeniería digital que transmiten autoridad corporativa inmediata y convierten visitas en clientes calificados en tu WhatsApp.'
              : 'Eliminate slow and outdated websites. I engineer digital platforms that convey instant corporate authority and convert visitors into qualified leads on WhatsApp.'}
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {b2bServices.map((srv, idx) => (
            <div key={idx} className="glass-obsidian-card p-6 rounded-2xl border border-neutral-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-50 leading-snug">{srv.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{srv.description}</p>

                <div className="space-y-2 pt-2">
                  {srv.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                  {lang === 'es' ? 'Ideal para:' : 'Ideal for:'}
                </span>
                <span className="text-xs text-neutral-300 font-medium block">{srv.idealFor}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-neutral-50 flex items-center gap-2 justify-center sm:justify-start">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'es' ? 'Cotización Rápida & Asesoría Sin Compromiso' : 'Quick Quote & Free Consultation'}</span>
            </h4>
            <p className="text-xs text-neutral-400">
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
            className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-neutral-950" />
            <span>{lang === 'es' ? 'Solicitar Cotización por WhatsApp' : 'Request Quote via WhatsApp'}</span>
          </a>
        </div>

      </div>

    </section>
  );
};

