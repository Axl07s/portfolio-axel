import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(process.cwd(), 'dist');
const serverEntryPath = path.join(distPath, 'server', 'entry-server.js');

const DOMAIN = 'https://portfolio-axel-nine.vercel.app';

const routes = [
  {
    path: '/',
    title: 'Axel.dev: Sistemas Web y Automatización para Negocios',
    description: 'Estudio de consultoría y desarrollo web. Plataformas de cobro directo, sistemas de reservas, asistentes inteligentes 24/7 y paneles de control a medida para hacer crecer tu negocio.',
    image: '/projects/syntrosaas_01.png',
  },
  {
    path: '/labs',
    title: 'Laboratorio & Sistemas Deep Tech: Axel.dev',
    description: 'Investigación y desarrollo de software de misión crítica: detección de amenazas a nivel de kernel en C/C++ (EDR/ETW) y arquitecturas móviles offline-first con persistencia local ultrarrápida.',
    image: '/projects/suitesecurity_01.png',
  },
  {
    path: '/projects',
    title: 'Soluciones y Demos Interactivas B2B: Axel.dev',
    description: 'Catálogo de plataformas SaaS multi-tenant, sistemas de IA y aplicaciones B2B en producción listas para desplegar y adaptar en menos de 2 semanas.',
    image: '/projects/syntrosaas_01.png',
  },
  {
    path: '/project/syntrosaas',
    title: 'SyntroSaaS — Plataforma de Cobro Recurrente Multi-Tenant',
    description: 'Sistema base para cobrar membresías y suscripciones automáticas con tarjeta vía Stripe, con espacios privados y aislamiento de datos por cliente.',
    image: '/projects/syntrosaas_01.png',
  },
  {
    path: '/project/jarvis-hud',
    title: 'Jarvis AI Command Center — Panel de Agentes Autónomos 24/7',
    description: 'Panel de asistentes inteligentes 24/7 diseñado para atender clientes, procesar datos y ejecutar tareas operativas en paralelo con voz neural.',
    image: '/projects/jarvis_01.png',
  },
  {
    path: '/project/kure-gastronomy',
    title: 'KURE Fine Dining — Portal Gastronómico y Reservas Directas',
    description: 'Plataforma de reservas directas diseñada para restaurantes y negocios de hospitalidad que buscan proyectar estatus y eliminar comisiones del 15% a intermediarios.',
    image: '/projects/kure_01.png',
  },
  {
    path: '/project/nexuscorp-b2b',
    title: 'NexusCorp B2B Agency — Embudo de Captación y Calificación',
    description: 'Embudo de captación comercial para empresas y agencias B2B con calculadora interactiva de ROI que precalifica prospectos antes de agendar llamadas.',
    image: '/projects/nexus_01.png',
  },
  {
    path: '/project/ai-rag-knowledge',
    title: 'Enterprise RAG Engine — Buscador Semántico con Citación',
    description: 'Buscador inteligente con IA y citación exacta de fuentes en bases documentales privadas con guardrails anti-alucinación.',
    image: '/projects/rag_01.png',
  },
  {
    path: '/project/suiteseguridad',
    title: 'SuiteSeguridad EDR — Detección de Amenazas Kernel ETW & YARA',
    description: 'Sistema EDR híbrido para Windows enfocado en la prevención proactiva mediante la integración profunda con ETW (Event Tracing for Windows) y telemetría de red.',
    image: '/projects/suitesecurity_01.png',
  },
  {
    path: '/project/puce-connect-hub',
    title: 'PUCE Connect Hub — Arquitectura Móvil Offline-First Flutter & Isar',
    description: 'Portal móvil offline-first con persistencia NoSQL local en Flash memory y sincronización transaccional con Spring Boot.',
    image: '/projects/puce_home.png',
  },
];

async function prerender() {
  console.log('[SSG] Starting full DOM pre-rendering with Vite SSR...');

  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Server entry not found at ${serverEntryPath}. Run vite build --ssr first.`);
  }

  const { render } = await import(pathToFileURL(serverEntryPath).href);
  const templatePath = path.join(distPath, 'index.html');
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  // Regex to strip default SEO tags from template head so route-specific tags replace them cleanly
  const seoTagsPattern = /<!-- Primary SEO -->[\s\S]*?<!-- Browser Theme -->/;

  for (const route of routes) {
    const rendered = render(route.path, 'es');
    const canonicalUrl = `${DOMAIN}${route.path === '/' ? '/' : route.path}`;

    const routeSeoMeta = `<!-- Primary SEO -->
    <title>${route.title}</title>
    <meta name="title" content="${route.title}" />
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="Axel.dev, Sistemas Web, Automatización, SaaS, Agentes IA, React, Next.js, Vercel, Ecuador" />
    <meta name="author" content="Axel.dev" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph / Facebook / LinkedIn / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="${DOMAIN}${route.image}" />
    <meta property="og:locale" content="es_EC" />

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${DOMAIN}${route.image}" />

    <!-- Browser Theme -->`;

    let html = templateHtml;
    
    // Replace SEO tags in head
    if (seoTagsPattern.test(html)) {
      html = html.replace(seoTagsPattern, routeSeoMeta);
    } else {
      html = html.replace('</head>', `${routeSeoMeta}\n</head>`);
    }

    // Inject rendered React DOM into root container
    html = html.replace('<div id="root"></div>', `<div id="root">${rendered.html}</div>`);

    if (route.path === '/') {
      fs.writeFileSync(path.join(distPath, 'index.html'), html);
      console.log(`[SSG] Generated: / (dist/index.html) [${(html.length / 1024).toFixed(1)} KB]`);
    } else {
      const cleanPath = route.path.replace(/^\//, '');
      const routeDir = path.join(distPath, cleanPath);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      
      // Also write cleanUrl fallback e.g. dist/labs.html or dist/project/syntrosaas.html
      const fallbackFile = path.join(distPath, `${cleanPath}.html`);
      const fallbackDir = path.dirname(fallbackFile);
      if (!fs.existsSync(fallbackDir)) {
        fs.mkdirSync(fallbackDir, { recursive: true });
      }
      fs.writeFileSync(fallbackFile, html);
      console.log(`[SSG] Generated: ${route.path} (dist/${cleanPath}/index.html & .html) [${(html.length / 1024).toFixed(1)} KB]`);
    }
  }

  // Clean up server directory from dist
  fs.rmSync(path.join(distPath, 'server'), { recursive: true, force: true });
  console.log('[SSG] Pre-rendering complete. Cleaned up dist/server.');
}

prerender().catch((err) => {
  console.error('[SSG] Error during pre-rendering:', err);
  process.exit(1);
});
