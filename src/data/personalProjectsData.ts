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
}

export const personalProjects: PersonalProject[] = [
  {
    id: 'suite_seguridad',
    title: 'SuiteSeguridad EDR',
    descriptionES: 'Sistema EDR híbrido para Windows. Bloquea ransomware y monitorea actividad maliciosa en tiempo real (procesos, red, memoria).',
    descriptionEN: 'Hybrid EDR system for Windows. Blocks ransomware and monitors malicious activity in real time (processes, network, memory).',
    architectureES: 'Arquitectura C/C++ y Python con reglas YARA, Sysmon y ETW (Event Tracing for Windows) para intercepción de llamadas a bajo nivel.',
    architectureEN: 'C/C++ & Python architecture using YARA rules, Sysmon and ETW (Event Tracing for Windows) for low-level API interception.',
    tech: ['Python', 'C++', 'YARA', 'Sysmon', 'ETW API'],
    image: '/projects/01_REAL_SuiteSecurity_EDR_Dashboard.png',
  },
  {
    id: 'puce_integrador',
    title: 'PUCE Connect Hub',
    descriptionES: 'Portal móvil offline-first para estudiantes universitarios con sincronización en segundo plano.',
    descriptionEN: 'Offline-first mobile portal for university students with background synchronization.',
    architectureES: 'Arquitectura móvil con Inyección de Dependencias (Locator), SQLite para caché local y almacenamiento seguro encriptado.',
    architectureEN: 'Mobile architecture with Dependency Injection (Locator), SQLite for local caching, and secure encrypted storage.',
    tech: ['Flutter', 'Dart', 'Spring Boot', 'Java', 'SQLite'],
    image: '/projects/puce_mockup.jpg', // I need a mockup for this. I can just use one from the other project or generate one, or ask the user. Wait, the user didn't give me screenshots for this one.
  }
];
