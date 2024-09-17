import App from 'cypress/pageObjects/NO/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_NO'),
  "password": Cypress.env('MEMBER_PASSWORD_NO')
};
let app = new App();
let region = 'no';

describe('NO Region - Create Account Tests', () => {
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
    app.getPageTitle().should('eq','VELUX Bonus - Opret konto');
  });

  it('Verify Profile Details Section', () => {
    app.createAccountPage.profileDetailHeadingElement().should('be.visible');
    app.createAccountPage.viewProfileDetailHeading();
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
    app.createAccountPage.yourCompanyHeadingElement().should('be.visible');
    app.createAccountPage.viewYourCompanyHeading();
    app.createAccountPage.howManyPeopleQuesElement().should('be.visible');
    app.createAccountPage.workingTimeQuesElement().should('be.visible');
    app.createAccountPage.howManyRoofQuesElement().should('be.visible');
    app.createAccountPage.howManyVeluxQuesElement().should('be.visible');
   //app.createAccountPage.howManyDakeaQuesElement().should('be.visible');
    app.createAccountPage.describeYourselfQuesElement().should('be.visible');
    app.createAccountPage.veluxRewardsQuesElement().should('be.visible');
    app.createAccountPage.recommendVeluxQuesElement().should('be.visible');
    //app.createAccountPage.recommendDakeaQuesElement().should('be.visible');
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
    app.createAccountPage.privacyPolicyCheckboxElement().should('be.visible');
    app.createAccountPage.emailPromotionCheckboxElement().should('be.visible');
    app.createAccountPage.createAccountBtnElement().should('be.visible');
  });

  it('Verify the required/mandatory fields are marked with the "*" symbol', () => {
    app.createAccountPage.firstNameFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.lastNameFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.companyNameFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    //app.createAccountPage.companyNumberFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.address1FieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.postcodeFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.townFieldElement().should('have.attr', 'placeholder').and('contain', "*");   
    app.createAccountPage.mobileFieldLabel().should('contain', "*");
    app.createAccountPage.verifyMobileFieldLabel().should('contain', "*");
    app.createAccountPage.howManyPeopleQuesLabel().should('contain', "*");
    app.createAccountPage.workingTimeQuesLabel().should('contain', "*");
    app.createAccountPage.howManyRoofQuesLabel().should('contain', "*");
    app.createAccountPage.howManyVeluxQuesLabel().should('contain', "*");
    //app.createAccountPage.howManyDakeaQuesLabel().should('contain', "*");
    app.createAccountPage.describeYourselfQuesLabel().should('contain', "*");
    app.createAccountPage.veluxRewardQuesLabel().should('contain', "*");
    app.createAccountPage.recommendVeluxQuesLabel().should('contain', "*");
    //app.createAccountPage.recommendDakeaQuesLabel().should('contain', "*");
    app.createAccountPage.emailFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.verifyEmailFieldElement().should('have.attr', 'placeholder').and('contain', "*");
    app.createAccountPage.passwordFieldElement().should('have.attr', 'placeholder').and('contain', "*");
  });

  it('Verify that Placeholders for all the fields exist.', () => {
    app.createAccountPage.firstNameFieldElement().should('have.attr', 'placeholder',"Fornavn *");
    app.createAccountPage.lastNameFieldElement().should('have.attr', 'placeholder',"Etternavn *");
    app.createAccountPage.companyNameFieldElement().should('have.attr', 'placeholder',"Bedrift *");
    app.createAccountPage.companyNumberFieldElement().should('have.attr', 'placeholder',"Organisasjonsnummer");
    app.createAccountPage.address1FieldElement().should('have.attr', 'placeholder',"Adresselinje 1 *");
    app.createAccountPage.address2FieldElement().should('have.attr', 'placeholder',"Adresselinje 2");
    app.createAccountPage.postcodeFieldElement().should('have.attr', 'placeholder',"Postnummer *");
    app.createAccountPage.townFieldElement().should('have.attr', 'placeholder',"Sted*"); 
    app.createAccountPage.mobileFieldElement().should('have.attr', 'placeholder',"406 12 345");
    app.createAccountPage.verifyMobileFieldElement().should('have.attr', 'placeholder',"406 12 345");
    app.createAccountPage.websiteFieldElement().should('have.attr', 'placeholder',"Gå inn på nettstedet");
    app.createAccountPage.facebookFieldElement().should('have.attr', 'placeholder',"Facebook");
    app.createAccountPage.youtubeFieldElement().should('have.attr', 'placeholder',"Youtube");
    app.createAccountPage.instagramFieldElement().should('have.attr', 'placeholder',"Instagram");
    app.createAccountPage.emailFieldElement().should('have.attr', 'placeholder',"Skriv inn e-post adresse *");
    app.createAccountPage.verifyEmailFieldElement().should('have.attr', 'placeholder',"Bekreft e-postadresse *");
    app.createAccountPage.passwordFieldElement().should('have.attr', 'placeholder',"Lag din personlige PIN -kode (8 til maksimalt 20 tegn) *");
  });

  it('Verify the Max length in all the fields.', () => {
    app.createAccountPage.firstNameFieldElement().should('have.attr', 'maxlength', '255');
    app.createAccountPage.lastNameFieldElement().should('have.attr', 'maxlength', '30');
    app.createAccountPage.companyNameFieldElement().should('have.attr', 'maxlength', '255');
    app.createAccountPage.companyNumberFieldElement().should('have.attr', 'maxlength',"15");
    app.createAccountPage.address1FieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.address2FieldElement().should('have.attr', 'maxlength',"255");
    app.createAccountPage.postcodeFieldElement().should('have.attr', 'maxlength',"10");
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
    app.createAccountPage.submitCreateAccountForm("test", member.password);
    app.createAccountPage.enterEmailErrorElement().should('have.text', 'Vennligst skriv inn en gyldig e-post adresse');
  });

})
