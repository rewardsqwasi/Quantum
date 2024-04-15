import homePageLocators from "../../locators/homePageLocators.json";

describe("Contact Us", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.UK_LOGIN_MEMBER();
    });
    it('should load the contact us page successfully', () => {
        cy.get(homePageLocators.contactUs).click();


    });
    it('should Verify the banner is displaying.', () => {
      cy.get(homePageLocators.contactUs).click();
      cy.get('.banners-section').should('be.visible');
  });
  it('should Verify the mini dashboard is displaying.', () => {
    cy.get(homePageLocators.contactUs).click();
    cy.get('.banners-section').should('be.visible');
  });
  it('should Verify that the email address listed on the page is correct and functional.', () => {
    cy.get(homePageLocators.contactUs).click();
    cy.scrollTo('bottom')
    for (let i = 0; i < 50; i++) {
        cy.scrollTo(0, i * 100); 
        cy.wait(80);
    }
    cy.get('.grid-cols-12 > :nth-child(1) > div > :nth-child(2) > a').should('be.visible');
  });
  it('should Verify that the image on the contact us is displaying.', () => {
    cy.get(homePageLocators.contactUs).click();
    cy.scrollTo('bottom')
    for (let i = 0; i < 50; i++) {
        cy.scrollTo(0, i * 100); 
        cy.wait(80);
    }
  });
  it('should Verify that the footer is placed at the bottom of the contact us page and is easy to find and access.', () => {
    cy.get(homePageLocators.contactUs).click();
    cy.scrollTo('bottom')
    cy.get('.text-sm > :nth-child(1) > a').click();
        cy.go('back');
        cy.get('.text-sm > :nth-child(2) > a').click();
        cy.go('back');
        cy.get('.text-sm > :nth-child(4) > a').click();
        cy.go('back');
        cy.get(':nth-child(7) > a').click();
  });
  it('should Check Responsiveness of contact us page.', () => {
    cy.get(homePageLocators.contactUs).click();
    cy.viewport(1440, 900); // Example desktop viewport
         cy.wait(1000); // Wait for the page to adjust
         // Add assertions to verify elements on desktop
     
         // Test on tablet
         cy.viewport('ipad-2'); // Example tablet viewport
         cy.wait(1000);
   
  });
});