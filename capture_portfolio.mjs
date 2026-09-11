import { chromium } from 'playwright';
import { exec } from 'child_process';

console.log('Building...');
const build = exec('npm run build');
build.on('close', async () => {
    console.log('Starting preview...');
    const server = exec('npx vite preview --port 4174');
    
    await new Promise(r => setTimeout(r, 4000));
    
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    
    try {
      await page.goto('http://localhost:4174', { waitUntil: 'networkidle', timeout: 15000 });
      await page.screenshot({ path: 'local_portfolio_top.png', type: 'png' });
      
      await page.evaluate(() => window.scrollTo(0, 1000));
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'local_portfolio_mid.png', type: 'png' });
      
      console.log('Screenshots saved locally.');
    } catch (e) {
      console.error('Failed:', e);
    } finally {
      await browser.close();
      server.kill();
      process.exit(0);
    }
});
