import { chromium } from 'playwright';

async function capture() {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log('Capturing NexusCorp B2B...');
  try {
    await page.goto('https://agency-landing-pro-ruddy.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({ path: 'public/projects/nexus_01.png' });

    await page.evaluate(() => {
      window.scrollBy(0, 1000);
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'public/projects/nexus_02.png' });

    await page.evaluate(() => {
      window.scrollBy(0, 1200);
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'public/projects/nexus_03.png' });
    console.log('NexusCorp screenshots captured successfully.');
  } catch (err) {
    console.error('Error capturing NexusCorp:', err);
  }

  await browser.close();
}

capture();
