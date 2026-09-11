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
  layoutStyle: 'bento' | 'editorial';
  seoDescription: string;
  seoImage: string;
}

export const personalProjects: PersonalProject[] = [
  {
    id: 'suiteseguridad',
    title: 'SuiteSeguridad EDR',
    descriptionES: 'Sistema EDR híbrido para Windows. Bloquea ransomware y monitorea actividad maliciosa en tiempo real (procesos, red, memoria).',
    descriptionEN: 'Hybrid EDR system for Windows. Blocks ransomware and monitors malicious activity in real time (processes, network, memory).',
    architectureES: 'Arquitectura C/C++ y Python con reglas YARA, Sysmon y ETW (Event Tracing for Windows) para intercepción de llamadas a bajo nivel.',
    architectureEN: 'C/C++ & Python architecture using YARA rules, Sysmon and ETW (Event Tracing for Windows) for low-level API interception.',
    tech: ['Python', 'C++', 'YARA', 'Sysmon', 'ETW API'],
    image: '/projects/suite_mockup.png',
    layoutStyle: 'bento',
    seoDescription: 'A hybrid EDR system for Windows that blocks ransomware and monitors malicious activity in real time using YARA and ETW.',
    seoImage: '/projects/suite_mockup.png'
  },
  {
    id: 'puce-integrador',
    title: 'PUCE Connect Hub',
    descriptionES: 'Portal móvil offline-first para estudiantes universitarios con sincronización en segundo plano.',
    descriptionEN: 'Offline-first mobile portal for university students with background synchronization.',
    architectureES: 'Arquitectura móvil con Inyección de Dependencias (Locator), SQLite para caché local y almacenamiento seguro encriptado.',
    architectureEN: 'Mobile architecture with Dependency Injection (Locator), SQLite for local caching, and secure encrypted storage.',
    tech: ['Flutter', 'Dart', 'Spring Boot', 'Java', 'SQLite'],
    image: '/projects/puce_mockup.png',
    layoutStyle: 'editorial',
    seoDescription: 'Offline-first mobile portal built with Flutter and Spring Boot, featuring background synchronization and secure local caching.',
    seoImage: '/projects/puce_mockup.png'
  }
];
