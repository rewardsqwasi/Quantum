import claimRewardsLocators from "../locators/claimRewardsLocators.json";
import basketLocators from "../locators/basketLocators.json";

describe("GB New Shop", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.UK_LOGIN_MEMBER();
      });

      it('Should Verify that the shop tile is showing in claim reward page', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.rewardShop).should('be.visible');
    });
    it('Should Verify that when tile is clicked open PLAN A shop link', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.rewardShop).click();
    });
    it('Should Verify that by default grid view having all products', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.rewardShop).click();
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
    });
    it('Should Verify the user can switch between list and grid view', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.listViewofShop).click();
    });
    it('Should Verify that single/multiple categories can be filtered at once from left side panel', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.filterSelect1).click();
        cy.get(claimRewardsLocators.filterSelect2).click()
        cy.get(claimRewardsLocators.filterButton).click();
    });
    it('Should Verify that reset button clears all filters', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.filterSelect2).click()
        cy.get(claimRewardsLocators.filterButton).click();
        cy.get(claimRewardsLocators.resetButton).click();
     });
     it('Should Verify that products show points', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.rewardShop).click();
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
    });
    it('Should Verify that products are clickable.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.productSelect1).click();
    });
    it('Should Verify that in product detail page that product title, points,description, article number, package, weight and stock number should be shown', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.productSelect1).click();
    });
    it('Should Verify that back button redirects back to the compacon main shop page.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.productSelect1).click();
        cy.get(claimRewardsLocators.backToProductsBtn).click();
    });
    it('Should Verify that user can click on "add to cart" button', () => {
      cy.get(':nth-child(3) > .underlined-animated > .bi')
      .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
      .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
          });
      cy.get(claimRewardsLocators.selectButton1).click();
      cy.get(claimRewardsLocators.productSelect1).click();
      cy.get(claimRewardsLocators.basketBtn).click();
      });
      it('Should Verify that multiple product can be added to cart.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
        // Once the parent element is made visible, interact with the hidden element
        cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
            });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(claimRewardsLocators.productselect2).click();
        cy.get(claimRewardsLocators.incrementBtn).dblclick();
        cy.get(claimRewardsLocators.basketBtn).click();
        cy.get(claimRewardsLocators.backToProductsBtn).click();
        cy.get(claimRewardsLocators.productSelect4).click();
        cy.get(claimRewardsLocators.basketBtn).click();
        });
        it('Should Verify that the total points showing on right side', () => {
          cy.get(':nth-child(3) > .underlined-animated > .bi')
          .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
          .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
              });
          cy.get(claimRewardsLocators.selectButton1).click();
          cy.get(claimRewardsLocators.productSelect3).click();
          cy.scrollTo('bottom')
         for (let i = 0; i < 50; i++) {
             cy.scrollTo(0, i * 100); 
             cy.wait(80);
       }
          
       });
       it('Should Verify that user can click on "Cart" button', () => {
        cy.get(basketLocators.basketBtnHome).click();
      });
      it('Should Verify that cart page shows products added', () => {
        cy.get(basketLocators.basketBtnHome).click();
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
      }
      });
      it('Should Verify that the user can delete the product by clicking on the "delete" button.', () => { 
        cy.get(basketLocators.basketBtnHome).click(); 
        cy.get(':nth-child(3) > .grid > :nth-child(1) > .mt-3.md\\:pr-5 > .mt-3 > .flex').click();
        cy.get('.mt-3.md\:pr-5 > .mt-3 > .flex').click();
      });
      it('Verify that basket value < 20 points order can not placed ', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
        // Once the parent element is made visible, interact with the hidden element
        cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
            });
        cy.get(claimRewardsLocators.selectButton1).click();
        cy.get(':nth-child(4) > .card-container').click();
        cy.get(claimRewardsLocators.basketBtn).click();
        cy.get(basketLocators.basketBtnHome).click();
        cy.get(claimRewardsLocators.privacypolicyCheckbox).click();
        cy.get(basketLocators.completeOrderBtn).click();
      });
      it('Verify that successfull order redirects to the order completed page and Verify that points should be deducted for a every order and Verify that successfull order redirects to the order completed page and Verify Verify that the order confirmation page link is clickable', () => {
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
        cy.get(claimRewardsLocators.privacypolicyCheckbox).click();
        cy.get(basketLocators.completeOrderBtn).click();
      });
      it('Should Verify that "Back to Products" button on cart page', () => { 
        cy.get(basketLocators.basketBtnHome).click(); 
      });
});
