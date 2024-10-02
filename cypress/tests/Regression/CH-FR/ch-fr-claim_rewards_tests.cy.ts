import App from 'cypress/pageObjects/CH-FR/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_CH_FR')
};
let app = new App();
let region = 'ch';
const expectedValue = ['5', '10', '20', '25', '50', '100', '200'];
const expectedText = ['CHF 5', 'CHF 10', 'CHF 20', 'CHF 25', 'CHF 50', 'CHF 100', 'CHF 200'];

describe('CH (FR lang) Region - Claim Rewards Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToFR();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickClaimRewardsCTA();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/claim-rewards';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Echanger des points');
  });

  it('Verify Partners Section', () => {
    app.claimRewardsPage.sectionElement().should('be.visible');
    app.claimRewardsPage.sectionHeadingElement().should('be.visible');
    app.claimRewardsPage.sectionHeading2Element().should('be.visible');
    app.claimRewardsPage.dealerDivElement().should('be.visible');
    app.claimRewardsPage.zalandoDivElement().should('be.visible');
    app.claimRewardsPage.ticketcornerDivElement().should('be.visible');
    app.claimRewardsPage.mediaDivElement().should('be.visible');
    app.claimRewardsPage.manorDivElement().should('be.visible');
    app.claimRewardsPage.coopDivElement().should('be.visible');
  });

  it('Verify Zalando Page', () => {
    app.claimRewardsPage.open(region);
    app.claimRewardsPage.gotoZalando();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners/21';
    app.getURL().should('contain', url);
    app.claimRewardsPage.bonusDetailHeadingElement().should('be.visible');
    app.claimRewardsPage.sidebarDivElement().should('be.visible');
    app.claimRewardsPage.claimRewardBtnElement().should('be.visible');
    app.claimRewardsPage.allVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.myVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//div[@class="grid_8"]/h2').should('be.visible').invoke('text').should('eq', 'Zalando');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//a[text()="Annuler"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//button[@id="claim" and text()="Collecter"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', 'Choisissez le montant');
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

  it('Verify Ticketcorner Page', () => {
    app.claimRewardsPage.open(region);
    app.claimRewardsPage.gotoTicketcorner();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners/22';
    app.getURL().should('contain', url);
    app.claimRewardsPage.bonusDetailHeadingElement().should('be.visible');
    app.claimRewardsPage.sidebarDivElement().should('be.visible');
    app.claimRewardsPage.claimRewardBtnElement().should('be.visible');
    app.claimRewardsPage.allVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.myVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//div[@class="grid_8"]/h2').should('be.visible').invoke('text').should('eq', 'Ticketcorner');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//a[text()="Annuler"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//button[@id="claim" and text()="Collecter"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', 'Choisissez le montant');
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
    app.claimRewardsPage.open(region);
    app.claimRewardsPage.gotoMedia();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners/23';
    app.getURL().should('contain', url);
    app.claimRewardsPage.bonusDetailHeadingElement().should('be.visible');
    app.claimRewardsPage.sidebarDivElement().should('be.visible');
    app.claimRewardsPage.claimRewardBtnElement().should('be.visible');
    app.claimRewardsPage.allVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.myVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//div[@class="grid_8"]/h2').should('be.visible').invoke('text').should('eq', 'Media Markt');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//a[text()="Annuler"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//button[@id="claim" and text()="Collecter"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', 'Choisissez le montant');
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

  it('Verify Manor Page', () => {
    app.claimRewardsPage.open(region);
    app.claimRewardsPage.gotoManor();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners/24';
    app.getURL().should('contain', url);
    app.claimRewardsPage.bonusDetailHeadingElement().should('be.visible');
    app.claimRewardsPage.sidebarDivElement().should('be.visible');
    app.claimRewardsPage.claimRewardBtnElement().should('be.visible');
    app.claimRewardsPage.allVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.myVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//div[@class="grid_8"]/h2').should('be.visible').invoke('text').should('eq', 'Manor');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//a[text()="Annuler"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//button[@id="claim" and text()="Collecter"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', 'Choisissez le montant');
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

  it('Verify Coop Page', () => {
    app.claimRewardsPage.open(region);
    app.claimRewardsPage.gotoCoop();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners/25';
    app.getURL().should('contain', url);
    app.claimRewardsPage.bonusDetailHeadingElement().should('be.visible');
    app.claimRewardsPage.sidebarDivElement().should('be.visible');
    app.claimRewardsPage.claimRewardBtnElement().should('be.visible');
    app.claimRewardsPage.allVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.myVouchersBtnElement().should('be.visible');
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//div[@class="grid_8"]/h2').should('be.visible').invoke('text').should('eq', 'Coop');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//a[text()="Annuler"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).xpath('//button[@id="claim" and text()="Collecter"]').should('be.visible');
    });
    app.claimRewardsPage.rewardDetailElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', 'Choisissez le montant');
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
