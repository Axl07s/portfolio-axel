import { chromium } from 'playwright';
import path from 'path';
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1200, height: 800 }, deviceScaleFactor: 2 });
  const page = await context.newPage();
  await page.goto('file://' + path.resolve('gearstack_mock.html'));
  await page.screenshot({ path: 'public/projects/gearstack_01.png' });
  await browser.close();
})();
