import App from '../../pageObjects/FR/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_FR')
};
let app = new App();
let region = 'fr';

describe('Sanity Test France Region', () => {
  
  it('Sanity Test France Region', () => {
    //app.loginPage.open(region);
    //if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    //}
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX & CO - Accueil');

    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.getPageTitle().should('eq','VELUX & CO - Ajouter une facture');

    //app.homePage.clickDSPBtn();
    //let dspUrl = Cypress.env('BASE_URL') + '/'+region+'/dsp-points';
    //app.getURL().should('contain', dspUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - DSP Points');

    //app.homePage.clickAddReplaceBtn();
    //let addReplUrl = Cypress.env('BASE_URL') + '/'+region+'/add-replacement';
    //app.getURL().should('contain', addReplUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - Add Replacement');

    app.homePage.clickPointsHistoryBtn();
    let pointHistUrl = Cypress.env('BASE_URL') + '/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
    app.getPageTitle().should('eq','VELUX & CO - Statut de la facture');

   // app.homePage.clickTrainingPointBtn();
   // let trainPointUrl = Cypress.env('BASE_URL') + '/'+region+'/training-points';
   // app.getURL().should('contain', trainPointUrl);
   // app.getPageTitle().should('eq','VELUX Rewards - Trainingspunten');

   // app.homePage.clickELearningBtn();
   // let eLearningUrl = Cypress.env('BASE_URL') + '/'+region+'/e-learning/home';
    //app.getURL().should('contain', eLearningUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - E-learning');
    
    app.homePage.clickSpendPointsBtn();
    let claimRewardUrl = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', claimRewardUrl);
    app.getPageTitle().should('eq','VELUX & CO - Convertir mes points');

    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
    app.getPageTitle().should('eq','VELUX & CO - Historique des points');

    app.homePage.clickProjectsBtn();
    let projectsUrl = Cypress.env('BASE_URL') + '/'+region+'/projects';
    app.getURL().should('contain', projectsUrl);
    app.getPageTitle().should('eq','VELUX & CO - Projets');

    //app.homePage.clickOrderHistoryBtn();
    //let orderHistoryUrl = Cypress.env('BASE_URL') + '/'+region+'/new_shop/orders-history';
    //app.getURL().should('contain', orderHistoryUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - Order History');

    app.homePage.clickRewardsCalculatorBtn();
    let rewardsCalculatorUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', rewardsCalculatorUrl);
    app.getPageTitle().should('eq','VELUX & CO - Calculateur de points');

    app.homePage.clickDashboardBtn();
    let dashboardUrl = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', dashboardUrl);
    app.getPageTitle().should('eq','VELUX & CO - Tableau de bord');
/*
    app.homePage.clickBasketBtn();
    let basketUrl = Cypress.env('BASE_URL') + '/'+region+'/velux-shop/cart';
    app.getURL().should('contain', basketUrl);
    app.getPageTitle().should('eq','VELUX Rewards - Leden');
*/
  });

})
