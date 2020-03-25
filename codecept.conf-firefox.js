const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://sjob-dev.ru',
      show: true,
      restart:false,
      fullPageScreenshots: true,
      waitForAction: 1000,
      browser: 'firefox',
      firefox: {
        defaultViewport: {
          width: 1366,
          height: 768,
        }
      },
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
    screenshotOnFail: {
      enabled: true
    }
  }
}