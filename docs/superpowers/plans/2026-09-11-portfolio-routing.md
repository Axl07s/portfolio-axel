# Multi-Page Portfolio SEO Routing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the portfolio into a multi-page app with dynamic SEO meta-tags and Playwright-based SSG for perfect link previews on social media.

**Architecture:** We will use `react-router-dom` for client-side routing, `react-helmet-async` for meta tags, and a custom Playwright pre-render script (since `playwright` is already in `devDependencies`) to bake the HTML for Vercel.

**Tech Stack:** React 19, react-router-dom, react-helmet-async, Playwright (for SSG), Vercel.

## Global Constraints

- Domain unificado y canonical: Confirmar y apuntar a `portfolio-axel-nine.vercel.app` en todos los meta tags.
- Diseño responsivo mandatorio para layouts Bento y Editorial.
- `App.tsx` mantiene Navbar y Footer (compartidos).
- `npm run build` debe ejecutar la compilación y luego el pre-renderizado.

---

### Task 1: Setup Routing & Metadata Dependencies

**Files:**
- Modify: `package.json`
- Create: `vercel.json`
- Modify: `src/App.tsx`
- Create: `src/pages/Home.tsx`

**Interfaces:**
- Consumes: N/A
- Produces: Base routing setup.

- [ ] **Step 1: Install packages**
```bash
npm install react-router-dom react-helmet-async
npm install --save-dev express
```

- [ ] **Step 2: Create `vercel.json`**
```json
{
  "cleanUrls": true,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

- [ ] **Step 3: Extract `Home.tsx` from `App.tsx`**
Create `src/pages/Home.tsx` and move all the content from `App.tsx` (Hero, B2B, Personal, etc.) except Navbar and Footer.

- [ ] **Step 4: Refactor `App.tsx` for Routing**
Wrap the app in `HelmetProvider` and `BrowserRouter`. Include Navbar, `<Routes>`, and Footer. Add a catch-all `NotFound` route.

- [ ] **Step 5: Create `NotFound.tsx`**
Create a simple 404 page in `src/pages/NotFound.tsx` with a button returning to `/`.

- [ ] **Step 6: Commit**
```bash
git add .
git commit -m "feat: setup react-router-dom and extract Home component"
```

---

### Task 2: Project Data & Layout Strategy

**Files:**
- Modify: `src/data/personalProjectsData.ts`
- Create: `src/pages/ProjectDetail.tsx`

**Interfaces:**
- Consumes: `personalProjects` data.
- Produces: Conditional rendering logic for Bento vs Editorial.

- [ ] **Step 1: Update Data Schema**
In `src/data/personalProjectsData.ts`, add `layoutStyle: 'bento' | 'editorial'` and `seoDescription`, `seoImage` to each project.

- [ ] **Step 2: Create `ProjectDetail.tsx` Shell**
In `src/pages/ProjectDetail.tsx`, use `useParams()` to get `:id`. If not found, return `<NotFound />`. If loading (suspense), return a loading state. 

- [ ] **Step 3: Add `react-helmet-async` to `ProjectDetail.tsx`**
```tsx
<Helmet>
  <title>{project.title} - Axel Molineros</title>
  <meta name="description" content={project.seoDescription} />
  <meta property="og:title" content={project.title} />
  <meta property="og:description" content={project.seoDescription} />
  <meta property="og:image" content={`https://portfolio-axel-nine.vercel.app${project.seoImage}`} />
  <meta property="og:url" content={`https://portfolio-axel-nine.vercel.app/project/${project.id}`} />
  <link rel="canonical" href={`https://portfolio-axel-nine.vercel.app/project/${project.id}`} />
</Helmet>
```

- [ ] **Step 4: Commit**
```bash
git add .
git commit -m "feat: add ProjectDetail page and dynamic helmet meta tags"
```

---

### Task 3: Build Bento & Editorial Layouts

**Files:**
- Modify: `src/pages/ProjectDetail.tsx`
- Modify: `src/components/PersonalProjectsSection.tsx`

**Interfaces:**
- Consumes: Project details.

- [ ] **Step 1: Implement Bento Grid Layout**
Inside `ProjectDetail.tsx`, implement the CSS grid for `layoutStyle === 'bento'`. Place the main image centered, with smaller bento boxes for tech stack and architecture.

- [ ] **Step 2: Implement Editorial Layout**
Implement the `layoutStyle === 'editorial'` block. Edge-to-edge images, massive typography.

- [ ] **Step 3: Make Both Layouts Responsive**
Use Tailwind `grid-cols-1 md:grid-cols-3` for Bento.

- [ ] **Step 4: Connect Home links**
In `PersonalProjectsSection.tsx`, change the rows to use `<Link to={\`/project/\${project.id}\`}>`.

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "feat: implement bento and editorial layouts"
```

---

### Task 4: Playwright SSG Pre-rendering

**Files:**
- Create: `prerender.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: Built SPA in `dist/`.
- Produces: Static HTML files in `dist/project/:id/index.html`.

- [ ] **Step 1: Write `prerender.mjs`**
Write a script that uses Express to serve `dist/`, then uses Playwright to navigate to `http://localhost:PORT/project/suiteseguridad` and `http://localhost:PORT/project/puce-integrador`, waits for `.project-detail-loaded` selector (add this to ProjectDetail), gets the HTML, and saves it to `dist/project/suiteseguridad/index.html`.

- [ ] **Step 2: Update Build Script**
In `package.json`:
```json
"scripts": {
  "build": "tsc -b && vite build && node prerender.mjs"
}
```

- [ ] **Step 3: Clean up images**
Ensure `seoImage` points to clean, cropped screenshots without UI wrappers.

- [ ] **Step 4: Run build and Verify**
```bash
npm run build
cat dist/project/suiteseguridad/index.html | grep "og:title"
```

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "feat: add playwright SSG prerendering for SEO"
```
