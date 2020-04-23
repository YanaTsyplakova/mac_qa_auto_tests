Feature('login');

const authorization = require('./pages/authorization')

Scenario('Успешная авторизация', (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/login')
    I.fillField(authorization.username, 'tomsmith')
    I.fillField(authorization.password, 'SuperSecretPassword!')
    I.click(authorization.button.login)
    I.see('You logged into a secure area!')
});

Scenario('Появление уведомления о неуспешной авторизации', (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/login')
    I.fillField(authorization.username, 'tomsmith')
    I.fillField(authorization.password, 'SuperSecre')
    I.click(authorization.button.login)
    I.see('Your password is invalid!')
});

Scenario('Регистразависимости логина', (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/login')
    I.fillField(authorization.username, 'TOMSMITH')
    I.fillField(authorization.password, 'SuperSecretPassword!')
    I.click(authorization.button.login)
    I.see('Your username is invalid!')
});

Scenario('Невалидный логин,если в конце пробел', (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/login')
    I.fillField(authorization.username, 'tomsmith ')
    I.fillField(authorization.password, 'SuperSecre')
    I.click(authorization.button.login)
    I.see('Your username is invalid!')
});
