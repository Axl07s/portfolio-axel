import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DisciplinesSection } from './components/DisciplinesSection';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PORTFOLIO_PROJECTS, type Project } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
      
      {/* Top Fixed Navbar */}
      <Navbar onOpenContact={() => {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Hero Section */}
      <Hero />

      {/* Matt Farley 3-Pillars Disciplines */}
      <DisciplinesSection />

      {/* Featured Projects Showcase (Clean, No Filters) */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
            Crafted for <span className="text-zinc-500">Production.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Real enterprise software, SaaS platforms, and AI systems deployed live in production.
          </p>
        </div>

        {/* Projects Grid (Clean 6 Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

      </section>

      {/* Direct Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Van Holtz 60/40 Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}

export default App;
