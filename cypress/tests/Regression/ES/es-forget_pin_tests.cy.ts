import App from 'cypress/pageObjects/ES/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_ES'),
  "password": Cypress.env('MEMBER_PASSWORD_ES')
};
let app = new App();
let region = 'es';

describe('ES Region - Forget Pin Tests', () => {

  if(IS_PROD==="true"){
    before(() => {
      app.loginPage.open(region);
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    });
  }

  it('Forgot Your Password Button Should Present in Login Page', () => {
    app.loginPage.open(region);
    app.loginPage.forgotPassBtnElement().should('be.visible');
  });

  it('Verify Forget Pin Page URL', () => {
    app.loginPage.clickForgotPassBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/forget-pin';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Premia - Forget your pin number');
  });

  it('Verify Reset Password Section', () => {
    app.forgetPinPage.resetPasswordHeadingElement().should('be.visible');
    app.forgetPinPage.viewResetPasswordHeading();
    app.forgetPinPage.emailFieldElement().should('be.visible');
    app.forgetPinPage.captchaDivElement().should('be.visible');
    app.forgetPinPage.requestPassBtnElement().should('be.visible');
  });

  it('Verify maximum email length', () => {
    app.forgetPinPage.emailFieldElement().should('have.attr', 'maxlength', '255');
  });
 
  it('Verify Click the "Send email" button without entering any details', () => {
    app.forgetPinPage.clickReqPassBtn();
    app.forgetPinPage.enterEmailErrorElement().should('have.text', 'Por favor indica tu dirección email');
  });

  it('Verify Enter a valid email address and click the "Send email" button without filling the reCaptcha', () => {
    app.forgetPinPage.enterEmail(member.email);
    app.forgetPinPage.clickReqPassBtn();
    app.forgetPinPage.reCaptchaErrorElement().should('have.text', 'Se requiere reCaptcha');
  });

  it('Verify with invalid email address', () => {
    app.forgetPinPage.reqNewPassword("test@sdasd.com");
    //let url = Cypress.env('BASE_URL') + '/'+region+'/create-account';
    //app.getURL().should('contain', url);
    app.forgetPinPage.getToastMessageElement().should('have.text', "Your email address does not exists in the system. Please create an account.");
  });

  it('Verify Toast After Clicking Request New Password Button', () => {
    app.forgetPinPage.reqNewPassword(member.email);
    let url = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', url);
    //app.forgetPinPage.getToastMessageText("Vos identifiants de connexion vous ont été envoyés par email.").should('be.visible');
  });

})
