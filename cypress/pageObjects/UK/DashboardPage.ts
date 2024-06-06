import BasePage from "../BasePage";

export default class DashboardPage extends BasePage {

  private url = '/dashboard';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Dashboard")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//div[contains(@class,"dashboadSectionText")]/parent::div';
  private sectionHeading = '//h2[text()="Points / Income Summary Component"]';
  private currentPoints = '//p[text()="Current Points"]/preceding-sibling::h6';
  private totalPointsEarned = '//p[text()="Total Points Earned"]/preceding-sibling::h6';
  private totalPointsSpent = '//p[text()="Total Points Spent"]/preceding-sibling::h6';
  private pointsEarnedLastYear = '//td[text()="Points earned last year "]/following-sibling::td';
  private pointsEarnedThisYear = '//td[text()="Points earned this year "]/following-sibling::td';
  private pointsSpentLastYear = '//td[text()="Points spent last year "]/following-sibling::td';
  private pointsSpentThisYear = '//td[text()="Points spent this year "]/following-sibling::td';
  private pointsLastYearDashboard = '//h3[contains(text(),"Your Points Last Year")]/parent::div/parent::div';
  private pointsThisYearDashboard = '//h3[contains(text(),"Your Points This Year")]/parent::div/parent::div';
  private productSummaryComponentDiv = '//h2[text()="Product Summary Component"]/parent::div/parent::div/parent::div';
  private showRejectedCheckbox = '//span[text()="(show rejected)"]/preceding-sibling::input[@type="checkbox"]';

  showRejectedCheckboxElement(){
    return this.element(this.showRejectedCheckbox);
  }

  productSummaryComponentDivElement(){
    return this.element(this.productSummaryComponentDiv);
  }
  
  pointsThisYearDashboardElement(){
    return this.element(this.pointsThisYearDashboard);
  }

  pointsLastYearDashboardElement(){
    return this.element(this.pointsLastYearDashboard);
  }

  pointsSpentThisYearElement(){
    return this.element(this.pointsSpentThisYear);
  }

  pointsSpentLastYearElement(){
    return this.element(this.pointsSpentLastYear);
  }

  pointsEarnedThisYearElement(){
    return this.element(this.pointsEarnedThisYear);
  }

  pointsEarnedLastYearElement(){
    return this.element(this.pointsEarnedLastYear);
  }

  totalPointsEarnedElement(){
    return this.element(this.totalPointsEarned);
  }

  totalPointsSpentElement(){
    return this.element(this.totalPointsSpent);
  }

  currentPointsElement(){
    return this.element(this.currentPoints);
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

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
