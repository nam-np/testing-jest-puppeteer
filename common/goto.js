

exports.goto = function (url) {
    (async () => {
        //page = await browser.newPage();
        await page.goto(url);
    })();
}
