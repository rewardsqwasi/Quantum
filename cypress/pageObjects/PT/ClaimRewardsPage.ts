import BasePage from "../BasePage";

export default class ClaimRewardsPage extends BasePage {

  private url = '/claim-rewards';
  private product_section_div = '//h1[text()="VELUX & EU"]//ancestor::div[@id="product_list_view"]';
  private heading = '//div[@id="product_list_view"]//h1[text()="VELUX & EU"]';
  private velux_rewards_shop_div = '//div[contains(@class,"col-span-12")]//a/b/p[contains(text(),"Loja de Recompensas VELUX")]';
  private partners_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Parceiros")]';
  private partner_select_btn = '//span[contains(text(),"Escolher")]/parent::a[contains(@href,"/partners")]';
  private chasing_daylight_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Chasing Daylight")]';
  private tickets_select_btn = '//span[contains(text(),"Escolher")]/parent::a[contains(@href,"/tickets")]';

  chasingDaylightDivElement(){
    return this.element(this.chasing_daylight_div);
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

  veluxRewardsShopDivElement(){
    return this.element(this.velux_rewards_shop_div);
  }

  partnersDivElement(){
    return this.element(this.partners_div);
  }

  gotoTickets(){
    this.click(this.tickets_select_btn);
  }

  gotoPartners(){
    this.click(this.partner_select_btn);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
