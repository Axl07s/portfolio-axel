export const translations = {
  en: {
    // Navbar
    'nav.projects': 'Portfolio',
    'nav.techStack': 'Tech Stack',
    'nav.certifications': 'Certifications',
    
    // Hero
    'hero.status': 'ACCEPTING NEW CLIENTS (FIVERR / DIRECT)',
    'hero.title': 'Custom SaaS & AI Solutions',
    'hero.subtitle': 'I help businesses automate workflows and scale operations by building bespoke B2B dashboards, SaaS platforms, and client portals. From concept to production, just like I did for SyntroSaaS and KURE.',
    'hero.cta.primary': 'Get a Quote',
    'hero.cta.secondary': 'View Portfolio',
    
    // Tech Stack
    'tech.title': 'Technical Arsenal',
    'tech.subtitle': 'Production-tested technologies I use to build scalable systems.',
    
    // Projects
    'projects.title': 'Featured Client Work & SaaS',
    'projects.subtitle': 'Recent architectures deployed to production.',
    'projects.viewLive': 'Live Deploy',
    'projects.viewGithub': 'Source Code',
    'projects.metrics': 'Business Impact',
    'projects.features': 'Core Architecture',
    
    // Footer
    'footer.description': 'Full-Stack Engineer specialized in scalable B2B applications and AI integration.',
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
    'hero.status': 'ACEPTANDO NUEVOS CLIENTES (FIVERR / DIRECTO)',
    'hero.title': 'Desarrollo SaaS & Soluciones de IA',
    'hero.subtitle': 'Ayudo a empresas a escalar operaciones construyendo cuadros de mando (dashboards) B2B, portales de clientes y plataformas SaaS a medida. Del concepto a producción, tal como lo hice con SyntroSaaS y KURE.',
    'hero.cta.primary': 'Cotizar Proyecto',
    'hero.cta.secondary': 'Ver Portafolio',
    
    // Tech Stack
    'tech.title': 'Arsenal Técnico',
    'tech.subtitle': 'Tecnologías probadas en producción para construir sistemas escalables.',
    
    // Projects
    'projects.title': 'Proyectos y SaaS Destacados',
    'projects.subtitle': 'Arquitecturas recientes desplegadas en producción.',
    'projects.viewLive': 'Ver en vivo',
    'projects.viewGithub': 'Código Fuente',
    'projects.metrics': 'Impacto de Negocio',
    'projects.features': 'Arquitectura Core',
    
    // Footer
    'footer.description': 'Ingeniero Full-Stack especializado en aplicaciones B2B escalables e integración de IA.',
    'footer.links': 'Enlaces',
    'footer.legal': 'Todos los derechos reservados.',
    
    // Misc
    'common.close': 'Cerrar',
  }
};

export type TranslationKey = keyof typeof translations.en;
