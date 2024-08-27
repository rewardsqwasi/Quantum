import { Helper } from 'cypress/util/helper';
import App from 'cypress/pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_DA'),
  "password": Cypress.env('MEMBER_PASSWORD_DA')
};
let app = new App();
let region = 'da';

describe('DA Region - Add Purchase Tests', () => {

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
    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Add Purchase');
  });

  it('Verify Add Purchase Section', () => {
    app.addPurchasePage.sectionBreadcrumbElement().should('be.visible');
    app.addPurchasePage.addPurchaseSectionElement().should('be.visible');
    app.addPurchasePage.viewSection();
    app.addPurchasePage.headingElement().should('be.visible');
    app.addPurchasePage.headlineTextElement().should('be.visible');
    app.addPurchasePage.formHeadingElement().should('be.visible');
    app.addPurchasePage.formSectionElement().should('be.visible');
    app.addPurchasePage.cancelBtnElement().should('be.visible');
    app.addPurchasePage.continueBtnElement().should('be.visible');
  });

  it('Verify that the number dropdown is displayed and contains the correct values from 1 to 201.', () => {
    app.addPurchasePage.selectHowManyPropertyDropdown().find('option').should('have.length', 202)
    .each((option, index) => {
      if (index === 0) {
        cy.wrap(option).should('have.text', 'Please select a number');
      }
      else {
        const expectedValue = index.toString();
        app.wrap(option).should('have.value', expectedValue);
        app.wrap(option).should('have.text', expectedValue);
      }
    });
  });

  it('Verify that submitting the form with invalid data displays appropriate error message.', () => {
    app.addPurchasePage.clickContinueBtn();
    app.addPurchasePage.selectPropertyValidationMsg().should('eq', "Please select an item in the list.");
  });

  it('Verify “Cancel” button is clickable and redirects to the home page.', () => {
    app.addPurchasePage.clickCancelBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
  });

  it('Verify 1 Property & Dont Know Installation Invoice Purchase', () => {
    app.homePage.clickAddPurchseBtn();
    app.addPurchasePage.selectHowManyProperty('1');
    app.addPurchasePage.describeInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectDescribeInstallation('Dont know');
    app.addPurchasePage.clickContinueBtn();
    app.addPurchasePage.uploadInvoiceFormSectionElement().should('be.visible');
    app.addPurchasePage.viewUploadInvoiceSection();
    app.addPurchasePage.uploadInvoice('testInvoice.pdf').should('be.visible');
    //app.addPurchasePage.selectAddPurchaseCheckBox();
    app.addPurchasePage.clickFinishBtn();
    //app.addPurchasePage.successPurchaseToastElement().should('be.visible');
    app.addPurchasePage.getHeadingText().should('contain', "Thanks for uploading your invoice!");
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match',/^\n\d+\n$/);
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'Pending');
  });

  it('Verify 1 Property, Replacing existing roof windows and Hall room Installation Invoice Purchase', () => {
    app.homePage.clickAddPurchseBtn();
    app.addPurchasePage.selectHowManyProperty('1');
    app.addPurchasePage.describeInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectDescribeInstallation('Replacing existing roof windows.');
    app.addPurchasePage.inWhichRoomInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectWhichRoomInstallation('Hall');
    app.addPurchasePage.clickContinueBtn();
    app.addPurchasePage.uploadInvoiceFormSectionElement().should('be.visible');
    app.addPurchasePage.viewUploadInvoiceSection();
    app.addPurchasePage.uploadInvoice('testInvoice.pdf').should('be.visible');
    //app.addPurchasePage.selectAddPurchaseCheckBox();
    app.addPurchasePage.clickFinishBtn();
    //app.addPurchasePage.successPurchaseToastElement().should('be.visible');
    app.addPurchasePage.getHeadingText().should('contain', "Thanks for uploading your invoice!");
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match',/^\n\d+\n$/);
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'Pending');
  });

  it('Verify 2 Property & Dont Know Installation Invoice Purchase', () => {
    app.homePage.clickAddPurchseBtn();
    app.addPurchasePage.selectHowManyProperty('2');
    app.addPurchasePage.inWhichProjectTypeSectionElement().should('be.visible');
    app.addPurchasePage.selectDontKnowInstallation();
    app.addPurchasePage.clickContinueBtn();
    app.addPurchasePage.uploadInvoiceFormSectionElement().should('be.visible');
    app.addPurchasePage.viewUploadInvoiceSection();
    app.addPurchasePage.uploadInvoice('testInvoice.pdf').should('be.visible');
    //app.addPurchasePage.selectAddPurchaseCheckBox();
    app.addPurchasePage.clickFinishBtn();
    //app.addPurchasePage.successPurchaseToastElement().should('be.visible');
    app.addPurchasePage.getHeadingText().should('contain', "Thanks for uploading your invoice!");
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match',/^\n\d+\n$/);
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'Pending');
  });

})