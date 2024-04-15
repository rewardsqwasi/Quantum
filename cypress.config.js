const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    baseUrl:"https://ofac.treasury.gov/sanctions-programs-and-country-information",
    defaultCommandTimeout:300000,
    reporter: 'cypress-mochawesome-reporter',
    specPattern:'cypress/tests/**/*.{js,jsx,ts,tsx}',
    watchForFileChanges: false,
    experimentalRunAllSpecs:true,
    testIsolation:true,
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: false,
      jsons: false
    },
    pageLoadTimeout: 300000,
    retries: {
      runMode: 2,
      openMode: 0
    },
    trashAssetsBeforeRuns: false,
    trashAssetsBeforeScreenshot: false,
    trashAssetsBeforeVideoCapture: false
    
  }
});
