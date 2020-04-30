Feature('checkboxes');

const checkboxesPage = require('../pages/checkboxesPage')

Scenario('Проверка чекбоксов', (I) => {
    I.amOnPage(checkboxesPage.url);
    I.dontSeeCheckboxIsChecked(checkboxesPage.checkbox1);
    I.seeCheckboxIsChecked(checkboxesPage.checkbox2);
    I.click(checkboxesPage.checkbox1);
    I.seeCheckboxIsChecked(checkboxesPage.checkbox1);
    I.click(checkboxesPage.checkbox2);
    I.dontSeeCheckboxIsChecked(checkboxesPage.checkbox2);

});
