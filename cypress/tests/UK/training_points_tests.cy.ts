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
      app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
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
    app.trainingPointsPage.validateCodeBtnElement().should('be.visible');
    app.trainingPointsPage.codeInputFieldElement().should('be.visible');
  });

})
