Feature('forgotPassword');

const forgotPasswordPage = require('../pages/forgotPasswordPage')

Scenario('Восстановление пароля', (I) => {
    I.amOnPage(forgotPasswordPage.url);
    I.fillField(forgotPasswordPage.email, '123@mail.ru');
    I.click(forgotPasswordPage.button.retrievePassword);
    I.waitInUrl('/email_sent',3)
});
