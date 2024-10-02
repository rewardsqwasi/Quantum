import App from 'cypress/pageObjects/CH-FR/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_CH_FR')
};
let app = new App();
let region = 'ch';

describe('CH (FR lang) Region - Footer Section Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToFR();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Footer Contact Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.contactEmailFooterTextElement().should('be.visible');
    app.homePage.contactNumberFooterTextElement().should('be.visible');
    app.homePage.getAddressFooterText().should('eq', 'VELUX Schweiz AGBahnhofstrasse 40CH-4663 Aarburg');
  });

  it('Verify Footer Links Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.footerLinksElement().should('be.visible');
    app.homePage.clickHomeLinkFooter();
    let homeUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', homeUrl);
    app.homePage.clickTermsLinkFooter();
    let termUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/terms-conditions';
    app.getURL().should('contain', termUrl);
    app.homePage.clickVeluxPrivacyLinkFooter();
    let privacyUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/privacy-policy';
    app.getURL().should('contain', privacyUrl);
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);    
  });

  it('Verify Footer Social Links Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.loginPage.footerSocialLinkSectionElement().should('be.visible');
    app.loginPage.viewFooterSocialLinkSection();
    app.loginPage.veluxTwitterLinkElement().should('be.visible');
    app.loginPage.veluxYoutubeLinkElement().should('be.visible');
    app.loginPage.veluxFacebookLinkElement().should('be.visible');
  });

})
