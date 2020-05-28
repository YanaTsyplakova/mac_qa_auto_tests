Feature('links');

const linksPage = require('../pages/linksPage')

Scenario('Переходы по ссылкам', async (I) => {
    I.amOnPage(linksPage.url);
    I.click(linksPage.fileDownload);
    //I.waitForText('File Downloader', 30, '//h3');
    I.goBack();
    I.click(linksPage.fileUpload);
    I.waitForText('File Uploader', 5, '//h3');
});
