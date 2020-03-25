Feature('Editor');
const wysiwyg = require('./pages/wysiwygPage')

Scenario('Работа с WYSIWYG Editor', (I) => {
    I.amOnPage('http://the-internet.herokuapp.com/');
    I.click('WYSIWYG Editor');
    I.switchTo(wysiwyg.iframe);
    I.click(wysiwyg.field);
    I.pressKey(['CommandOrControl', 'A']);
    I.clearField(wysiwyg.field);
    I.fillField(wysiwyg.field,'АААААА');
    I.switchTo();
    I.click(wysiwyg.button.bold);
    I.switchTo(wysiwyg.iframe);
    I.fillField(wysiwyg.field,'MMMMMMM');
    I.saveScreenshot('really_bold_test.png');

});
