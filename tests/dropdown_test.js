Feature('dropdown');

const dropdownPage = require('../pages/dropdownPage')

Scenario('Выбираем опцию по значению', (I) => {
    I.amOnPage(dropdownPage.url);
    I.selectOption(dropdownPage.dropdown, 'Option 1');
    I.waitForValue(dropdownPage.dropdown, '1')
});


Scenario('Выбираем опцию по тексту', (I) => {
    I.amOnPage(dropdownPage.url);
    I.selectOption(dropdownPage.dropdown, '2');
    I.waitForText('Option 2')
});
