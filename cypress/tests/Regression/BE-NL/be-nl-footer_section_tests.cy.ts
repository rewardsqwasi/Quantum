import App from 'cypress/pageObjects/BE-NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_BE'),
  "password": Cypress.env('MEMBER_PASSWORD_BE')
};
let app = new App();
let region = 'be';

describe('BE (NL lang) Region - Footer Section Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToNL();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Footer Contact Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.contactEmailFooterTextElement().should('be.visible');
    app.homePage.contactNumberFooterTextElement().should('be.visible');
    app.homePage.getAddressFooterText().should('eq', 'VELUX BelgiumBoulevard de l\'Europe 1211301 Bierges (Waver)');
  });

  it('Verify Footer Links Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.clickTermsLinkFooter();
    let termUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termUrl);
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);
    app.homePage.clickFAQLinkFooter();
    let faqUrl = Cypress.env('BASE_URL') + '/'+region+'/faq';
    app.getURL().should('contain', faqUrl);
    app.homePage.clickHomeLinkFooter();
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', homeUrl);
    app.homePage.clickVeluxPrivacyLinkFooter();
    let privacyUrl = Cypress.env('BASE_URL') + '/'+region+'/privacy-policy';
    app.getURL().should('contain', privacyUrl);
  });

  it('Verify Footer Social Links Section', () => {
    app.homePage.open(region);
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.veluxTwitterLinkElement().should('be.visible');
    app.homePage.veluxYoutubeLinkElement().should('be.visible');
    app.homePage.veluxFacebookLinkElement().should('be.visible');
  });

})
