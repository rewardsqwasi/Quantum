const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://ofac.treasury.gov/sanctions-programs-and-country-information",
    defaultCommandTimeout:12000,
    specPattern:'cypress/tests/**/*.{js,jsx,ts,tsx}',
    watchForFileChanges: false,
    experimentalRunAllSpecs:true,
    testIsolation:true
  },
});
