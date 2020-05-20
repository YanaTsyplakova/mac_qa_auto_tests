Feature('links');

const linksPage = require('../pages/linksPage')

Scenario('Переходы по ссылкам', async (I) => {
    I.amOnPage(linksPage.url);
    //I.scrollTo(linksPage.fileDownload);
    I.click(linksPage.fileDownload);
    // I.waitForText("File Downloader", '//h3');
    I.myGoBack();
    //I.scrollTo(linksPage.fileUpload);
    // I.click(linksPage.fileUpload);
    // I.waitForText("File Uploader", '//h3')
});
