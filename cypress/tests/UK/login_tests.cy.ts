import App from '../../pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Login Tests', () => {

  if(IS_PROD==="true"){
    before(() => {
      app.loginPage.open(region);
      app.loginPage.allowCookie();
    });
  }

  it('Verify Header Links', () => {
    app.loginPage.open(region);
    app.loginPage.headerLinksSectionElement().should('be.visible');
    app.loginPage.clickHomeBtnHeader();
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', homeUrl);
    app.loginPage.clickTermsBtnHeader();
    let termsUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termsUrl);
    app.loginPage.clickVeluxPrivacyBtnHeader();
    app.getURL().should('contain', 'https://www.velux.co.uk/legal/privacy-policy');
    app.loginPage.open(region);
    app.loginPage.clickAltaterraPrivacyBtnHeader();
    app.getURL().should('contain', 'https://dakea.co.uk/app/uploads/2022/02/Privacy-Policy.pdf');
    app.loginPage.open(region);
    app.loginPage.clickContactBtnHeader();
    let contactUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUrl);
  });

  it('Verify Footer Links', () => {
    app.loginPage.open(region);
    app.loginPage.footerLinksSectionElement().should('be.visible');
    app.loginPage.clickHomeBtnFooter();
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', homeUrl);
    app.loginPage.clickTermsBtnFooter();
    let termsUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termsUrl);
    app.loginPage.clickVeluxPrivacyBtnFooter();
    app.getURL().should('contain', 'https://www.velux.co.uk/legal/privacy-policy');
    app.loginPage.open(region);
    app.loginPage.clickAltaterraPrivacyBtnFooter();
    app.getURL().should('contain', 'https://dakea.co.uk/app/uploads/2022/02/Privacy-Policy.pdf');
    app.loginPage.open(region);
    app.loginPage.clickContactBtnFooter();
    let contactUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUrl);
  });

  it('Verify Successfull Sign In', () => {
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
    app.homePage.mainTabBtnElement().should('be.visible');
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
  });

})