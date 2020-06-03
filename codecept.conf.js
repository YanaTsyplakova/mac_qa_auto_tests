const { setHeadlessWhen } = require('./node_modules/@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

// console.log(process.env.BROWSER)

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    goback: {
      require: './helpers/myHelper.js',
    },
    Playwright: {
      url: 'https://the-internet.herokuapp.com',
      browser: process.profile || 'chromium',
      show: false,
      restart:false,
      fullPageScreenshots: true,
      waitForAction: 2000,
      windowSize: '1366x768',
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},  
  name: 'my-auto-e2e-tests',
  rerun: {
    minSuccess: 10,
    maxReruns: 10,
  },
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    pauseOnFail: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {}
  },
}
