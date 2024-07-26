import App from 'cypress/pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_IE'),
  "password": Cypress.env('MEMBER_PASSWORD_IE')
};
let app = new App();
let region = 'ie';

describe('IE Region - Footer Section Tests', () => {

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
    app.homePage.getAddressFooterText().should('eq', 'VELUX Company LtdWoodside WayGlenrothesFifeScotlandKY7 4ND');
    app.homePage.altaterraEmailFooterTextElement().should('be.visible');
    app.homePage.altaterraNumberFooterTextElement().should('be.visible');
  });

  it('Verify Footer Links Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.clickTermsLinkFooter();
    let termUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termUrl);
    app.homePage.clickPromotionalLinkFooter();
    let promotionalUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-promotion';
    app.getURL().should('contain', promotionalUrl);
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);
    if(IS_PROD==="false"){
      app.homePage.clickFAQLinkFooter();
      let faqUrl = Cypress.env('BASE_URL') + '/'+region+'/faq';
      app.getURL().should('contain', faqUrl);
    }
    app.homePage.clickAltaterraPrivacyLinkFooter();
    app.getURL().should('contain', 'https://dakea.co.uk/app/uploads/2022/02/Privacy-Policy.pdf');
    app.homePage.open(region);
    app.homePage.clickVeluxPrivacyLinkFooter();
    app.getURL().should('contain', 'https://www.velux.co.uk/legal/privacy-policy');
  });

  it('Verify Footer Social Links Section', () => {
    app.homePage.open(region);
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.veluxTwitterLinkElement().should('be.visible');
    app.homePage.veluxPinterestLinkElement().should('be.visible');
    app.homePage.veluxYoutubeLinkElement().should('be.visible');
    app.homePage.veluxFacebookLinkElement().should('be.visible');
    app.homePage.dakeaFacebookLinkElement().should('be.visible');
    app.homePage.dakeaLinkedinLinkElement().should('be.visible');
    app.homePage.dakeaYoutubeLinkElement().should('be.visible');
  });

})
