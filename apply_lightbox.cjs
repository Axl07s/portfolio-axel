const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');

// Inject import
if (!content.includes('Lightbox')) {
  content = content.replace("import { ScrollAffordance }", "import { Lightbox } from '../Lightbox';\nimport { ScrollAffordance }");
}

// Add state
if (!content.includes('lightboxImg')) {
  content = content.replace("const [mousePos", "const [lightboxImg, setLightboxImg] = useState<string | null>(null);\n  const [mousePos");
}

// Update the gallery images to be clickable
content = content.replace(
  /<div className="bg-\[#0f111a\] border border-slate-800 rounded-xl overflow-hidden shadow-lg relative \n?aspect-video flex items-center justify-center">/g,
  '<div className="bg-[#0f111a] border border-slate-800 rounded-xl overflow-hidden shadow-lg relative aspect-video flex items-center justify-center cursor-pointer" onClick={() => setLightboxImg(img.url)}>'
);
// Some might not have \n in aspect-video
content = content.replace(
  /<div className="bg-\[#0f111a\] border border-slate-800 rounded-xl overflow-hidden shadow-lg relative aspect-video flex items-center justify-center">/g,
  '<div className="bg-[#0f111a] border border-slate-800 rounded-xl overflow-hidden shadow-lg relative aspect-video flex items-center justify-center cursor-pointer" onClick={() => setLightboxImg(img.url)}>'
);


// Inject Lightbox at the end of the return statement
content = content.replace("</article>\n  );", "  {lightboxImg && <Lightbox imgSrc={lightboxImg} altText=\"Gallery Image\" onClose={() => setLightboxImg(null)} />}\n    </article>\n  );");

fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
