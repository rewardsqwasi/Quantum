const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  projectId: "6ngx5n",
  env: {...process.env},
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Tests Results',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: true,
      debug: true
    },
    baseUrl: process.env.BASE_URL,
    //specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    specPattern: [
      "**/*_tests.cy.{js,jsx,ts,tsx}",
      "**/*_test.cy.{js,jsx,ts,tsx}",
    ],
    testIsolation:false,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 30000,
    viewportHeight: 641,
    viewportWidth: 1366,
  },
  
});
