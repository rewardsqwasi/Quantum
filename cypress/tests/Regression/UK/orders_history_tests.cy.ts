import App from '../../pageObjects/UK/AppPage';

const dataFiles = '../../fixtures/';
const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Orders History Tests', () => {

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
    app.homePage.clickOrderHistoryBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/new_shop/orders-history';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Order History');
  });

  it('Verify Order History Section', () => {
    app.ordersHistoryPage.sectionBreadcrumbElement().should('be.visible');
    app.ordersHistoryPage.shopSectionElement().should('be.visible');
    app.ordersHistoryPage.searchFilterFormElement().should('be.visible');
    app.ordersHistoryPage.viewSection();
    app.ordersHistoryPage.searchFilterRadioBtnsElement().should('be.visible');
    app.ordersHistoryPage.filterButtonElement().should('be.visible');
    app.ordersHistoryPage.tableElement().should('be.visible');
    app.ordersHistoryPage.tableHeaderColumnElement().should('be.visible');
    app.ordersHistoryPage.tableHeadingElement().should('be.visible');
    app.ordersHistoryPage.myVoucherBtnElement().should('be.visible');
    app.ordersHistoryPage.myOrdersBtnElement().should('be.visible');
    app.ordersHistoryPage.myOrdersSectionElement().should('be.visible');
  });

})
