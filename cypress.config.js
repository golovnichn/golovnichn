const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    // baseUrl: 'http://www.webdriveruniversity.com/',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: false,
    trashAssetsBeforeRuns:true,
    video: false, 
    // experimentalSkipDomainInjection: [
    //   '*.salesforce.com',
    //   '*.force.com',
    //   '*.google.com',
    // ]
    // viewportHeight:1080,
    // viewportWidth: 1920,
    // env: {
    //   first_name: "Sarah",
    //   webdriveruni_homepage: "http://www.webdriveruniversity.com/"
    // }
  },
});
