import BasePage from "../BasePage";

export default class PresentoirsPage extends BasePage {

  private url = '/presentoirs';
  private section_breadcrumb = '//li[contains(text(),"VELUX & CO - Présentoirs")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section_div = '.shop-section';
  private presentoirs_div = '//div[@id="GridView"]//div[contains(@class,"card-container")]';

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

  sectionDivElement(){
    return this.element(this.section_div);
  }
  
  presentoirsDivElement(){
    return this.element(this.presentoirs_div);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
