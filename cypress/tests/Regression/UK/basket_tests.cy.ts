import App from '../../pageObjects/UK/AppPage';

const dataFiles = '../../fixtures/';
const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Basket Tests', () => {
  let data;
  before(() => {
    app.loginPage.open(region);
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
      app.loadFixture('prod/uk.json').then((d) => {
        data = d;
      });
    }
    else{
      app.loadFixture('stage/uk.json').then((d) => {
        data = d;
      });
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickBasketBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/new_shop/basket';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Basket');
  });

  it('Verify Basket Section', () => {
    app.basketPage.sectionBreadcrumbElement().should('be.visible');
    app.basketPage.sectionElement().should('be.visible');
    app.basketPage.viewSection();
    app.basketPage.backToProductsBtnElement().should('be.visible');  
  });

  it('Verify Order Confirmation Section', () => {
    app.basketPage.orderConfirmSectionElement().should('be.visible');
    app.basketPage.orderNameText().should('contain', data.name);
    app.basketPage.companyNameText().should('contain', data.companyName);
  });

  it('Verify Shipping Details Section', () => {
    app.basketPage.shippingDetailSectionElement().should('be.visible');
    app.basketPage.nameFieldElement().should('be.visible');
    app.basketPage.companyNameFieldElement().should('be.visible');
    app.basketPage.address1FieldElement().should('be.visible');
    app.basketPage.address2FieldElement().should('be.visible');
    app.basketPage.cityFieldElement().should('be.visible');
    app.basketPage.postcodeFieldElement().should('be.visible');
    app.basketPage.countryFieldElement().should('be.visible');
    app.basketPage.mobileNumberFieldElement().should('be.visible');
    app.basketPage.shippingNotesFieldElement().should('be.visible');
    app.basketPage.termsCheckboxElement().should('be.visible');
    app.basketPage.completeOrderBtnElement().should('be.visible');  
  });

  it('Verify that the quantity, name, code, points of the selected product is correctly added to the basket page.', () => {
    app.basketPage.clickBackToProductsBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/new_shop';
    app.getURL().should('contain', url);
    app.shopPage.clickFirstProduct();
    app.shopPage.getProductDetail().then(details => {
      const [name, points, code] = details;
      app.shopPage.clickAddToBasket();
      app.homePage.clickBasketBtn();
      app.basketPage.productNameElement().should('have.text', name);
      app.basketPage.productPointsElement().should('have.text', 'Points '+points+'\n');
      app.basketPage.productCodeElement().should('have.text', '\n'+code+'\n');
      app.basketPage.quanityInputElement().should('have.value', '1');
      app.basketPage.totalPointsElement().should('have.text', '\n'+points+'\n');
    })
    app.basketPage.emptyCart();
    app.basketPage.basketEmptyTextElement().should('be.visible'); 
  });
  
})
