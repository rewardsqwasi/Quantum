import App from 'cypress/pageObjects/IT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_IT'),
  "password": Cypress.env('MEMBER_PASSWORD_IT')
};
let app = new App();
let region = 'it';

describe('IT Region - Edit Profile Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickProfile();
    let url = Cypress.env('BASE_URL') + '/'+region+'/edit-profile';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Premia - Modifica profilo');
  });

  it('Verify Profile Section', () => {  
    app.profilePage.sectionBreadcrumbElement().should('be.visible');
    app.profilePage.sectionElement().should('be.visible');
    app.profilePage.viewSection();
    app.profilePage.sectionHeadingElement().should('be.visible');
  });

  it('Verify "profile details" fields exist and inputs can be given.', () => {  
    app.profilePage.customerIdFieldElement().should('be.visible');
    app.profilePage.firstNameFieldElement().should('be.visible');
    app.profilePage.lastNameFieldElement().should('be.visible');
    app.profilePage.companyNameFieldElement().should('be.visible');
    app.profilePage.companyNumberFieldElement().should('be.visible');
    app.profilePage.address1FieldElement().should('be.visible');
    app.profilePage.address2FieldElement().should('be.visible');
    app.profilePage.postcodeFieldElement().should('be.visible');
    app.profilePage.townFieldElement().should('be.visible');
    app.profilePage.emailFieldElement().should('be.visible');
    app.profilePage.mobileFieldElement().should('be.visible');
  });

  it('Verify that user is not able to edit the read only fields.', () => {  
    app.profilePage.customerIdFieldElement().should('have.attr', 'disabled');
  });

  it('Verify questions and inputs in the "A little bit about you and your company" exist', () => {  
    app.profilePage.howManyPeopleSelectElement().should('be.visible');
    app.profilePage.workingTimeSelectElement().should('be.visible');
    app.profilePage.howManyRoofSelectElement().should('be.visible');
    app.profilePage.howManyVeluxSelectElement().should('be.visible');
    app.profilePage.describeYourselfSelectElement().should('be.visible');
    app.profilePage.recommendVeluxSelectElement().should('be.visible');
  });

  it('Verify the answers are pre-populated when the edit profile page is accessed.', () => {  
    app.profilePage.howManyPeopleSelectElement().find('option:selected').should('have.length', 1);
    app.profilePage.workingTimeSelectElement().find('option:selected').should('have.length', 1);
    app.profilePage.howManyRoofSelectElement().should('have.attr', 'value').and('match',/^[0-9]+$/);
    app.profilePage.howManyVeluxSelectElement().find('option:selected').should('have.length', 1);
    app.profilePage.describeYourselfSelectElement().find('option:selected').should('have.length', 1);
    app.profilePage.recommendVeluxSelectElement().find('option:selected').should('have.length', 1);
  });

})