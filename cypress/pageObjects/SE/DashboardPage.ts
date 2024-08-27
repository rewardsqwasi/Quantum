import BasePage from "../BasePage";

export default class DashboardPage extends BasePage {

  private url = '/dashboard';
  private section_breadcrumb = '//li[contains(text(),"VELUX Hantverkarbonus - Dashboard")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//div[contains(@class,"dashboadSectionText")]/parent::div';
  private sectionHeading = '//h2[text()="Översikt över dina poäng"]';
  private yourPointsHeading = '//h3[text()="Dina bonuspoäng"]';
  private pointsAvailable = '//p[text()="Nuvarande bonuspoäng"]/preceding-sibling::h6';
  private totalPointsEarned = '//p[contains(text(),"Intjänade poäng ")]/preceding-sibling::h6';
  private totalPointsSpent = '//p[contains(text(),"Spenderade poäng")]/preceding-sibling::h6';
  private pointsExpiresOn = '//p[contains(text(),"Points qui expirent le")]/preceding-sibling::h6';

  pointsExpiresOnElement(){
    return this.element(this.pointsExpiresOn);
  }

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