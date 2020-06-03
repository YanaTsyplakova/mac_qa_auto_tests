Feature('Editor');
const wysiwygPage = require('../pages/wysiwygPage')

xScenario('Работа с WYSIWYG Editor', (I) => { 
    I.amOnPage(wysiwygPage.url);
    I.click('WYSIWYG Editor');
    I.switchTo(wysiwygPage.iframe);
    I.click(wysiwygPage.field);
    I.pressKey(['CommandOrControl', 'A']);
    I.clearField(wysiwygPage.field);
    I.fillField(wysiwygPage.field,'АААААА');
    I.switchTo();
    I.click(wysiwygPage.button.bold);
    I.switchTo(wysiwygPage.iframe);
    I.fillField(wysiwygPage.field,'MMMMMMM');
    I.saveScreenshot('really_bold_test.png');
});
