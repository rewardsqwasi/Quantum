import App from '../../pageObjects/CH/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH'),
  "password": Cypress.env('MEMBER_PASSWORD_CH')
};
let app = new App();
let region = 'ch';

describe('Sanity Test Switzerland Region', () => {
  
  it('Sanity Test Switzerland Region', () => {
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    let loginUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/login';
    app.getURL().should('contain', loginUrl);
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Startseite');
    app.loginPage.login(member.email, member.password);
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Startseite');

    app.homePage.clickSpendPointsBtn();
    let claimRewardUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/claim-rewards';
    app.getURL().should('contain', claimRewardUrl);
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Punkte einlösen');

    app.homePage.clickMainBtn();
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Startseite');

    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Gutscheinübersicht');

    if(IS_PROD==="true"){
      app.homePage.clickAddPurchseBtn();
      let addPurUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-purchase';
      app.getURL().should('eq', addPurUrl);
      app.getPageTitle().should('eq','VELUX PRIMA Portal - Rechnung einreichen');

      app.homePage.open(region);

      app.homePage.clickProductCatalogueBtn();
      app.getURL().should('eq', 'https://konfigurator.velux.ch/produktekatalog.html');
      app.getPageTitle().should('eq','VELUX Dachfenster - seit 70 Jahren erstklassige Dachfenster | VELUX Schweiz AG');

      app.homePage.open(region);

      app.homePage.clickPointsHistoryBtn();
      let purStatUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/purchase-status';
      app.getURL().should('eq', purStatUrl);
      app.getPageTitle().should('eq','VELUX PRIMA Portal - Status');
    }  

    
    //let prodCatUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/product-catalogue';
    //app.getURL().should('contain', prodCatUrl);
    //app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Fügen Sie Ihren Einkauf hinzu');

    
    //app.homePage.clickDSPBtn();
    //let dspUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/dsp-points';
    //app.getURL().should('contain', dspUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - DSP Points');

    //app.homePage.clickAddReplaceBtn();
    //let addReplUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-replacement';
    //app.getURL().should('contain', addReplUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - Add Replacement');

    //app.homePage.clickPointsHistoryBtn();
    //let pointHistUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/purchase-status';
    //app.getURL().should('contain', pointHistUrl);
    //app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Einreichstatus');
    
    //app.homePage.clickSpendPointsBtn();
    //let claimRewardUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners';
    //app.getURL().should('contain', claimRewardUrl);
    //app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Punkte einlösen');

    //app.homePage.clickTrainingPointBtn();
    //let trainPointUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/training-points';
    //app.getURL().should('contain', trainPointUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - Trainingspunten');

    //app.homePage.clickELearningBtn();
    //let eLearningUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/e-learning/home';
    //app.getURL().should('contain', eLearningUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - E-learning');

    //app.homePage.clickOrderHistoryBtn();
    //let orderHistoryUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/new_shop/orders-history';
    //app.getURL().should('contain', orderHistoryUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - Order History');

    //app.homePage.clickRewardsCalculatorBtn();
    //let rewardsCalculatorUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/rewards-calculator';
    //app.getURL().should('contain', rewardsCalculatorUrl);
    //app.getPageTitle().should('eq','VELUX Hantverkarbonus - Poängkalkylator');

    //app.homePage.clickDashboardBtn();
    //let dashboardUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/dashboard';
    //app.getURL().should('contain', dashboardUrl);
    //app.getPageTitle().should('eq','VELUX PLUS - Übersicht Kennzahlen');

    //app.homePage.clickBasketBtn();
    //let basketUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/velux-shop/cart';
    //app.getURL().should('contain', basketUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - Leden');

  });

})
