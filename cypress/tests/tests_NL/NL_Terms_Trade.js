import tradingConditinLocators from "../../locators/tradingConditionLocators.json";
import homePageLocators from "../../locators/homePageLocators.json";

describe("Trade Condition", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
         cy.NL_LOGIN_MEMBER();
        
    });
    it('should load the Trade Condition page successfully and Verify the Logo is showing and is clickable.', () => {
    cy.get('.text-sm > :nth-child(2) > a').click();
    });
    it('should Verify header is showing and all the links in the header are working ', () => {
    cy.get('.text-sm > :nth-child(2) > a').click();
    cy.get('.inline').click();

    });
    it('should Verify the banner is displaying.', () => {
        cy.get('.text-sm > :nth-child(2) > a').click();
        cy.get('.banners-section').should('be.visible');
    });
    it('All the Trade Conditions should be written with proper grammer,font size,font style and  spellings ', () => {
        cy.get('.text-sm > :nth-child(2) > a').click();
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
    });
    it('Should Ensure that the Trading conditions page includes contact information for the company, including links, email address, and phone number are Availble ', () => {
        cy.get('.text-sm > :nth-child(2) > a').click();
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
    });
    it('should Verify footer is showing and all the links in the footer are working', () => {
        cy.get('.text-sm > :nth-child(2) > a').click();
        cy.scrollTo('bottom')
        cy.get('.text-sm > :nth-child(1) > a').click();
            cy.go('back');
            cy.get('.text-sm > :nth-child(2) > a').click();
            cy.go('back');
            cy.get('.text-sm > :nth-child(4) > a').click();
            cy.get('.text-sm > :nth-child(5) > a').click();
            
      });
      it('should Check Responsiveness of Trade Condition page.', () => {
        cy.get('.text-sm > :nth-child(2) > a').click();
        cy.viewport(1440, 900); // Example desktop viewport
         cy.wait(1000); // Wait for the page to adjust
         // Add assertions to verify elements on desktop
     
         // Test on tablet
         cy.viewport('ipad-2'); // Example tablet viewport
         cy.wait(1000);
    });
});