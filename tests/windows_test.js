Feature('windows');
const windowsPage = require('../pages/windowsPage')

Scenario('Переход по вкладкам', (I) => {
    I.amOnPage(windowsPage.url);
    I.click(windowsPage.newWindow);
    I.seeInTitle('New Window');
    I.dontSeeInTitle('The internet')

});
