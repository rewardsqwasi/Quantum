import App from 'cypress/pageObjects/BE/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_BE'),
  "password": Cypress.env('MEMBER_PASSWORD_BE')
};
let app = new App();
let region = 'be';

describe('BE (FR lang) Region - Basket Tests', () => {
  let data;
  before(() => {
    app.loginPage.open(region);
    app.loginPage.switchToFR();
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
      app.loadFixture('prod/be.json').then((d) => {
        data = d;
      });
    }
    else{
      app.loadFixture('stage/be.json').then((d) => {
        data = d;
      });
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickBasketBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/velux-shop/cart';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Leden');
  });

  it('Verify Basket Section', () => {
    app.basketPage.sectionElement().should('be.visible');
    app.basketPage.viewSection();
    app.basketPage.continueShoppingBtnElement().should('be.visible');  
    app.basketPage.termsCheckboxElement().should('be.visible');  
    app.basketPage.buyNowBtnElement().should('be.visible');  
    
  });

  it('Verify that the quantity, name, code, points of the selected product is correctly added to the basket page.', () => {
    app.basketPage.clickContinueShoppingBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/velux-shop';
    app.getURL().should('contain', url);
    app.shopPage.clickFirstProduct();
    app.shopPage.getProductDetail().then(details => {
      const [name, points, code] = details;
      app.shopPage.clickAddToBasket();
      app.shopPage.successToastElement().should('be.visible');
      app.shopPage.successToastElement().should('not.exist')
      app.homePage.clickBasketBtn();
      app.basketPage.viewSection();
      app.basketPage.productNameElement().should('have.text', name);
      app.basketPage.productPointsElement().should('have.text', 'Nombre de points (par unité): '+points+'');
      app.basketPage.productCodeElement().should('have.text', ''+code+'\n');
      app.basketPage.quanityInputElement().should('have.text', 'Qty: 1\n');
      app.basketPage.totalPointsElement().should('have.text', 'Nombre de points (total): '+points+'');
    })
    
  });

  it('Verify Member Detail Section', () => {
    app.basketPage.memberDetailHeadingElement().should('be.visible');
    app.basketPage.nameFieldElement().should('be.visible');
    app.basketPage.nameFieldElement().should('have.value', data.name);
    app.basketPage.emailFieldElement().should('be.visible');
    app.basketPage.emailFieldElement().should('have.value', data.email);
    app.basketPage.phoneFieldElement().should('be.visible');
  });

  it('Verify Delivery Address Section', () => {
    app.basketPage.deliveryAddressHeadingElement().should('be.visible');
    app.basketPage.companyNameFieldElement().should('be.visible');
    app.basketPage.companyNameFieldElement().should('have.value', data.companyName);
    app.basketPage.streetNoFieldElement().should('be.visible');
    app.basketPage.addressFieldElement().should('be.visible');
    app.basketPage.cityFieldElement().should('be.visible');
    app.basketPage.postcodeFieldElement().should('be.visible');
    app.basketPage.countryFieldElement().should('be.visible');
    app.basketPage.countryFieldElement().should('have.value', "Belgium");
  });

  it('Verify removing product from cart', () => {
    app.basketPage.emptyCart();
    app.basketPage.basketEmptyTextElement().should('be.visible'); 
  });

})
