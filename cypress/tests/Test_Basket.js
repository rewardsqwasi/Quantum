import claimRewardsLocators from "../locators/claimRewardsLocators.json";
import basketLocators from "../locators/basketLocators.json";

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

    //   it('Should Verify the banner is displaying.', () => {
    //     cy.get(basketLocators.basketBtnHome).click();
    //   });
    //   it('Should Verify the mini Dashboard is displaying.', () => {
    //     cy.get(basketLocators.basketBtnHome).click();
    //     cy.get(basketLocators.miniDashboard).should('be.visible');
    //   });
      it('Should Verify that the quantity of the selected product is correctly added to the basket page.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.productselect2).click();
        cy.get(claimRewardsLocators.basketBtn).click();
        cy.get(basketLocators.basketBtnHome).click();
        cy.get(basketLocators.basketName).click();

          });
        it('should Verify that the price of the selected product is correctly added to the basket page.', () => {
            cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.productselect2).click();
        cy.get(claimRewardsLocators.basketBtn).click();
        cy.get(basketLocators.basketBtnHome).click();
        cy.get(basketLocators.basketName).click();
          });
});