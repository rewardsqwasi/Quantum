import App from '../../pageObjects/AT/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_AT'),
  "password": Cypress.env('MEMBER_PASSWORD_AT')
};
let app = new App();
let region = 'at';

describe('Sanity Test Austria Region', () => {
  
  it('Sanity Test Austria Region', () => {
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    let loginUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/login';
    app.getURL().should('contain', loginUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Startseite');
    app.loginPage.login(member.email, member.password);
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Startseite');
    

    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Fügen Sie Ihren Einkauf hinzu');

    //app.homePage.clickDSPBtn();
    //let dspUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/dsp-points';
    //app.getURL().should('contain', dspUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - DSP Points');

    //app.homePage.clickAddReplaceBtn();
    //let addReplUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-replacement';
    //app.getURL().should('contain', addReplUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - Add Replacement');

    app.homePage.clickPointsHistoryBtn();
    let pointHistUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Einreichstatus');
    //app.getPageTitle().should('match', new RegExp(`^(VELUX Handwerker Bonusclub - Einreichstatuse|VELUX Handwerker Bonusclub - Einreichstatus)$`));

    app.homePage.clickSpendPointsBtn();
    let claimRewardUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners';
    app.getURL().should('contain', claimRewardUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Punkte einlösen');

    //app.homePage.clickTrainingPointBtn();
    //let trainPointUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/training-points';
    //app.getURL().should('contain', trainPointUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - Trainingspunten');

    //app.homePage.clickELearningBtn();
    //let eLearningUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/e-learning/home';
    //app.getURL().should('contain', eLearningUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - E-learning');
    
    //app.homePage.clickSpendPointsBtn();
    //let claimRewardUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/claim-rewards';
    //app.getURL().should('contain', claimRewardUrl);
   // app.getPageTitle().should('eq','VELUX Hantverkarbonus - Lös in bonuspoäng');

    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Eingelöste Punkte überprüfen');

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
