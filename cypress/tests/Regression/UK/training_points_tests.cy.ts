import App from '../../pageObjects/UK/AppPage';

const dataFiles = '../../fixtures/';
const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Training Points Tests', () => {

  before(() => {
    app.loginPage.open(region);
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickTrainingPointBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/training-points';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Training Points');
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
    app.trainingPointsPage.errorMsgElement().should('have.text', 'Please enter your code.');    
  });

  it('Verify that the body text is displayed and contains the correct information', () => {
    app.trainingPointsPage.bodyTextElement1().should('have.text', 'Boost your rewards with VELUX training!');
    app.trainingPointsPage.bodyTextElement2().should('have.text', 'We\'re excited to announce a new addition to the VELUX Rewards program. We will be offering the opportunity to earn extra rewards on your purchases by completing specific VELUX training courses.');
    app.trainingPointsPage.bodyTextElement3().should('have.text', 'Our VELUX training offers easier ways for you to achieve a project that you are proud of and now you will also be able to earn rewards while developing your business, what\'s not to like?');
    app.trainingPointsPage.bodyTextElement4().should('have.text', 'Stay tuned for upcoming opportunities to boost your rewards through VELUX training, we can\'t wait to share them with you.');
  });

  it('Verify that the "Sign up here for training" link is functional', () => {
    app.trainingPointsPage.clickSignUpHereLink();
    let url = 'https://inspiration.velux.co.uk/product-and-installation-training';
    app.getURL().should('contain', url);
  });

})
