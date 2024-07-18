import App from 'cypress/pageObjects/NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_NL'),
  "password": Cypress.env('MEMBER_PASSWORD_NL')
};
let app = new App();
let region = 'nl';

describe('NL Region - Purchase Status Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickPointsHistoryBtn();
    let purStatusUrl = Cypress.env('BASE_URL') + '/'+region+'/purchase-status';
    app.getURL().should('contain', purStatusUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Controleer aankopen');
  });

  it('Verify Your Points History Section', () => {
    app.purchaseStatusPage.sectionBreadcrumbElement().should('be.visible');
    app.purchaseStatusPage.sectionElement().should('be.visible');
    app.purchaseStatusPage.viewSection();
    app.purchaseStatusPage.tableElement().should('be.visible');
    app.purchaseStatusPage.tableHeaderColumnElement().should('be.visible');
    app.purchaseStatusPage.tableHeadingElement().should('be.visible');
  });

  it('Verify the status selector drop-down filter is working and showing required values', () => {
    app.purchaseStatusPage.filterStatusSelectElement().find('option').should('have.length', 5)
    .each((option, index) => {
      const expectedValue = ['All', 'Pending', 'inProgress', 'Approved', 'Rejected'];
      const expectedText = ['Totaal', 'In afwachting', 'In uitvoering\n', 'Goedgekeurd\n', 'Afgewezen\n']
      app.wrap(option).should('have.value', expectedValue[index]);
      app.wrap(option).should('have.text', expectedText[index]); 
    });
  });

  it('Verify if user is able to select the status filter and results are displayed accordingly', () => {
    app.purchaseStatusPage.selectStatus('Afgewezen');
    let url = Cypress.env('BASE_URL') + '/'+region+'/purchase-status?perPage=25&status=All&allSubmissions=1&status=Rejected';
    app.getURL().should('contain', url);
    app.purchaseStatusPage.statusColumnElement().each((element) => {
      app.wrap(element).should('have.text', 'Afgewezen');
    });
  });

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

  it('Verify the edit pencil icon is appearing at the right place', () => {
    app.purchaseStatusPage.firstDataViewElement().should('be.visible');
  });

  it('Verify if clicking on edit pencil icon opens the submission details page', () => {
    app.purchaseStatusPage.clickEditPencilElement();
    let url = Cypress.env('BASE_URL') + '/'+region+'/submission/';
    app.getURL().should('contain', url);
  });

})