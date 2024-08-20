import App from 'cypress/pageObjects/BE/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_BE'),
  "password": Cypress.env('MEMBER_PASSWORD_BE')
};
let app = new App();
let region = 'be';

describe('BE (FR lang) Region - Contact Us Tests', () => {

  before(() => {
    app.loginPage.open(region);
    app.loginPage.switchToFR();
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Club - Contactez-nous');
  });

  it('Verify Contact Us Section', () => {
    app.contactUsPage.sectionElement().should('be.visible');
    app.contactUsPage.viewSection();
    app.contactUsPage.headingElement().should('be.visible');
    app.contactUsPage.headingElement().should('have.text', 'Nous contacter');
    app.contactUsPage.sectionBreadcrumbElement().should('be.visible');
  });

  it('Verify that the email address listed on the page is correct and functional.', () => {
    app.contactUsPage.emailElement().should('be.visible');
    app.contactUsPage.emailElement().should('have.text', 'professionals-be@velux.com');
    app.contactUsPage.emailElement().should('have.attr', 'href', 'mailto:professionals-be@velux.com');
  });

  it('Verify that the image on the contact us is displaying.', () => {
    app.contactUsPage.imageElement().should('be.visible');
  });

})
