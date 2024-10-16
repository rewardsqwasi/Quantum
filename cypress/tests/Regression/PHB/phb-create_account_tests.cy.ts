import App from 'cypress/pageObjects/PHB/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_PHB'),
  "password": Cypress.env('MEMBER_PASSWORD_PHB')
};
const newEmail = Cypress.env('MEMBER_EMAIL_CH_FR');
let app = new App();
let region = 'phb';

describe('PHB Region - Create Account Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
  });

  it('Create Account Button Should Present in Login Page', () => {
    app.loginPage.open(region);
    app.loginPage.createAccountBtnElement().should('be.visible');
  });

  it('Verify Create Account Page URL', () => {
    app.loginPage.clickCreateAccountBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/create-account';
    app.getURL().should('contain', url);
  });

  it('Verify Profile Details Section', () => {
    app.createAccountPage.signupFormElement().should('be.visible');
    app.createAccountPage.viewSignupFormElement()
    app.createAccountPage.titleSelectElement().should('be.visible');
    app.createAccountPage.firstNameFieldElement().should('be.visible');
    app.createAccountPage.lastNameFieldElement().should('be.visible');
    app.createAccountPage.companyNameFieldElement().should('be.visible');
    app.createAccountPage.companyPhoneFieldElement().should('be.visible');
    app.createAccountPage.address1FieldElement().should('be.visible');
    app.createAccountPage.postcodeFieldElement().should('be.visible');
    app.createAccountPage.townFieldElement().should('be.visible');
    app.createAccountPage.mobileFieldElement().should('be.visible');
    app.createAccountPage.ibanFieldElement().should('be.visible');
    app.createAccountPage.vatFieldElement().should('be.visible');
    app.createAccountPage.verifyMobileFieldElement().should('be.visible');
    app.createAccountPage.creditNoteEmailFieldElement().should('be.visible');
    app.createAccountPage.ibanFieldElement().should('be.visible');
  });

  it('Verify Your Company Section', () => {
    app.createAccountPage.howManyPeopleQuesElement().should('be.visible');
    app.createAccountPage.howManyRoofQuesElement().should('be.visible');
    app.createAccountPage.howManyVeluxQuesElement().should('be.visible');
  });

  it('Verify Social Media Info Section', () => {
    app.createAccountPage.socialMediaInfoHeadingElement().should('be.visible');
    app.createAccountPage.viewSocialMediaInfoHeading();
    app.createAccountPage.websiteFieldElement().should('be.visible');
    app.createAccountPage.facebookFieldElement().should('be.visible');
    app.createAccountPage.youtubeFieldElement().should('be.visible');
    app.createAccountPage.instagramFieldElement().should('be.visible');
  });

  it('Verify Create Account Login Section', () => {
    app.createAccountPage.createAccountLoginHeadingElement().should('be.visible');
    app.createAccountPage.viewCreateAccountLoginHeading();
    app.createAccountPage.emailFieldElement().should('be.visible');
    app.createAccountPage.verifyEmailFieldElement().should('be.visible');
    app.createAccountPage.passwordFieldElement().should('be.visible');
    app.createAccountPage.termsCheckboxElement().should('be.visible');
    app.createAccountPage.emailPromotionCheckboxElement().should('be.visible');
    app.createAccountPage.createAccountBtnElement().should('be.visible');
  });

  it('Verify the required/mandatory fields are marked with the "*" symbol', () => {
    app.createAccountPage.firstNameFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.lastNameFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.companyNameFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.address1FieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.postcodeFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.townFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.ibanFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.vatFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.creditNoteEmailFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.howManyPeopleQuesLabel().should('contain', "*");
    app.createAccountPage.howManyRoofQuesLabel().should('contain', "*");
    app.createAccountPage.howManyVeluxQuesLabel().should('contain', "*");
    app.createAccountPage.emailFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.verifyEmailFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.passwordFieldElement().should('have.attr', 'placeholder').and('contain', "*");
  });

  it('Verify that Placeholders for all the fields exist.', () => {
    app.createAccountPage.firstNameFieldElement().should('have.attr', 'placeholder',"Vorname eingeben *");
    app.createAccountPage.lastNameFieldElement().should('have.attr', 'placeholder',"Nachname eingeben *");
    app.createAccountPage.mobileFieldElement().should('have.attr', 'placeholder',"01111 23456789");
    app.createAccountPage.verifyMobileFieldElement().should('have.attr', 'placeholder',"01111 23456789");
    app.createAccountPage.companyNameFieldElement().should('have.attr', 'placeholder',"Ihr Firmenname*");
    app.createAccountPage.address1FieldElement().should('have.attr', 'placeholder',"Straße und Hausnummer eingeben*");
    app.createAccountPage.postcodeFieldElement().should('have.attr', 'placeholder',"Postleitzahl eingeben*");
    app.createAccountPage.townFieldElement().should('have.attr', 'placeholder',"Ort eingeben*");
    app.createAccountPage.companyPhoneFieldElement().should('have.attr', 'placeholder',"Telefonnummer");
    app.createAccountPage.ibanFieldElement().should('have.attr', 'placeholder', 'IBAN*');
    app.createAccountPage.vatFieldElement().should('have.attr', 'placeholder', 'Umsatzsteuer Identifikationsnummer*');
    app.createAccountPage.creditNoteEmailFieldElement().should('have.attr', 'placeholder', 'E-Mail-Adresse für Abrechnungszwecke*');
    app.createAccountPage.websiteFieldElement().should('have.attr', 'placeholder',"Ihre Internetadresse, z.B. www.velux.de");
    app.createAccountPage.facebookFieldElement().should('have.attr', 'placeholder',"Facebook");
    app.createAccountPage.youtubeFieldElement().should('have.attr', 'placeholder',"Youtube");
    app.createAccountPage.instagramFieldElement().should('have.attr', 'placeholder',"Instagram");
    app.createAccountPage.emailFieldElement().should('have.attr', 'placeholder',"Bitte geben Sie ihre E-Mail-Adresse ein *");
    app.createAccountPage.verifyEmailFieldElement().should('have.attr', 'placeholder', "E-Mailadresse prüfen *");
    app.createAccountPage.passwordFieldElement().should('have.attr', 'placeholder',"Bitte erstellen Sie ein sicheres Passwort (mindestens 6 bis maximal 15 Zeichen) *");
  });

  it('Verify the Max length in all the fields.', () => {
    app.createAccountPage.firstNameFieldElement().should('have.attr', 'maxlength', '255');
    app.createAccountPage.lastNameFieldElement().should('have.attr', 'maxlength', '30');
    app.createAccountPage.mobileFieldElement().should('have.attr', 'maxlength',"20");
    app.createAccountPage.companyNameFieldElement().should('have.attr', 'maxlength', '35');
    app.createAccountPage.companyPhoneFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.address1FieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.postcodeFieldElement().should('have.attr', 'maxlength',"5");
    app.createAccountPage.townFieldElement().should('have.attr', 'maxlength',"50"); 
    app.createAccountPage.ibanFieldElement().should('have.attr', 'maxlength',"50"); 
    app.createAccountPage.vatFieldElement().should('have.attr', 'maxlength',"11");
    app.createAccountPage.creditNoteEmailFieldElement().should('have.attr', 'maxlength',"255"); 
    app.createAccountPage.websiteFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.facebookFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.youtubeFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.instagramFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.emailFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.verifyEmailFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.passwordFieldElement().should('have.attr', 'maxlength',"15");
  });

  it('Verify that the password field is masked.', () => {
    app.createAccountPage.passwordFieldElement().should('have.attr', 'onfocus', "this.type='password'");
  });

  it('Verify the email address is in the correct format. Username, @,mail server & domain.', () => {
    app.createAccountPage.submitCreateAccountForm("test", member.password);
    app.createAccountPage.enterEmailErrorElement().should('have.text', 'Bitte überprüfen Sie Ihre E-Mailadresse.');
  });

})
