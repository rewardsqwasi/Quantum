const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
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
      "cypress/tests/**/uk_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/nl_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/fr_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/da_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/login_tests.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/forget_pin_tests.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/create_account_tests.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/home_page_tests.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/add_purchase_tests.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/footer_section_tests.cy.{js,jsx,ts,tsx}",
    ],
    testIsolation:false,
    pageLoadTimeout: 80000,
    defaultCommandTimeout: 20000,
    viewportHeight: 641,
    viewportWidth: 1366,
  },
  
});
