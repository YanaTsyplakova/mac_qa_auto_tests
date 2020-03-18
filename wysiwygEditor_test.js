Feature('Editor');

Scenario('Работа с WYSIWYG Editor', (I) => {
    I.amOnPage('http://the-internet.herokuapp.com/');
    I.click('WYSIWYG Editor');
    I.switchTo('#mce_0_ifr');
    I.click('#tinymce');
    I.pressKey(['CommandOrControl', 'A']);
    I.clearField('#tinymce');
    I.fillField('#tinymce','АААААА');
    I.switchTo();
    I.click('.mce-i-bold');
    I.switchTo('#mce_0_ifr');
    I.fillField('#tinymce','MMMMMMM');
    I.saveScreenshot('really_bold_test.png');



});
