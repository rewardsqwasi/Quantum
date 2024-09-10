import App from 'cypress/pageObjects/DK/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DK'),
  "password": Cypress.env('MEMBER_PASSWORD_DK')
};
let app = new App();
let region = 'dk';

describe('DK Region - Shop Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
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
    app.getPageTitle().should('eq','VELUX håndværkerbonus - Shop');
  });

  it('Verify Shop Section', () => {
    app.shopPage.sectionElement().should('be.visible');
    app.shopPage.viewSection();
    app.shopPage.searchFilterFormElement().should('be.visible');
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
