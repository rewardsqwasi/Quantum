import { defineConfig } from 'cypress';
require('dotenv').config()

module.exports = defineConfig({
  experimentalInteractiveRunEvents: true,
  projectId: "6ngx5n",
  env: {...process.env,
    ci:true},
  reporter: 'cypress-multi-reporters',
  video: true,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/',
        reportFilename: "[name]",
        quite: true,
        overwrite: false,
        html: false,
        json: true,
      }
    },
    baseUrl: process.env.BASE_URL,
    //specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    specPattern: [
      "cypress/tests/**/uk_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/nl_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/fr_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/da_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/ie_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/no_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/dk_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/be_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/es_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/it_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/se_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/pt_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/de_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/at_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/ch_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/**/phb_region_test.cy.{js,jsx,ts,tsx}",
      "cypress/tests/UK/**_tests.cy.{js,jsx,ts,tsx}",
    ],
    testIsolation:false,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 30000,
    viewportHeight: 641,
    viewportWidth: 1366,
    screenshotsFolder: 'cypress/reports/screenshots',
    videosFolder: 'cypress/reports/videos',
  },
  
});
