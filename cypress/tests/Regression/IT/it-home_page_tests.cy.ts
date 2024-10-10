import App from 'cypress/pageObjects/IT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_IT'),
  "password": Cypress.env('MEMBER_PASSWORD_IT')
};
let app = new App();
let region = 'it';

describe('IT Region - Home Page Tests', () => {
  
  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Header Menu Links', () => {
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.homePage.clickMainBtn();
    app.getURL().should('contain', homeUrl);
    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);  
    app.homePage.clickPointsHistoryBtn();
    let pointHistUrl = Cypress.env('BASE_URL') + '/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
    app.homePage.clickSpendPointsBtn();
    let claimRewardUrl = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', claimRewardUrl);
    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
    app.homePage.clickRewardsCalculatorBtn();
    let rewardsCalculatorUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', rewardsCalculatorUrl);
    app.homePage.clickDashboardBtn();
    let dashboardUrl = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', dashboardUrl);
    app.homePage.clickBasketBtn();
    let basketUrl = Cypress.env('BASE_URL') + '/'+region+'/velux-shop/cart';
    app.getURL().should('contain', basketUrl);
  });

  it('Verify Page URL', () => {
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.homePage.clickMainBtn();
    app.getURL().should('contain', homeUrl);
    app.getPageTitle().should('eq','VELUX Premia - Home Page');
  });

  it('Verify Banners Section', () => {
    app.homePage.open(region);
    app.homePage.bannerSectionDivElement().should('be.visible');
    app.homePage.swiperBannerDivElement().should('have.length', 2)
  });

  it('Verify Mini Dashboard Section', () => {
    app.homePage.open(region);
    app.homePage.miniDashboardBannerDivElement().should('be.visible');
    app.homePage.currentPointDivElement().should('be.visible');
    app.homePage.pointsEarnedDivElement().should('be.visible');
    app.homePage.pointsSpentDivElement().should('be.visible');
    app.homePage.totalPointsDivElement().should('be.visible');
    app.homePage.bonusLevelChartElement().should('be.visible');
    app.homePage.clickBonusLevelChart();
    let dashboardUrl = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', dashboardUrl);
  });

  it('Verify CTA Buttons', () => {
    app.homePage.open(region);
    app.homePage.clickAddPurchaseCTA();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.open(region);
    app.homePage.clickSpendPointsCTA();
    let claimRewardUrl = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', claimRewardUrl);
    app.homePage.open(region);
    app.homePage.clickRewardCalculatorCTA();
    let rewardsCalculatorUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', rewardsCalculatorUrl);
    app.homePage.open(region);
  });
/*
  it('Verify Claim Rewards Section', () => {
    app.homePage.open(region);
    app.homePage.claimRewardsHeadingElement().should('be.visible');
    app.homePage.viewClaimRewardsSection();
    app.homePage.claimRewardsDivElement().should('be.visible');
    
  });
*/
  it('Verify Stay Informed Section', () => {
    app.homePage.stayInformedHeadingElement().should('be.visible');
    app.homePage.viewStayInformedSection();
    app.homePage.stayInformedDivElement().should('be.visible');
  });

  it('Verify Tools and Training Section', () => {
    app.homePage.toolsAndTrainingHeadingElement().should('be.visible');
    app.homePage.viewToolsAndTrainingSection();
    app.homePage.totalPointsDivElement().should('be.visible');
  });

  it('Verify Contact Us Section', () => {
    app.homePage.contactUsBannerDivElement().should('be.visible');
  });

})
