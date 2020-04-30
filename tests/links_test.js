Feature('links');

const linksPage = require('../pages/linksPage')

Scenario('Переходы по ссылкам', (I) => {
    I.amOnPage(linksPage.url);
    I.scrollTo(linksPage.fileDownload);
    I.click(linksPage.fileDownload);
    I.waitForElement('//h3[text()="File Downloader"]', 5);
    I.executeScript("window.history.back();");
    I.scrollTo(linksPage.fileUpload);
    I.click(linksPage.fileUpload);
    I.waitForElement('//h3[text()="File Uploader"]')

});
