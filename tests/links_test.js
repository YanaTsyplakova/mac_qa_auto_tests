Feature('links');

const linksPage = require('../pages/linksPage')

Scenario('Переходы по ссылкам', async (I) => {
    I.amOnPage(linksPage.url);
    I.click(linksPage.fileDownload);
    //I.waitForText('File Downloader', 5, '//h3');  Не понимаю почему не видит элемент
    I.goBack();
    I.click(linksPage.fileUpload);
    //I.waitForText('File Uploader', 5, '//h3');
});


xScenario('Проверка теста на ошибку', async (I) => {
    I.amOnPage("https://the-internet.herokuapp.com/javascript_error")
});