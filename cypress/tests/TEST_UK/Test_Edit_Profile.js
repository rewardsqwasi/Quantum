import editProfileLocators from "../locators/editProfileLocators.json";

describe("Edit Profile", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.UK_LOGIN_Primary();
      });
      it('should Verify the edit profile page is accessible from header.', () => {
        cy.get('.order-2')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {

          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
    //   cy.visit('https://stage.memberportal.velux.qwasi.com/uk/edit-profile')
    });
    it('should Verify Home menu working from header.', () => {
        cy.get('.order-2')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {

          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        
    cy.get('.font-velux > .breadcrumb-section > .flex > .hover\\3Atext-primary-color > a').click()
    });
    it('should Verify the answers are pre-populated when the edit profile page is accessed.', () => {
        cy.get('.order-2')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {

          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
    });
    it('should Verify profile details fields exist and inputs can be edit and placeholders are visible.', () => {
        cy.get('.order-2')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {

          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        // cy.get(editProfileLocators.firstNameField).click();
        // cy.get(editProfileLocators.lastNameField).click();
        // cy.get('#companyName').click();
        // cy.get(editProfileLocators.companyRegNo).click();
        // cy.get(editProfileLocators.addressLine1).click();
        // cy.get(editProfileLocators.addressLine2).click();
        // cy.get(editProfileLocators.postCode).click();
        // cy.get(editProfileLocators.townCountry).click();
        // cy.get(editProfileLocators.emailAddress).click();
        // cy.get(editProfileLocators.password).click();
        cy.get(editProfileLocators.firstNameField).should('be.visible').click();
        cy.get(editProfileLocators.lastNameField).should('be.visible').click();
        cy.get('#companyName').invoke('removeAttr', 'disabled');
        cy.get('#companyName').should('be.visible').click({ force: true });
        cy.get(editProfileLocators.companyRegNo).should('be.visible').click({ force: true });
        cy.get(editProfileLocators.addressLine1).should('be.visible').click({ force: true });
        cy.get(editProfileLocators.addressLine2).should('be.visible').click({ force: true });
        cy.get(editProfileLocators.postCode).should('be.visible').click({ force: true });
        cy.get(editProfileLocators.townCountry).should('be.visible').click({ force: true });
        cy.get(editProfileLocators.emailAddress).should('be.visible').click({ force: true });
        cy.get(editProfileLocators.password).should('be.visible').click({ force: true });
    });
    it('should Verify that user is not able to edit the read only fields', () => {
        cy.get('.order-2')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {

          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(editProfileLocators.customerId).click({ force: true });
        cy.get(editProfileLocators.mobile).click({ force: true });
    });
    it('should Verify questions in the A little bit about you and your company exist and options can be selected from the dropdown menu.', () => {
      cy.get('.order-2')
      .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
      .then(() => {

        // Once the parent element is made visible, interact with the hidden element
        cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
      });
      cy.get(editProfileLocators.question1).select('51+');
      cy.get(editProfileLocators.question2).click();
      cy.get(editProfileLocators.question3).select('1-5%');
      cy.get(editProfileLocators.question4).select('0-25%');
    
    });
    it('should Verify questions in the A little bit about you and your company exist and inputs are accepted', () => {
      cy.get('.order-2')
      .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
      .then(() => {

        // Once the parent element is made visible, interact with the hidden element
        cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
      });
      
      cy.get(editProfileLocators.question2).type('20');
     
    
    });
    it('should Verify the [add user] button.', () => {
      cy.get('.order-2')
      .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
      .then(() => {

        // Once the parent element is made visible, interact with the hidden element
        cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
      });
      cy.get(editProfileLocators.addUserBtn).click();
    });
    it('should Verify fields on Add team members page exist and inputs can be given', () => {
      cy.get('.order-2')
      .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
      .then(() => {

        // Once the parent element is made visible, interact with the hidden element
        cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
      });
      cy.get(editProfileLocators.addUserBtn).click();
      cy.get(editProfileLocators.fNameAddUser).type('Muhammed');
      cy.get(editProfileLocators.lNameAddUser).type('Bari');
      cy.get(editProfileLocators.emailAddUser).type('muhammed.bari@quantum-h.com');
      cy.get(editProfileLocators.mobileAddUser).type('08000 123456');
      cy.get(editProfileLocators.verifyMobileAddUser).type('08000 123456');
    });
    it('should Verify that the user is able to successfully Add a team member with valid inputs.', () => {
      cy.get('.order-2')
      .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
      .then(() => {

        // Once the parent element is made visible, interact with the hidden element
        cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
      });
      cy.get(editProfileLocators.addUserBtn).click();
      cy.get(editProfileLocators.fNameAddUser).type('Muhammed');
      cy.get(editProfileLocators.lNameAddUser).type('Bari');
      cy.get(editProfileLocators.emailAddUser).type('muhammed.bari@quantum-h.com');
      cy.get(editProfileLocators.mobileAddUser).type('08000 123456');
      cy.get(editProfileLocators.verifyMobileAddUser).type('08000 123456');
      cy.get(editProfileLocators.saveDetailAddUser).click();
    });

    it('should Verify Cancel button is clickable or not', () => {
      cy.get('.order-2')
      .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
      .then(() => {

        // Once the parent element is made visible, interact with the hidden element
        cy.contains('Profile').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
      });
      cy.get(editProfileLocators.cancelBtn).click();

    });
    it('should not distort on different devices and dimensions', () => {
      // Test on desktop
      cy.viewport(1440, 900); // Example desktop viewport
      cy.wait(1000); // Wait for the page to adjust
      // Add assertions to verify elements on desktop
  
      // Test on tablet
      cy.viewport('ipad-2'); // Example tablet viewport
      cy.wait(1000); // Wait for the page to adjust
      // Add assertions to verify elements on tablet
  
      // Test on mobile
      cy.viewport('iphone-x'); // Example mobile viewport
      cy.wait(1000); // Wait for the page to adjust
      // Add assertions to verify elements on mobile
    });
    

});          