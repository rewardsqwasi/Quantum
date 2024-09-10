import App from 'cypress/pageObjects/DK/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DK'),
  "password": Cypress.env('MEMBER_PASSWORD_DK')
};
let app = new App();
let region = 'dk';

describe('DK Region - Forget Pin Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
  });

  it('Forgot Your Password Button Should Present in Login Page', () => {
    app.loginPage.open(region);
    app.loginPage.forgotPassBtnElement().should('be.visible');
  });

  it('Verify Forget Pin Page URL', () => {
    app.loginPage.clickForgotPassBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/forget-pin';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX håndværkerbonus - Forget your pin number');
  });

  it('Verify Reset Password Section', () => {
    app.forgetPinPage.resetPasswordHeadingElement().should('be.visible');
    app.forgetPinPage.viewResetPasswordHeading();
    app.forgetPinPage.emailFieldElement().should('be.visible');
    app.forgetPinPage.infoTextOneElement().should('be.visible');
    app.forgetPinPage.captchaDivElement().should('be.visible');
    app.forgetPinPage.requestPassBtnElement().should('be.visible');
  });

  it('Verify maximum email length', () => {
    app.forgetPinPage.emailFieldElement().should('have.attr', 'maxlength', '255');
  });
 
  it('Verify Click the "Send email" button without entering any details', () => {
    app.forgetPinPage.clickReqPassBtn();
    app.forgetPinPage.enterEmailErrorElement().should('have.text', 'Indtast din virksomhedsemail');
  });

  it('Verify Enter a valid email address and click the "Send email" button without filling the reCaptcha', () => {
    app.forgetPinPage.enterEmail(member.email);
    app.forgetPinPage.clickReqPassBtn();
    app.forgetPinPage.reCaptchaErrorElement().should('have.text', 'reCaptcha er påkrævet.');
  });

  it('Verify with invalid email address', () => {
    app.forgetPinPage.reqNewPassword("test@sdasd.com");
    let url = Cypress.env('BASE_URL') + '/'+region+'/forget-pin';
    app.getURL().should('contain', url);
    //app.forgetPinPage.getToastMessageText("Aucun compte n'est associé à cette adresse mail. Veuillez créer un compte.").should('be.visible');
  });

  it('Verify Toast After Clicking Request New Password Button', () => {
    //app.loginPage.clickForgotPassBtn();
    app.forgetPinPage.reqNewPassword(member.email);
    let url = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', url);
    //app.forgetPinPage.getToastMessageText("Vos identifiants de connexion vous ont été envoyés par email.").should('be.visible');
  });

})
