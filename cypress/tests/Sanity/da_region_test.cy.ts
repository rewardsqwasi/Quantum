import App from '../../pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_DA'),
  "password": Cypress.env('MEMBER_PASSWORD_DA')
};
let app = new App();
let region = 'da';

describe('Sanity Test Dakea Region', () => {
  
  it('Sanity Test Dakea Region', () => {
    //app.loginPage.open(region);
    //if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    //}
    app.loginPage.open(region);
    app.loginPage.headerLinksSectionElement().should('be.visible');
    app.loginPage.footerLinksSectionElement().should('be.visible');
    app.loginPage.forgotPassBtnElement().should('be.visible');
    app.loginPage.login(member.email, member.password);
    app.homePage.mainTabBtnElement().should('be.visible');
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Rewards - Home');
    app.homePage.bannerSectionDivElement().should('be.visible');
    app.homePage.swiperBannerDivElement().should('have.length', 2);
    app.homePage.miniDashboardBannerDivElement().should('be.visible');
    app.homePage.clickGotoMiniDashboardChart();
    app.homePage.currentPointDivElement().should('exist');
    app.homePage.pointsEarnedDivElement().should('exist');
    app.homePage.pointsSpentDivElement().should('exist');
    app.homePage.totalPointsDivElement().should('exist');
    app.homePage.bonusLevelChartElement().should('exist');

    app.homePage.rewardCalculatorCTAElement().should('be.visible');
    app.homePage.spendPointsCTAElement().should('be.visible');
    app.homePage.addPurchaseCTAElement().should('be.visible');

    /*
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
    */
 
    //app.homePage.clickBonusLevelChart();
    //let dashboardUrl = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    //app.getURL().should('contain', dashboardUrl);

    app.homePage.stayInformedHeadingElement().should('be.visible');
    app.homePage.viewStayInformedSection();
    app.homePage.stayInformedDivElement().should('be.visible');

    app.homePage.serviceHeadingElement().should('be.visible');
    app.homePage.viewServicesSection();
    app.homePage.servicesDivElement().should('be.visible');


    app.homePage.contactUsBannerDivElement().should('be.visible');
    app.homePage.contactUsBtnElement().should('be.visible');

    //app.homePage.clickContactUsBtn();
    //let url = Cypress.env('BASE_URL') + '/'+region+'/contact';
    //app.getURL().should('contain', url);

    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.contactEmailFooterTextElement().should('be.visible');
    app.homePage.contactNumberFooterTextElement().should('be.visible');
    app.homePage.getAddressFooterText().should('eq', 'VELUX Company LtdWoodside WayGlenrothesFifeScotlandKY7 4ND');
    app.homePage.altaterraEmailFooterTextElement().should('be.visible');
    app.homePage.altaterraNumberFooterTextElement().should('be.visible');

    /*
    app.homePage.clickTermsLinkFooter();
    let termUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termUrl);
    app.homePage.clickPromotionalLinkFooter();
    let promotionalUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-promotion';
    app.getURL().should('contain', promotionalUrl);
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);
    if(IS_PROD==="false"){
      app.homePage.clickFAQLinkFooter();
      let faqUrl = Cypress.env('BASE_URL') + '/'+region+'/faq';
      app.getURL().should('contain', faqUrl);
    }
    app.homePage.clickEarnPointsLinkFooter();
    let earnUrl = Cypress.env('BASE_URL') + '/'+region+'/how-to-earn-points';
    app.getURL().should('contain', earnUrl);
    app.homePage.clickAltaterraPrivacyLinkFooter();
    app.getURL().should('contain', 'https://dakea.co.uk/app/uploads/2022/02/Privacy-Policy.pdf');
    app.homePage.open(region);
    app.homePage.clickVeluxPrivacyLinkFooter();
    app.getURL().should('contain', 'https://www.velux.co.uk/legal/privacy-policy');
    */

    app.homePage.veluxTwitterLinkElement().should('be.visible');
    app.homePage.veluxPinterestLinkElement().should('be.visible');
    app.homePage.veluxYoutubeLinkElement().should('be.visible');
    app.homePage.veluxFacebookLinkElement().should('be.visible');
    app.homePage.dakeaFacebookLinkElement().should('be.visible');
    app.homePage.dakeaLinkedinLinkElement().should('be.visible');
    app.homePage.dakeaYoutubeLinkElement().should('be.visible');

    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.getPageTitle().should('eq','VELUX Rewards - Add Purchase');
    app.addPurchasePage.addPurchaseSectionElement().should('be.visible');
    app.addPurchasePage.viewSection();
    app.addPurchasePage.headingElement().should('be.visible');
    app.addPurchasePage.headlineTextElement().should('be.visible');
    app.addPurchasePage.formHeadingElement().should('be.visible');
    app.addPurchasePage.formSectionElement().should('be.visible');
    app.addPurchasePage.cancelBtnElement().should('be.visible');
    app.addPurchasePage.continueBtnElement().should('be.visible');
    app.addPurchasePage.selectHowManyProperty('1');
    app.addPurchasePage.describeInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectDescribeInstallation('Dont know');
    app.addPurchasePage.selectDescribeInstallation('Replacing existing roof windows.');
    app.addPurchasePage.inWhichRoomInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectWhichRoomInstallation('Hall');
    app.addPurchasePage.selectHowManyProperty('2');
    app.addPurchasePage.inWhichProjectTypeSectionElement().should('be.visible');
    app.addPurchasePage.selectDontKnowInstallation();

    //app.homePage.clickDSPBtn();
    //let dspUrl = Cypress.env('BASE_URL') + '/'+region+'/dsp-points';
    //app.getURL().should('contain', dspUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - DSP Points');
   // app.dspPage.sectionElement().should('be.visible');
   // app.dspPage.dspTableElement().should('be.visible');
    //app.dspPage.tableHeaderColumnElement().should('be.visible');

    app.homePage.clickAddReplaceBtn();
    let addReplUrl = Cypress.env('BASE_URL') + '/'+region+'/add-replacement';
    app.getURL().should('contain', addReplUrl);
    app.getPageTitle().should('eq','VELUX Rewards - Add Replacement');
    app.addReplacementPage.sectionElement().should('be.visible');
    app.addReplacementPage.viewSection();
    app.addReplacementPage.formSectionElement().should('be.visible');
    app.addReplacementPage.headingElement().should('be.visible');
    app.addReplacementPage.windowReplacedSelectElement().should('be.visible');
    app.addReplacementPage.isVeluxWindowSelectElement().should('be.visible');
    app.addReplacementPage.finishSelectElement().should('be.visible');
    app.addReplacementPage.functionSelectElement().should('be.visible');
    app.addReplacementPage.glazingTypeSelectElement().should('be.visible');
    app.addReplacementPage.projectDescriptionSelectElement().should('be.visible');
    app.addReplacementPage.projectDetailSelectElement().should('be.visible');
    app.addReplacementPage.roomTypeSelectElement().should('be.visible');
    app.addReplacementPage.cancelBtnElement().should('be.visible');
    app.addReplacementPage.nextBtnElement().should('be.visible');

    app.homePage.clickPointsHistoryBtn();
    let pointHistUrl = Cypress.env('BASE_URL') + '/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
    app.getPageTitle().should('eq','VELUX Rewards - Purchase Status');
    app.purchaseStatusPage.sectionElement().should('be.visible');
    app.purchaseStatusPage.viewSection();
    app.purchaseStatusPage.tableElement().should('be.visible');
    app.purchaseStatusPage.tableHeaderColumnElement().should('be.visible');
    app.purchaseStatusPage.tableHeadingElement().should('be.visible');
    app.purchaseStatusPage.filterStatusSelectElement().should('be.visible');
    app.purchaseStatusPage.paginationSelectElement().should('be.visible');

 //   app.homePage.clickTrainingPointBtn();
   // let trainPointUrl = Cypress.env('BASE_URL') + '/'+region+'/training-points';
   // app.getURL().should('contain', trainPointUrl);
   // app.getPageTitle().should('eq','VELUX Rewards - Training Points');
   // app.trainingPointsPage.sectionElement().should('be.visible');
  //  app.trainingPointsPage.viewSection();
   // app.trainingPointsPage.headingElement().should('be.visible');
   // app.trainingPointsPage.formSectionElement().should('be.visible');
  //  app.trainingPointsPage.validateCodeBtnElement().should('be.visible');
    //app.trainingPointsPage.codeInputFieldElement().should('be.visible');

    //app.trainingPointsPage.currentBoostedHeadingElement().should('be.visible');
    //app.trainingPointsPage.pointsRelatedHeadingElement().should('be.visible');


    app.homePage.clickSpendPointsBtn();
    let claimRewardUrl = Cypress.env('BASE_URL') + '/'+region+'/partners';
    let claimRewardUrl2 = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('match', new RegExp(`^(${claimRewardUrl}|${claimRewardUrl2})$`));
    app.getPageTitle().should('eq','VELUX Rewards - Claim Rewards');
    app.claimRewardsPage.shopSectionDivElement().should('be.visible');
    app.claimRewardsPage.viewSection();
    //app.claimRewardsPage.headingElement().should('be.visible');
    //app.claimRewardsPage.veluxRewardsShopDivElement().should('be.visible');
    //app.claimRewardsPage.retailersDivElement().should('be.visible');
    //app.claimRewardsPage.productSectionDivElement().should('be.visible');

    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
    app.getPageTitle().should('eq','VELUX Rewards - Rewards History');

    //app.homePage.clickOrderHistoryBtn();
    //let orderHistoryUrl = Cypress.env('BASE_URL') + '/'+region+'/new_shop/orders-history';
   // app.getURL().should('contain', orderHistoryUrl);
    //app.getPageTitle().should('eq','VELUX Rewards - Order History');

    app.homePage.clickRewardsCalculatorBtn();
    let rewardsCalculatorUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', rewardsCalculatorUrl);
    app.getPageTitle().should('eq','VELUX Rewards - Rewards Calculator');

    app.homePage.clickDashboardBtn();
    let dashboardUrl = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', dashboardUrl);
    app.getPageTitle().should('eq','VELUX Rewards - Dashboard');

   // app.homePage.clickBasketBtn();
   // let basketUrl = Cypress.env('BASE_URL') + '/'+region+'/new_shop/basket';
    //app.getURL().should('contain', basketUrl);
   // app.getPageTitle().should('eq','VELUX Rewards - Basket');

  });

})
