import App from 'cypress/pageObjects/PT/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_PT'),
  "password": Cypress.env('MEMBER_PASSWORD_PT')
};
let app = new App();
let region = 'pt';

describe('PT Region - Contact Us Tests', () => {

  before(() => {
    app.loginPage.open(region);
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
    app.getPageTitle().should('eq','Recompensas VELUX - Contacte-nos');
  });

  it('Verify Contact Us Section', () => {
    app.contactUsPage.sectionElement().should('be.visible');
    app.contactUsPage.viewSection();
    app.contactUsPage.headingElement().should('be.visible');
    app.contactUsPage.headingElement().should('have.text', 'Contacte-nos');
    app.contactUsPage.sectionBreadcrumbElement().should('be.visible');
  });

  it('Verify that the email address listed on the page is correct and functional.', () => {
    app.contactUsPage.emailElement().should('be.visible');
    app.contactUsPage.emailElement().should('include.text', 'velux-p@velux.com');
    //app.contactUsPage.emailElement().should('have.attr', 'href', 'mailto:veluxandco@velux.com');
  });

  it('Verify that the image on the contact us is displaying.', () => {
    app.contactUsPage.imageElement().should('be.visible');
  });

})
