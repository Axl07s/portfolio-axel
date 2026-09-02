export interface ProjectImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'SaaS & Web' | 'AI & Agents' | 'Mobile' | 'Security & Desktop' | 'Affiliate & Tools';
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  images: ProjectImage[];
  liveUrl: string;
  githubUrl?: string;
  badge?: string;
  featured: boolean;
  isDesktopOnly?: boolean;
  isMobileDemo?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; icon?: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeUrl: string;
  credentialId?: string;
  skills: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'syntrosaas',
    number: '01',
    title: 'SyntroSaaS',
    subtitle: 'Next.js 15 Multi-Tenant SaaS Boilerplate & Ecosystem',
    category: 'SaaS & Web',
    description: 'Production-ready full-stack SaaS architecture featuring Next.js 15 App Router, Supabase PostgreSQL with strict Row-Level Security, Stripe recurring subscriptions, multi-tenant team workspaces, and scoped API key governance.',
    tags: ['Next.js 15', 'React 19', 'Supabase', 'PostgreSQL', 'Stripe Billing', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Time-to-Market', value: '< 2 Weeks' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Architecture', value: 'Zero-Trust RLS' },
    ],
    features: [
      'Multi-tenant workspace organization with team invites & role-based permissions (RBAC)',
      'Automated Stripe Webhooks with tiered monthly/annual billing and portal management',
      'Instant Supabase Auth with Google OAuth, Magic Links, and session persistence',
      'Production scoped API key rotation and telemetry quota tracking',
    ],
    images: [
      { url: '/projects/syntrosaas_01.png', caption: 'Landing Page & Architecture Showcase' },
      { url: '/projects/syntrosaas_02.png', caption: 'Organization Quotas, Usage Meters & Plan Upgrades' },
      { url: '/projects/syntrosaas_03.png', caption: 'Scoped API Key Management & Zero-Trust Access Control' },
    ],
    liveUrl: 'https://syntrosaas-app.vercel.app',
    githubUrl: 'https://github.com/AxelSamMoli/syntrosaas-nextjs-boilerplate',
    badge: 'Enterprise Architecture',
    featured: true,
  },
  {
    id: 'jarvis-hud',
    number: '02',
    title: 'Jarvis AI Command Center',
    subtitle: 'Autonomous Multi-Agent Neural Mesh & Voice HUD',
    category: 'AI & Agents',
    description: 'Cyberpunk executive dashboard orchestrating 9 specialized autonomous subagents, ultra-low latency voice synthesis via ElevenLabs, real-time token spend audit, and live system telemetry.',
    tags: ['React 18', 'TypeScript', 'ElevenLabs API', 'Multi-Agent AI', 'WebSockets', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Fiverr Rating', value: '5.0 ★★★★★' },
      { label: 'Agent Network', value: '9 Subagents' },
      { label: 'Voice Latency', value: '< 180ms' },
    ],
    features: [
      'Neural Mesh architecture coordinating research, coding, and finance subagents',
      'ElevenLabs neural voice interaction with animated audio visualizer waveform',
      'Real-time token ledger tracking OpenAI / Anthropic cost breakdowns per task',
      'Verified 5.0 ★ Client Delivery on Fiverr with flawless production performance',
    ],
    images: [
      { url: '/projects/jarvis_01.png', caption: 'Chief Brain Executive HUD with Live ElevenLabs Voice Waveform' },
      { url: '/projects/jarvis_02.png', caption: '9-Agent Neural Network Topology & Parallel Task Dispatch' },
      { url: '/projects/jarvis_03.png', caption: 'Multi-Model Token Spend Ledger & Real-Time Financial Telemetry' },
    ],
    liveUrl: 'https://jarvis-command-center-ui.vercel.app',
    githubUrl: 'https://github.com/lopersonal355-lab/jarvis-command-center-axel',
    badge: 'Verified 5★ Client Project',
    featured: true,
  },
  {
    id: 'gearstack',
    number: '03',
    title: 'GearStack AI',
    subtitle: 'Automated Twitch & Creator Setup Scanner & Affiliate Engine',
    category: 'Affiliate & Tools',
    description: 'Autonomous streamer setup scanner. Connects to Twitch API, parses channel panels, description sections, and on-screen hardware, identifies missing setup peripherals (lighting, audio interfaces, stream decks), and dispatches personalized Amazon affiliate upgrade bundles with 1-click buy buttons.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Twitch API', 'Amazon Associates', 'Automation', 'Vite'],
    metrics: [
      { label: 'Conversion Flow', value: '1-Click Direct' },
      { label: 'Scanner Speed', value: '< 1.2s Audit' },
      { label: 'Affiliate ID', value: 'axeltech0b-20' },
    ],
    features: [
      'Automated Twitch stream panel parsing and peripheral gap identification',
      'Instant bundle compilation generating direct Amazon Associates links (axeltech0b-20)',
      'Side-by-side technical hardware comparator with ergonomic radar scoring',
      'Setup Architect preset calculator for Full-Stack, Executive, and Streamer battlestations',
    ],
    images: [
      { url: '/projects/gearstack_twitch_01.jpg', caption: 'GearStack Automated Twitch Setup Scanner & CLI Audit Session' },
      { url: '/projects/gearstack_02.png', caption: 'Side-by-Side 3-Product Spec Benchmark Matrix with Radar Scoring' },
      { url: '/projects/gearstack_03.png', caption: 'Interactive Setup Architect with Budget Calculation & 1-Click Buy' },
    ],
    liveUrl: 'https://gearstack-pi.vercel.app',
    githubUrl: 'https://github.com/AxelSamMoli/gearstack-workspace-engine',
    badge: 'Twitch Scanner & Affiliate',
    featured: true,
  },
  {
    id: 'suitesecurity',
    number: '04',
    title: 'SuiteSecurity EDR',
    subtitle: 'Windows Native Endpoint Detection & Threat Intelligence',
    category: 'Security & Desktop',
    description: 'Desktop endpoint detection and response (EDR) suite built for Windows. Integrates low-level process memory scanning, YARA rule signature evaluation, VirusTotal API intelligence, and native Windows GDI HUD.',
    tags: ['Python', 'Win32 API', 'YARA Signatures', 'VirusTotal API', 'Endpoint Security', 'Windows GDI'],
    metrics: [
      { label: 'Process Audit', value: 'Real-Time' },
      { label: 'Signature Engine', value: 'YARA + Heuristics' },
      { label: 'System Footprint', value: '< 45MB RAM' },
    ],
    features: [
      'Real-time process tree monitoring with suspicious DLL injection detection',
      'Automated file hash scanning against VirusTotal Threat Intelligence database',
      'Zero-latency Windows GDI dark interface with visual threat severity matrix',
      'Automated quarantine containment protocol with forensic activity logging',
    ],
    images: [
      { url: '/projects/suitesecurity_01.png', caption: 'Real-Time EDR Telemetry Dashboard & Active Quarantine Manager' },
      { url: '/projects/suitesecurity_02.png', caption: 'Multi-Engine Threat Analysis with YARA Rules & VirusTotal API' },
      { url: '/projects/suitesecurity_03.png', caption: 'Kernel Event Tracing (ETW) & Network Socket Monitoring' },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/AxelSamMoli/suitesecurity-windows-edr',
    badge: 'Native Cyber Defense',
    featured: true,
    isDesktopOnly: true,
  },
  {
    id: 'pokedex-flutter',
    number: '05',
    title: 'Pokédex Pro Suite',
    subtitle: 'Cross-Platform Mobile Application with Clean Architecture',
    category: 'Mobile',
    description: 'High-performance Flutter mobile application implementing Clean Architecture principles, fluid 60 FPS animations, Hive local offline caching, and responsive layouts across iOS and Android.',
    tags: ['Flutter', 'Dart', 'Clean Architecture', 'REST API', 'Hive DB', 'BLoC / Riverpod'],
    metrics: [
      { label: 'Framerate', value: '60 FPS Lock' },
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Offline Support', value: '100% Cached' },
    ],
    features: [
      'Strict separation of Domain, Data, and Presentation layers following Clean Architecture',
      'Optimistic UI state updates with Hive NoSQL local offline database caching',
      'Custom physics-based card gestures, element typing color dynamics, and audio effects',
      'Complete test coverage across repositories, use cases, and widget unit tests',
    ],
    images: [
      { url: '/projects/pokedex_01.png', caption: 'Dynamic Elemental Grid with 60 FPS Micro-Interactions & Fast Search' },
      { url: '/projects/pokedex_02.png', caption: 'Detailed Stats Breakdown, Move Hierarchy & Audio Playback' },
      { url: '/projects/pokedex_03.png', caption: 'Evolution Chain Visualizer with Local Offline Hive Caching' },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/AxelSamMoli/pokedex-flutter-clean-architecture',
    badge: 'Clean Architecture',
    featured: true,
    isMobileDemo: true,
  },
  {
    id: 'ai-rag-knowledge',
    number: '06',
    title: 'Enterprise AI RAG Engine',
    subtitle: 'High-Accuracy Knowledge Base with Vector Embeddings & Citations',
    category: 'AI & Agents',
    description: 'Custom Retrieval-Augmented Generation (RAG) knowledge engine that ingests company documentation, generates hybrid vector embeddings via PostgreSQL pgvector, and returns factual grounded answers with source citations.',
    tags: ['Python', 'FastAPI', 'pgvector', 'OpenAI', 'LangChain', 'React', 'TypeScript'],
    metrics: [
      { label: 'Accuracy', value: '99.2% Grounded' },
      { label: 'Chunk Latency', value: '< 240ms' },
      { label: 'Guardrails', value: 'Anti-Hallucination' },
    ],
    features: [
      'Multi-format document ingestion pipeline for PDF, DOCX, Notion, and Markdown',
      'Hybrid semantic vector search + keyword reranking with PGVector and BM25',
      'Strict source-citation guardrails preventing model hallucinations and data leaks',
      'Full administrative panel with document chunk editor and query cost analytics',
    ],
    images: [
      { url: '/projects/rag_01.png', caption: 'Conversational Streaming Interface with Inline Citation Tags' },
      { url: '/projects/rag_02.png', caption: 'Multi-Format Document Ingestion & Chunking Pipeline' },
      { url: '/projects/rag_03.png', caption: 'PGVector Database Chunk Browser with Similarity Distance Metrics' },
    ],
    liveUrl: 'https://enterprise-rag-app-plum.vercel.app',
    githubUrl: 'https://github.com/AxelSamMoli/enterprise-ai-rag-fastapi',
    badge: 'AI Knowledge Engine',
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & UI Craft',
    icon: 'Layout',
    skills: [
      { name: 'React 18 / 19', level: 'Expert' },
      { name: 'Next.js 15 App Router', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Framer Motion', level: 'Advanced' },
      { name: 'Zustand / TanStack Query', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend, APIs & Cloud',
    icon: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 'Expert' },
      { name: 'Supabase PostgreSQL', level: 'Expert' },
      { name: 'Python (FastAPI / Automation)', level: 'Advanced' },
      { name: 'Stripe Billing & Webhooks', level: 'Expert' },
      { name: 'PostgreSQL / PGVector', level: 'Advanced' },
      { name: 'REST & GraphQL APIs', level: 'Expert' },
    ],
  },
  {
    title: 'Mobile & Desktop',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter & Dart', level: 'Advanced' },
      { name: 'Clean Architecture (PFA)', level: 'Expert' },
      { name: 'Cross-Platform iOS/Android', level: 'Advanced' },
      { name: 'Python Native GUI / Win32', level: 'Advanced' },
      { name: 'SQLite / Hive DB', level: 'Advanced' },
    ],
  },
  {
    title: 'AI, Agents & Security',
    icon: 'Shield',
    skills: [
      { name: 'Multi-Agent Mesh (LangChain)', level: 'Advanced' },
      { name: 'ElevenLabs Voice AI', level: 'Advanced' },
      { name: 'RAG & Vector Embeddings', level: 'Advanced' },
      { name: 'EDR & Endpoint Security', level: 'Intermediate' },
      { name: 'Git, CI/CD & Vercel', level: 'Expert' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'SCRUMstudy / VMEdu',
    date: '2024 - Present',
    badgeUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80',
    skills: ['Agile Project Management', 'Sprint Planning', 'Scrum Artifacts', 'Rapid MVP Iteration'],
  },
  {
    name: 'EF SET English Certificate (C2 Proficient)',
    issuer: 'EF Standard English Test',
    date: 'Certified Proficient',
    badgeUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80',
    skills: ['Fluent International Communication', 'Technical Documentation', 'US/EU Client Stakeholder Calls'],
  },
  {
    name: 'HubSpot Inbound Sales & Automation',
    issuer: 'HubSpot Academy',
    date: 'Certified',
    badgeUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80',
    skills: ['B2B Sales Funnels', 'Customer Acquisition', 'Lead Pipeline Automation'],
  },
];
