# Portfolio Git Expansion & UI Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Initialize independent GitHub repositories for all apps, deploy/push them, and refactor the main portfolio UI with Matt Farley & Van Holtz design principles.

**Architecture:** 
1. Use gh repo create to push local folders to remote repositories under Axl07s.
2. Refactor ProjectCard.tsx in the portfolio for single-sentence direct-response copy and pill buttons.
3. Refactor ProjectModal.tsx for multi-device mockup presentations.

**Tech Stack:** React, Tailwind CSS, Git, GitHub CLI (gh)

## Global Constraints

- Repositories must be pushed to Axl07s namespace.
- Portfolio card UI must follow Matt Farley minimalism (Dark bg, 1-sentence description, pill button).
- Portfolio modal UI must use stacked device presentation (Van Holtz style).
- No Pokémon or SuiteSecurity projects in portfolioData.ts.

---

### Task 1: Create & Push KURE (Restaurant) Repository

**Files:**
- Modify: C:\Users\AXEL\.gemini\antigravity\scratch\restaurant-landing-pro\README.md (create if missing)

**Interfaces:**
- Produces: GitHub URL https://github.com/Axl07s/restaurant-landing-pro

- [ ] **Step 1: Write a professional README**
Create or update README.md in estaurant-landing-pro explaining it is a Fine Dining Web Platform built with React & Tailwind.
- [ ] **Step 2: Initialize Git and Push**
Run the following commands in C:\Users\AXEL\.gemini\antigravity\scratch\restaurant-landing-pro:
`powershell
git init
git add .
git commit -m "feat: initial commit for KURE platform"
gh repo create Axl07s/restaurant-landing-pro --public --source=. --remote=origin --push
`

### Task 2: Create & Push NexusCorp (Agency) Repository

**Files:**
- Modify: C:\Users\AXEL\.gemini\antigravity\scratch\agency-landing-pro\README.md (create if missing)

**Interfaces:**
- Produces: GitHub URL https://github.com/Axl07s/agency-landing-pro

- [ ] **Step 1: Write a professional README**
Create or update README.md in gency-landing-pro explaining it is a B2B Systems & Growth Agency Platform.
- [ ] **Step 2: Initialize Git and Push**
Run the following commands in C:\Users\AXEL\.gemini\antigravity\scratch\agency-landing-pro:
`powershell
git init
git add .
git commit -m "feat: initial commit for NexusCorp platform"
gh repo create Axl07s/agency-landing-pro --public --source=. --remote=origin --push
`

### Task 3: Create & Push Jarvis Command Center Repository

**Files:**
- Modify: C:\Users\AXEL\.gemini\antigravity\scratch\jarvis-command-center-app\README.md (create if missing)

**Interfaces:**
- Produces: GitHub URL https://github.com/Axl07s/jarvis-command-center-axel

- [ ] **Step 1: Write a professional README**
Create or update README.md in jarvis-command-center-app detailing the autonomous agent mesh and ElevenLabs voice HUD.
- [ ] **Step 2: Initialize Git and Push**
Run the following commands in C:\Users\AXEL\.gemini\antigravity\scratch\jarvis-command-center-app:
`powershell
git init
git add .
git commit -m "feat: initial commit for Jarvis Command Center"
gh repo create Axl07s/jarvis-command-center-axel --public --source=. --remote=origin --push
`

### Task 4: Refactor Portfolio Project Cards & Data

**Files:**
- Modify: C:\Users\AXEL\.gemini\antigravity\scratch\portfolio-axel\src\data\portfolioData.ts
- Modify: C:\Users\AXEL\.gemini\antigravity\scratch\portfolio-axel\src\components\ProjectCard.tsx

**Interfaces:**
- Consumes: The new GitHub URLs produced in Tasks 1-3.
- Produces: Clean data and Matt Farley style minimal UI cards.

- [ ] **Step 1: Update Data Source**
Modify src/data/portfolioData.ts to include only:
1. SyntroSaaS
2. KURE (with https://github.com/Axl07s/restaurant-landing-pro)
3. NexusCorp (with https://github.com/Axl07s/agency-landing-pro)
4. Jarvis (with https://github.com/Axl07s/jarvis-command-center-axel)
5. Enterprise RAG
6. GearStack
Ensure descriptions are 1 punchy business sentence.
- [ ] **Step 2: Update Card UI**
Modify src/components/ProjectCard.tsx to remove excessive text and tags. Replace with a minimalist dark card (navy/slate), the 1-sentence description, and a bright purple/neon pill button saying "View Live Demo >".

### Task 5: Refactor Portfolio Modal & SEO

**Files:**
- Modify: C:\Users\AXEL\.gemini\antigravity\scratch\portfolio-axel\src\components\ProjectModal.tsx
- Modify: C:\Users\AXEL\.gemini\antigravity\scratch\portfolio-axel\index.html

- [ ] **Step 1: Update Modal Presentation (Van Holtz Style)**
Modify src/components/ProjectModal.tsx to present images not just as a flat slider, but utilizing stacked or layered flexbox displays for mobile/desktop mockups where available. Ensure the feel is premium.
- [ ] **Step 2: Inject SEO Meta Tags**
Modify index.html to add <title>Software Engineer & B2B Systems Builder | Axel M</title> and <meta name="description" content="Portfolio of Axel M. Building high-ticket B2B SaaS, autonomous AI agents, and enterprise web platforms.">.
- [ ] **Step 3: Push Portfolio**
Run the following in C:\Users\AXEL\.gemini\antigravity\scratch\portfolio-axel:
`powershell
git add .
git commit -m "feat: integrate new repos and overhaul UI to minimal conversion style"
git push origin master
`

