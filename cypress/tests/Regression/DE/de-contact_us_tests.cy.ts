import App from 'cypress/pageObjects/DE/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DE'),
  "password": Cypress.env('MEMBER_PASSWORD_DE')
};
let app = new App();
let region = 'de';

describe('DE Region - Contact Us Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX PLUS - Kontakt');
  });

  it('Verify Contact Us Section', () => {
    app.contactUsPage.sectionElement().should('be.visible');
    app.contactUsPage.viewSection();
    app.contactUsPage.headingElement().should('be.visible');
    app.contactUsPage.headingElement().should('have.text', 'Kontaktieren Sie uns');
  });

  it('Verify that the email address listed on the page is correct and functional.', () => {
    app.contactUsPage.emailElement().should('be.visible');
    app.contactUsPage.emailElement().should('have.text', 'plus@velux.de');
    app.contactUsPage.emailElement().should('have.attr', 'href', 'mailto:plus@velux.de');
  });

  it('Verify that the image on the contact us is displaying.', () => {
    app.contactUsPage.imageElement().should('be.visible');
  });

})