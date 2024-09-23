import App from 'cypress/pageObjects/AT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_AT'),
  "password": Cypress.env('MEMBER_PASSWORD_AT')
};
let app = new App();
let region = 'at';
const expectedValue = ['5', '10', '20', '25', '50', '100'];
const expectedText = ['€5', '€10', '€20', '€25', '€50', '€100'];

describe('AT Region - Partners Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickPartnersBtn();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Punkte einlösen');
  });

  it('Verify Partners Section', () => {
    app.partnersPage.sectionElement().should('be.visible');
    app.partnersPage.sectionHeadingElement().should('be.visible');
    app.partnersPage.eduschoDivElement().should('be.visible');
    app.partnersPage.amazonDivElement().should('be.visible');
    app.partnersPage.mediaDivElement().should('be.visible');
  });

  it('Verify Eduscho Page', () => {
    app.partnersPage.gotoEduscho();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners/293';
    app.getURL().should('contain', url);
    app.partnersPage.bonusDetailHeadingElement().should('be.visible');
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//div[@class="grid_8"]/h2').should('be.visible').invoke('text').should('eq', 'Eduscho (Tchibo)');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//a[text()="abbestellen"]').should('be.visible');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//button[@id="claim" and text()="Punkte einlösen"]').should('be.visible');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', 'Betrag auswählen');
            cy.wrap(option).should('have.value', '---');
          }
          else {
            app.wrap(option).invoke('attr', 'value').should('be.oneOf', expectedValue);
            app.wrap(option).invoke('text').should('be.oneOf', expectedText);
          }
        });
      });
    });
  });

  it('Verify Amazon Vouchers Page', () => {
    app.homePage.clickPartnersBtn();
    app.partnersPage.gotoAmazon();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners/1';
    app.getURL().should('contain', url);
    app.partnersPage.bonusDetailHeadingElement().should('be.visible');
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//div[@class="grid_8"]/h2').should('be.visible').invoke('text').should('eq', 'Amazon');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//a[text()="abbestellen"]').should('be.visible');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//button[@id="claim" and text()="Punkte einlösen"]').should('be.visible');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', 'Betrag auswählen');
            cy.wrap(option).should('have.value', '---');
          }
          else {
            app.wrap(option).invoke('attr', 'value').should('be.oneOf', expectedValue);
            app.wrap(option).invoke('text').should('be.oneOf', expectedText);
          }
        });
      });
    });
  });

  it('Verify Media Market Page', () => {
    app.homePage.clickPartnersBtn();
    app.partnersPage.gotoMedia();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners/8';
    app.getURL().should('contain', url);
    app.partnersPage.bonusDetailHeadingElement().should('be.visible');
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//div[@class="grid_8"]/h2').should('be.visible').invoke('text').should('eq', 'Media Markt');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//a[text()="abbestellen"]').should('be.visible');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//button[@id="claim" and text()="Punkte einlösen"]').should('be.visible');
    });
    app.partnersPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', 'Betrag auswählen');
            cy.wrap(option).should('have.value', '---');
          }
          else {
            app.wrap(option).invoke('attr', 'value').should('be.oneOf', expectedValue);
            app.wrap(option).invoke('text').should('be.oneOf', expectedText);
          }
        });
      });
    });
  });

})
