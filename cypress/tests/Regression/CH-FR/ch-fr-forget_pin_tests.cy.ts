
import App from 'cypress/pageObjects/CH-FR/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_CH_FR')
};
let app = new App();
let region = 'ch';

describe('CH (FR lang) Region - Forget Pin Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToFR();
  });

  it('Forgot Your Password Button Should Present in Login Page', () => {
    app.loginPage.open(region);
    app.loginPage.forgotPassBtnElement().should('be.visible');
  });

  it('Verify Forget Pin Page URL', () => {
    app.loginPage.clickForgotPassBtn();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/forget-pin';
    app.getURL().should('contain', url);
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
    app.forgetPinPage.enterEmailErrorElement().should('have.text', 'Votre adresse e-mail');
  });

  it('Verify Enter a valid email address and click the "Send email" button without filling the reCaptcha', () => {
    app.forgetPinPage.enterEmail(member.email);
    app.forgetPinPage.clickReqPassBtn();
    app.forgetPinPage.reCaptchaErrorElement().should('have.text', 'reCaptcha est requis');
  });

  it('Verify with invalid email address', () => {
    //app.forgetPinPage.reqNewPassword("@#!@SD");
    app.forgetPinPage.enterEmail("@#!@SD");
    app.forgetPinPage.clickReqPassBtn();
    app.forgetPinPage.enterEmailError2Element().should('have.text', 'S\'il vous plaît, mettez une adresse email valide');
  });

  it('Verify Toast After Clicking Request New Password Button', () => {
    app.forgetPinPage.reqNewPassword(member.email);
    //app.forgetPinPage.clickReqPassBtn();
    app.forgetPinPage.getToastMessageText().should('eq', "Vos identifiants de connexion vous ont été envoyés par email.");
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/login';
    app.getURL().should('contain', url);
  });

/*
  xit('Verify Reset Password Email', () => {
    let email = app.emailPage.getLatestEmail('testkhizervelux@restmail.net');
    app.emailPage.renderEmail(email.html);
    app.wait(1000);
  });
*/
})
