import { Helper } from 'cypress/util/helper';
import App from 'cypress/pageObjects/CH-FR/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_CH_FR')
};
let app = new App();
let region = 'ch';

describe('CH (FR lang) Region - Add Purchase Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToFR();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Soumettre la facture');
  });

  it('Verify Add Purchase Section', () => {
    app.addPurchasePage.addPurchaseSectionElement().should('be.visible');
    app.addPurchasePage.viewSection();
    app.addPurchasePage.headingElement().should('be.visible');
    app.addPurchasePage.formSectionElement().should('be.visible');
    app.addPurchasePage.cancelBtnElement().should('be.visible');
    app.addPurchasePage.continueBtnElement().should('be.visible');
  });

  it('Verify that the number dropdown is displayed and contains the correct values from 1 to 201.', () => {
    app.addPurchasePage.selectHowManyPropertyDropdown().find('option').should('have.length', 202)
    .each((option, index) => {
      if (index === 0) {
        cy.wrap(option).should('have.text', 'Veuillez sélectionner une entrée dans la liste.');
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
    app.addPurchasePage.selectPropertyValidationMsg().should('eq', "Veuillez sélectionner une entrée dans la liste.");
  });

  it('Verify 1 Property & Dont Know Installation Invoice Purchase', () => {
    app.addPurchasePage.selectHowManyProperty('1');
    app.addPurchasePage.describeInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectDescribeInstallation('Inconnu');
    app.addPurchasePage.clickContinueBtn();
    app.addPurchasePage.uploadInvoiceFormSectionElement().should('be.visible');
    app.addPurchasePage.viewUploadInvoiceSection();
    app.addPurchasePage.uploadInvoice('testInvoice.pdf').should('be.visible');
    app.addPurchasePage.clickFinishBtn();
    //app.addPurchasePage.successPurchaseToastElement().should('be.visible');
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match', /^\d+$/)
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'En attente');
  });

  it('Verify 1 Property, Replacing existing roof windows and Hall room Installation Invoice Purchase', () => {
    app.homePage.clickAddPurchseBtn();
    app.addPurchasePage.selectHowManyProperty('1');
    app.addPurchasePage.describeInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectDescribeInstallation('1:1 échange');
    app.addPurchasePage.inWhichRoomInstallationSectionElement().should('be.visible');
    app.addPurchasePage.selectWhichRoomInstallation('Couloir');
    app.addPurchasePage.clickContinueBtn();
    app.addPurchasePage.uploadInvoiceFormSectionElement().should('be.visible');
    app.addPurchasePage.viewUploadInvoiceSection();
    app.addPurchasePage.uploadInvoice('testInvoice.pdf').should('be.visible');
    app.addPurchasePage.clickFinishBtn();
    //app.addPurchasePage.successPurchaseToastElement().should('be.visible');
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match', /^\d+$/)
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'En attente');
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
    app.addPurchasePage.clickFinishBtn();
    //app.addPurchasePage.successPurchaseToastElement().should('be.visible');
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.homePage.clickPointsHistoryBtn();
    app.purchaseStatusPage.dateOfPurchase().should('be.oneOf', Helper.currentDate());
    app.purchaseStatusPage.refOfPurchase().should('match', /^\d+$/)
    app.purchaseStatusPage.statusOfPurchase().should('eq', 'En attente');
  });

  it('Verify “Cancel” button is clickable and redirects to the home page.', () => {
    app.homePage.clickAddPurchseBtn();
    app.addPurchasePage.clickCancelBtn();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
  });

})
