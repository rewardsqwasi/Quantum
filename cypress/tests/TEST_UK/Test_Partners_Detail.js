import claimRewardsLocators from "../../locators/claimRewardsLocators.json";
import partnersLocators from "../../locators/partnerLocators.json";

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
      it(`should Click on “View details” button and verify if it opens the details page.`, () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
       });
        cy.get(claimRewardsLocators.retailers).click();
        cy.get(partnersLocators.view1Details).click();
        
     });
     it('The banner should be displayed prominently on the page and should contain  expected content such as relevant images, text, and any associated links or buttons.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
         cy.get(partnersLocators.view1Details).click();
         cy.get('.banners-section').should('be.visible');
    });
    it('The mini dashboard should present accurate and up-to-date information based on the users data or system status. The displayed data should match the expected values.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
         cy.get(partnersLocators.view1Details).click();
         cy.get('.banners-section').should('be.visible');
    });
    it('ShouldCheck responsiveness of the page, changing the device and screen dimensions within the inspect element.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
         cy.get(partnersLocators.view1Details).click();
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
    it('Should Verify the partner image is displayed and Verify that partners details text should be proper format.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
         cy.get(partnersLocators.view1Details).click();
         cy.get('.reward-desc > .col-span-12 > .mx-auto').should('be.visible');
         cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
    });
    it('Should Verify that partners details text should be according to current region respected language.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
         cy.get(partnersLocators.view1Details).click();
         cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
    });
    it('Should Verify that value is displaying in denominations drop-down.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
         cy.get(partnersLocators.view1Details).click();
         cy.get(partnersLocators.choose1inDetails).should('be.visible');
    });
    it('Should Click claim button without selecting any value from denomination.', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
     cy.get(claimRewardsLocators.retailers).click();
     cy.get(partnersLocators.view1Details).click();
     cy.get(partnersLocators.claim1inDetails).click();
});
it('Should Click claim button without selecting any value from denomination.', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
     cy.get(claimRewardsLocators.retailers).click();
     cy.get(partnersLocators.view1Details).click();
     cy.get(partnersLocators.claim1inDetails).click();
});
it('Should Verify that the denomination values has currency sign based on current region ', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
     cy.get(claimRewardsLocators.retailers).click();
     cy.get(partnersLocators.view1Details).click();
     cy.get(partnersLocators.choose1inDetails).select('5');
    
});
it('Should Chossing value from denomiaction and clicking the "Claim" button and Verify that points are deducted from memeber total points based on value of voucher . ', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
     cy.get(claimRewardsLocators.retailers).click();
     cy.get(partnersLocators.view1Details).click();
     cy.get(partnersLocators.choose1inDetails).select('5');
     cy.get(partnersLocators.claim1inDetails).click();
});

it('Should Verify clicking on “Cancel” button redirects user back to partners page. ', () => {
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });
     cy.get(claimRewardsLocators.retailers).click();
     cy.get(partnersLocators.view1Details).click();
     cy.get(partnersLocators.cancelBtninDetails).click();

});
        
});