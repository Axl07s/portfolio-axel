import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// KURE screenshots
await page.goto('https://restaurant-landing-pro.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });
await page.screenshot({ path: 'public/projects/kure_01.png', type: 'png' });
await page.evaluate(() => window.scrollTo(0, 800));
await page.waitForTimeout(500);
await page.screenshot({ path: 'public/projects/kure_02.png', type: 'png' });
await page.evaluate(() => window.scrollTo(0, 2000));
await page.waitForTimeout(500);
await page.screenshot({ path: 'public/projects/kure_03.png', type: 'png' });

// NexusCorp screenshots
await page.goto('https://agency-landing-pro-ruddy.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });
await page.screenshot({ path: 'public/projects/nexus_01.png', type: 'png' });
await page.evaluate(() => window.scrollTo(0, 800));
await page.waitForTimeout(500);
await page.screenshot({ path: 'public/projects/nexus_02.png', type: 'png' });
await page.evaluate(() => window.scrollTo(0, 2000));
await page.waitForTimeout(500);
await page.screenshot({ path: 'public/projects/nexus_03.png', type: 'png' });

await browser.close();
console.log('All screenshots captured successfully');
