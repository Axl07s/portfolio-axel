import React from 'react';
import { MessageCircle, Mail, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="relative rounded-3xl p-8 sm:p-14 border border-zinc-800 bg-zinc-900/40 backdrop-blur-md overflow-hidden text-center space-y-8 shadow-2xl">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>{lang === 'es' ? 'TRABAJEMOS JUNTOS' : "LET'S WORK TOGETHER"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'es' ? '¿Tienes un proyecto en mente? ' : 'Have a project in mind? '}
            <br />
            <span className="text-zinc-400">
              {lang === 'es' ? 'Vamos a construirlo bien.' : "Let's engineer it right."}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {lang === 'es' 
              ? 'Ya sea que necesites un SaaS MVP en 2 semanas, un centro de comando de IA, o una aplicación móvil robusta — ofrezco velocidad y fiabilidad de grado de producción.' 
              : 'Whether you need a full SaaS MVP built in 2 weeks, an AI command center, or a robust mobile companion app — I bring production-grade speed and reliability.'}
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
          
          {/* Card 1: WhatsApp */}
          <a
            href="https://wa.me/593995267503?text=Hola%20Axel,%20vi%20tu%20portafolio%20y%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-zinc-950/50 border border-indigo-500/40 hover:border-indigo-500 shadow-sm flex flex-col items-center justify-between text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <span className="font-bold text-sm text-white block">WhatsApp Direct</span>
              <span className="text-[11px] text-zinc-400 font-mono">{lang === 'es' ? 'Respuesta rápida (<1h)' : 'Fastest Response (<1h)'}</span>
            </div>
            <span className="mt-3 text-xs font-bold text-indigo-400 flex items-center gap-1">
              <span>{lang === 'es' ? 'Iniciar Chat' : 'Start Chat'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Card 2: Fiverr */}
          <a
            href="https://www.fiverr.com/axl_29"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-zinc-950/50 border border-indigo-500/40 hover:border-indigo-500 shadow-sm flex flex-col items-center justify-between text-center group transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Fiverr</h3>
            <p className="text-[11px] text-zinc-400 font-mono mb-4">{lang === 'es' ? 'Contratar en plataforma' : 'Hire on platform'}</p>
            <span className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">axl_29 &rarr;</span>
          </a>

          {/* Card 3: Direct Email */}
          <a
            href="mailto:AxelSamMoli@gmail.com"
            className="p-5 rounded-2xl bg-zinc-950/50 border border-zinc-800 hover:border-zinc-700 flex flex-col items-center justify-between text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-900 text-zinc-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-zinc-300" />
            </div>
            <div>
              <span className="font-bold text-sm text-white block">Email Inquiry</span>
              <span className="text-[11px] text-zinc-400 font-mono">AxelSamMoli@gmail.com</span>
            </div>
            <span className="mt-3 text-xs font-bold text-zinc-300 flex items-center gap-1">
              <span>{lang === 'es' ? 'Enviar Email' : 'Send Email'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

        </div>

      </div>

    </section>
  );
};

