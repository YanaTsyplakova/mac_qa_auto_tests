const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    Puppeteer: {
      url: 'http://sjob-dev.ru',
      show: true,
      restart:false,
      fullPageScreenshots: true,
      // waitForTimeout: 10000,
      windowSize: '1920x1200',
      // browser: 'firefox',
      chrome: {
        args: [
            '--incognito',
        ],
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  //  multiple: {
  //   browsers: ["chrome", "firefox"]
  // },
  name: 'my-auto-e2e-tests',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}