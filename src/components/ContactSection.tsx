import React from 'react';
import { MessageCircle, Mail, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="relative glass-obsidian rounded-3xl p-8 sm:p-14 border border-red-500/30 overflow-hidden text-center space-y-8 shadow-2xl">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-red-500/30 text-red-400 text-xs font-mono font-medium shadow-glow-red">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>LET'S WORK TOGETHER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a project in mind? <br />
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Let's engineer it right.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Whether you need a full SaaS MVP built in 2 weeks, an AI command center, or a robust mobile companion app — I bring production-grade speed and reliability.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
          
          {/* Card 1: WhatsApp */}
          <a
            href="https://wa.me/593999999999?text=Hola%20Axel,%20vi%20tu%20portafolio%20y%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl glass-obsidian-card border border-red-500/40 hover:border-red-500 shadow-glow-red flex flex-col items-center justify-between text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <span className="font-bold text-sm text-white block">WhatsApp Direct</span>
              <span className="text-[11px] text-zinc-400 font-mono">Fastest Response (&lt;1h)</span>
            </div>
            <span className="mt-3 text-xs font-bold text-red-400 flex items-center gap-1">
              <span>Start Chat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Card 2: Fiverr */}
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl glass-obsidian-card border border-zinc-800 hover:border-amber-500/50 flex flex-col items-center justify-between text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="font-bold text-sm text-white block">Fiverr 5★ Escrow</span>
              <span className="text-[11px] text-zinc-400 font-mono">Verified Safe Payment</span>
            </div>
            <span className="mt-3 text-xs font-bold text-amber-400 flex items-center gap-1">
              <span>Order Gig</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Card 3: Direct Email */}
          <a
            href="mailto:AxelSamMoli@gmail.com"
            className="p-5 rounded-2xl glass-obsidian-card border border-zinc-800 hover:border-zinc-700 flex flex-col items-center justify-between text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-900 text-zinc-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-zinc-300" />
            </div>
            <div>
              <span className="font-bold text-sm text-white block">Email Inquiry</span>
              <span className="text-[11px] text-zinc-400 font-mono">AxelSamMoli@gmail.com</span>
            </div>
            <span className="mt-3 text-xs font-bold text-zinc-300 flex items-center gap-1">
              <span>Send Email</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

        </div>

      </div>

    </section>
  );
};
