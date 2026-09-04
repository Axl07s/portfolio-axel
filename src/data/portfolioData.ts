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

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'syntrosaas',
    title: 'SyntroSaaS',
    category: 'Full-Stack SaaS',
    description: 'Plataforma de gestión empresarial escalable con arquitectura multi-tenant.',
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
    description: 'Centro de comando inteligente con integración de voz ElevenLabs y automatización de flujos.',
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
    description: 'Digitalización de experiencia Fine Dining para optimización de reservas y branding de lujo.',
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
    description: 'Infraestructura de captación B2B diseñada para escalar agencias de crecimiento acelerado.',
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
    id: 'gearstack',
    title: 'GearStack PRO',
    category: 'Affiliate & Tools',
    description: 'Motor de escaneo de hardware para Twitch con sistema de monetización vía Amazon Associates.',
    role: 'Full-Stack Developer',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Twitch API', 'Amazon Associates'],
    metrics: [
      { label: 'Conversion', value: '1-Click Direct' },
      { label: 'Scanner', value: '< 1.2s Audit' },
      { label: 'Affiliate', value: 'axeltech0b-20' },
    ],
    features: [
      'Automated Twitch panel parsing and peripheral gap identification',
      'Direct Amazon Associates bundle links with affiliate tracking',
      'Side-by-side hardware comparator with ergonomic radar scoring',
      'Setup Architect preset calculator for different workstation profiles',
    ],
    images: [
      { url: '/projects/gearstack_twitch_01.jpg', caption: 'Twitch Scanner & CLI Audit' },
      { url: '/projects/gearstack_02.png', caption: 'Hardware Benchmark Matrix' },
      { url: '/projects/gearstack_03.png', caption: 'Setup Architect & 1-Click Buy' },
    ],
    liveUrl: 'https://gearstack-pi.vercel.app',
    githubUrl: 'https://github.com/AxelSamMoli/gearstack-workspace-engine',
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
