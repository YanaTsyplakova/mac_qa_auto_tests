Feature('forgotPassword');

const forgotPasswordPage = require('../pages/forgotPasswordPage')

Scenario('Восстановление пароля', (I) => {
    I.amOnPage(forgotPasswordPage.url);
    I.fillField(forgotPasswordPage.email, '123@mail.ru');
    I.click(forgotPasswordPage.button.retrievePassword);
    I.waitInUrl('/email_sent', 3)
});

//Ошибка expected url to include /email_sent, but found https://the-internet.herokuapp.com/email_sent
  