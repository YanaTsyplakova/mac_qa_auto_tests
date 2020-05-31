const assert = require('assert');

class MyHelper extends Helper {
    async goBack() {
        await this.helpers.Playwright.page.goBack();
    }
    
    async amOnPage(url) { 
        const [error] = await Promise.all([
            this.helpers.Playwright.page.waitForEvent('pageerror'),
            this.helpers.Playwright.page.goto(url)
        ])
        console.log(error)
    }

    _before() {
        this.err = null;
        this.helpers.Playwright.page.on('pageerror', (e) => this.err = e);
   }
    
      _afterStep() {
        if (this.err) throw new Error(`Browser pageerror ${this.err}`);
      }
}


module.exports = MyHelper;
