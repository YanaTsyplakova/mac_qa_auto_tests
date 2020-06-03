Feature('dropdown');

const dropdownPage = require('../pages/dropdownPage')

xScenario('Выбираем опцию по значению', (I) => {

    I.amOnPage(dropdownPage.url);
    I.waitForVisible(dropdownPage.dropdown);
    I.selectOption(dropdownPage.dropdown, 'Option 1');
    I.waitForValue(dropdownPage.dropdown, '1')
});


xScenario('Выбираем опцию по тексту', (I) => {
    I.amOnPage(dropdownPage.url);
    I.selectOption(dropdownPage.dropdown, '2');
    I.waitForText('Option 2')
});
