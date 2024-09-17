import { Helper } from 'cypress/util/helper';
import App from 'cypress/pageObjects/NO/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_NO'),
  "password": Cypress.env('MEMBER_PASSWORD_NO')
};
let app = new App();
let region = 'no';

describe('NO Region - Add Purchase Tests', () => {
  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Bonus - Last opp faktura');
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
        cy.wrap(option).should('have.text', 'Vennligst skriv inn et nummer');
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

  it('Verify 1 Property & Dont Know Installation Invoice Purchase', () => {
    app.addPurchasePage.selectHowManyProperty('1');
    app.addPurchasePage.describeInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectDescribeInstallation('Vet ikke');
    app.addPurchasePage.clickContinueBtn();
    app.addPurchasePage.uploadInvoiceFormSectionElement().should('be.visible');
    app.addPurchasePage.viewUploadInvoiceSection();
    app.addPurchasePage.uploadInvoice('testInvoice.pdf').should('be.visible');
    //app.addPurchasePage.selectAddPurchaseCheckBox();
    app.addPurchasePage.clickFinishBtn();
    //app.addPurchasePage.successPurchaseToastElement().should('be.visible');
    app.addPurchasePage.getHeadingText().should('contain', "TAKK FOR AT DU LASTTE OPP FAKTURA!");
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match',/^\n\d+\n$/);
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'Behandles');
  });

  it('Verify 1 Property, Replacing existing roof windows and Hall room Installation Invoice Purchase', () => {
    app.homePage.clickAddPurchseBtn();
    app.addPurchasePage.selectHowManyProperty('1');
    app.addPurchasePage.describeInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectDescribeInstallation('Skifte eksisterende takvinduer.');
    app.addPurchasePage.inWhichRoomInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectWhichRoomInstallation('Gang');
    app.addPurchasePage.clickContinueBtn();
    app.addPurchasePage.uploadInvoiceFormSectionElement().should('be.visible');
    app.addPurchasePage.viewUploadInvoiceSection();
    app.addPurchasePage.uploadInvoice('testInvoice.pdf').should('be.visible');
    //app.addPurchasePage.selectAddPurchaseCheckBox();
    app.addPurchasePage.clickFinishBtn();
    //app.addPurchasePage.successPurchaseToastElement().should('be.visible');
    app.addPurchasePage.getHeadingText().should('contain', "TAKK FOR AT DU LASTTE OPP FAKTURA!");
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match',/^\n\d+\n$/);
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'Behandles');
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
    app.addPurchasePage.getHeadingText().should('contain', "TAKK FOR AT DU LASTTE OPP FAKTURA!");
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match',/^\n\d+\n$/);
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'Behandles');
  });

  it('Verify “Cancel” button is clickable and redirects to the home page.', () => {
    app.homePage.clickAddPurchseBtn();
    app.addPurchasePage.clickCancelBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
  });

})
