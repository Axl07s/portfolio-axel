export interface ProjectImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
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
    description: 'Plataforma de gestión empresarial escalable con arquitectura multi-tenant.',
    role: 'Full-Stack Architect',
    stack: ['Next.js 15', 'React 19', 'Supabase', 'Stripe', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Time-to-Market', value: '< 2 Semanas' },
      { label: 'Lighthouse', value: '99/100' },
      { label: 'Auth', value: 'Zero-Trust RLS' },
    ],
    features: [
      'Organización de multi-tenant con invitaciones de equipo y RBAC',
      'Webhooks automatizados de Stripe con facturación mensual/anual por niveles',
      'Supabase Auth con Google OAuth, Magic Links y persistencia de sesión',
      'Rotación de API keys con tracking de telemetría',
    ],
    images: [
      { url: '/projects/syntrosaas_01.png', caption: 'Landing Page & Arquitectura' },
      { url: '/projects/syntrosaas_02.png', caption: 'Cuotas de Uso & Upgrade de Plan' },
      { url: '/projects/syntrosaas_03.png', caption: 'Gestión de API Keys & Control de Acceso' },
    ],
    liveUrl: 'https://syntrosaas-app.vercel.app',
    githubUrl: 'https://github.com/AxelSamMoli/syntrosaas-nextjs-boilerplate',
    featured: true,
  },
  {
    id: 'jarvis-hud',
    title: 'Jarvis AI Command Center',
    category: 'AI Dashboard',
    description: 'Centro de comando inteligente con integración de voz ElevenLabs y automatización de flujos.',
    role: 'Lead Frontend Engineer',
    stack: ['Next.js 15', 'React 19', 'Framer Motion', 'ElevenLabs', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Client Rating', value: '5.0 / 5.0' },
      { label: 'Agent Network', value: '9 Subagents' },
      { label: 'Voice Latency', value: '< 180ms' },
    ],
    features: [
      'Malla neuronal coordinando subagentes de investigación, código y finanzas en paralelo',
      'Voz neuronal ElevenLabs con visualización animada de forma de onda de audio',
      'Libro mayor de tokens en tiempo real rastreando costos de OpenAI y Anthropic',
      'Entregado en Fiverr con calificación verificada de 5 estrellas del cliente',
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
    description: 'Digitalización de experiencia Fine Dining para optimización de reservas y branding de lujo.',
    role: 'Frontend Developer & Designer',
    stack: ['React 18', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    metrics: [
      { label: 'Secciones', value: '7 Completas' },
      { label: 'Reservas', value: 'Multi-Paso' },
      { label: 'Mobile', value: '100% Responsivo' },
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
    description: 'Infraestructura de captación B2B diseñada para escalar agencias de crecimiento acelerado.',
    role: 'Frontend Developer & UX',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Funnel', value: 'Wizard 3 Pasos' },
      { label: 'Calculadora', value: 'ROI Real-Time' },
      { label: 'Target', value: 'Enterprise B2B' },
    ],
    features: [
      'Calculadora de ROI interactiva proyectando crecimiento de pipeline anual',
      'Modales de casos de estudio con desglose de problemas y métricas verificadas',
      'Wizard de calificación de 3 pasos evaluando madurez digital',
      'Diagrama de arquitectura del sistema visual para el flujo de lead a cierre',
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
    description: 'Motor de recuperación de información empresarial basado en vectores para análisis de datos masivos.',
    role: 'AI/ML Engineer',
    stack: ['Python', 'FastAPI', 'pgvector', 'OpenAI', 'LangChain', 'React'],
    metrics: [
      { label: 'Precisión', value: '99.2%' },
      { label: 'Latencia', value: '< 240ms' },
      { label: 'Guardrails', value: 'Anti-Alucinación' },
    ],
    features: [
      'Pipeline de ingesta multi-formato para PDF, DOCX, Notion y Markdown',
      'Búsqueda vectorial semántica híbrida con PGVector y reranking BM25',
      'Guardrails estrictos de citación de fuentes que evitan alucinaciones',
      'Panel de admin con editor de fragmentos de documentos y analítica de costos',
    ],
    images: [
      { url: '/projects/rag_01.png', caption: 'Interfaz de Chat con Citas' },
      { url: '/projects/rag_02.png', caption: 'Pipeline de Ingesta de Documentos' },
      { url: '/projects/rag_03.png', caption: 'Navegador de Fragmentos Vectoriales' },
    ],
    liveUrl: 'https://enterprise-rag-app-plum.vercel.app',
    githubUrl: 'https://github.com/AxelSamMoli/enterprise-ai-rag-fastapi',
    featured: true,
  },
];

const projectsEN: Project[] = [
  {
    id: 'syntrosaas',
    title: 'SyntroSaaS',
    category: 'Full-Stack SaaS',
    description: 'Scalable enterprise management platform with multi-tenant architecture.',
    role: 'Full-Stack Architect',
    stack: ['Next.js 15', 'React 19', 'Supabase', 'Stripe', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Time-to-Market', value: '< 2 Weeks' },
      { label: 'Lighthouse', value: '99/100' },
      { label: 'Auth', value: 'Zero-Trust RLS' },
    ],
    features: [
      'Multi-tenant workspace organization with team invites and RBAC',
      'Automated Stripe Webhooks with tiered monthly/annual billing',
      'Supabase Auth with Google OAuth, Magic Links, and session persistence',
      'Scoped API key rotation and telemetry quota tracking',
    ],
    images: [
      { url: '/projects/syntrosaas_01.png', caption: 'Landing Page & Architecture' },
      { url: '/projects/syntrosaas_02.png', caption: 'Usage Quotas & Plan Upgrades' },
      { url: '/projects/syntrosaas_03.png', caption: 'API Key Management & Access Control' },
    ],
    liveUrl: 'https://syntrosaas-app.vercel.app',
    githubUrl: 'https://github.com/AxelSamMoli/syntrosaas-nextjs-boilerplate',
    featured: true,
  },
  {
    id: 'jarvis-hud',
    title: 'Jarvis AI Command Center',
    category: 'AI Dashboard',
    description: 'Intelligent command center with ElevenLabs voice integration and workflow automation.',
    role: 'Lead Frontend Engineer',
    stack: ['Next.js 15', 'React 19', 'Framer Motion', 'ElevenLabs', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Client Rating', value: '5.0 / 5.0' },
      { label: 'Agent Network', value: '9 Subagents' },
      { label: 'Voice Latency', value: '< 180ms' },
    ],
    features: [
      'Neural Mesh coordinating research, coding, and finance subagents in parallel',
      'ElevenLabs neural voice with animated audio waveform visualization',
      'Real-time token ledger tracking OpenAI and Anthropic costs per task',
      'Delivered on Fiverr with verified 5-star client rating',
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
    description: 'Fine Dining experience digitization for booking optimization and luxury branding.',
    role: 'Frontend Developer & Designer',
    stack: ['React 18', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    metrics: [
      { label: 'Sections', value: '7 Complete' },
      { label: 'Booking Flow', value: 'Multi-Step' },
      { label: 'Mobile', value: 'Fully Responsive' },
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
    description: 'B2B acquisition infrastructure designed to scale high-growth agencies.',
    role: 'Frontend Developer & UX',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Funnel', value: '3-Step Wizard' },
      { label: 'Calculator', value: 'Real-Time ROI' },
      { label: 'Target', value: 'Enterprise B2B' },
    ],
    features: [
      'Interactive ROI calculator projecting annual revenue pipeline growth',
      'Case study modals with problem breakdowns and verified metric gains',
      '3-step qualification wizard assessing digital maturity',
      'Visual system architecture diagram of the lead-to-close flow',
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
    description: 'Vector-based enterprise information retrieval engine for massive data analysis.',
    role: 'AI/ML Engineer',
    stack: ['Python', 'FastAPI', 'pgvector', 'OpenAI', 'LangChain', 'React'],
    metrics: [
      { label: 'Accuracy', value: '99.2%' },
      { label: 'Latency', value: '< 240ms' },
      { label: 'Guardrails', value: 'Anti-Hallucination' },
    ],
    features: [
      'Multi-format ingestion pipeline for PDF, DOCX, Notion, and Markdown',
      'Hybrid semantic vector search with PGVector and BM25 reranking',
      'Strict source-citation guardrails preventing hallucinations',
      'Admin panel with document chunk editor and query cost analytics',
    ],
    images: [
      { url: '/projects/rag_01.png', caption: 'Chat Interface with Citations' },
      { url: '/projects/rag_02.png', caption: 'Document Ingestion Pipeline' },
      { url: '/projects/rag_03.png', caption: 'Vector Chunk Browser' },
    ],
    liveUrl: 'https://enterprise-rag-app-plum.vercel.app',
    githubUrl: 'https://github.com/AxelSamMoli/enterprise-ai-rag-fastapi',
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
