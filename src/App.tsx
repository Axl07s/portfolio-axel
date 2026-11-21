import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Labs } from './pages/Labs';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFound } from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';
import { useLanguage } from './context/LanguageContext';

export function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const isProjectDetail = location.pathname.startsWith('/project/');

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-[#141413] text-[#F5F5F0] selection:bg-[#C8A97E]/30 selection:text-[#F5F5F0]">
      <Navbar onOpenContact={() => {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }} />

      <main className={`flex-1 flex flex-col w-full ${!isProjectDetail ? 'pb-20 md:pb-0' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <ContactSection />
      </main>

      {/* Mobile Sticky Bottom Conversion Dock */}
      {!isProjectDetail && (
        <aside 
          aria-label={lang === 'es' ? 'Acciones rápidas para móvil' : 'Mobile quick actions'}
          className="md:hidden fixed bottom-0 inset-x-0 z-40 px-3.5 py-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#141413]/95 backdrop-blur-2xl border-t border-white/[0.08] shadow-[0_-10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2"
        >
          <a
            href={lang === 'es' ? "https://wa.me/593995267503?text=Hola%20Axel,%20quiero%20cotizar%20un%20proyecto" : "https://wa.me/593995267503?text=Hi%20Axel,%20I%20would%20like%20to%20quote%20a%20project"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#F5F5F0] hover:bg-[#E8E8E2] active:bg-[#E8E8E2] text-[#141413] rounded-xl font-bold text-xs shadow-md transition-all active:scale-[0.98] min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{lang === 'es' ? 'Cotizar por WhatsApp' : 'Quote on WhatsApp'}</span>
          </a>

          <button
            onClick={() => {
              if (location.pathname === '/') {
                const el = document.getElementById('services');
                el?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#services');
              }
            }}
            className="px-3.5 py-2.5 bg-white/[0.06] hover:bg-white/10 active:bg-white/[0.12] border border-white/10 text-[#F5F5F0] rounded-xl font-medium text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px] shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>{lang === 'es' ? 'Servicios' : 'Services'}</span>
          </button>
        </aside>
      )}

      <Footer />
    </div>
  );
}

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;






