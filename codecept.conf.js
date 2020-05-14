const { setHeadlessWhen } = require('./node_modules/@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  multiple: {
    basic: {
      browsers: ['chromium', 'firefox', 'webkit']
    },
  },
  helpers: {
    Playwright: {
      url: 'https://the-internet.herokuapp.com/',
      show: true,
      restart:false,
      fullPageScreenshots: true,
      waitForAction: 1000,
      windowSize: '1366x768',
      browser: 'webkit',
    }
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
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
      allure: {}
  }
}
