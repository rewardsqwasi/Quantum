import App from 'cypress/pageObjects/AT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_AT'),
  "password": Cypress.env('MEMBER_PASSWORD_AT')
};
let app = new App();
let region = 'at';

describe('AT Region - Login Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
  });

  it('Verify Header Links', () => {
    app.loginPage.open(region);
    app.loginPage.headerLinksSectionElement().should('be.visible');
    app.loginPage.clickHomeBtnHeader();
    let homeUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/login';
    app.getURL().should('contain', homeUrl);
    app.loginPage.clickTermsBtnHeader();
    let termsUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termsUrl);
    app.loginPage.clickVeluxPrivacyBtnHeader();
    let privacyUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/privacy-policy';
    app.getURL().should('contain', privacyUrl);
    app.loginPage.clickFaqBtnHeader();
    let faqUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/faq';
    app.getURL().should('contain', faqUrl);
    app.loginPage.clickContactBtnHeader();
    let contactUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/contact';
    app.getURL().should('contain', contactUrl);
  });

  it('Verify Banners in the header carousel', () => {
    app.loginPage.open(region);
    app.loginPage.bannerDivElement().should('be.visible');
    app.loginPage.bannerImagesElement().should('have.length.greaterThan', 5);
  });

  it('Verify Footer Links', () => {
    app.loginPage.footerLinksSectionElement().should('be.visible');
    app.loginPage.clickHomeBtnFooter();
    let homeUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/login';
    app.getURL().should('contain', homeUrl);
    app.loginPage.clickTermsBtnFooter();
    let termsUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termsUrl);
    app.loginPage.clickVeluxPrivacyBtnFooter();
    let privacyUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/privacy-policy';
    app.getURL().should('contain', privacyUrl);
    app.loginPage.clickContactBtnFooter();
    let contactUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/contact';
    app.getURL().should('contain', contactUrl);
  });

  it('Verify Footer Contact Section', () => {
    app.loginPage.open(region);
    app.loginPage.contactEmailFooterTextElement().should('be.visible');
    app.loginPage.contactNumberFooterTextElement().should('be.visible');
    app.loginPage.getAddressFooterText().should('eq', 'VELUX Österreich GmbHVeluxstraße 12120 Wolkersdorf');
  });

  it('Verify Footer Social Links Section', () => {
    app.loginPage.open(region);
    app.loginPage.footerSocialLinkSectionElement().should('be.visible');
    app.loginPage.viewFooterSocialLinkSection();
    app.loginPage.veluxTwitterLinkElement().should('be.visible');
    app.loginPage.veluxPinterestLinkElement().should('be.visible');
    app.loginPage.veluxYoutubeLinkElement().should('be.visible');
    app.loginPage.veluxFacebookLinkElement().should('be.visible');
    app.loginPage.veluxInstagramLinkElement().should('be.visible');
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
    app.loginPage.emailFieldElement().should('have.attr', 'placeholder', 'E-Mail-Adresse');
    app.loginPage.passwordFieldElement().should('have.attr', 'placeholder', 'Passwort eingeben');
  });

  it('Verify Password is masked', () => {
    app.loginPage.passwordFieldElement().should('have.attr', 'type', 'password');
  });

  it('Verify Press Enter key without adding any field values for email and password.', () => {
    app.loginPage.pressEnter();
    app.loginPage.getPasswordFieldErrorMsg().should('eq', 'Das Passwort muss zwischen 8-20 Zeichen beinhalten. Es sollte keine persönlichen Informationen wie Ihren Namen oder Ihre E-Mail-Adresse enthalten.');
    app.loginPage.getEmailFieldErrorMsg().should('eq', 'Bitte gegen Sie Ihre E-Mail Adresse ein');
  });

  it('Verify Enter Invalid Email (without @,mail server & domain), Valid Password', () => {
    let email = "testdummy982193restmail.net"
    app.loginPage.login(email, "test123.");
    let message = "Please include an \'@\' in the email address. \'"+email+"\' is missing an \'@\'.";
    app.loginPage.getEmailFieldValidationMsg().should('eq', message);
  });

  it('Verify Enter Valid Email, No Password', () => {
    app.loginPage.login(member.email, "");
    app.loginPage.getPasswordFieldErrorMsg().should('eq', 'Das Passwort muss zwischen 8-20 Zeichen beinhalten. Es sollte keine persönlichen Informationen wie Ihren Namen oder Ihre E-Mail-Adresse enthalten.');
  });

  it('Verify Enter Valid Password, No Email', () => {
    app.loginPage.login("", member.password);
    app.loginPage.getEmailFieldErrorMsg().should('eq', 'Bitte gegen Sie Ihre E-Mail Adresse ein');
  });

  it('Verify Enter Invalid Credentails (Email and Password)', () => {
    app.loginPage.login("testdummy982193@restmail.net", "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Die Login-Daten sind falsch. Bitte versuchen Sie es erneut.');
  });

  it('Verify Enter Valid Email, Invalid Password', () => {
    app.loginPage.login(member.email, "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Die Login-Daten sind falsch. Bitte versuchen Sie es erneut.');
  });

  it('Verify Successfull Sign In', () => {
    app.loginPage.login(member.email, member.password);
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.homePage.mainTabBtnElement().should('be.visible');
  });

})