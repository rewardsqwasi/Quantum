import { Helper } from 'cypress/util/helper';
import App from 'cypress/pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Add Replacement Tests', () => {

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
    app.homePage.clickAddReplaceBtn();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-replacement';
    app.getURL().should('contain', addPurUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Add Replacement');
  });

  it('Verify Add Replacement Section', () => {
    app.addReplacementPage.sectionElement().should('be.visible');
    app.addReplacementPage.viewSection();
    app.addReplacementPage.sectionBreadcrumbElement().should('be.visible');
    app.addReplacementPage.headingElement().should('be.visible');
    app.addReplacementPage.formSectionElement().should('be.visible');
    app.addReplacementPage.windowReplacedSelectElement().should('be.visible');
    app.addReplacementPage.isVeluxWindowSelectElement().should('be.visible');
    app.addReplacementPage.finishSelectElement().should('be.visible');
    app.addReplacementPage.functionSelectElement().should('be.visible');
    app.addReplacementPage.glazingTypeSelectElement().should('be.visible');
    app.addReplacementPage.projectDescriptionSelectElement().should('be.visible');
    app.addReplacementPage.projectDetailSelectElement().should('be.visible');
    app.addReplacementPage.roomTypeSelectElement().should('be.visible');
    app.addReplacementPage.nextBtnElement().should('be.visible');
    app.addReplacementPage.cancelBtnElement().should('be.visible'); 
  });

  it('Verify Add Replacement Submission', () => {
    app.addReplacementPage.selectNoOfWindowsReplaced('1');
    app.addReplacementPage.selectIsVeluxWindow('Yes');
    app.addReplacementPage.selectFinish('Pine');
    app.addReplacementPage.selectFunction('Top Hung');
    app.addReplacementPage.selectGlazingType('70 pane - Safety glazing');
    app.addReplacementPage.selectProjectDesc('Changing layout of property');
    app.addReplacementPage.selectProjectDetails('Replacing like for like (size & quantity)');
    app.addReplacementPage.selectRoomType('Living/dining area');
    app.addReplacementPage.clickNextBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/add-replacement-image/';
    app.getURL().should('contain', url);
    app.addReplacementPage.addDataPlate(region, 'testInvoice.pdf');
    app.addReplacementPage.addWindowImage(region, 'testInvoice.pdf');
    app.addReplacementPage.clickFinishBtn();
    //app.addReplacementPage.successToastElement().should('be.visible');
    app.addReplacementPage.getHeadingText().should('contain', "Thanks for uploading your invoice!");
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match',/^\n\d+\n$/);
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'Pending');
  });

})
