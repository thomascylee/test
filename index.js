const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  while (true) {
    let selector;
    do {
      await page.goto('http://www.urbtix.hk');
      let selector = await page.waitForSelector('.auto-count-down-row');
    } while (selector != null);
  }
})();
