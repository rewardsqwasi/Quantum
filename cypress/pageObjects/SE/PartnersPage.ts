import BasePage from "../BasePage";

export default class PartnersPage extends BasePage {

  private url = '/partners';
  private section_breadcrumb = '//li[contains(text(),"VELUX Hantverkarbonus - Lös in bonuspoäng")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private shop_section_div = '.shop-section';
  private partners_div = '//div[@id="GridView"]//div[contains(@class,"card-container")]';

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

  shopSectionDivElement(){
    return this.element(this.shop_section_div);
  }
  
  partnersDivElement(){
    return this.element(this.partners_div);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
