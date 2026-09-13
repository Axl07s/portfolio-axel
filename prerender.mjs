import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(process.cwd(), 'dist');

const projects = [
  { id: 'suiteseguridad', title: 'SuiteSeguridad EDR', seoDescription: 'A hybrid EDR system for Windows that blocks ransomware and monitors malicious activity in real time using YARA and ETW.', seoImage: '/projects/suitesecurity_01.png' },
  { id: 'puce-connect-hub', title: 'PUCE Connect Hub', seoDescription: 'Offline-first mobile portal built with Flutter and Spring Boot.', seoImage: '/projects/puce_mockup.png' },
  { id: 'syntrosaas', title: 'SyntroSaaS', seoDescription: 'Scalable enterprise management platform with multi-tenant architecture.', seoImage: '/projects/syntrosaas_01.png' },
  { id: 'jarvis-hud', title: 'Jarvis AI Command Center', seoDescription: 'Intelligent command center with ElevenLabs voice integration.', seoImage: '/projects/jarvis_01.png' },
  { id: 'kure-gastronomy', title: 'KURE Fine Dining', seoDescription: 'Fine Dining experience digitization for booking optimization.', seoImage: '/projects/kure_01.png' },
  { id: 'nexuscorp-b2b', title: 'NexusCorp B2B Agency', seoDescription: 'B2B acquisition infrastructure designed to scale high-growth agencies.', seoImage: '/projects/nexus_01.png' },
  { id: 'ai-rag-knowledge', title: 'Enterprise RAG Engine', seoDescription: 'Vector-based enterprise information retrieval engine for massive data analysis.', seoImage: '/projects/rag_01.png' }
];

const DOMAIN = 'https://portfolio-axel-nine.vercel.app';

try {
  console.log('Starting fast meta-tag injection SSG...');
  const templatePath = path.join(distPath, 'index.html');
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  // PRERENDER PROJECT DETAILS
  for (const project of projects) {
    const routeDir = path.join(distPath, 'project', project.id);
    if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });

    const metaTags = `
      <title>${project.title} - Axel Molineros</title>
      <meta name="description" content="${project.seoDescription}" />
      <meta property="og:title" content="${project.title} - Axel Molineros" />
      <meta property="og:description" content="${project.seoDescription}" />
      <meta property="og:image" content="${DOMAIN}${project.seoImage}" />
      <meta property="og:url" content="${DOMAIN}/project/${project.id}" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="${DOMAIN}/project/${project.id}" />
    `;

    const injectedHtml = templateHtml.replace('</head>', `${metaTags}\n</head>`);
    fs.writeFileSync(path.join(routeDir, 'index.html'), injectedHtml);
    
    // Also keep the old .html just in case
    const oldRouteDir = path.join(distPath, 'project');
    fs.writeFileSync(path.join(oldRouteDir, `${project.id}.html`), injectedHtml);
  }

  // PRERENDER MARKETING CLIPS
  for (const project of projects) {
    const marketingDir = path.join(distPath, 'marketing', project.id);
    if (!fs.existsSync(marketingDir)) fs.mkdirSync(marketingDir, { recursive: true });
    fs.writeFileSync(path.join(marketingDir, 'index.html'), templateHtml);
    
    // Also keep the old .html just in case
    const oldMarketingDir = path.join(distPath, 'marketing');
    fs.writeFileSync(path.join(oldMarketingDir, `${project.id}.html`), templateHtml);
  }

  // PRERENDER BASE ROUTES TO PREVENT 404s ON VERCEL
  const projectsDir = path.join(distPath, 'projects');
  if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });
  fs.writeFileSync(path.join(projectsDir, 'index.html'), templateHtml);
  fs.writeFileSync(path.join(distPath, 'projects.html'), templateHtml);
  
  const labsDir = path.join(distPath, 'labs');
  if (!fs.existsSync(labsDir)) fs.mkdirSync(labsDir, { recursive: true });
  fs.writeFileSync(path.join(labsDir, 'index.html'), templateHtml);
  fs.writeFileSync(path.join(distPath, 'labs.html'), templateHtml);

  console.log('Fast SSG complete.');
} catch (error) {
  console.error('SSG Failed:', error);
  process.exit(1);
}
