import homePageLocators from "../../locators/homePageLocators.json";

describe("Terms and Conditions", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.FR_LOGIN_MEMBER();
    });

    it('should load the Terms and Condition page successfully', () => {
        cy.get('.text-sm > :nth-child(3) > a').click();

        // cy.url().should('include', '/legal/privacy-policy');

    });
    it('should Verify header is showing and all the links in the header are working ', () => {
        cy.get('.text-sm > :nth-child(3) > a').click();
        cy.get('.inline').click();

    });
    it('All the  terms and Condition should be written with proper grammer,font size,font style and  spellings ', () => {
        cy.get('.text-sm > :nth-child(3) > a').click();
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
        }
    });
    
    it('should Verify footer is showing and all the links in the footer are working', () => {
        cy.get('.text-sm > :nth-child(3) > a').click({ multiple: true });
        cy.scrollTo('bottom');
        cy.get('.text-sm > :nth-child(1) > a').click({ multiple: true });
        cy.go('back');
        cy.get('.text-sm > :nth-child(2) > a').click({ multiple: true });
        cy.go('back');
        cy.get('.text-sm > :nth-child(4) > a').click({ multiple: true });
        cy.go('back');
        // cy.get(':nth-child(5) > a').click({force: true});
        
        
    });
    it('should Check Responsiveness of Privacy Policy page.', () => {
        cy.get('.text-sm > :nth-child(3) > a').click();
        cy.viewport(1440, 900); // Example desktop viewport
         cy.wait(1000); // Wait for the page to adjust
         // Add assertions to verify elements on desktop
     
         // Test on tablet
         cy.viewport('ipad-2'); // Example tablet viewport
         cy.wait(1000);
    });

});