import { chromium } from 'playwright';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(process.cwd(), 'dist');

const routes = [
  '/project/suiteseguridad',
  '/project/puce-integrador'
];

async function prerender() {
  console.log('Starting prerender server...');
  const app = express();
  
  app.use((req, res, next) => {
    console.log(`[Express] GET ${req.url}`);
    next();
  });

  // Serve static files from dist
  app.use(express.static(distPath));
  
  // Fallback for SPA routing
  app.use((req, res) => {
    try {
      const file = path.join(distPath, 'index.html');
      const html = fs.readFileSync(file, 'utf-8');
      res.send(html);
    } catch (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Error');
    }
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`Server running at ${baseUrl}`);

    console.log('Launching Playwright...');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    
    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      const page = await context.newPage();
      
      page.on('console', msg => console.log(`[Browser] ${msg.text()}`));
      page.on('pageerror', err => console.log(`[Browser Error] ${err.message}`));

      // Navigate to route
      await page.goto(`${baseUrl}${route}`);
      
      // Wait for the dynamic content to load (our .project-detail-loaded class)
      await page.waitForSelector('.project-detail-loaded');
      
      // Get the full HTML including dynamically injected Helmet meta tags
      const html = await page.content();
      
      // Ensure directory exists
      const routeDir = path.join(distPath, route);
      fs.mkdirSync(routeDir, { recursive: true });
      
      // Write the index.html for this route
      const outputPath = path.join(routeDir, 'index.html');
      fs.writeFileSync(outputPath, html);
      console.log(`Saved ${outputPath}`);
      
      await page.close();
    }

    console.log('Closing browser...');
    await browser.close();
    
    console.log('Closing server...');
    server.close();
    
    console.log('Prerender complete.');
  });
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
