export interface PersonalProject {
  id: string;
  title: string;
  descriptionES: string;
  descriptionEN: string;
  architectureES: string;
  architectureEN: string;
  tech: string[];
  image: string;
  images?: { url: string; captionES: string; captionEN: string }[];
  liveUrl?: string;
  featuresES?: string[];
  featuresEN?: string[];
  githubUrl?: string;
  layoutStyle: 'bento' | 'editorial' | 'enterprise';
  seoDescription: string;
  seoImage: string;
}

export const personalProjects: PersonalProject[] = [
  {
    id: 'suiteseguridad',
    title: 'SuiteSeguridad EDR',
    descriptionES: 'Sistema EDR híbrido para Windows enfocado en la prevención proactiva mediante la integración profunda con ETW (Event Tracing for Windows) y telemetría de red. Bloquea ransomware, monitorea actividad maliciosa en memoria y neutraliza procesos anómalos en tiempo real con cero falsos positivos.',
    descriptionEN: 'Hybrid EDR system for Windows focused on proactive prevention through deep integration with ETW (Event Tracing for Windows) and network telemetry. Blocks ransomware, monitors malicious memory activity, and neutralizes anomalous processes in real-time with zero false positives.',
    architectureES: 'Arquitectura híbrida C/C++ y Python. Utiliza un recolector de telemetría de baja latencia en el núcleo de Windows (ETW/Sysmon) alimentando un motor de análisis heurístico en espacio de usuario. Detección de patrones con reglas YARA dinámicas y análisis de entropía para detectar payloads cifrados.',
    architectureEN: 'Hybrid C/C++ & Python architecture. Uses a low-latency telemetry collector in the Windows core (ETW/Sysmon) feeding a user-space heuristic analysis engine. Pattern detection with dynamic YARA rules and entropy analysis to detect encrypted payloads.',
    tech: ['Python', 'C++', 'YARA', 'Sysmon', 'ETW API', 'Win32 API'],
    image: '/projects/suitesecurity_01.png',
    images: [
      { url: '/projects/suitesecurity_01.png', captionES: 'Dashboard de Análisis y Telemetría en Tiempo Real', captionEN: 'Real-time Telemetry & Analysis Dashboard' },
      { url: '/projects/suitesecurity_02.png', captionES: 'Detección Heurística e Interceptación de Amenazas', captionEN: 'Heuristic Detection & Threat Interception' },
      { url: '/projects/suitesecurity_03.png', captionES: 'Análisis de Procesos y Reglas YARA Dinámicas', captionEN: 'Process Analysis & Dynamic YARA Rules' }
    ],
    featuresES: [
      'Bloqueo automatizado de Ransomware mediante monitoreo de I/O de disco.',
      'Escaneo activo de memoria para detectar inyección de procesos (Process Hollowing).',
      'Integración con VirusTotal y bases de firmas locales YARA actualizables.',
      'Captura de tráfico anómalo DNS/HTTP hacia servidores Command & Control (C2).'
    ],
    featuresEN: [
      'Automated Ransomware blocking via disk I/O monitoring.',
      'Active memory scanning to detect process injection (Process Hollowing).',
      'VirusTotal integration and local updatable YARA signature databases.',
      'Anomalous DNS/HTTP traffic capture towards Command & Control (C2) servers.'
    ],
    layoutStyle: 'enterprise',
    seoDescription: 'A hybrid EDR system for Windows that blocks ransomware and monitors malicious activity in real time using YARA and ETW.',
    seoImage: '/projects/suitesecurity_01.png'
  },
  {
    id: 'puce-connect-hub',
    title: 'PUCE Connect Hub',
    descriptionES: 'Portal móvil offline-first para sincronización robusta de notas y asistencia académica bajo conectividad intermitente.',
    descriptionEN: 'Offline-first mobile portal for robust synchronization of grades and academic attendance under intermittent connectivity.',
    architectureES: 'Arquitectura móvil con Inyección de Dependencias, BLoC pattern y base de datos embebida Isar con un worker de sincronización en background.',
    architectureEN: 'Mobile architecture using Dependency Injection, BLoC pattern, and an embedded Isar database with a background synchronization worker.',
    tech: ['Flutter', 'Dart', 'Spring Boot', 'Isar DB', 'BLoC'],
    image: '/projects/puce_home.png',
    layoutStyle: 'editorial',
    seoDescription: 'Offline-first mobile portal built with Flutter and Spring Boot, featuring background synchronization and secure local caching.',
    seoImage: '/projects/puce_home.png'
  }
];
