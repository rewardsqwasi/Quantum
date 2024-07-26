import App from 'cypress/pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_IE'),
  "password": Cypress.env('MEMBER_PASSWORD_IE')
};
let app = new App();
let region = 'ie';

describe('IE Region - Basket Tests', () => {
  let data;
  before(() => {
    app.loginPage.open(region);
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
      app.loadFixture('prod/ie.json').then((d) => {
        data = d;
      });
    }
    else{
      app.loadFixture('stage/ie.json').then((d) => {
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
    app.ieBasketPage.sectionElement().should('be.visible');
    app.ieBasketPage.viewSection();
    app.ieBasketPage.continueShoppingBtnElement().should('be.visible');  
    app.ieBasketPage.termsCheckboxElement().should('be.visible');  
    app.ieBasketPage.buyNowBtnElement().should('be.visible');  
    
  });

  it('Verify that the quantity, name, code, points of the selected product is correctly added to the basket page.', () => {
    app.ieBasketPage.clickContinueShoppingBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/velux-shop';
    app.getURL().should('contain', url);
    app.shopPage.clickFirstProduct();
    app.shopPage.getProductDetail2().then(details => {
      const [name, points, code] = details;
      app.shopPage.clickAddToBasket2();
      app.shopPage.successToastElement().should('be.visible');
      app.shopPage.successToastElement().should('not.exist')
      app.homePage.clickBasketBtn();
      app.ieBasketPage.viewSection();
      app.ieBasketPage.productNameElement().should('have.text', name);
      app.ieBasketPage.productPointsElement().should('have.text', 'Reward Points (per unit): '+points+'');
      app.ieBasketPage.productCodeElement().should('have.text', ''+code+'\n');
      app.ieBasketPage.quanityInputElement().should('have.text', 'Qty: 1\n');
      app.ieBasketPage.totalPointsElement().should('have.text', 'Reward Points (total): '+points+'');
      
    })
    
  });

  it('Verify Member Detail Section', () => {
    app.ieBasketPage.memberDetailHeadingElement().should('be.visible');
    app.ieBasketPage.nameFieldElement().should('be.visible');
    app.ieBasketPage.nameFieldElement().should('have.value', data.name);
    app.ieBasketPage.emailFieldElement().should('be.visible');
    app.ieBasketPage.emailFieldElement().should('have.value', data.email);
    app.ieBasketPage.phoneFieldElement().should('be.visible');
  });

  it('Verify Delivery Address Section', () => {
    app.ieBasketPage.deliveryAddressHeadingElement().should('be.visible');
    app.ieBasketPage.companyNameFieldElement().should('be.visible');
    app.ieBasketPage.companyNameFieldElement().should('have.value', data.companyName);
    app.ieBasketPage.streetNoFieldElement().should('be.visible');
    app.ieBasketPage.addressFieldElement().should('be.visible');
    app.ieBasketPage.cityFieldElement().should('be.visible');
    app.ieBasketPage.postcodeFieldElement().should('be.visible');
    app.ieBasketPage.countryFieldElement().should('be.visible');
    app.ieBasketPage.countryFieldElement().should('have.value', "Ireland");
  });

  it('Verify removing product from cart', () => {
    app.ieBasketPage.emptyCart();
    app.ieBasketPage.basketEmptyTextElement().should('be.visible'); 
  });
  
})
