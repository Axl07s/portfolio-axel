export interface ProjectImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  architecture?: string;
  role: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  images: ProjectImage[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeUrl: string;
  skills: string[];
}

const projectsES: Project[] = [
  {
    id: 'syntrosaas',
    title: 'SyntroSaaS',
    category: 'Full-Stack SaaS',
    description: 'Plataforma para monetizar productos digitales con cobros recurrentes y suscripciones automáticas vía Stripe. Elimina la conciliación manual y suspende accesos por impago en tiempo real.',
    architecture: 'Arquitectura Next.js 15 App Router con Server Actions, aislamiento multi-tenant en Supabase mediante Row-Level Security (RLS) y conciliación asíncrona de webhooks con Stripe.',
    role: 'Full-Stack Architect',
    stack: ['Next.js 15', 'React 19', 'Supabase', 'Stripe', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Cobros', value: '100% Automáticos' },
      { label: 'Time-to-Market', value: '< 2 Semanas' },
      { label: 'Seguridad', value: '100% Datos Aislados' },
    ],
    features: [
      'Organización multi-tenant con aislamiento de datos por workspace, invitaciones de equipo y roles RBAC',
      'Facturación por niveles con Stripe Checkout y reconciliación asíncrona mediante webhooks',
      'Autenticación con Supabase (Google OAuth y Magic Links) protegida con Row-Level Security (RLS)',
      'Rotación criptográfica de API keys con tracking y cuotas de consumo de telemetría',
    ],
    images: [
      { url: '/projects/syntrosaas_01.png', caption: 'Landing Page & Arquitectura' },
      { url: '/projects/syntrosaas_02.png', caption: 'Cuotas de Uso & Upgrade de Plan' },
      { url: '/projects/syntrosaas_03.png', caption: 'Gestión de API Keys & Control de Acceso' },
    ],
    liveUrl: 'https://syntrosaas-app.vercel.app',
    githubUrl: 'https://github.com/Axl07s/syntrosaas-app',
    featured: true,
  },
  {
    id: 'jarvis-hud',
    title: 'Jarvis AI Command Center',
    category: 'AI Dashboard',
    description: 'Centro de comando operacional con inteligencia artificial para empresas. Automatiza el triaje, la atención al cliente y flujos de investigación 24/7 orquestando 9 agentes en paralelo con voz neural.',
    architecture: 'Topología de red con 9 subagentes de IA en paralelo, streaming de voz neural ElevenLabs (<180ms) con visualizador Web Audio API y auditoría en tiempo real de consumo de tokens.',
    role: 'Lead Frontend Engineer',
    stack: ['Next.js 15', 'React 19', 'Framer Motion', 'ElevenLabs', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Disponibilidad', value: '24/7 Continua' },
      { label: 'Calificación', value: '5.0 / 5.0 Verificada' },
      { label: 'Respuesta', value: 'Voz en Tiempo Real' },
    ],
    features: [
      'Malla neuronal para coordinar 9 subagentes de investigación, código y finanzas en paralelo',
      'Streaming de voz neuronal ElevenLabs a <180ms con visualizador reactivo de forma de onda',
      'Libro mayor de tokens en tiempo real rastreando consumo y costes por llamada a OpenAI y Anthropic',
      'Entregado en Fiverr con calificación verificada de 5.0 estrellas del cliente',
    ],
    images: [
      { url: '/projects/jarvis_01.png', caption: 'Chief Brain HUD con Forma de Onda' },
      { url: '/projects/jarvis_02.png', caption: 'Topología de Red de Agentes' },
      { url: '/projects/jarvis_03.png', caption: 'Registro de Gasto de Tokens' },
    ],
    liveUrl: 'https://jarvis-command-center-ui.vercel.app',
    githubUrl: 'https://github.com/Axl07s/jarvis-command-center-axel',
    featured: true,
  },
  {
    id: 'kure-gastronomy',
    title: 'KURE Fine Dining',
    category: 'Hospitality Platform',
    description: 'Portal gastronómico de alta gama con motor de reservas directas en tiempo real. Elimina las comisiones del 15% al 20% de intermediarios de delivery y optimiza la rotación de mesas VIP.',
    architecture: 'Arquitectura SPA desacoplada en React 18 y Vite, validación de formularios multi-paso en memoria, menú categorizado dinámico y renderizado a 60 FPS sin dependencias de CMS pesados.',
    role: 'Frontend Developer & Designer',
    stack: ['React 18', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    metrics: [
      { label: 'Comisiones', value: '0% a Terceros' },
      { label: 'Reservas', value: 'Multi-Paso Directa' },
      { label: 'Mobile', value: '100% Fluido' },
    ],
    features: [
      'Navegador de menú categorizado con tarjetas de platos, precios y descripciones',
      'Formulario de reserva con fecha, hora, tamaño del grupo y zona VIP',
      'Sección de validación social con reseñas de prensa y calificaciones',
      'Acordeón de FAQ y pie de página de contacto con mapa y horarios',
    ],
    images: [
      { url: '/projects/kure_01.png', caption: 'Hero & Navegación' },
      { url: '/projects/kure_02.png', caption: 'Sección de Menú & Tarjetas de Platos' },
      { url: '/projects/kure_03.png', caption: 'Formulario de Reserva & FAQ' },
    ],
    liveUrl: 'https://restaurant-landing-pro.vercel.app',
    githubUrl: 'https://github.com/Axl07s/restaurant-landing-pro',
    featured: true,
  },
  {
    id: 'nexuscorp-b2b',
    title: 'NexusCorp B2B Agency',
    category: 'B2B Lead Generation',
    description: 'Infraestructura de prospección comercial para firmas B2B. Filtra y califica empresas interesadas con calculadora de ROI interactiva antes de agendar llamadas, descartando contactos sin presupuesto.',
    architecture: 'Simulador matemático reactivo en cliente que proyecta pipeline comercial en milisegundos, wizard modular de cualificación en 3 pasos y modales de retos técnicos desacoplados.',
    role: 'Frontend Developer & UX',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Filtro Comercial', value: 'Wizard 3 Etapas' },
      { label: 'Calculadora', value: 'ROI Real-Time' },
      { label: 'Segmento', value: 'Enterprise B2B' },
    ],
    features: [
      'Simulador de ROI reactivo que modela pipeline comercial y retornos con sliders interactivos',
      'Modales dinámicos de casos de estudio con diagnóstico de retos técnicos y métricas verificadas',
      'Wizard de cualificación técnica en 3 etapas para auditoría de madurez digital',
      'Diagrama visual de la arquitectura del embudo de captación implementado en Vite y Tailwind',
    ],
    images: [
      { url: '/projects/nexus_01.png', caption: 'Hero & Funnel de Diagnóstico' },
      { url: '/projects/nexus_02.png', caption: 'Calculadora de Pipeline ROI' },
      { url: '/projects/nexus_03.png', caption: 'Casos de Estudio & Arquitectura' },
    ],
    liveUrl: 'https://agency-landing-pro-ruddy.vercel.app',
    githubUrl: 'https://github.com/Axl07s/agency-landing-pro',
    featured: true,
  },
  {
    id: 'ai-rag-knowledge',
    title: 'Enterprise RAG Engine',
    category: 'AI Knowledge Base',
    description: 'Buscador inteligente con IA y citación exacta de fuentes en bases documentales privadas. Localiza respuestas verificadas en milisegundos con cero alucinaciones.',
    role: 'AI/ML Engineer',
    stack: ['Python', 'FastAPI', 'pgvector', 'OpenAI', 'LangChain', 'React'],
    metrics: [
      { label: 'Precisión', value: '99.2%' },
      { label: 'Latencia', value: '< 240ms' },
      { label: 'Guardrails', value: 'Anti-Alucinación' },
    ],
    features: [
      'Pipeline de ingesta asíncrona para PDF, DOCX, Notion y Markdown con segmentación contextual',
      'Búsqueda semántica híbrida combinando similitud coseno en pgvector y reranking léxico BM25',
      'Guardrails estrictos de citación a nivel de fragmento que mitigan alucinaciones en respuestas críticas',
      'Panel administrativo con explorador de vectores, editor de fragmentos y métricas de latencia de consulta',
    ],
    images: [
      { url: '/projects/rag_01.png', caption: 'Interfaz de Chat con Citas' },
      { url: '/projects/rag_02.png', caption: 'Pipeline de Ingesta de Documentos' },
      { url: '/projects/rag_03.png', caption: 'Navegador de Fragmentos Vectoriales' },
    ],
    liveUrl: 'https://enterprise-rag-app-plum.vercel.app',
    githubUrl: 'https://github.com/Axl07s/enterprise-rag-app',
    featured: true,
  },
];

const projectsEN: Project[] = [
  {
    id: 'syntrosaas',
    title: 'SyntroSaaS',
    category: 'Full-Stack SaaS',
    description: 'Digital product monetization and automated recurring subscription engine with Stripe. Eliminates manual billing reconciliations and automatically revokes access upon non-payment.',
    architecture: 'Next.js 15 App Router with Server Actions, Supabase multi-tenant data isolation via Row-Level Security (RLS), and asynchronous Stripe webhook reconciliation.',
    role: 'Full-Stack Architect',
    stack: ['Next.js 15', 'React 19', 'Supabase', 'Stripe', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Billing', value: '100% Automated' },
      { label: 'Time-to-Market', value: '< 2 Weeks' },
      { label: 'Security', value: '100% Data Isolation' },
    ],
    features: [
      'Multi-tenant workspace organization with data isolation, team invites, and RBAC roles',
      'Tiered subscription billing with Stripe Checkout and asynchronous webhook reconciliation',
      'Supabase Auth (Google OAuth & Magic Links) enforced with strict Row-Level Security (RLS)',
      'Cryptographic API key rotation with telemetry quota enforcement and usage tracking',
    ],
    images: [
      { url: '/projects/syntrosaas_01.png', caption: 'Landing Page & Architecture' },
      { url: '/projects/syntrosaas_02.png', caption: 'Usage Quotas & Plan Upgrades' },
      { url: '/projects/syntrosaas_03.png', caption: 'API Key Management & Access Control' },
    ],
    liveUrl: 'https://syntrosaas-app.vercel.app',
    githubUrl: 'https://github.com/Axl07s/syntrosaas-app',
    featured: true,
  },
  {
    id: 'jarvis-hud',
    title: 'Jarvis AI Command Center',
    category: 'AI Dashboard',
    description: 'Enterprise AI operational hub. Automates customer triage, inquiry routing, and technical research 24/7 by coordinating 9 parallel subagents with real-time neural voice.',
    architecture: 'Network topology coordinating 9 parallel AI subagents, ElevenLabs neural voice streaming (<180ms) with Web Audio API waveform visualizer, and token spend auditing.',
    role: 'Lead Frontend Engineer',
    stack: ['Next.js 15', 'React 19', 'Framer Motion', 'ElevenLabs', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Uptime', value: '24/7 Uninterrupted' },
      { label: 'Client Rating', value: '5.0 / 5.0 Verified' },
      { label: 'Response', value: 'Real-Time Voice' },
    ],
    features: [
      'Neural mesh coordinating 9 parallel subagents across research, coding, and finance',
      'ElevenLabs neural streaming voice at <180ms with reactive audio waveform rendering',
      'Real-time token ledger auditing API usage and costs per model invocation',
      'Delivered on Fiverr with a verified 5.0-star client review',
    ],
    images: [
      { url: '/projects/jarvis_01.png', caption: 'Chief Brain HUD with Voice Waveform' },
      { url: '/projects/jarvis_02.png', caption: 'Agent Network Topology' },
      { url: '/projects/jarvis_03.png', caption: 'Token Spend Ledger' },
    ],
    liveUrl: 'https://jarvis-command-center-ui.vercel.app',
    githubUrl: 'https://github.com/Axl07s/jarvis-command-center-axel',
    featured: true,
  },
  {
    id: 'kure-gastronomy',
    title: 'KURE Fine Dining',
    category: 'Hospitality Platform',
    description: 'High-end gastronomy portal with direct real-time table reservations. Eliminates 15% to 20% platform commissions from third-party delivery apps and optimizes VIP table rotation.',
    architecture: 'Decoupled React 18 & Vite SPA architecture, in-memory multi-step form validation, dynamic categorized dining menu, and 60 FPS rendering without bloated CMS overhead.',
    role: 'Frontend Developer & Designer',
    stack: ['React 18', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    metrics: [
      { label: 'Commissions', value: '0% Third-Party Fees' },
      { label: 'Bookings', value: 'Direct Multi-Step' },
      { label: 'Mobile', value: '100% Fluid' },
    ],
    features: [
      'Categorized menu browser with dish cards, prices, and descriptions',
      'Reservation form with date, time, party size, and VIP zone selection',
      'Social proof section with press reviews and star ratings',
      'FAQ accordion and contact footer with map and hours',
    ],
    images: [
      { url: '/projects/kure_01.png', caption: 'Hero & Navigation' },
      { url: '/projects/kure_02.png', caption: 'Menu Section & Dish Cards' },
      { url: '/projects/kure_03.png', caption: 'Reservation Form & FAQ' },
    ],
    liveUrl: 'https://restaurant-landing-pro.vercel.app',
    githubUrl: 'https://github.com/Axl07s/restaurant-landing-pro',
    featured: true,
  },
  {
    id: 'nexuscorp-b2b',
    title: 'NexusCorp B2B Agency',
    category: 'B2B Lead Generation',
    description: 'Commercial client acquisition infrastructure for B2B firms. Pre-qualifies enterprise prospects with an interactive ROI calculator before scheduling calls, filtering out unqualified inquiries.',
    architecture: 'Client-side reactive mathematical simulator projecting pipeline returns in milliseconds, modular 3-step diagnostic wizard, and decoupled technical challenge modals.',
    role: 'Frontend Developer & UX',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Lead Filter', value: '3-Step Wizard' },
      { label: 'Diagnostic', value: 'Real-Time ROI' },
      { label: 'Target', value: 'Enterprise B2B' },
    ],
    features: [
      'Reactive ROI simulator modeling revenue pipeline and return on ad spend at 60fps',
      'Dynamic case study modals with structured technical challenges and verified metrics',
      '3-step qualification wizard assessing digital maturity and enterprise budget tiers',
      'System architecture diagram detailing the conversion funnel implemented in Vite & Tailwind',
    ],
    images: [
      { url: '/projects/nexus_01.png', caption: 'Hero & Diagnostic Funnel' },
      { url: '/projects/nexus_02.png', caption: 'ROI Pipeline Calculator' },
      { url: '/projects/nexus_03.png', caption: 'Case Studies & Architecture' },
    ],
    liveUrl: 'https://agency-landing-pro-ruddy.vercel.app',
    githubUrl: 'https://github.com/Axl07s/agency-landing-pro',
    featured: true,
  },
  {
    id: 'ai-rag-knowledge',
    title: 'Enterprise RAG Engine',
    category: 'AI Knowledge Base',
    description: 'Enterprise AI search engine with verifiable source citations across private document bases. Finds verified answers in milliseconds with zero hallucinations.',
    role: 'AI/ML Engineer',
    stack: ['Python', 'FastAPI', 'pgvector', 'OpenAI', 'LangChain', 'React'],
    metrics: [
      { label: 'Accuracy', value: '99.2%' },
      { label: 'Latency', value: '< 240ms' },
      { label: 'Guardrails', value: 'Anti-Hallucination' },
    ],
    features: [
      'Async multi-format ingestion pipeline for PDF, DOCX, Notion, and Markdown with semantic chunking',
      'Hybrid semantic search combining pgvector cosine similarity with BM25 lexical reranking',
      'Strict chunk-level citation guardrails mitigating hallucinations across critical queries',
      'Admin dashboard featuring vector chunk browser, snippet editor, and query latency telemetry',
    ],
    images: [
      { url: '/projects/rag_01.png', caption: 'Chat Interface with Citations' },
      { url: '/projects/rag_02.png', caption: 'Document Ingestion Pipeline' },
      { url: '/projects/rag_03.png', caption: 'Vector Chunk Browser' },
    ],
    liveUrl: 'https://enterprise-rag-app-plum.vercel.app',
    githubUrl: 'https://github.com/Axl07s/enterprise-rag-app',
    featured: true,
  },
];

export const getPortfolioProjects = (lang: 'en' | 'es'): Project[] => lang === 'es' ? projectsES : projectsEN;

// Default export for backward compatibility where needed, but we will migrate to getPortfolioProjects
export const PORTFOLIO_PROJECTS = projectsES;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & UI',
    icon: 'Layout',
    skills: [
      { name: 'React 18 / 19', level: 'Expert' },
      { name: 'Next.js 15 App Router', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Framer Motion', level: 'Advanced' },
      { name: 'Flutter & Dart', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & Cloud',
    icon: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 'Expert' },
      { name: 'Supabase PostgreSQL', level: 'Expert' },
      { name: 'Python / FastAPI', level: 'Advanced' },
      { name: 'Stripe Billing', level: 'Expert' },
      { name: 'PostgreSQL / pgvector', level: 'Advanced' },
      { name: 'REST & GraphQL APIs', level: 'Expert' },
    ],
  },
  {
    title: 'Mobile & Desktop',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter & Dart', level: 'Advanced' },
      { name: 'Clean Architecture', level: 'Expert' },
      { name: 'Cross-Platform iOS/Android', level: 'Advanced' },
      { name: 'SQLite / Hive DB', level: 'Advanced' },
    ],
  },
  {
    title: 'AI & DevOps',
    icon: 'Shield',
    skills: [
      { name: 'Multi-Agent Systems', level: 'Advanced' },
      { name: 'ElevenLabs Voice AI', level: 'Advanced' },
      { name: 'RAG & Vector Embeddings', level: 'Advanced' },
      { name: 'Git, CI/CD & Vercel', level: 'Expert' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'SCRUMstudy / VMEdu',
    date: '2024',
    badgeUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80',
    skills: ['Agile', 'Sprint Planning', 'Scrum Artifacts'],
  },
  {
    name: 'EF SET English C2 Proficient',
    issuer: 'EF Standard English Test',
    date: 'Certified',
    badgeUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80',
    skills: ['Technical Communication', 'Documentation', 'Client Calls'],
  },
  {
    name: 'HubSpot Inbound Sales',
    issuer: 'HubSpot Academy',
    date: 'Certified',
    badgeUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80',
    skills: ['B2B Sales Funnels', 'Lead Automation'],
  },
];



