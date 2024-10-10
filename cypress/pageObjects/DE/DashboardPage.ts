import BasePage from "../BasePage";

export default class DashboardPage extends BasePage {

  private url = '/dashboard';
  private section = '//div[@id="your-points"]';
  private sectionHeading = '//h2[text()="Punkteübersicht"]';
  private yourPointsHeading = '//h3[text()="Ihr bisheriger Ertrag"]';
  private pointsAvailable = '//div/text()[normalize-space()="Aktuelle Punkte"]/preceding-sibling::span';
  private totalPointsEarned = '//div/text()[normalize-space()="Insgesamt verdiente Punkte"]/preceding-sibling::span';
  private totalPointsSpent = '//div/text()[normalize-space()="Insgesamt ausgegebene Punkte"]/preceding-sibling::span';

  totalPointsEarnedElement(){
    return this.element(this.totalPointsEarned);
  }

  totalPointsSpentElement(){
    return this.element(this.totalPointsSpent);
  }

  pointsAvailableElement(){
    return this.element(this.pointsAvailable);
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
