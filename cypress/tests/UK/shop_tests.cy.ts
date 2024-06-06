import App from '../../pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Shop Tests', () => {
  let data;
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
    app.basketPage.clickBackToProductsBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/new_shop';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Shop');
  });

  it('Verify Shop Section', () => {
    app.shopPage.sectionBreadcrumbElement().should('be.visible');
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
