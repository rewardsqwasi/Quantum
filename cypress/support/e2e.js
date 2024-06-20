// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require('cypress-xpath');
import 'cypress-mochawesome-reporter/register';
import 'cypress-file-upload';
import addContext from "mochawesome/addContext";

// Import commands.js using ES2015 syntax:
import './commands'

const ci = Cypress.env('ci');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
if(ci){
  Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      const screenshot = `screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
      addContext({ test }, screenshot);
    }
    const video = `videos/${Cypress.spec.name}.mp4`;
    addContext({ test }, video);
  });
}
// Alternatively you can use CommonJS syntax:
// require('./commands')