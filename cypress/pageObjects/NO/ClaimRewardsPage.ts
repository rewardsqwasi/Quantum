import BasePage from "../BasePage";

export default class ClaimRewardsPage extends BasePage {

  private url = '/claim-rewards';
  private product_section_div = '//h1[text()="VELUX Bonus"]//ancestor::div[@id="product_list_view"]';
  private heading = '//div[@id="product_list_view"]//h1[text()="VELUX Bonus"]';
  private partners_div = '//div[contains(@class,"col-span-12")]//a/b[text()="Partnere"]';
  private partner_select_btn = '//span[contains(text(),"Velg")]/parent::a[contains(@href,"/partner")]';
  private tickets_select_btn = '//span[contains(text(),"Velg")]/parent::a[contains(@href,"/tickets")]';
  private chasing_daylight_div = '//div[contains(@class,"col-span-12")]//a/b/p[contains(text(),"Chasing Daylight")]';

  chasingDaylightDivElement(){
    return this.element(this.chasing_daylight_div);
  }

  productSectionDivElement(){
    return this.element(this.product_section_div);
  }

  gotoPartners(){
    this.click(this.partner_select_btn);
  }

  viewSection(){
    this.inView(this.product_section_div);
  }

  gotoTickets(){
    this.click(this.tickets_select_btn);
  }

  headingElement(){
    return this.element(this.heading);
  }

  partnersDivElement(){
    return this.element(this.partners_div);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }
  
}
