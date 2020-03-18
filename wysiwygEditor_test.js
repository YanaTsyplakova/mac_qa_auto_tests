Feature('Editor');
const wysiwyg = require('./pages/wysiwygPage')

Scenario('Работа с WYSIWYG Editor', (I) => {
    I.amOnPage('http://the-internet.herokuapp.com/');
    I.click('WYSIWYG Editor');
    I.switchTo(wysiwyg.button.iframe);
    I.click(wysiwyg.button.field);
    I.pressKey(['CommandOrControl', 'A']);
    I.clearField(wysiwyg.button.field);
    I.fillField(wysiwyg.button.field,'АААААА');
    I.switchTo();
    I.click('.mce-i-bold');
    I.switchTo(wysiwyg.button.iframe);
    I.fillField(wysiwyg.button.field,'MMMMMMM');
    I.saveScreenshot('really_bold_test.png');




});
