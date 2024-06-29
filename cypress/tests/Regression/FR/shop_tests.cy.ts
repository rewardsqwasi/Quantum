import App from 'cypress/pageObjects/FR/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_FR')
};
let app = new App();
let region = 'fr';

describe('FR Region - Shop Tests', () => {
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
    app.homePage.clickBasketBtn();
    app.basketPage.clickContinueShoppingBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/velux-shop';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX & CO - Magasin');
  });

  it('Verify Shop Section', () => {
    app.shopPage.sectionElement().should('be.visible');
    app.shopPage.viewSection();
    app.shopPage.searchFilterFormElement().should('be.visible');
    app.shopPage.searchFilterCheckboxesElement().should('be.visible');
    app.shopPage.searchFilterCheckboxesElement().should('be.visible');
    app.shopPage.filterButtonElement().should('be.visible');
    app.shopPage.resetButtonElement().should('be.visible');
  });

  it('Verify Product Section', () => {
    app.shopPage.productDivElement().should('be.visible');
    app.shopPage.productSectionElement().should('be.visible');
    app.shopPage.productSectionHeadingElement().should('be.visible');
  });

})
