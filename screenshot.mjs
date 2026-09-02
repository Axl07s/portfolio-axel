import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:5174/');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'portfolio-full.png', fullPage: true });
  await browser.close();
})();
