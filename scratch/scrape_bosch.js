const puppeteer = require('puppeteer');

const urls = [
  'https://jobs.smartrecruiters.com/BoschGroup/744000141324575-c-c-communication-gateway-software-engineer?utm_source=chatgpt.com',
  'https://jobs.smartrecruiters.com/BoschGroup/744000128205453-aws-serverless-web-based-developer?utm_source=chatgpt.com',
  'https://jobs.smartrecruiters.com/BoschGroup/744000144693399-senior-software-engineer-python-automation-developer-platforms?utm_source=chatgpt.com',
  'https://jobs.smartrecruiters.com/BoschGroup/744000152431390?utm_source=chatgpt.com',
  'https://jobs.smartrecruiters.com/BoschGroup/744000152431877?utm_source=chatgpt.com',
  'https://jobs.smartrecruiters.com/BoschGroup/744000151571648?utm_source=chatgpt.com',
  'https://jobs.smartrecruiters.com/BoschGroup/744000149849174?utm_source=chatgpt.com',
  'https://jobs.smartrecruiters.com/BoschGroup/744000149769988-full-stack-software-developer-with-ai-expertise?utm_source=chatgpt.com',
  'https://jobs.smartrecruiters.com/BoschGroup/744000151592409?utm_source=chatgpt.com',
  'https://jobs.smartrecruiters.com/BoschGroup/744000145185264-mes-application-engineer?utm_source=chatgpt.com'
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const results = {};

  for (const url of urls) {
    try {
      console.log(`Navigating to ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle2' });
      
      const jobData = await page.evaluate(() => {
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
  fs.writeFileSync('bosch_results.json', JSON.stringify(results, null, 2));
  console.log('Done!');
})();
