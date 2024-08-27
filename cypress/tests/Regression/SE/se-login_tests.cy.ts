import App from 'cypress/pageObjects/SE/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_SE'),
  "password": Cypress.env('MEMBER_PASSWORD_SE')
};
let app = new App();
let region = 'se';

describe('SE Region - Login Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
  });

  it('Verify Header Links', () => {
    app.loginPage.headerLinksSectionElement().should('be.visible');
    app.loginPage.clickHomeBtnHeader();
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', homeUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Hem');
    app.loginPage.clickTermsBtnFooter();
    let termsUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termsUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - allmänna villkoren');
    app.loginPage.clickPrivacyBtnHeader();
    let privacyUrl = Cypress.env('BASE_URL') + '/'+region+'/privacy-policy';
    app.getURL().should('contain', privacyUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Integritetspolicy');
    app.loginPage.clickContactBtnHeader();
    let contactUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUrl);
  });

  it('Verify Banners in the header carousel', () => {
    app.loginPage.open(region);
    app.loginPage.bannerDivElement().should('be.visible');
    app.loginPage.bannerImagesElement().should('have.length.greaterThan', 6);
  });

  it('Verify Footer Links', () => {
    app.loginPage.footerLinksSectionElement().should('be.visible');
    app.loginPage.clickHomeBtnFooter();
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', homeUrl);
    app.loginPage.clickVeluxPrivacyBtnFooter();
    let privacyUrl = Cypress.env('BASE_URL') + '/'+region+'/privacy-policy';
    app.getURL().should('contain', privacyUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Integritetspolicy');
    app.loginPage.clickTermsBtnFooter();
    let termsUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termsUrl);
    app.loginPage.clickContactBtnFooter();
    let contactUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUrl);
  });

  it('Verify Footer Contact Section', () => {
    app.loginPage.open(region);
    app.loginPage.contactEmailFooterTextElement().should('be.visible');
    app.loginPage.contactNumberFooterTextElement().should('be.visible');
    app.loginPage.getAddressFooterText().should('eq', 'VELUX Svenska ABKarbingatan 22S-254 67 HelsingborgSverige');
  });

  it('Verify Footer Social Links Section', () => {
    app.loginPage.open(region);
    app.loginPage.footerSocialLinkSectionElement().should('be.visible');
    app.loginPage.viewFooterSocialLinkSection();
    app.loginPage.veluxYoutubeLinkElement().should('be.visible');
    app.loginPage.veluxFacebookLinkElement().should('be.visible');
  });

  it('Verify Font sizes within login box', () => {
    app.loginPage.signInTabElement().should('have.css', 'font-size', '20px');
    app.loginPage.createAccountBtnElement().should('have.css', 'font-size', '13px');
    app.loginPage.loginBtnElement().should('have.css', 'font-size', '16px');
    app.loginPage.forgotPassBtnElement().should('have.css', 'font-size', '13px');
  });

  it('Verify Email and Password field for character Length', () => {
    app.loginPage.emailFieldElement().should('have.attr', 'maxlength', '255');
    app.loginPage.passwordFieldElement().should('have.attr', 'maxlength', '20'); 
  });

  it('Verify placeholders for email and password.', () => {
    app.loginPage.emailFieldElement().should('have.attr', 'placeholder', 'Ange e-postadress');
    app.loginPage.passwordFieldElement().should('have.attr', 'placeholder', 'Ange en åttasiffrig pinkod (8 siffra)');
  });

  it('Verify Password is masked', () => {
    app.loginPage.passwordFieldElement().should('have.attr', 'type', 'password');
  });

  it('Verify Press Enter key without adding any field values for email and password.', () => {
    app.loginPage.pressEnter();
    app.loginPage.getEmailFieldErrorMsg().should('eq', 'Vänligen ange e-postadress');
    app.loginPage.getPasswordFieldErrorMsg().should('eq', 'Vänligen ange din fyrsiffriga PIN-kod');
  });

  it('Verify Enter Invalid Email (without @,mail server & domain), Valid Password', () => {
    let email = "testdummy982193restmail.net"
    app.loginPage.login(email, "test123.");
    let message = "Please include an \'@\' in the email address. \'"+email+"\' is missing an \'@\'.";
    app.loginPage.getEmailFieldValidationMsg().should('eq', message);
  });

  it('Verify Enter Valid Email, No Password', () => {
    app.loginPage.login(member.email, "");
    app.loginPage.getPasswordFieldErrorMsg().should('eq', 'Vänligen ange din fyrsiffriga PIN-kod');
  });

  it('Verify Enter Valid Password, No Email', () => {
    app.loginPage.login("", member.password);
    app.loginPage.getEmailFieldErrorMsg().should('eq', 'Vänligen ange e-postadress');
  });

  it('Verify Enter Invalid Credentails (Email and Password)', () => {
    app.loginPage.login("testdummy982193@restmail.net", "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Inloggningsdetaljerna är felaktiga. Vänligen försök igen.');
  });

  it('Verify Enter Valid Email, Invalid Password', () => {
    app.loginPage.login(member.email, "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Inloggningsdetaljerna är felaktiga. Vänligen försök igen.');
  });

  it('Verify Successfull Sign In', () => {
    app.loginPage.login(member.email, member.password);
    app.homePage.mainTabBtnElement().should('be.visible');
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
  });

})