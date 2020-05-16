describe('Google', () => {
  
    it('should be titled "Kênh tin tức giải trí - Xã hội - Kenh14.vn"', async () => {
        await page.goto('https://kenh14.vn');
        await new Promise((r) => setTimeout(r, 2000));
        await expect(page.title()).resolves.toMatch('Kênh tin tức giải trí - Xã hội - Kenh14.vn');
        await new Promise((r) => setTimeout(r, 2000));
        
    });

    it('should be titled "Tin tức bóng đá, thể thao, giải trí | Đọc tin tức 24h mới nhất"', async () => {
        await page.goto('https://24h.com.vn');
        await new Promise((r) => setTimeout(r, 2000));
        await expect(page.title()).resolves.toMatch('Tin tức bóng đá, thể thao, giải trí | Đọc tin tức 24h mới nhất');
        await new Promise((r) => setTimeout(r, 2000));
    });

  });