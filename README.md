## UI Sanity Tests for Rewards Project ##

### [About](#about) **|** [Getting Started](#tech-stack) **|** [Installation](#pre-requisites) **|** [Writing Tests](#writing-tests) **|** [Page Objects](#page-objects) **|** [Reports](#reports) **|** [CI/CD](#ci/cd) ###

### About ###

Currently this framework has been developed to run scripts for **WEB** platform.

The tests run Chromium/Chrome, Electron, Firefox, browsers is configured currently for running browser tests.

### Tech-stack ###

* [Node.js](https://nodejs.org/en/docs/) - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser
* [Cypress](https://docs.cypress.io/guides/overview/) - Cypress is a next generation front end testing tool built for the modern web. It can also be configured to use full (non-headless) Chrome or Chromium, Electron and Firefox.

## Installation

Prerequisites:
* NodeJS installed globally in the system. https://nodejs.org/en/download/

Setup:
* Clone the repository into a folder
* Go inside the RegressionTests folder and run following command from terminal/command prompt
```bash
npm install 
```

## Commands to run the tests

* Run all the tests present in the "./cypress/e2e" directory by using the below command
```bash
npm run test
```
* To Open Cypress Test Runner
```bash
npm run cypress:open
```

* Run tests in headed mode
```bash
npx cypress run --headed
```

* Run tests in specfic browser (chrome)
```bash
npx cypress run --headed --browser chrome
```

### Page Objects ###

* So, "pages" will handle all the selectors and methods,
This framework is strictly written using page-object design pattern. https://martinfowler.com/bliki/PageObject.html

### Reports ###

* Cypress Mochawesome Reporter is integrated

### CI/CD ###
* TODO
