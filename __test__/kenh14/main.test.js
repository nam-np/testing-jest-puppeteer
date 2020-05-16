

const gotoURL = require('../../common/goto');

describe('Google', () => {
  
    it('should be titled "Google"', async () => {
        gotoURL.goto("https://google.com");
        await new Promise((r) => setTimeout(r, 2000));
        await expect(page.title()).resolves.toMatch('Google');
        await new Promise((r) => setTimeout(r, 2000));        
    });

    it('should be titled "Youtube"', async () => {
        gotoURL.goto('https://youtube.com');
        await new Promise((r) => setTimeout(r, 2000));
        await page.type('input[id=search]', 'gangnam style');
        await new Promise((r) => setTimeout(r, 3000));
        await page.click('button#search-icon-legacy')
        await new Promise((r) => setTimeout(r, 3000));
        await page.click('a[title="PSY - GANGNAM STYLE(강남스타일) M/V"]');
        await new Promise((r) => setTimeout(r, 20000));
		
        await expect(page.title()).resolves.toMatch('PSY - GANGNAM STYLE(강남스타일) M/V - YouTube');
        //await expect(page.title()).resolves.toMatch('YouTube');
        await new Promise((r) => setTimeout(r, 2000));
    });

  });