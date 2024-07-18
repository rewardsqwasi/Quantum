import App from 'cypress/pageObjects/NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_NL'),
  "password": Cypress.env('MEMBER_PASSWORD_NL')
};
let app = new App();
let region = 'nl';

describe('NL Region - Training Points Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickTrainingPointBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/training-points';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Trainingspunten');
  });

  it('Verify Claim your training workshop points Section', () => {
    app.trainingPointsPage.sectionElement().should('be.visible');
    app.trainingPointsPage.viewSection();
    app.trainingPointsPage.headingElement().should('be.visible');
    app.trainingPointsPage.formSectionElement().should('be.visible');
  });

  it('Verify that the "Validate Code" field and button are functional', () => {
    app.trainingPointsPage.validateCodeBtnElement().should('be.visible');
    app.trainingPointsPage.codeInputFieldElement().should('be.visible');
    app.trainingPointsPage.clickValidateCode();
    app.trainingPointsPage.errorMsgElement().should('have.text', 'Voer uw code in.');    
  });

  it('Verify that the body text is displayed and contains the correct information', () => {
    app.trainingPointsPage.bodyTextElement1().should('have.text', 'Geef je rewards een boost dankzij een VELUX training!');
    app.trainingPointsPage.bodyTextElement2().should('have.text', 'We zijn blij te vertellen dat we het VELUX Rewards-programma hebben uitgebreid. We bieden de mogelijkheid om extra rewards te verdienen op je aankopen door specifieke VELUX trainingen te volgen.');
    app.trainingPointsPage.bodyTextElement3().contains('Onze VELUX training biedt je de nodige kennis om projecten te realiseren waar je trots op kan zijn, en nu kun je ook rewards verdienen terwijl je kennis opdoet. Leuk toch?').should('be.visible');
    app.trainingPointsPage.bodyTextElement4().should('have.text', 'Vul de code in die je hebt ontvangen tijdens de training nadat jouw aankoop van een deelnemend product is goedgekeurd.');
  });

  it('Verify that the "Sign up here for training" link is functional', () => {
    app.trainingPointsPage.clickSignUpHereLink();
    let url = 'https://inspiration.velux.be/nl-be/product-en-installatietraining';
    app.getURL().should('contain', url);
  });

})
