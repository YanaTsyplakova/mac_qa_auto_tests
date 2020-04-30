Feature('login');

const loginPage = require('../pages/loginPage')

Scenario('Успешная авторизация', (I) => {
    I.amOnPage(loginPage.url)
    I.fillField(loginPage.username, 'tomsmith')
    I.fillField(loginPage.password, 'SuperSecretPassword!')
    I.click(loginPage.button.login)
    I.see('You logged into a secure area!')
});

Scenario('Появление уведомления о неуспешной авторизации', (I) => {
    I.amOnPage(loginPage.url)
    I.fillField(loginPage.username, 'tomsmith')
    I.fillField(loginPage.password, 'SuperSecre')
    I.click(loginPage.button.login)
    I.see('Your password is invalid!')
});

Scenario('Регистразависимости логина', (I) => {
    I.amOnPage(loginPage.url)
    I.fillField(loginPage.username, 'TOMSMITH')
    I.fillField(loginPage.password, 'SuperSecretPassword!')
    I.click(loginPage.button.login)
    I.see('Your username is invalid!')
});

Scenario('Невалидный логин,если в конце пробел', (I) => {
    I.amOnPage(loginPage.url)
    I.fillField(loginPage.username, 'tomsmith ')
    I.fillField(loginPage.password, 'SuperSecre')
    I.click(loginPage.button.login)
    I.see('Your username is invalid!')
});
