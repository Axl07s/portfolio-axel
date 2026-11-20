import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Award, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto text-left overflow-hidden min-h-[90dvh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center w-full">
        {/* Left text column */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 col-span-1 lg:col-span-7 relative z-10 lg:pr-12"
        >
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1f1f1d] border border-white/[0.08] text-[#C8A97E] text-xs font-mono font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
              <span>{lang === 'es' ? 'ESTUDIO DIGITAL & CONSULTORÍA' : 'DIGITAL STUDIO & CONSULTING'}</span>
            </div>

            <h1 className="font-display text-[3.25rem] leading-[1.08] sm:text-[4rem] md:text-[76px] lg:text-[86px] font-bold tracking-[-0.04em] text-[#F5F5F0]">
              {lang === 'es' ? 'Hola, soy Axel.' : "Hey, I'm Axel."}
              <br/>
              <span className="text-[#A3A39E]">
                {lang === 'es' ? 'Sistemas web y automatización para hacer crecer tu negocio.' : 'Web systems & automation to scale your business.'}
              </span>
            </h1>
          </motion.div>

          <motion.p variants={item} className="text-lg md:text-xl text-[#A3A39E] font-normal leading-relaxed max-w-[44ch]">
            {lang === 'es'
              ? 'Consultoría y desarrollo a medida. Creo páginas web de alto impacto, plataformas de cobro directo y asistentes inteligentes que convierten visitas en clientes y eliminan tareas manuales.'
              : 'Bespoke consulting and development. I engineer high-impact websites, direct payment platforms, and smart assistants that turn visitors into clients and eliminate manual chores.'}
          </motion.p>

          <motion.div variants={item} className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={lang === 'es' ? "https://wa.me/593995267503?text=Hola%20Axel,%20quiero%20cotizar%20un%20proyecto" : "https://wa.me/593995267503?text=Hi%20Axel,%20I%20would%20like%20to%20quote%20a%20project"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold bg-[#F5F5F0] text-[#141413] hover:bg-[#E8E8E2] transition-all duration-300 shadow-md"
            >
              <span>{t('hero.cta.primary')}</span>
              <ArrowRight className="w-4 h-4 text-[#141413] group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[#F5F5F0] hover:bg-white/[0.05] border border-white/10 transition-all duration-300"
            >
              <span>{lang === 'es' ? 'Ver Soluciones' : 'View Solutions'}</span>
            </a>
          </motion.div>

          {/* Minimalist Commercial Proof Strip with Business Value */}
          <motion.div variants={item} className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Layers className="w-4 h-4 text-[#C8A97E]" />
                <span className="text-2xl font-bold tracking-tight text-[#C8A97E] font-mono block">10+</span>
              </div>
              <div className="text-xs font-bold text-[#F5F5F0]">
                {lang === 'es' ? 'Proyectos entregados' : 'Delivered Projects'}
              </div>
              <div className="text-[11px] text-[#A3A39E] font-sans mt-0.5 leading-snug">
                {lang === 'es' ? 'Empresas y emprendedores' : 'Businesses & entrepreneurs'}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Zap className="w-4 h-4 text-[#C8A97E]" />
                <span className="text-2xl font-bold tracking-tight text-[#C8A97E] font-mono block">&lt; 1s</span>
              </div>
              <div className="text-xs font-bold text-[#F5F5F0]">
                {lang === 'es' ? 'Carga instantánea' : 'Instant Load'}
              </div>
              <div className="text-[11px] text-[#A3A39E] font-sans mt-0.5 leading-snug">
                {lang === 'es' ? 'Tus clientes no esperan' : 'Zero waiting time'}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />
                <span className="text-2xl font-bold tracking-tight text-[#C8A97E] font-mono block">100%</span>
              </div>
              <div className="text-xs font-bold text-[#F5F5F0]">
                {lang === 'es' ? 'Privacidad y seguridad' : 'Privacy & Security'}
              </div>
              <div className="text-[11px] text-[#A3A39E] font-sans mt-0.5 leading-snug">
                {lang === 'es' ? 'Tus datos siempre protegidos' : 'Always protected data'}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Award className="w-4 h-4 text-[#C8A97E]" />
                <span className="text-2xl font-bold tracking-tight text-[#C8A97E] font-mono block">5.0 ★</span>
              </div>
              <div className="text-xs font-bold text-[#F5F5F0]">
                {lang === 'es' ? 'Calificación verificada' : 'Verified Rating'}
              </div>
              <div className="text-[11px] text-[#A3A39E] font-sans mt-0.5 leading-snug">
                {lang === 'es' ? 'Clientes satisfechos' : 'Satisfied clients'}
              </div>
            </div>
          </motion.div>

          {/* SOBER INDUSTRY / SECTOR STRIP (Replaces code languages marquee) */}
          <motion.div variants={item} className="pt-6">
            <div className="py-2.5 px-4 rounded-xl bg-[#1f1f1d] border border-white/[0.06] flex items-center justify-between text-xs text-[#A3A39E] overflow-x-auto gap-4 whitespace-nowrap">
              <span>{lang === 'es' ? 'Sectores:' : 'Sectors:'}</span>
              <span className="text-[#F5F5F0] font-medium">
                {lang === 'es'
                  ? 'Restaurantes · Clínicas y Consultorios · Empresas de Servicios · Tiendas Online · Atención 24/7'
                  : 'Restaurants · Clinics & Practices · Service Companies · Online Stores · 24/7 Customer Care'}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right asset column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="col-span-1 lg:col-span-5 relative"
        >
          {/* Subtle warm glow behind image */}
          <div className="absolute inset-0 bg-[#C8A97E]/5 blur-[120px] -z-10 rounded-[40px] transform-gpu" />
          
          {/* High-end Mockup Frame */}
          <div className="relative rounded-[24px] bg-[#1f1f1d] border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="flex items-center px-4 py-3 bg-[#191918] border-b border-white/[0.05] gap-2">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="mx-auto px-6 py-1 rounded-md bg-[#141413] text-[10px] font-mono text-[#A3A39E] border border-white/[0.05]">
                plataforma-comercial.com
              </div>
            </div>
            <img 
              src="/projects/syntrosaas_01.png" 
              alt="Plataforma Web para Negocios" 
              className="w-full h-auto aspect-[16/10] object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
