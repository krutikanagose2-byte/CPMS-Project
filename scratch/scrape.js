const puppeteer = require('puppeteer');

const urls = [
  'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/416526J',
  'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/408818J',
  'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/406958J',
  'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/408821J',
  'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/406844J',
  'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/420162J',
  'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/406950J',
  'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/420141J'
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const results = {};

  for (const url of urls) {
    try {
      console.log(`Navigating to ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle2' });
      await page.waitForSelector('body', { timeout: 10000 });
      // wait a bit for rendering
      await new Promise(r => setTimeout(r, 2000));
      
      const jobData = await page.evaluate(() => {
        // Try to find the job title, description, skills, location
        const text = document.body.innerText;
        return text;
      });

      results[url] = jobData;
    } catch (e) {
      console.error(`Failed on ${url}:`, e);
    }
  }

  await browser.close();
  const fs = require('fs');
  fs.writeFileSync('results.json', JSON.stringify(results, null, 2));
  console.log('Done!');
})();
