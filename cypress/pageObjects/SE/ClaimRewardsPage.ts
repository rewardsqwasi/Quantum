import BasePage from "../BasePage";

export default class ClaimRewardsPage extends BasePage {

  private url = '/claim-rewards';
  private product_section_div = '//h1[text()="VELUX & Me"]//ancestor::div[@id="product_list_view"]';
  private heading = '//div[@id="product_list_view"]//h1[text()="VELUX & Me"]';
  private partners_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Partners")]';
  private partner_select_btn = '//span[contains(text(),"Välj")]/parent::a[contains(@href,"/partner")]';
  
  gotoPartners(){
    this.click(this.partner_select_btn);
  }

  partnersDivElement(){
    return this.element(this.partners_div);
  }

  productSectionDivElement(){
    return this.element(this.product_section_div);
  }

  viewSection(){
    this.inView(this.product_section_div);
  }

  headingElement(){
    return this.element(this.heading);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
