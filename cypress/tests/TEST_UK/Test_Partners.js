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
    it('Should Click on Partners and redirect it on Partners page', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
    });
    it('The banner should be displayed prominently on the page and should contain  expected content such as relevant images, text, and any associated links or buttons.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
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
         cy.get('.banners-section').should('be.visible');
    });
    it('Should Verify all the partners are displaying on the page.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
         cy.scrollTo('bottom');
         cy.get(partnersLocators.gridView).click();
    });
    it('Should Verify user can switch between list and grid view.', () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
         cy.get(claimRewardsLocators.retailers).click();
         cy.get(partnersLocators.listView).click();
    });
    it(`should work correctly in {viewMode} view mode on different devices and screen sizes`, () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.retailers).click();
        cy.get(partnersLocators.listView).click();
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
        
        cy.get(partnersLocators.gridView).click();
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
    it(`should Click on claim button without selecting any denomination and see if validation is appearing.`, () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.retailers).click();
        cy.get(partnersLocators.claim1Btn).click();
        cy.wait(1000);
    });
    it(`should Verify denominations are displaying in the drop-down for every partner.`, () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.retailers).click();
        cy.get(partnersLocators.choose1).select('5');
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
    it(`should Choose a denomination value and claim the voucher`, () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.retailers).click();
        cy.get(partnersLocators.choose1).select('5');
        cy.get(partnersLocators.claim1Btn).click();
    });
    it(`should Verify that clicking the claim button again while the while page is loading, does not cause any error or buy more vouchers.`, () => {
        cy.get(':nth-child(3) > .underlined-animated > .bi')
        .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
        .then(() => {
          // Once the parent element is made visible, interact with the hidden element
          cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
        });
        cy.get(claimRewardsLocators.retailers).click();
        cy.get(partnersLocators.choose1).select('5');
        cy.get(partnersLocators.claim1Btn).click().click();
    });
    
});