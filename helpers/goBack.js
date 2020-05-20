class MyHelper extends Helper {
    async myGoBack() {
        await this.helpers.Playwright.page.evaluate('window.history.back()');
    }
}

module.exports = MyHelper;
