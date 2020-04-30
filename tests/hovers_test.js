Feature('hovers');

const hoversPage = require('../pages/hoversPage')

Scenario('Наведение курсора на иконку', (I) => {
    I.amOnPage(hoversPage.url)
    I.moveCursorTo(hoversPage.avatar)
    I.seeElement(hoversPage.hover)
});
