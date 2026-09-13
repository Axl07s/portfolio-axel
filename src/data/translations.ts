export const translations = {
  en: {
    // Navbar
    'nav.projects': 'Portfolio',
    'nav.techStack': 'Tech Stack',
    'nav.certifications': 'Certifications',
    
    // Hero
    'hero.status': 'AVAILABLE FOR B2B CONTRACTS (FIVERR / DIRECT)',
    'hero.title': 'Production SaaS & AI Systems',
    'hero.subtitle': '19-year-old SaaS architect and technical consultant based in Ecuador. I design and ship production multi-tenant platforms in Next.js 15 with RLS isolation, RAG engines with pgvector, and AI command centers with production-grade engineering rigor.',
    'hero.cta.primary': 'Get a Quote',
    'hero.cta.secondary': 'View Portfolio',
    
    // Tech Stack
    'tech.title': 'Technical Arsenal',
    'tech.subtitle': 'Production-tested technologies I use to build scalable systems.',
    
    // Projects
    'projects.title': 'Featured Client Work & SaaS',
    'projects.subtitle': 'Multi-tenant SaaS platforms, AI agent orchestration, and B2B acquisition tools deployed to production.',
    'projects.viewLive': 'Live Deploy',
    'projects.viewGithub': 'Source Code',
    'projects.metrics': 'Business Impact',
    'projects.features': 'Core Architecture',
    
    // Footer
    'footer.description': 'SaaS Architect and technical consultant specializing in multi-tenant platforms, applied AI systems, and high-performance architectures.',
    'footer.links': 'Links',
    'footer.legal': 'All rights reserved.',
    
    // Misc
    'common.close': 'Close',
  },
  es: {
    // Navbar
    'nav.projects': 'Portafolio',
    'nav.techStack': 'Tecnologías',
    'nav.certifications': 'Certificaciones',
    
    // Hero
    'hero.status': 'DISPONIBLE PARA CONTRATOS B2B (FIVERR / DIRECTO)',
    'hero.title': 'Arquitectura SaaS & Sistemas de IA',
    'hero.subtitle': 'Arquitecto de software y consultor SaaS de 19 años en Ecuador. Diseño y despliego plataformas multi-tenant en Next.js 15 con aislamiento RLS, motores RAG con pgvector y centros de comando de IA, llevando arquitecturas de cero a producción con rigor de ingeniería.',
    'hero.cta.primary': 'Cotizar Proyecto',
    'hero.cta.secondary': 'Ver Portafolio',
    
    // Tech Stack
    'tech.title': 'Arsenal Técnico',
    'tech.subtitle': 'Tecnologías probadas en producción para construir sistemas escalables.',
    
    // Projects
    'projects.title': 'Proyectos y SaaS Destacados',
    'projects.subtitle': 'Plataformas SaaS multi-tenant, orquestación de agentes de IA y herramientas de adquisición B2B desplegadas en producción.',
    'projects.viewLive': 'Ver en vivo',
    'projects.viewGithub': 'Código Fuente',
    'projects.metrics': 'Impacto de Negocio',
    'projects.features': 'Arquitectura Core',
    
    // Footer
    'footer.description': 'Arquitecto SaaS y consultor técnico especializado en plataformas multi-tenant, sistemas de IA y arquitecturas de alto rendimiento.',
    'footer.links': 'Enlaces',
    'footer.legal': 'Todos los derechos reservados.',
    
    // Misc
    'common.close': 'Cerrar',
  }
};

export type TranslationKey = keyof typeof translations.en;
