import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { TechStackSection } from './components/TechStackSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EcuadorB2BSection } from './components/EcuadorB2BSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PORTFOLIO_PROJECTS, type Project } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set(PORTFOLIO_PROJECTS.map(p => p.category));
    return ['all', ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050508] text-zinc-100 selection:bg-red-600 selection:text-white">
      
      {/* Top Fixed Navbar */}
      <Navbar onOpenContact={() => {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">Work</span>.
            </h2>
            <p className="text-sm text-zinc-400">
              Real projects, live in production. Click any project to explore.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white font-bold shadow-glow-red'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
              >
                {cat === 'all' ? 'All Systems' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

      </section>

      {/* Tech Stack Matrix */}
      <TechStackSection />

      {/* Verified Certifications */}
      <CertificationsSection />

      {/* Ecuador Local B2B Enterprise Section */}
      <EcuadorB2BSection />

      {/* Direct Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}

export default App;
