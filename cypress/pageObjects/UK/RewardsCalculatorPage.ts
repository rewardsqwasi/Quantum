import BasePage from "../BasePage";

export default class RewardsCalculatorPage extends BasePage {

  private url = '/rewards-calculator';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Rewards Calculator")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//div[contains(@class,"rewardPageSection1Text")]/parent::div';
  private sectionHeading = '//h1[text()="How rewards are calculated."]';
  private table = '//table[@id="table-data"]';
  private add_another_product_button = '//span[contains(text(),"Add another product")]/parent::a';

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  sectionHeadingElement(){
    return this.element(this.sectionHeading);
  }

  addAnotherProductButtonElement(){
    return this.element(this.add_another_product_button);
  }

  tableElement(){
    return this.element(this.table);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
