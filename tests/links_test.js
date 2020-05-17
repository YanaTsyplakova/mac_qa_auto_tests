Feature('links');

const linksPage = require('../pages/linksPage')

Scenario('Переходы по ссылкам', (I) => {
    I.amOnPage(linksPage.url);
    console.log(I.scrollTo)
    I.scrollTo(linksPage.fileDownload);
    I.click(linksPage.fileDownload);
    I.waitForText("File Downloader", '//h3');
    I.executeScript("window.history.back();");
    I.scrollTo(linksPage.fileUpload);
    I.click(linksPage.fileUpload);
    I.waitForText("File Uploader", '//h3')
});
