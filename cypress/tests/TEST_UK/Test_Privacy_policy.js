import earnPointsLocators from "../../locators/earnPointsLocators.json";
import homePageLocators from "../../locators/homePageLocators.json";

describe("Privacy Policy", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.UK_LOGIN_MEMBER();
    });

    it('should load the privacy policy page successfully', () => {
        cy.get(homePageLocators.privacyPolicy).click();

        // cy.url().should('include', '/legal/privacy-policy');

    });
    it('should Verify header is showing and all the links in the header are working ', () => {
        cy.get(homePageLocators.privacyPolicy).click();
        cy.get('.inline').click();

    });
    it('All the privacy policy terms should be written with proper grammer,font size,font style and  spellings ', () => {
        cy.get(homePageLocators.privacyPolicy).click();
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
    });
    it('Should Ensure that the Privacy Policy page includes contact information for the company, including links, email address, and phone number are working. ', () => {
        cy.get(homePageLocators.privacyPolicy).click();
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
        cy.get(':nth-child(131)').should('be.visible');
    });
    it('should Verify footer is showing and all the links in the footer are working', () => {
        cy.get(homePageLocators.privacyPolicy).click();
        cy.scrollTo('bottom');
        cy.get('.text-sm > :nth-child(1) > a').click();
        cy.go('back');
        cy.get('.text-sm > :nth-child(2) > a').click();
        cy.go('back');
        cy.get('.text-sm > :nth-child(4) > a').click();
        cy.go('back');
        cy.get(':nth-child(7) > a').click();
        
        
    });
    it('should Check Responsiveness of Privacy Policy page.', () => {
        cy.get(homePageLocators.privacyPolicy).click();
        cy.viewport(1440, 900); // Example desktop viewport
         cy.wait(1000); // Wait for the page to adjust
         // Add assertions to verify elements on desktop
     
         // Test on tablet
         cy.viewport('ipad-2'); // Example tablet viewport
         cy.wait(1000);
    });

});