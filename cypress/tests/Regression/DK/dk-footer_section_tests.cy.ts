import App from 'cypress/pageObjects/DK/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DK'),
  "password": Cypress.env('MEMBER_PASSWORD_DK')
};
let app = new App();
let region = 'dk';

describe('DK Region - Footer Section Tests', () => {

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
    app.homePage.getAddressFooterText().should('eq', 'VELUX Danmark A/SBreeltevej 182970 HørsholmDanmark');
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
    app.homePage.clickCookiePolicyLinkFooter();
    let cookiePolicyUrl = Cypress.env('BASE_URL') + '/'+region+'/cookie-policy';
    app.getURL().should('contain', cookiePolicyUrl);
});

  it('Verify Footer Social Links Section', () => {
    app.homePage.open(region);
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.veluxYoutubeLinkElement().should('be.visible');
    app.homePage.veluxFacebookLinkElement().should('be.visible');
    app.homePage.veluxemailLinkElement().should('be.visible');
  });

})
