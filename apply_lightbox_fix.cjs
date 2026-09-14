const fs = require('fs');
let content = fs.readFileSync('src/components/project-layouts/EnterpriseLayout.tsx', 'utf8');

content = content.replace("    </article>", "      {lightboxImg && <Lightbox imgSrc={lightboxImg} altText=\"Gallery\" onClose={() => setLightboxImg(null)} />}\n    </article>");

fs.writeFileSync('src/components/project-layouts/EnterpriseLayout.tsx', content);
