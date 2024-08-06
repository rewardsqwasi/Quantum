import App from 'cypress/pageObjects/PT/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_PT'),
  "password": Cypress.env('MEMBER_PASSWORD_PT')
};
let app = new App();
let region = 'pt';

describe('PT Region - Footer Section Tests', () => {

  before(() => {
    app.loginPage.open(region);
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Footer Contact Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.contactEmailFooterTextElement().should('be.visible');
    app.homePage.contactNumberFooterTextElement().should('be.visible');
    app.homePage.getAddressFooterText().should('eq', '\nVELUX PortugalTravessa das Pedras Negras, 1 - 2º1100-404 \u00a0Lisboa\n');
  });

  it('Verify Footer Links Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.clickHomeLinkFooter();
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', homeUrl);
    app.homePage.clickTermsLinkFooter();
    let termUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termUrl);
    app.homePage.clickVeluxPrivacyLinkFooter();
    let privacyUrl = Cypress.env('BASE_URL') + '/'+region+'/privacy-policy';
    app.getURL().should('contain', privacyUrl);
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);    
  });

  it('Verify Footer Social Links Section', () => {
    app.homePage.open(region);
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.veluxFacebookLinkElement().should('be.visible');
  });

})
