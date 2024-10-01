import App from 'cypress/pageObjects/FR/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_FR')
};
let app = new App();
let region = 'fr';

describe('FR Region - My Project Tests', () => {

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
    app.homePage.clickSpendPointsBtn();
    app.claimRewardsPage.gotoMyProject();
    let url = Cypress.env('BASE_URL') + '/'+region+'/mon-projet';
    app.getURL().should('contain', url);    
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX & CO - Projects');
  });

  it('Verify My Project Section', () => {
    app.myProjectPage.sectionDivElement().should('be.visible');
    app.myProjectPage.sectionBreadcrumbElement().should('be.visible');
    app.myProjectPage.sectionHeadingElement().should('be.visible');
    app.myProjectPage.sectionFormTextElement().should('be.visible');
    app.myProjectPage.communicationServicesListElement().should('be.visible');
    app.myProjectPage.professionalEventsListElement().should('be.visible');
    app.myProjectPage.pointsInputFieldElement().should('be.visible');
    app.myProjectPage.commentsInputFieldElement().should('be.visible');
    app.myProjectPage.cancelBtnElement().should('be.visible');
    app.myProjectPage.continueBtnElement().should('be.visible');
  });

  it('Verify Type of Services', () => {
    app.myProjectPage.communicationServicesListElement().find('li').should('have.length', 6)
    .each((option, index) => {
      const expectedValue = ['Affichage (4x3, abri-bus etc)', 'Flyers et emailing (création / distribution / diffusion)', 
      'Campagne radio / presse / TV', 'Campagne digitale (réseaux sociaux)', 'Création site internet', 'Outils d\'aide à la vente - Vidéoprojecteur'];
      app.wrap(option).should('have.text', expectedValue[index]);
    });

    app.myProjectPage.professionalEventsListElement().find('li').should('have.length', 5)
    .each((option, index) => {
      const expectedValue = ['Location d\'espace', 'Aménagement du stand / showroom', 'PLV sur mesure', 
      'Achat de matériel dans le cadre d\'un évènement professionnel', 'Portes ouvertes'];
      app.wrap(option).should('have.text', expectedValue[index]);
    });

    app.myProjectPage.domainSelectElement().find('option').should('have.length', 2)
    .each((option, index) => {
      const expectedValue = ['Communication', 'Evènements professionnels'];
      app.wrap(option).should('have.text', expectedValue[index]);
      app.wrap(option).should('have.value', expectedValue[index]);
    });

    app.myProjectPage.selectDomain('Evènements professionnels');
    app.myProjectPage.eventsTableDivElement().should('be.visible');
    app.myProjectPage.eventsTableDivElement().find('input').should('have.length', 8)
    .each((option, index) => {
      const expectedValue = ['Location d\'espace', 'Aménagement du stand / showroom', 'PLV sur mesure', 
      'Achat de matériel dans le cadre d\'un évènement professionel', 'Portes ouvertes', 'Création de vidéo personnalisée',
      'Autre'];
      if(index<7) app.wrap(option).should('have.value', expectedValue[index]);
    });

    app.myProjectPage.selectDomain('Communication');
    app.myProjectPage.communicationTableDivElement().should('be.visible');
    app.myProjectPage.communicationTableDivElement().find('input').should('have.length', 9)
    .each((option, index) => {
      const expectedValue = ['Affichage (4x3, abri-bus etc)', 'Flyers et emailing (création / distribution / diffusion)', 
      'Campagne radio / presse / TV (Création / achat d\'espace)', 'Campagne digitale (réseaux sociaux)', 'Création site internet', 
      'Création de vidéo personnalisée', 'Outils d\'aide à la vente - Vidéoprojecteur', 'Autre'];
      if(index<8) app.wrap(option).should('have.value', expectedValue[index]);
    });
  
  });

})
