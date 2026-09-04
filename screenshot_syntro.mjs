import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await context.newPage();
  
  // SyntroSaaS
  await page.goto('http://localhost:4173/');
  // Bypass the demo login by clicking the enter button if it exists
  try {
    await page.waitForTimeout(1000);
    await page.click('button:has-text(\
Entrar
al
Sandbox\)', { timeout: 2000 });
    await page.waitForTimeout(2000);
  } catch(e) {}
  
  await page.screenshot({ path: 'public/projects/syntrosaas_01.png' });
  
  await browser.close();
})();
