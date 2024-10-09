import App from 'cypress/pageObjects/AT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_AT'),
  "password": Cypress.env('MEMBER_PASSWORD_AT')
};
let app = new App();
let region = 'at';

describe('AT Region - Purchase Status Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickPointsHistoryBtn();
    let purStatusUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/purchase-status';
    app.getURL().should('contain', purStatusUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Einreichstatus');
  });

  it('Verify Your Points History Section', () => {
    app.purchaseStatusPage.sectionElement().should('be.visible');
    app.purchaseStatusPage.viewSection();
    app.purchaseStatusPage.tableElement().should('be.visible');
    app.purchaseStatusPage.tableHeaderColumnElement().should('be.visible');
    app.purchaseStatusPage.tableHeadingElement().should('be.visible');
  });

  it('Verify the status selector drop-down filter is working and showing required values', () => {
    app.purchaseStatusPage.filterStatusListElement().find('li').should('have.length', 4)
    .each((option, index) => {
      const expectedText = ['Alle', 'in Bearbeitung', 'Abgelehnt', 'Genehmigt']
      app.wrap(option).should('have.text', expectedText[index]); 
    });
  });

  it('Verify if user is able to select the status filter and results are displayed accordingly', () => {
    app.purchaseStatusPage.selectStatus('Abgelehnt').should('have.attr', 'class').and('contain', "responsive-tabs__list__item--active");;
    app.purchaseStatusPage.statusColumnElement().each((element) => {
      app.wrap(element).should('have.text', 'Abgelehnt');
   });
  });

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
