Feature('hovers');

const hoversPage = require('../pages/hoversPage')

Scenario('Наведение курсора на иконку', (I) => {
    I.amOnPage1('https://the-internet.herokuapp.com/javascript_error')
    // I.moveCursorTo(hoversPage.avatar)
    // I.seeElement(hoversPage.hover)
});
