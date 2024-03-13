import earnPointsLocators from "../locators/earnPointsLocators.json";
import homePageLocators from "../locators/homePageLocators.json";

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
      it('should load the earn points page successfully', () => {
        cy.get(homePageLocators.earnPoints).click();

        cy.url().should('include', '/how-to-earn-points');

    });
    it('should Click on each header link and verify navigation.', () => {
        cy.get(homePageLocators.earnPoints).click();
        cy.get('.inline').click();

    });
    it('should Verify that the banner element is displayed on the page.', () => {
        cy.get(homePageLocators.earnPoints).click();
        cy.get('.banners-section').should('be.visible');
    });
    it('should Validate the content and layout of the banner across different screen sizes.', () => {
        cy.get(homePageLocators.earnPoints).click();
        cy.get('.banners-section').should('be.visible');
        cy.viewport(1440, 900); // Example desktop viewport
         cy.wait(1000); // Wait for the page to adjust
         // Add assertions to verify elements on desktop
     
         // Test on tablet
         cy.viewport('ipad-2'); // Example tablet viewport
         cy.wait(1000);
    });
    it('should Test the display and accuracy of data in the mini dashboard elements.', () => {
        cy.get(homePageLocators.earnPoints).click();
        cy.get('.banners-section').should('be.visible');
    });
    it('should Verify the visibility and correctness of all sections within the page content.', () => {
        cy.get(homePageLocators.earnPoints).click();
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
    });
    it('should Footer links should be visible and correctly labeled.', () => {
        cy.get(homePageLocators.earnPoints).click();
        cy.scrollTo('bottom')
        
    });
    it('should Click on each footer link and verify navigation.', () => {
        cy.get(homePageLocators.earnPoints).click();
        cy.scrollTo('bottom');
        cy.get('.text-sm > :nth-child(1) > a').click();
        cy.go('back');
        cy.get('.text-sm > :nth-child(2) > a').click();
        cy.go('back');
        cy.get('.text-sm > :nth-child(4) > a').click();
        cy.go('back');
        cy.get(':nth-child(7) > a').click();
        
        
    });
    it('should Validate any social media links.', () => {
        cy.get(homePageLocators.earnPoints).click();
        cy.scrollTo('bottom');
        cy.get(':nth-child(1) > .h-8 > .flex').click();
    });
});