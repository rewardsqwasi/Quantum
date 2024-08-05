import App from 'cypress/pageObjects/ES/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_ES'),
  "password": Cypress.env('MEMBER_PASSWORD_ES')
};
let app = new App();
let region = 'es';

describe('ES Region - Price File Tests', () => {

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
    app.homePage.clickSpendPointsBtn();
    app.claimRewardsPage.gotoPriceFile();
    let url = Cypress.env('BASE_URL') + '/'+region+'/price-file';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','Lista de Precios 2024');
  });

  it('Verify Price List Section', () => {
    app.priceFilePage.sectionElement().should('be.visible');
    app.priceFilePage.sectionBreadcrumbElement().should('be.visible');
    app.priceFilePage.rewardDetailDivElement().should('be.visible');
    app.priceFilePage.fileIconElement().should('be.visible').invoke('attr', 'src').should('not.be.empty');
    app.priceFilePage.heading1Element().should('have.text', 'Lista de Precios');
    app.priceFilePage.heading2Element().should('have.text', 'Lista de Precios 2024');
    app.priceFilePage.claimFormElement().should('be.visible');
    app.priceFilePage.cancelBtnElement().should('be.visible');
    app.priceFilePage.confirmBtnElement().should('be.visible');
    app.priceFilePage.quantityInputFieldElement().should('be.visible');
  });

  it('Verify Cancel Button Functionality', () => {
    app.priceFilePage.clickCancelBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', url);
  });

})
