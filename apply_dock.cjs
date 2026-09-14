const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

const splitToken = '{/* Global Floating CTA for Live Project */}';
if (content.includes(splitToken)) {
  const parts = content.split(splitToken);
  
  const newCTA = `{/* Global Floating Dock for Actions */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center p-1.5 bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {(personalProject?.githubUrl || freelanceProject?.githubUrl) && (
            <a 
              href={personalProject?.githubUrl || freelanceProject?.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 hover:bg-white/10 rounded-full transition-colors text-zinc-300 hover:text-white font-medium text-sm"
            >
              <Code2 className="w-4 h-4" />
              <span>{lang === 'es' ? 'Código' : 'Code'}</span>
            </a>
          )}
          
          {(personalProject?.githubUrl || freelanceProject?.githubUrl) && (personalProject?.liveUrl || freelanceProject?.liveUrl) && (
            <div className="w-px h-6 bg-white/10 mx-1"></div>
          )}

          {(personalProject?.liveUrl || freelanceProject?.liveUrl) && (
            <a 
              href={personalProject?.liveUrl || freelanceProject?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 lg:px-6 lg:py-2.5 bg-white hover:bg-zinc-200 text-black rounded-full transition-all font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

      </div>
    </>
  );
}
`;
  content = parts[0] + newCTA;
  fs.writeFileSync('src/pages/ProjectDetail.tsx', content);
}
