const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

if (!content.includes('ExternalLink')) {
  content = content.replace("import { ArrowLeft }", "import { ArrowLeft, ExternalLink, Github } from");
}

let ctaSection = `
        {renderLayout()}

        {/* Global Floating CTA for Live Project */}
        <div className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-50 flex flex-col gap-3">
          {(personalProject?.githubUrl || freelanceProject?.githubUrl) && (
            <a 
              href={personalProject?.githubUrl || freelanceProject?.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white px-5 py-3 rounded-full font-medium transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-zinc-700 backdrop-blur-md hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">{lang === 'es' ? 'Ver Código' : 'View Code'}</span>
            </a>
          )}
          
          {(personalProject?.liveUrl || freelanceProject?.liveUrl) && (
            <a 
              href={personalProject?.liveUrl || freelanceProject?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full font-medium transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] border border-indigo-500/50 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              <span>{lang === 'es' ? 'Ver Proyecto en Vivo' : 'View Live Site'}</span>
            </a>
          )}
        </div>
`;

content = content.replace('{renderLayout()}', ctaSection);

fs.writeFileSync('src/pages/ProjectDetail.tsx', content);
