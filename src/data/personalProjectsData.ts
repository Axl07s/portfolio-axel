export interface PersonalProject {
  id: string;
  title: string;
  descriptionES: string;
  descriptionEN: string;
  architectureES: string;
  architectureEN: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  layoutStyle: 'bento' | 'editorial' | 'enterprise';
  seoDescription: string;
  seoImage: string;
}

export const personalProjects: PersonalProject[] = [
  {
    id: 'suiteseguridad',
    title: 'SuiteSeguridad EDR',
    descriptionES: 'Sistema EDR híbrido para Windows enfocado en la prevención proactiva mediante la integración profunda con ETW y kernel hooks. Bloquea ransomware y monitorea actividad maliciosa en tiempo real.',
    descriptionEN: 'Hybrid EDR system for Windows focused on proactive prevention through deep integration with ETW and kernel hooks. Blocks ransomware and monitors malicious activity in real-time.',
    architectureES: 'Arquitectura C/C++ y Python dividida en un driver de baja latencia para recolección de telemetría y un motor en espacio de usuario para análisis heurístico usando YARA y Sysmon.',
    architectureEN: 'C/C++ & Python architecture divided into a low-latency driver for telemetry collection and a user-space engine for heuristic analysis using YARA and Sysmon.',
    tech: ['Python', 'C++', 'YARA', 'Sysmon', 'ETW API'],
    image: '/projects/suite_mockup.png',
    layoutStyle: 'enterprise',
    seoDescription: 'A hybrid EDR system for Windows that blocks ransomware and monitors malicious activity in real time using YARA and ETW.',
    seoImage: '/projects/suite_mockup.png'
  },
  {
    id: 'puce-connect-hub',
    title: 'PUCE Connect Hub',
    descriptionES: 'Portal móvil offline-first para sincronización robusta de notas y asistencia académica bajo conectividad intermitente.',
    descriptionEN: 'Offline-first mobile portal for robust synchronization of grades and academic attendance under intermittent connectivity.',
    architectureES: 'Arquitectura móvil con Inyección de Dependencias, BLoC pattern y base de datos embebida Isar con un worker de sincronización en background.',
    architectureEN: 'Mobile architecture using Dependency Injection, BLoC pattern, and an embedded Isar database with a background synchronization worker.',
    tech: ['Flutter', 'Dart', 'Spring Boot', 'Isar DB', 'BLoC'],
    image: '/projects/puce_mockup.png',
    layoutStyle: 'editorial',
    seoDescription: 'Offline-first mobile portal built with Flutter and Spring Boot, featuring background synchronization and secure local caching.',
    seoImage: '/projects/puce_mockup.png'
  }
];


