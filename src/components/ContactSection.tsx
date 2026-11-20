import React from 'react';
import { MessageCircle, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-24">
      
      <div className="relative rounded-3xl p-8 sm:p-14 border border-white/[0.08] bg-[#1f1f1d] overflow-hidden text-center space-y-8 shadow-2xl">
        
        {/* Subtle warm ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[500px] h-[250px] bg-[#C8A97E]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141413] border border-white/[0.08] text-[#C8A97E] text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
            <span>{lang === 'es' ? 'CONVERSEMOS' : "LET'S TALK"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight leading-tight">
            {lang === 'es' ? 'Conversemos sobre tu proyecto.' : "Let's discuss your project."}
            <br />
            <span className="text-[#A3A39E]">
              {lang === 'es' ? 'Te asesoro sobre la mejor solución para tu negocio.' : 'Personalized advice on the best solution for your business.'}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3A39E] leading-relaxed font-normal">
            {lang === 'es' 
              ? 'Desde sitios web corporativos y pasarelas de pago hasta asistentes de IA: entrega llave en mano con soporte continuo y sin intermediarios.' 
              : 'From corporate websites and payment platforms to AI assistants: turnkey delivery with direct support and zero middleman friction.'}
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
          
          {/* Card 1: WhatsApp Direct */}
          <a
            href="https://wa.me/593995267503?text=Hola%20Axel,%20quiero%20cotizar%20un%20proyecto%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#141413] border border-white/[0.08] hover:border-[#C8A97E]/40 shadow-sm flex flex-col items-center justify-between text-center group transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-[#1f1f1d] border border-white/[0.08] text-[#C8A97E] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div>
              <span className="font-bold text-sm text-[#F5F5F0] block">WhatsApp Directo</span>
              <span className="text-[11px] text-[#A3A39E] font-mono">
                {lang === 'es' ? 'Respuesta rápida (<1h)' : 'Fast response (<1h)'}
              </span>
            </div>
            <span className="mt-3 text-xs font-bold text-[#C8A97E] flex items-center gap-1">
              <span>{lang === 'es' ? 'Iniciar Chat' : 'Start Chat'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Card 2: Pago Protegido vía Fiverr */}
          <a
            href="https://www.fiverr.com/axl_29"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#141413] border border-white/[0.08] hover:border-[#C8A97E]/40 shadow-sm flex flex-col items-center justify-between text-center group transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-[#1f1f1d] border border-white/[0.08] text-[#C8A97E] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div>
              <span className="font-bold text-sm text-[#F5F5F0] block">
                {lang === 'es' ? 'Pago Protegido vía Fiverr' : 'Protected Payment via Fiverr'}
              </span>
              <span className="text-[11px] text-[#A3A39E] font-mono">
                {lang === 'es' ? 'Tu inversión asegurada • 5.0 ★' : 'Secured investment • 5.0 ★'}
              </span>
            </div>
            <span className="mt-3 text-xs font-bold text-[#C8A97E] flex items-center gap-1">
              <span>{lang === 'es' ? 'Perfil Verificado' : 'Verified Profile'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Card 3: Direct Email */}
          <a
            href="mailto:AxelSamMoli@gmail.com"
            className="p-6 rounded-2xl bg-[#141413] border border-white/[0.08] hover:border-white/20 flex flex-col items-center justify-between text-center group transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-[#1f1f1d] border border-white/[0.08] text-[#A3A39E] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 text-[#A3A39E]" />
            </div>
            <div>
              <span className="font-bold text-sm text-[#F5F5F0] block">
                {lang === 'es' ? 'Correo Electrónico' : 'Email Inquiry'}
              </span>
              <span className="text-[11px] text-[#A3A39E] font-mono">AxelSamMoli@gmail.com</span>
            </div>
            <span className="mt-3 text-xs font-bold text-[#A3A39E] group-hover:text-[#F5F5F0] flex items-center gap-1 transition-colors">
              <span>{lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

        </div>

      </div>

    </section>
  );
};
