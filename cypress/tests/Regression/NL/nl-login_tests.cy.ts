import App from 'cypress/pageObjects/NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_NL'),
  "password": Cypress.env('MEMBER_PASSWORD_NL')
};
let app = new App();
let region = 'nl';

describe('NL Region - Login Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
  });

  it('Verify Header Links', () => {
    app.loginPage.open(region);
    app.loginPage.headerLinksSectionElement().should('be.visible');
    app.loginPage.clickHomeBtnHeader();
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', homeUrl);
    app.getPageTitle().should('eq','VELUX Rewards - Startpagina');
    app.loginPage.clickTermsBtnHeader();
    let termsUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termsUrl);
    app.loginPage.clickContactBtnHeader();
    let contactUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUrl);
    app.loginPage.clickFAQBtnHeader();
    let faqUrl = Cypress.env('BASE_URL') + '/'+region+'/faq';
    app.getURL().should('contain', faqUrl);
  });

  it('Verify Banners in the header carousel', () => {
    app.loginPage.open(region);
    app.loginPage.bannerDivElement().should('be.visible');
    app.loginPage.bannerImagesElement().should('have.length.greaterThan', 10);
  });

  it('Verify Footer Links', () => {
    app.loginPage.footerLinksSectionElement().should('be.visible');
    app.loginPage.clickHomeBtnFooter();
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', homeUrl);
    app.loginPage.clickTermsBtnFooter();
    let termsUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termsUrl);
    app.loginPage.clickContactBtnFooter();
    let contactUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUrl);
  });

  it('Verify Footer Contact Section', () => {
    app.loginPage.open(region);
    app.loginPage.contactNumberFooterText1Element().should('be.visible');
    app.loginPage.contactNumberFooterText2Element().should('be.visible');
    app.loginPage.contactNumberFooterText3Element().should('be.visible');
    app.loginPage.getAddressFooterText().should('eq', 'VELUX Nederland B.V.Molensteijn 23454 PT DE MEERN');
  });

  it('Verify Footer Social Links Section', () => {
    app.loginPage.open(region);
    app.loginPage.footerSocialLinkSectionElement().should('be.visible');
    app.loginPage.viewFooterSocialLinkSection();
    app.loginPage.veluxInstagramLinkElement().should('be.visible');
    app.loginPage.veluxPinterestLinkElement().should('be.visible');
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
    app.loginPage.emailFieldElement().should('have.attr', 'placeholder', 'Vul alstublieft uw e-mailadres in');
    app.loginPage.passwordFieldElement().should('have.attr', 'placeholder', 'Voer uw wachtwoord in');
  });

  it('Verify Password is masked', () => {
    app.loginPage.passwordFieldElement().should('have.attr', 'type', 'password');
  });

  it('Verify Press Enter key without adding any field values for email and password.', () => {
    app.loginPage.pressEnter();
    app.loginPage.getPasswordFieldErrorMsg().should('eq', 'Voer uw wachtwoord in');
    app.loginPage.getEmailFieldErrorMsg().should('eq', 'Vul alstublieft uw e-mailadres in');
  });

  it('Verify Enter Invalid Email (without @,mail server & domain), Valid Password', () => {
    let email = "testdummy982193restmail.net"
    app.loginPage.login(email, "test123.");
    let message = "Please include an \'@\' in the email address. \'"+email+"\' is missing an \'@\'.";
    app.loginPage.getEmailFieldValidationMsg().should('eq', message);
  });

  it('Verify Enter Valid Email, No Password', () => {
    app.loginPage.login(member.email, "");
    app.loginPage.getPasswordFieldErrorMsg().should('eq', 'Voer uw wachtwoord in');
  });

  it('Verify Enter Valid Password, No Email', () => {
    app.loginPage.login("", member.password);
    app.loginPage.getEmailFieldErrorMsg().should('eq', 'Vul alstublieft uw e-mailadres in');
  });

  it('Verify Enter Invalid Credentails (Email and Password)', () => {
    app.loginPage.login("testdummy982193@restmail.net", "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Uw inloggegevens zijn onjuist. Probeer het opnieuw.');
  });

  it('Verify Enter Valid Email, Invalid Password', () => {
    app.loginPage.login(member.email, "test123.");
    app.loginPage.getToastMessagText().should('eq', 'Uw inloggegevens zijn onjuist. Probeer het opnieuw.');
  });

  it('Verify Successfull Sign In', () => {
    app.loginPage.login(member.email, member.password);
    app.homePage.mainTabBtnElement().should('be.visible');
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
  });

})
