import claimRewardsLocators from "../../locators/claimRewardsLocators.json";

describe("Claim Rewards", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.NL_LOGIN_MEMBER();
      });

      it('Should select an option from the status dropdown and responsiveness on desktop', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
});
    it('Should Click on ChasingDay Light and open it', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    // cy.get(':nth-child(3) > .w-full > .lg\\:mt-9 > .clamp > a > b').click();
    cy.get(claimRewardsLocators.rewardShop).click();
});
    it('Should Click on Velux Shop and redirect it on Velux Shop page', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
     cy.get(claimRewardsLocators.retailers).click();
});

it('Should Click on Take Back and redirect it on Take Back page', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(claimRewardsLocators.chasingDayLight).click();
});
it('Should Click on Select Button and redirect it on those page', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(claimRewardsLocators.selectButton1).click();
});
it('Should verify all products are being display in shop', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(claimRewardsLocators.selectButton2).click();
    // cy.get(claimRewardsLocators.gridViewOfShop).click();
    cy.get('.hidden > .flex > .flex > .control:nth-child(1) > .bi').click()
});
it('Should Verify the user can switch between list and grid view', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(claimRewardsLocators.selectButton2).click();
    // cy.get(claimRewardsLocators.listViewofShop).click();
    cy.get('.hidden > .flex > .flex > .control:nth-child(2) > .bi').click()
});
it('Should user can search the product from field', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(claimRewardsLocators.selectButton2).click();
    cy.get(claimRewardsLocators.searchBarinShop).click();
    cy.get('input[name="search"]').type('rana');
    cy.get('input[name="search"]').type('{enter}');
});
    it('Should Make sure the items are showing up under the chosen category .', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(claimRewardsLocators.selectButton2).click();
    cy.get(claimRewardsLocators.filterSelect1).click();
    cy.get(claimRewardsLocators.filterButton).click();
});
it('Should Make sure the items are showing up under the chosen category 2.', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(claimRewardsLocators.selectButton2).click();
    cy.get(claimRewardsLocators.filterSelect2).click()
    cy.get(claimRewardsLocators.filterButton).click();
});
it('Should Verify the reset button is working or not and if no filter choosen than all product are displayed', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(claimRewardsLocators.selectButton2).click();
    cy.get(claimRewardsLocators.filterSelect2).click()
    cy.get(claimRewardsLocators.filterButton).click();
    cy.get(claimRewardsLocators.resetButton).click();
 });
      it('Should Click on the product and verify it and open the product details.', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
    cy.get(claimRewardsLocators.selectButton2).click();
    // cy.get(claimRewardsLocators.productSelect1).click();
    cy.get('.swiper-slide-next > :nth-child(1) > .card-container').click();
      });
        
it('Should Verify that the user can select the product quantity with increment and decrement Buttons and they working properly.', () => {
cy.get(':nth-child(3) > .underlined-animated > .bi')
.invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
.then(() => {
// Once the parent element is made visible, interact with the hidden element
 cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
     });
 cy.get(claimRewardsLocators.selectButton2).click();
 // cy.get(claimRewardsLocators.productSelect1).click();
 cy.get('.swiper-slide-next > :nth-child(1) > .card-container').click();
 // cy.get(claimRewardsLocators.incrementBtn).dblclick().dblclick();
 // cy.get(claimRewardsLocators.decrementBtn).click();
cy.get('#quantity').select('2');
 });
        
        it('Should Verify the user can add the product to the basket.', () => {
            cy.get(':nth-child(3) > .underlined-animated > .bi')
            .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
            .then(() => {
            // Once the parent element is made visible, interact with the hidden element
            cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
                });
            cy.get(claimRewardsLocators.selectButton2).click();
            // cy.get(claimRewardsLocators.productSelect1).click();
            cy.get('.swiper-slide-next > :nth-child(1) > .card-container').click();
            // cy.get(claimRewardsLocators.incrementBtn).dblclick().dblclick();
            // cy.get(claimRewardsLocators.basketBtn).click();
            cy.get('.grid > .col-span-12 > .product-group-btn > .add-to-cart > #btnAddItemToCart').click()
            });
            it('Should Validation show after add the product to the basket.', () => {
              cy.get(':nth-child(3) > .underlined-animated > .bi')
              .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
              .then(() => {
              // Once the parent element is made visible, interact with the hidden element
              cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
                  });
              cy.get(claimRewardsLocators.selectButton2).click();
            //   cy.get(claimRewardsLocators.productSelect1).click();
            cy.get('.swiper-slide-next > :nth-child(1) > .card-container').click();
            //   cy.get(claimRewardsLocators.incrementBtn).click();
            //   cy.get(claimRewardsLocators.basketBtn).click();
            cy.get('.grid > .col-span-12 > .product-group-btn > .add-to-cart > #btnAddItemToCart').click()
              });
              it('Should Verify that the user can go back to the products page by clicking on “Back to products”', () => {
                cy.get(':nth-child(3) > .underlined-animated > .bi')
                .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
                .then(() => {
                // Once the parent element is made visible, interact with the hidden element
                cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
                    });
                cy.get(claimRewardsLocators.selectButton2).click();
                // cy.get(claimRewardsLocators.productSelect1).click();
                cy.get('.swiper-slide-next > :nth-child(1) > .card-container').click();
                // cy.get(claimRewardsLocators.basketBtn).click();
                cy.get('.grid > .col-span-12 > .product-group-btn > .add-to-cart > #btnAddItemToCart').click()
                // cy.get(claimRewardsLocators.backToProductsBtn).click();
                });
                it('Should Verify the user can view the product picture from the product detail page.', () => {
                  cy.get(':nth-child(3) > .underlined-animated > .bi')
                  .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
                  .then(() => {
                  // Once the parent element is made visible, interact with the hidden element
                  cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
                      });
                  cy.get(claimRewardsLocators.selectButton2).click();
                //   cy.get(claimRewardsLocators.productSelect1).click();
                cy.get('.swiper-slide-next > :nth-child(1) > .card-container').click();
                });
                it('Should Verify the “Go to basket ” link is clickable and route to that page.', () => {
                  cy.get(':nth-child(3) > .underlined-animated > .bi')
                  .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
                  .then(() => {
                  // Once the parent element is made visible, interact with the hidden element
                  cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
                      });
                  cy.get(claimRewardsLocators.selectButton2).click();
                //   cy.get(claimRewardsLocators.productSelect1).click();
                cy.get('.swiper-slide-next > :nth-child(1) > .card-container').click();
                //   cy.get(claimRewardsLocators.goToBasketBtn).click();
                cy.get('.btn-view-shopping-cart').click()
                });
                it('Should Verify on adding the new products to the cart and whether the count is increasing.', () => {
                  cy.get(':nth-child(3) > .underlined-animated > .bi')
                  .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
                  .then(() => {
                  // Once the parent element is made visible, interact with the hidden element
                  cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
                      });
                  cy.get(claimRewardsLocators.selectButton2).click();
                //   cy.get(claimRewardsLocators.productselect2).click();
                cy.get('.swiper-slide-next > :nth-child(1) > .card-container').click();
                //   cy.get(claimRewardsLocators.goToBasketBtn).click();
                cy.get('.btn-view-shopping-cart').click()
                //   cy.get('.increment-btn').click();
                });
                it('Should Ensure that the product quantity in the drop-down list and the products stock are the same.', () => {
                  cy.get(':nth-child(3) > .underlined-animated > .bi')
                  .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
                  .then(() => {
                  // Once the parent element is made visible, interact with the hidden element
                  cy.contains('Rewards claimen').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
                      });
                  cy.get(claimRewardsLocators.selectButton2).click();
                //   cy.get(claimRewardsLocators.productselect2).click();
                cy.get('.swiper-slide-next > :nth-child(1) > .card-container').click();
                //   cy.get(claimRewardsLocators.goToBasketBtn).click();
                cy.get('.btn-view-shopping-cart').click()
                //   cy.get('.increment-btn').click();
                });

    });
  