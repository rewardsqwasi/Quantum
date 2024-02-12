import purchaseStatusLocators from "../locators/purchaseStatusLocators.json";

describe("Purchase Status", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.error("Uncaught Exception:", err.message);

      return false;
    });
  });

  beforeEach(() => {
    cy.UK_LOGIN_MEMBER();
    

 
  });

  it("should visible your points history", () => {

    cy.get('a.flex.gap-2.items-center.p-2')
      .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
      .then(() => {
        // Once the parent element is made visible, interact with the hidden element
        cy.contains('Your Points History').click(); // Replace 'Your Po...' with the text of the hidden element
      });
   
     cy.get('.font-poppins > .breadcrumb-section > .flex > .hover\\3Atext-primary-color:nth-child(3)').contains('VELUX Rewards - Purchase Status');
 
    
     
    
  });
  
  it('Should select an option from the status dropdown', () => {
    cy.get('a.flex.gap-2.items-center.p-2')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Your Points History').click(); // Replace 'Your Po...' with the text of the hidden element
    });

    try {
      // Select an option by value
      cy.get(purchaseStatusLocators.statusDropdown).select('Rejected');

      // Alternatively, select by visible text
      // cy.get('#dropdownId').select('Option Text');
    } catch (error) {
      cy.log(`Error: ${error.message}`);
      throw new Error('Unable to select an option from the dropdown.');
    }
  });
   it('Edit pencil icon should appearing and clickable', () => {
    cy.get('a.flex.gap-2.items-center.p-2')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Your Points History').click(); // Replace 'Your Po...' with the text of the hidden element
    });
   cy.get(purchaseStatusLocators.editButtonOnStatus).click();
});
it('Submitt Button should be clickable and submitting it', () => {
  cy.get('a.flex.gap-2.items-center.p-2')
  .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
  .then(() => {
    // Once the parent element is made visible, interact with the hidden element
    cy.contains('Your Points History').click(); // Replace 'Your Po...' with the text of the hidden element
  });
  cy.get(purchaseStatusLocators.editButtonOnStatus).click();
  cy.get(purchaseStatusLocators.submittButtonOfInnvoice).click();
});
  afterEach(() => {});
});
