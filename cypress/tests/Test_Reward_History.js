import rewardHistoryLocators from "../locators/rewardHistoryLocators.json";

describe("Reward History", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.UK_LOGIN_MEMBER();
      });
      it('Should select an option from the status dropdown and responsiveness on desktop', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Rewards History').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
    cy.viewport(1366, 768); // Example: Standard laptop resolution
  });
      it('Gridview should be clickable',()=>{
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Rewards History').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(rewardHistoryLocators.gridView).click();
        
      });
      it('ListView should be clickable',()=>{
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Rewards History').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(rewardHistoryLocators.listView).click();
        
      });
      it('SearchFilter should be clickable and changeabele',()=>{
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Rewards History').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(rewardHistoryLocators.searchFilter3).click();
        

  });
  it('SearchFilter should be changeabele',()=>{
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards History').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(rewardHistoryLocators.searchFilter1).click();
});
      afterEach(() => {});
      
});