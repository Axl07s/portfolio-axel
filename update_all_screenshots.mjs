import { chromium } from 'playwright';

async function capture() {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // 1. KURE Fine Dining
  console.log('Capturing KURE Fine Dining...');
  try {
    await page.goto('https://restaurant-landing-pro.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({ path: 'public/projects/kure_01.png' });
    
    // Scroll to Menu
    await page.evaluate(() => {
      const el = document.getElementById('carta');
      el?.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'public/projects/kure_02.png' });

    // Scroll to Reservations
    await page.evaluate(() => {
      const el = document.getElementById('reservas');
      el?.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'public/projects/kure_03.png' });
    console.log('KURE screenshots captured successfully.');
  } catch (err) {
    console.error('Error capturing KURE:', err);
  }

  // 2. NexusCorp B2B Engine
  console.log('Capturing NexusCorp B2B...');
  try {
    await page.goto('https://agency-landing-pro.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({ path: 'public/projects/nexus_01.png' });

    // Scroll to ROI Simulator
    await page.evaluate(() => {
      const el = document.getElementById('simulador');
      el?.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'public/projects/nexus_02.png' });

    // Scroll to Case Studies
    await page.evaluate(() => {
      const el = document.getElementById('casos');
      el?.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'public/projects/nexus_03.png' });
    console.log('NexusCorp screenshots captured successfully.');
  } catch (err) {
    console.error('Error capturing NexusCorp:', err);
  }

  // 3. SyntroSaaS Multi-Tenant
  console.log('Capturing SyntroSaaS...');
  try {
    await page.goto('https://syntrosaas-app.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({ path: 'public/projects/syntrosaas_01.png' });

    // Click API Keys tab
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const keysBtn = buttons.find(b => b.textContent?.includes('API Keys'));
      keysBtn?.click();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'public/projects/syntrosaas_02.png' });

    // Click Pricing / Stripe tab
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const pricingBtn = buttons.find(b => b.textContent?.includes('Planes'));
      pricingBtn?.click();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'public/projects/syntrosaas_03.png' });
    console.log('SyntroSaaS screenshots captured successfully.');
  } catch (err) {
    console.error('Error capturing SyntroSaaS:', err);
  }

  // 4. Enterprise RAG Engine
  console.log('Capturing Enterprise RAG...');
  try {
    await page.goto('https://enterprise-rag-app-plum.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({ path: 'public/projects/rag_01.png' });

    // Click Vault Tab
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const vaultBtn = buttons.find(b => b.textContent?.includes('Bóveda'));
      vaultBtn?.click();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'public/projects/rag_02.png' });

    // Click Guardrails Tab
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const guardrailsBtn = buttons.find(b => b.textContent?.includes('Guardrails'));
      guardrailsBtn?.click();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'public/projects/rag_03.png' });
    console.log('Enterprise RAG screenshots captured successfully.');
  } catch (err) {
    console.error('Error capturing Enterprise RAG:', err);
  }

  await browser.close();
  console.log('All fresh screenshots captured and saved to public/projects/');
}

capture();
