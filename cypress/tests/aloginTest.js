import sanctionsData from "../fixtures/sanctoinsData.json"
import sanctions from "../locators/sanctions.json"

describe('Sanctions Programs', () => {
  
  before(() => { })
  beforeEach(() => { })

  it('Country Information', () => {

    cy.visit("https://ofac.treasury.gov/sanctions-programs-and-country-information");
    cy.url().should('include', '/sanctions-programs-and-country-information')

    //row 1
    cy.get(sanctions.tr1).contains(sanctionsData.afgSanctions).should('be.visible');
    cy.get(sanctions.tr1td2).contains(sanctionsData.afgSancDate).should('be.visible');
  //  cy.get(sanctions.tr1).should('be.visible');
    cy.log("row is visible");

    //row 2
    cy.get(sanctions.tr2).contains(sanctionsData.balkansSanctions).should('be.visible');
    cy.get(sanctions.tr2td2).contains(sanctionsData.balkanSancDate).should('be.visible');

    //row 3
    cy.get(sanctions.tr3).contains(sanctionsData.belarusSanctions).should('be.visible');
    cy.get(sanctions.tr3td2).contains(sanctionsData.belaSancDate).should('be.visible');

    //row 4
    cy.get(sanctions.tr4).contains(sanctionsData.burmaSanctions).should('be.visible');
    cy.get(sanctions.tr4td2).contains(sanctionsData.burmaSancDate).should('be.visible');

    //row 5
    cy.get(sanctions.tr5).contains("Central African Republic Sanctions").should('be.visible');
    cy.get(sanctions.tr5td2).contains("Dec 08, 2023").should('be.visible');

    //row 6
    cy.get(sanctions.tr6).contains("Chinese Military Companies Sanctions").should('be.visible');
    cy.get(sanctions.tr6td2).contains("Jun 01, 2022").should('be.visible');

    //row 7
    cy.get(sanctions.tr7).contains("Counter Narcotics Trafficking Sanctions").should('be.visible');
    cy.get(sanctions.tr7td2).contains("Dec 20, 2023").should('be.visible');

    //row 8
    cy.get(sanctions.tr8).contains("Counter Terrorism Sanctions").should('be.visible');
    cy.get(sanctions.tr8td2).contains("Jan 25, 2024").should('be.visible');

    //row 9
    cy.get(sanctions.tr9).contains("Countering America's Adversaries Through Sanctions Act-Related Sanctions").should('be.visible');
    cy.get(sanctions.tr9td2).contains("Sep 14, 2023").should('be.visible');

    //row 10
    cy.get(sanctions.tr10).contains("Cuba Sanctions").should('be.visible');
    cy.get(sanctions.tr10td2).contains("Sep 26, 2022").should('be.visible');

    //row 11
    cy.get(sanctions.tr11).contains("Cyber-Related Sanctions").should('be.visible');
    cy.get(sanctions.tr11td2).contains("Jan 23, 2024").should('be.visible');

    //row 12
    cy.get(sanctions.tr12).contains("Democratic Republic of the Congo-Related Sanctions").should('be.visible');
    cy.get(sanctions.tr12td2).contains("Dec 08, 2023").should('be.visible');

    //row 13
    cy.get(sanctions.tr13).contains("Ethiopia-Related Sanctions").should('be.visible');
    cy.get(sanctions.tr13td2).contains("Feb 08, 2022").should('be.visible');

    //row 14
    cy.get(sanctions.tr14).contains("Foreign Interference in a United States Election Sanctions").should('be.visible');
    cy.get(sanctions.tr14td2).contains("Dec 04, 2023").should('be.visible');

    cy.get(sanctions.tableRows)
    .find("tr")
    .then((row) => {
      
      if(row.length+1 > 38){
        throw new Error("rows are more than 38")
      }
      
    });

  })

  afterEach(() => {
  })

})