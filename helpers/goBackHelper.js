const assert = require('assert');

class MyHelper extends Helper {
    async goBack() {
        await this.helpers.Playwright.page.goBack();
    }
    
    // async amOnPage1(url) {   
    //     throw new Error(error);
    //     this.helpers.Playwright.page.on('pageerror', async (error) => {
    //         console.log(2)
    //         throw new Error(error);
    
    }
}

module.exports = MyHelper;
