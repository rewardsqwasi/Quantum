import BasePage from "../BasePage";

export default class DashboardPage extends BasePage {

  private url = '/dashboard';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Dashboard")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//div[contains(@class,"dashboadSectionText")]/parent::div';
  private sectionHeading = '//h2[text()="Puntenoverzicht"]';
  private yourPointsHeading = '//h3[text()="Saldo"]';
  private pointsAvailable = '//p[text()="Huidige punten"]/preceding-sibling::h6';
  private totalPointsEarned = '//p[text()="Jouw totaal aantal punten (sinds jouw registratie)"]/preceding-sibling::h6';
  private totalPointsSpent = '//p[text()="Verbruikte punten (totaal)"]/preceding-sibling::h6';

  totalPointsEarnedElement(){
    return this.element(this.totalPointsEarned);
  }

  totalPointsSpentElement(){
    return this.element(this.totalPointsSpent);
  }

  pointsAvailableElement(){
    return this.element(this.pointsAvailable);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  sectionHeadingElement(){
    return this.element(this.sectionHeading);
  }

  yourPointsHeadingElement(){
    return this.element(this.yourPointsHeading);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
