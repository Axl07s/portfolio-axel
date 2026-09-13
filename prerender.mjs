import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(process.cwd(), 'dist');

const projects = [
  {
    id: 'suiteseguridad',
    title: 'SuiteSeguridad EDR',
    seoDescription: 'A hybrid EDR system for Windows that blocks ransomware and monitors malicious activity in real time using YARA and ETW.',
    seoImage: '/projects/suitesecurity_01.png'
  },
  {
    id: 'puce-connect-hub',
    title: 'PUCE Connect Hub',
    seoDescription: 'Offline-first mobile portal built with Flutter and Spring Boot, featuring background synchronization and secure local caching.',
    seoImage: '/projects/puce_mockup.png'
  },
  {
    id: 'syntrosaas',
    title: 'SyntroSaaS',
    seoDescription: 'Scalable enterprise management platform with multi-tenant architecture.',
    seoImage: '/projects/syntrosaas_01.png'
  },
  {
    id: 'jarvis-hud',
    title: 'Jarvis AI Command Center',
    seoDescription: 'Intelligent command center with ElevenLabs voice integration and workflow automation.',
    seoImage: '/projects/jarvis_01.png'
  },
  {
    id: 'kure-gastronomy',
    title: 'KURE Fine Dining',
    seoDescription: 'Fine Dining experience digitization for booking optimization and luxury branding.',
    seoImage: '/projects/kure_01.png'
  },
  {
    id: 'nexuscorp-b2b',
    title: 'NexusCorp B2B Agency',
    seoDescription: 'B2B acquisition infrastructure designed to scale high-growth agencies.',
    seoImage: '/projects/nexus_01.png'
  },
  {
    id: 'ai-rag-knowledge',
    title: 'Enterprise RAG Engine',
    seoDescription: 'Vector-based enterprise information retrieval engine for massive data analysis.',
    seoImage: '/projects/rag_01.png'
  }
];

const DOMAIN = 'https://portfolio-axel-nine.vercel.app';

try {
  console.log('Starting fast meta-tag injection SSG...');
  const templatePath = path.join(distPath, 'index.html');
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  for (const project of projects) {
    const routeDir = path.join(distPath, 'project');
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    const metaTags = \
      <title>\ - Axel Molineros</title>
      <meta name="description" content="\" />
      <meta property="og:title" content="\ - Axel Molineros" />
      <meta property="og:description" content="\" />
      <meta property="og:image" content="\\" />
      <meta property="og:url" content="\/project/\" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="\/project/\" />
    \;

    const injectedHtml = templateHtml.replace('</head>', \\\n</head>\);
    const outputPath = path.join(routeDir, \\.html\);
    fs.writeFileSync(outputPath, injectedHtml);
    console.log(\Generated SEO HTML for /project/\.html\);
  }

  // PRERENDER MARKETING CLIPS SO VERCEL ROUTING BUGS DON'T 404
  const marketingDir = path.join(distPath, 'marketing');
  if (!fs.existsSync(marketingDir)) {
    fs.mkdirSync(marketingDir, { recursive: true });
  }
  
  for (const project of projects) {
    // Just copy the base index.html. React Router will take over and render the clip
    const outputPath = path.join(marketingDir, \\.html\);
    fs.writeFileSync(outputPath, templateHtml);
    console.log(\Generated SPA fallback HTML for /marketing/\.html\);
  }

  console.log('Fast SSG complete.');
} catch (error) {
  console.error('SSG Failed:', error);
  process.exit(1);
}
