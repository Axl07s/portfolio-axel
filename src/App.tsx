import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Labs } from './pages/Labs';
import { ProjectDetail } from './pages/ProjectDetail';
import { MarketingClip } from './pages/MarketingClip';
import { NotFound } from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const isMarketing = location.pathname.startsWith('/marketing');

  if (isMarketing) {
    return (
      <main className="min-h-screen bg-black text-white overflow-hidden">
        <Routes>
          <Route path="/marketing/:id" element={<MarketingClip />} />
        </Routes>
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
      <Navbar onOpenContact={() => {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }} />

      <main className="flex-1 flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <ContactSection />
      </main>

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
