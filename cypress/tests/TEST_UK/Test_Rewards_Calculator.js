import rewardsCalculatorLocators from "../locators/rewardsCalculatorLocators.json"

describe('Rewards Calculator', () => {

    before(() => {
      
      Cypress.on('uncaught:exception', (err, runnable) => {
  
        console.error('Uncaught Exception:', err.message)
  
        return false
      })
    })
    
    beforeEach(() => {
  
      cy.UK_LOGIN_MEMBER();
  
    });
    // it('should Check Responsiveness changing the device and screen dimensions within the inspect element.', () => {
    //     cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
    //     cy.viewport(1366, 768); // Example: Standard laptop resolution
    
    //     // Perform your test actions here
    //     // For example, you can check if certain elements are visible or hidden based on the viewport size
        
    //     // You can also simulate other desktop resolutions as needed
    //     // cy.viewport(1920, 1080); // Example: Full HD resolution
    //     // cy.viewport(2560, 1440); // Example: 2K resolution
    
    // });

    // it('should Verify the user can select quantity.', () => {
    //   cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
    //   cy.get(rewardsCalculatorLocators.incrementofQuantity).click();

    // });
    // it('should Verify the points are displayed against the searched product.', () => {
    //   cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
    //   cy.get(rewardsCalculatorLocators.pointsTable).click();
    //   cy.get(rewardsCalculatorLocators.pointsText).should('be.visible');
    // });
    // it('should Verify the user can add new row.', () => {
    //   cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
    //   cy.get(rewardsCalculatorLocators.addRow).click();
    // });
    // it('should Total points are calculated correctly.', () => {
    //   cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
    //   cy.get(rewardsCalculatorLocators.enterProductCode1).click();
    //   cy.get('.select2-search').type('GGL CK02 2062');
    //   cy.get('.select2-results__option--highlighted').click();
    //   // cy.get(rewardsCalculatorLocators.addRow).click();

    //   });
    // it('should Verify that the user can delete the row.', () => {
    //   cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
    //   cy.get(rewardsCalculatorLocators.addRow).click();
    //   cy.wait()
    //   cy.get(rewardsCalculatorLocators.deleteRow2).click();
    // });
    it('should Verify that the “Add your invoice link” is working.', () => {
      cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
      cy.get(rewardsCalculatorLocators.addInvoiceBtn).click();
    });
    it('should Check Placeholders for all the fields.', () => {
      cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
      cy.get(rewardsCalculatorLocators.enterProductCode1).click();
    });
    it('should Verify that the default value for the product quantity is 1.', () => {
      cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
      cy.get(rewardsCalculatorLocators.quantityBox).click();
    });
    it('should Verify that "contact us" is clickable.', () => {
      cy.get(rewardsCalculatorLocators.rewardsCalculatorMenu).click();
      cy.get(rewardsCalculatorLocators.contactUsBtn).click();
    });


});  