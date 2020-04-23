Feature('hovers');

const hover = require('./pages/hover')

Scenario('Наведение курсора на иконку', (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/hovers')
    I.moveCursorTo(hover.avatar)
    I.seeElement(hover.hover)
});
