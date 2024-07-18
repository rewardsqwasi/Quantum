import App from 'cypress/pageObjects/NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_NL'),
  "password": Cypress.env('MEMBER_PASSWORD_NL')
};
let app = new App();
let region = 'nl';

describe('NL Region - Footer Section Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Footer Contact Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.contactEmailFooterTextElement().should('be.visible');
    app.homePage.contactNumberFooterTextElement().should('be.visible');
    app.homePage.getAddressFooterText().contains('VELUX Nederland B.V. Molensteijn 2 3454 PT DE MEERN').should('be.visible');
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
    app.homePage.clickTradingLinkFooter();
    let tradeUrl = Cypress.env('BASE_URL') + '/'+region+'/trading-conditions';
    app.getURL().should('contain', tradeUrl);
  });

  it('Verify Footer Social Links Section', () => {
    app.homePage.open(region);
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.veluxInstagramLinkElement().should('be.visible');
    app.homePage.veluxPinterestLinkElement().should('be.visible');
    app.homePage.veluxYoutubeLinkElement().should('be.visible');
    app.homePage.veluxFacebookLinkElement().should('be.visible');
  });

})
