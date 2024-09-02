import App from 'cypress/pageObjects/IT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_IT'),
  "password": Cypress.env('MEMBER_PASSWORD_IT')
};
let app = new App();
let region = 'it';

describe('IT Region - Create Account Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
  });

  it('Create Account Button Should Present in Login Page', () => {
    app.loginPage.createAccountBtnElement().should('be.visible');
  });

  it('Verify Create Account Page URL', () => {
    app.loginPage.clickCreateAccountBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/create-account';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Premia - Crea una cuenta');
  });

  it('Verify Profile Details Section', () => {
    app.createAccountPage.firstNameFieldElement().should('be.visible');
    app.createAccountPage.lastNameFieldElement().should('be.visible');
    app.createAccountPage.companyNameFieldElement().should('be.visible');
    app.createAccountPage.companyNumberFieldElement().should('be.visible');
    app.createAccountPage.address1FieldElement().should('be.visible');
    app.createAccountPage.address2FieldElement().should('be.visible');
    app.createAccountPage.postcodeFieldElement().should('be.visible');
    app.createAccountPage.townFieldElement().should('be.visible');
    app.createAccountPage.mobileFieldElement().should('be.visible');
    app.createAccountPage.verifyMobileFieldElement().should('be.visible');
  });

  it('Verify Your Company Section', () => {
    app.createAccountPage.howManyPeopleQuesElement().should('be.visible');
    app.createAccountPage.workingTimeQuesElement().should('be.visible');
    app.createAccountPage.howManyRoofQuesElement().should('be.visible');
    app.createAccountPage.howManyVeluxQuesElement().should('be.visible');
    app.createAccountPage.describeYourselfQuesElement().should('be.visible');
    app.createAccountPage.veluxRewardsQuesElement().should('be.visible');
    app.createAccountPage.recommendVeluxQuesElement().should('be.visible');
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
    app.createAccountPage.smsPromotionCheckboxElement().should('be.visible');
    app.createAccountPage.createAccountBtnElement().should('be.visible');
  });

  it('Verify the required/mandatory fields are marked with the "*" symbol', () => {
    app.createAccountPage.firstNameFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.lastNameFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.companyNameFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.companyNumberFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.address1FieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.postcodeFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.townFieldElement().should('have.attr', 'placeholder').and('contain', "*");   
    app.createAccountPage.mobileFieldLabel().should('contain', "*");
    app.createAccountPage.verifyMobileFieldLabel().should('contain', "*");
    app.createAccountPage.howManyPeopleQuesLabel().should('contain', "*");
    app.createAccountPage.workingTimeQuesLabel().should('contain', "*");
    app.createAccountPage.howManyRoofQuesLabel().should('contain', "*");
    app.createAccountPage.howManyVeluxQuesLabel().should('contain', "*");
    app.createAccountPage.describeYourselfQuesLabel().should('contain', "*");
    app.createAccountPage.veluxRewardsQuesLabel().should('contain', "*");
    app.createAccountPage.recommendVeluxQuesLabel().should('contain', "*");
    app.createAccountPage.emailFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.verifyEmailFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.passwordFieldElement().should('have.attr', 'placeholder').and('contain', "*");
  });

  it('Verify that Placeholders for all the fields exist.', () => {
    app.createAccountPage.firstNameFieldElement().should('have.attr', 'placeholder',"Inserisci il tuo nome *");
    app.createAccountPage.lastNameFieldElement().should('have.attr', 'placeholder',"Inserisci il tuo cognome *");
    app.createAccountPage.companyNameFieldElement().should('have.attr', 'placeholder',"Inserisci la tua Ragione Sociale *");
    app.createAccountPage.companyNumberFieldElement().should('have.attr', 'placeholder',"Inserisci la tua tua Partita IVA *");
    app.createAccountPage.address1FieldElement().should('have.attr', 'placeholder',"Inserisci il tuo indirizzo (riga 1) *");
    app.createAccountPage.address2FieldElement().should('have.attr', 'placeholder',"Inserisci il tuo indirizzo (riga 2)");
    app.createAccountPage.postcodeFieldElement().should('have.attr', 'placeholder',"Inserisci il tuo codice postale *");
    app.createAccountPage.townFieldElement().should('have.attr', 'placeholder',"Inserisci la tua città *");
    app.createAccountPage.mobileFieldElement().should('have.attr', 'placeholder',"312 345 6789");
    app.createAccountPage.verifyMobileFieldElement().should('have.attr', 'placeholder',"312 345 6789");
    app.createAccountPage.websiteFieldElement().should('have.attr', 'placeholder',"Entra nel sito web");
    app.createAccountPage.facebookFieldElement().should('have.attr', 'placeholder',"Facebook");
    app.createAccountPage.youtubeFieldElement().should('have.attr', 'placeholder',"Youtube");
    app.createAccountPage.instagramFieldElement().should('have.attr', 'placeholder',"Instagram");
    app.createAccountPage.emailFieldElement().should('have.attr', 'placeholder',"Inserisci l'indirizzo e-mail *");
    app.createAccountPage.verifyEmailFieldElement().should('have.attr', 'placeholder',"Verifica l'e-mail *");
    app.createAccountPage.passwordFieldElement().should('have.attr', 'placeholder',"Crea il tuo PIN*");
  });

  it('Verify the Max length in all the fields.', () => {
    app.createAccountPage.firstNameFieldElement().should('have.attr', 'maxlength', '255');
    app.createAccountPage.lastNameFieldElement().should('have.attr', 'maxlength', '30');
    app.createAccountPage.companyNameFieldElement().should('have.attr', 'maxlength', '255');
    app.createAccountPage.companyNumberFieldElement().should('have.attr', 'maxlength',"11");
    app.createAccountPage.address1FieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.address2FieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.postcodeFieldElement().should('have.attr', 'maxlength',"5");
    app.createAccountPage.townFieldElement().should('have.attr', 'maxlength',"50");
    app.createAccountPage.mobileFieldElement().should('have.attr', 'maxlength',"20");
    app.createAccountPage.verifyMobileFieldElement().should('have.attr', 'maxlength',"20");
    app.createAccountPage.websiteFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.facebookFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.youtubeFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.instagramFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.emailFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.verifyEmailFieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.passwordFieldElement().should('have.attr', 'maxlength',"20");
  });

  it('Verify that the password field is masked.', () => {
    app.createAccountPage.passwordFieldElement().should('have.attr', 'type', 'password');
  });

  it('Verify the email address is in the correct format. Username, @,mail server & domain.', () => {
    let email = "test";
    app.createAccountPage.submitCreateAccountForm(email, member.password);
    //let message = "Please include an \'@\' in the email address. \'"+email+"\' is missing an \'@\'.";
    //app.createAccountPage.getEmailFieldValidationMsg().should('eq', message);
    app.createAccountPage.enterEmailErrorElement().should('have.text', 'Inserisci un\'indirizzo e-mail valido.');
  });

})
