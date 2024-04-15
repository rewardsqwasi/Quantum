import trainingPointsLocators from "../../locators/trainingPointsLocators.json";
import homePageLocators from "../../locators/homePageLocators.json"

describe("Training Points", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.NL_LOGIN_MEMBER();
      });
      it("should Verify that all the header links are present and clickable.", () => {

        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });

      });
      it("should Verify that the banners are displayed and contain the correct information:", () => {

        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });
          cy.get(trainingPointsLocators.bannerSection).should('be.visible');
      });
      it("should Verify that the mini dashboard shows the correct information:", () => {

        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });
          cy.get(trainingPointsLocators.miniDashboard).should('be.visible');
      });
      it('Should Verify that the breadcrumb text shows the correct navigation path', () => { 
        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });
          cy.get('.breadcrumb-section').should('be.visible').contains('Trainingspunten');
      });
      it('Should Verify that the "Claim your training workshop points" section is displayed', () => { 
        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });
          cy.get('.col-start-2 > :nth-child(2)').should('be.visible');
      });
      it('Should Verify that the "Validate Code" field and button are functional', () => { 
        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });
          cy.get(trainingPointsLocators.validateInput).click();
          cy.get(trainingPointsLocators.validateBtn).click();
      });
      it('Should Verify that the "Sign up here for training" link is functional', () => { 
        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });
          cy.get(trainingPointsLocators.signUpLink).click();
      });
      it('Should Verify that the body text is displayed and contains the correct information:', () => { 
        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });
          cy.get(trainingPointsLocators.signUpLink).should('be.visible');
      });
      it('Should Verify that the info panel shows the correct information:', () => { 
        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });
          cy.get(trainingPointsLocators.signUpLink).should('be.visible');
      });
      it('Should Verify that all footer links are present and clickable:', () => { 
        cy.get('a.flex.gap-2.items-center.p-2')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Trainingspunten').click(); // Replace 'Your Po...' with the text of the hidden element
          });
          cy.get('.text-sm > :nth-child(1)').click({multiple: true });
    cy.go('back');
    cy.get('.text-sm > :nth-child(2) > a').click({multiple: true });
    cy.go('back');
    cy.get('.text-sm > :nth-child(4) > a').click();
    cy.go('back');
    cy.get('.text-sm > :nth-child(5) > a').click();
    cy.go('back');
    cy.get('.text-sm > :nth-child(3) > a').click();
     
      });
    });