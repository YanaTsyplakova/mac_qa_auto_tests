const { I } = inject();

module.exports = {

  url: 'https://the-internet.herokuapp.com/forgot_password',
  email: {xpath: '//input[@id="email"]'},
  button: {
      retrievePassword: {xpath: '//button[@id="form_submit"]'},
  },
}
