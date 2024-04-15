import claimRewardsLocators from "../../locators/claimRewardsLocators.json";
import basketLocators from "../../locators/basketLocators.json";

describe("Basket", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.UK_LOGIN_MEMBER();
      });

      it('Should Verify the banner is displaying.', () => {
        cy.get(basketLocators.basketBtnHome).click();
      });
      it('Should Verify the mini Dashboard is displaying.', () => {
        cy.get(basketLocators.basketBtnHome).click();
        cy.get(basketLocators.miniDashboard).should('be.visible');
      });
      it('Should Verify that the quantity of the selected product is correctly added to the basket page.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.productSelect2).click();
        cy.get(claimRewardsLocators.basketBtn).click();
        cy.get(basketLocators.basketBtnHome).click();
        cy.get(basketLocators.basketName).click();

          });
        it('should Verify that the price of the selected product is correctly added to the basket page and product image, name, price, and quantity are correctly displayed..', () => {
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
        
          it('Should Verify that the user can update the quantity of a product.', () => { 
            cy.get(basketLocators.basketBtnHome).click();
            // cy.get('.increment-btn > .fas').click();
            cy.get(claimRewardsLocators.incrementBtn).click();

          });
          it('Should Verify that the user can delete the product by clicking on the "delete" button.', () => { 
            cy.get(basketLocators.basketBtnHome).click();
            cy.get(basketLocators.deleteBtnofProBaket).click();
          });
          it('Should Verify that the shipping details section is displayed on the basket page and Verify that the user can edit their shipping details', () => { 
            cy.get(':nth-child(3) > .underlined-animated > .bi')
            .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
            .then(() => {
              // Once the parent element is made visible, interact with the hidden element
              cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
            });
            cy.get(claimRewardsLocators.selectButton1).click();
            cy.get(claimRewardsLocators.productSelect3).click();
            cy.get(claimRewardsLocators.basketBtn).click();
            cy.get(basketLocators.basketBtnHome).click();
            cy.get(basketLocators.shippingName).click();
            cy.get(basketLocators.address1).click();
            cy.get(basketLocators.address2).click();
            cy.get(basketLocators.cityShipping).click();
          });
          it('Should Verify that the user is prompted to update their shipping address or preferred shipping method if the information is missing.', () => { 
            cy.get(basketLocators.basketBtnHome).click();
            cy.get(basketLocators.shippingName).click();
            cy.get(basketLocators.shippingName).clear().type(' ');
            cy.get(basketLocators.completeOrderBtn).click();

          });
          it('Should Verify that the checkbox is unchecked by default when the user first lands on the cart page', () => { 
            cy.get(basketLocators.basketBtnHome).click();
            cy.get('#terms-input').should('exist').should('not.be.checked');
          });
        it('Should Verify that the terms and conditions pop-up window displays all necessary terms and conditions', () => { 
          cy.get(basketLocators.basketBtnHome).click();
          cy.get(basketLocators.tradeConditionsPage).click();
        });
        it('Should Verify that the terms and conditions pop-up window can be closed by clicking on the "Close" button or the "X" button.', () => { 
          cy.get(basketLocators.basketBtnHome).click();
          cy.get(basketLocators.tradeConditionsPage).click();
          cy.get(basketLocators.closeTradeCondition).click();

        });
        it('Should Verify that the user go back to products page by clicking on “back to products” button', () => { 
          cy.get(basketLocators.basketBtnHome).click();
          cy.get(claimRewardsLocators.backToProductsBtn).click();
        });
        it('Should Verify that all mandatory fields in the shipping details section are mandatory *', () => { 
            cy.get(basketLocators.basketBtnHome).click();
            cy.get(basketLocators.shippingName).click();
            cy.get(basketLocators.address1).click();
            cy.get(basketLocators.address2).click();
            cy.get(basketLocators.cityShipping).click();
        });
        it('Should Verify that validation messages appear when mandatory fields are not filled.', () => { 
          cy.get(basketLocators.basketBtnHome).click();
            cy.get(basketLocators.shippingName).click();
            cy.get(basketLocators.shippingName).clear().type(' ');
            cy.get(basketLocators.completeOrderBtn).click();
        });
        it('Should Verify that a pop-up message is displayed when the user successfully places an order.', () => { 
          cy.get(basketLocators.basketBtnHome).click();
        });
});