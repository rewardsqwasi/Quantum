import App from 'cypress/pageObjects/NO/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_NO'),
  "password": Cypress.env('MEMBER_PASSWORD_NO')
};
let app = new App();
let region = 'no';

describe('NO Region - Footer Section Tests', () => {

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
    app.homePage.getAddressFooterText().should('eq', 'VELUX Norge ASGjerdrumsvei 10 G0484 Oslo');
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
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);
    app.homePage.clickFAQLinkFooter();
    let faqUrl = Cypress.env('BASE_URL') + '/'+region+'/faq';
    app.getURL().should('contain', faqUrl);
    app.homePage.clickVeluxPrivacyLinkFooter();
    let privacyUrl = 'https://velcdn.azureedge.net/~/media/marketing/no/dokumenter/personvernerklring%20velux%20norge%20as.pdf';
    app.getURL().should('contain', privacyUrl);
});

  it('Verify Footer Social Links Section', () => {
    app.homePage.open(region);
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.veluxYoutubeLinkElement().should('be.visible');
    app.homePage.veluxFacebookLinkElement().should('be.visible');
    app.homePage.veluxPinterestLinkElement().should('be.visible');
  });

})
