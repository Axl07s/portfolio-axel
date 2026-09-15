const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 393, height: 852 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true
  });
  const page = await context.newPage();
  
  console.log("Navigating to NexusCorp...");
  await page.goto('https://agency-landing-pro-ruddy.vercel.app', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000); 
  
  const outputPath = path.join(__dirname, 'public', 'projects', 'nexus_mobile_01.png');
  await page.screenshot({ path: outputPath });
  console.log("Saved mobile screenshot to", outputPath);
  
  await browser.close();
})();
