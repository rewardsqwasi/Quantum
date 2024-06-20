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
      "**/*_tests.cy.{js,jsx,ts,tsx}",
      "**/*_test.cy.{js,jsx,ts,tsx}",
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
