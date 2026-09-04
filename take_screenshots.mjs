import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page1 = await context.newPage();
  await page1.goto('http://localhost:4173/');
  try {
    await page1.waitForTimeout(1000);
    const enterBtn = page1.locator('button', { hasText: 'Entrar al Sandbox' });
    if (await enterBtn.isVisible()) {
      await enterBtn.click();
      await page1.waitForTimeout(2000);
    }
  } catch(e) {}
  await page1.screenshot({ path: 'public/projects/syntrosaas_01.png' });
  await page1.close();
  const page2 = await context.newPage();
  await page2.goto('http://localhost:4174/');
  await page2.waitForTimeout(2000);
  try {
    await page2.locator('text=GearStack CLI').first().click();
    await page2.waitForTimeout(1000);
    await page2.locator('text=Simulador').first().click();
    await page2.waitForTimeout(2000);
    const modal = page2.locator('.glass-obsidian').first();
    await modal.screenshot({ path: 'public/projects/gearstack_01.png' });
  } catch(e) {}
  await page2.close();
  await browser.close();
})();
