# Multi-Page Portfolio & Case Studies Design

## 1. Overview
El portafolio actual (SPA estática) se migrará a una arquitectura Multi-Page utilizando `react-router-dom`. El objetivo es permitir enlaces permanentes (permalinks) a casos de estudio detallados (SuiteSeguridad y PUCE Connect Hub) para facilitar la conversión en propuestas B2B (Upwork/Fiverr).

## 2. Architecture Changes
- **Router:** Instalar `react-router-dom`.
- **Enrutamiento:**
  - `/` -> `Home.tsx` (Contiene la vista actual completa: Hero, Disciplines, B2B Projects, Personal Projects, Contact).
  - `/project/:id` -> `ProjectDetail.tsx` (Renderizador dinámico de casos de estudio).
- **Refactorización:** `App.tsx` pasará a ser el proveedor de `<BrowserRouter>` y el contenedor principal (Navbar + Footer compartidos).

## 3. UI/UX Design per Project
Para reflejar el nivel "Senior" y la esencia de cada proyecto, usaremos dos layouts distintos que se renderizarán condicionalmente en `ProjectDetail.tsx` según los metadatos del proyecto:

### A. Estilo "Bento Grid" (Para SuiteSeguridad)
- **Concepto:** Hiper-técnico, estructurado, oscuro.
- **Layout:** Cuadrícula (CSS Grid) donde la imagen principal de la app (EDR Dashboard) ocupa el espacio central. Alrededor de ella, "cajas" (bento) muestran detalles específicos: Stack (C++, YARA, ETW), Problema resuelto, Diagrama de arquitectura a bajo nivel.
- **Vibe:** "Arquitecto de Sistemas".

### B. Estilo "Editorial Minimalista" (Para PUCE Connect Hub)
- **Concepto:** Fluido, centrado en el usuario, tipografía gigante.
- **Layout:** Scroll vertical inmersivo. Título gigante en la cabecera. Imágenes de la app móvil a ancho completo (edge-to-edge). El texto cuenta el "viaje" (offline-first, sincronización SQLite en segundo plano).
- **Vibe:** "Ingeniero de Producto".

## 4. Navigation Flow
- El usuario hace clic en una fila de `PersonalProjectsSection` (Home).
- Navega a `/project/:id`.
- Botón flotante de "Volver atrás" (`<ArrowLeft />`) o usando el Navbar para regresar al Home.
- Ambas páginas comparten el mismo `Footer` y `ContactSection` al final para no romper el embudo de conversión.

## 5. Deployment
- Reconfigurar el archivo `vercel.json` (si es necesario) para permitir reescritura de rutas (`rewrites`) de SPA, asegurando que `/project/:id` no dé error 404 al recargar. (Vite + Vercel SPA setup).
