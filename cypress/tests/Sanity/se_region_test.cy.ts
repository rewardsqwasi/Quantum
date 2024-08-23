import App from '../../pageObjects/SE/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_SE'),
  "password": Cypress.env('MEMBER_PASSWORD_SE')
};
let app = new App();
let region = 'se';

describe('Sanity Test Sweden Region', () => {
  
  it('Sanity Test Sweden Region', () => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Hem');

    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Lägg till köp');

    app.homePage.clickPointsHistoryBtn();
    let pointHistUrl = Cypress.env('BASE_URL') + '/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Inköpsstatus');
    
    app.homePage.clickSpendPointsBtn();
    let claimRewardUrl = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', claimRewardUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Lös in bonuspoäng');

    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Bonushistorik');

    app.homePage.clickRewardsCalculatorBtn();
    let rewardsCalculatorUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', rewardsCalculatorUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Poängkalkylator');

    app.homePage.clickDashboardBtn();
    let dashboardUrl = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', dashboardUrl);
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Dashboard');

  });

})
