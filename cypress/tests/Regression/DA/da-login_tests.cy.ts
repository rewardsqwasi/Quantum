import App from 'cypress/pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_DA'),
  "password": Cypress.env('MEMBER_PASSWORD_DA')
};
let app = new App();
let region = 'da';

describe('DA Region - Login Tests', () => {

  if(IS_PROD==="true"){
    before(() => {
      app.loginPage.open(region);
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
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

  it('Verify Banners in the header carousel', () => {
    app.loginPage.open(region);
    app.loginPage.bannerDivElement().should('be.visible');
    app.loginPage.bannerImagesElement().should('have.length.greaterThan', 4);
  });

  it('Verify Footer Links', () => {
    app.loginPage.footerLinksSectionElement().should('be.visible');
    app.loginPage.clickHomeBtnFooter();
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', homeUrl);
    app.loginPage.clickTermsBtnFooter();
    let termsUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termsUrl);
    app.loginPage.clickPrivacyBtnFooter();
    app.getURL().should('contain', 'https://www.velux.co.uk/legal/privacy-policy');
    app.loginPage.open(region);
    app.loginPage.clickContactBtnFooter();
    let contactUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUrl);
  });

  it('Verify Footer Contact Section', () => {
    app.loginPage.open(region);
    app.loginPage.contactEmailFooterTextElement().should('be.visible');
    app.loginPage.contactNumberFooterTextElement().should('be.visible');
    app.loginPage.getAddressFooterText().should('eq', 'VELUX Company LtdWoodside WayGlenrothesFifeScotlandKY7 4ND');
  });

  it('Verify Footer Social Links Section', () => {
    app.loginPage.open(region);
    app.loginPage.footerSocialLinkSectionElement().should('be.visible');
    app.loginPage.viewFooterSocialLinkSection();
    app.loginPage.veluxTwitterLinkElement().should('be.visible');
    app.loginPage.veluxPinterestLinkElement().should('be.visible');
    app.loginPage.veluxYoutubeLinkElement().should('be.visible');
    app.loginPage.veluxFacebookLinkElement().should('be.visible');
  });

  it('Verify Font sizes within login box', () => {
    app.loginPage.signInTabElement().should('have.css', 'font-size', '20px');
    app.loginPage.createAccountBtnElement().should('have.css', 'font-size', '13px');
    app.loginPage.loginBtnlement().should('have.css', 'font-size', '16px');
    app.loginPage.forgotPassBtnElement().should('have.css', 'font-size', '13px');   
  });

  it('Verify Email and Password field for character Length', () => {
    app.loginPage.emailFieldElement().should('have.attr', 'maxlength', '255');
    app.loginPage.passwordFieldElement().should('have.attr', 'maxlength', '20'); 
  });

  it('Verify placeholders for email and password.', () => {
    app.loginPage.emailFieldElement().should('have.attr', 'placeholder', 'Enter email address');
    app.loginPage.passwordFieldElement().should('have.attr', 'placeholder', 'Enter your digit pin');
  });

  it('Verify Password is masked', () => {
    app.loginPage.passwordFieldElement().should('have.attr', 'type', 'password');
  });

  it('Verify Enter Invalid Email (without @,mail server & domain), Valid Password', () => {
    let email = "testdummy982193restmail.net"
    app.loginPage.login(email, "test123.");
    let message = "Please include an \'@\' in the email address. \'"+email+"\' is missing an \'@\'.";
    app.loginPage.getEmailFieldValidationMsg().should('eq', message);
  });

  it('Verify Enter Valid Email, No Password', () => {
    app.loginPage.login(member.email, "");
    app.loginPage.getPasswordFieldValidationMsg().should('eq', 'Please fill out this field.');
  });

  it('Verify Enter Valid Password, No Email', () => {
    app.loginPage.login("", member.password);
    app.loginPage.getEmailFieldValidationMsg().should('eq', 'Please fill out this field.');
  });

  it('Verify Leave email and password fields empty and click Login button.', () => {
    app.loginPage.login("", "");
    app.loginPage.getEmailFieldValidationMsg().should('eq', 'Please fill out this field.');
  });

  it('Verify Press Enter key without adding any field values for email and password.', () => {
    app.loginPage.pressEnter();
    app.loginPage.getEmailFieldValidationMsg().should('eq', 'Please fill out this field.');
  });

  it('Verify Enter Invalid Credentails (Email and Password)', () => {
    app.loginPage.login("testdummy982193@restmail.net", "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Your login details are incorrect. Please try again or reset your password from Forgot your password? Page.');
  });

  it('Verify Enter Valid Email, Invalid Password', () => {
    app.loginPage.login(member.email, "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Your login details are incorrect. Please try again or reset your password from Forgot your password? Page.');
  });

  it('Verify Enter invalid email, Invalid password and click Login button.', () => {
    app.loginPage.login("testdummy982193@restmail.net", "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Your login details are incorrect. Please try again or reset your password from Forgot your password? Page.');
  });

  it('Verify Enter invalid email, valid password and click Login button.', () => {
    app.loginPage.login("testdummy982193@restmail.net", member.password);
    app.loginPage.getToastMessagText().should('eq', 'Your login details are incorrect. Please try again or reset your password from Forgot your password? Page.');
  });

  it('Verify Enter valid email, invalid password and click Login button.', () => {
    app.loginPage.login(member.email, "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Your login details are incorrect. Please try again or reset your password from Forgot your password? Page.');
  });

  it('Verify Successfull Sign In', () => {
    app.loginPage.login(member.email, member.password);
    app.homePage.mainTabBtnElement().should('be.visible');
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
  });

})
