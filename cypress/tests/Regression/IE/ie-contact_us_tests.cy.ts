import App from 'cypress/pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_IE'),
  "password": Cypress.env('MEMBER_PASSWORD_IE')
};
let app = new App();
let region = 'ie';

describe('IE Region - Contact Us Tests', () => {

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
    app.getPageTitle().should('eq','VELUX Rewards - Contact');
  });

  it('Verify Contact Us Section', () => {
    app.contactUsPage.sectionElement().should('be.visible');
    app.contactUsPage.viewSection();
    app.contactUsPage.headingElement().should('be.visible');
    app.contactUsPage.headingElement().should('have.text', 'Contact Us');
    app.contactUsPage.sectionBreadcrumbElement().should('be.visible');
  });

  it('Verify that the email address listed on the page is correct and functional.', () => {
    app.contactUsPage.emailElement().should('be.visible');
    app.contactUsPage.emailElement().should('have.text', 'myrewards@velux.co.uk');
    app.contactUsPage.emailElement().should('have.attr', 'href', 'mailto:myrewards@velux.co.uk');
  });

  it('Verify that the image on the contact us is displaying.', () => {
    app.contactUsPage.imageElement().should('be.visible');
  });

})
