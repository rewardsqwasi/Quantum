import App from 'cypress/pageObjects/CH-FR/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_CH_FR')
};
let app = new App();
let region = 'ch';

describe('CH (FR lang) Region - Purchase Status Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToFR();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickPointsHistoryBtn();
    let purStatusUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/purchase-status';
    app.getURL().should('contain', purStatusUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Status');
  });

  it('Verify Your Points History Section', () => {
    app.purchaseStatusPage.sectionElement().should('be.visible');
    app.purchaseStatusPage.viewSection();
    app.purchaseStatusPage.tableElement().should('be.visible');
    app.purchaseStatusPage.tableHeaderColumnElement().should('be.visible');
  });

  it('Verify the status selector drop-down filter is working and showing required values', () => {
    app.purchaseStatusPage.filterStatusListElement().find('li').should('have.length', 5)
    .each((option, index) => {
      const expectedText = ['Tous', 'En attente', 'Rejeté', 'Confirmé', 'Reçus de crédit']
      app.wrap(option).should('have.text', expectedText[index]); 
    });
  });

  it('Verify if user is able to select the status filter and results are displayed accordingly', () => {
    app.purchaseStatusPage.selectStatus('Rejeté').should('have.attr', 'class').and('contain', "responsive-tabs__list__item--active");;
    //app.purchaseStatusPage.statusColumnElement().each((element) => {
    //  app.wrap(element).should('have.text', 'Rejeté');
   // });
  });
/*
  it('Verify the results quantity drop-down is displaying the values', () => {
    app.purchaseStatusPage.paginationSelectElement().find('option').should('have.length', 4)
    .each((option, index) => {
      const expectedValue = ['25', '50', '75', '100'];
      app.wrap(option).should('have.value', expectedValue[index]);
      app.wrap(option).should('have.text', expectedValue[index]); 
    });
  });
  
  it('Verify if user is displayed the results when the quantity is selected from the dropdown', () => {
    app.purchaseStatusPage.selectPerPage('25');
    app.purchaseStatusPage.columnElement().should('have.length', 26);
  });
*/
  it('Verify the edit pencil icon is appearing at the right place', () => {
    app.purchaseStatusPage.open(region);
    app.purchaseStatusPage.firstDataViewElement().should('be.visible');
  });

  it('Verify if clicking on edit pencil icon opens the submission details page', () => {
    app.purchaseStatusPage.clickEditPencilElement();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/submission/';
    app.getURL().should('contain', url);
  });

})
