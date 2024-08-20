import BasePage from "../BasePage";

export default class ClaimRewardsPage extends BasePage {

  private url = '/claim-rewards';
  private product_section_div = '//h1[text()="Wissel uw punten in bij de VELUX Club"]//ancestor::div[@id="product_list_view"]';
  private heading = '//div[@id="product_list_view"]//h1[text()="Wissel uw punten in bij de VELUX Club"]';
  private velux_rewards_shop_div = '//div[contains(@class,"col-span-12")]//a/b[contains(text(),\'In de "VELUX & Me" online shop\')]';
  private chasing_daylight_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Chasing Daylight")]';
  private partners_div = '//div[contains(@class,"col-span-12")]//a/b/p[contains(text(),"Bij één van onze partners")]';
  private partner_select_btn = '//span[contains(text(),"Kies")]/parent::a[contains(@href,"/partner")]';
  private shop_select_btn = '//span[contains(text(),"Kies")]/parent::a[contains(@href,"/velux-shop")]';
  private tickets_select_btn = '//span[contains(text(),"Kies")]/parent::a[contains(@href,"/tickets")]';

  gotoTickets(){
    this.click(this.tickets_select_btn);
  }

  gotoPartners(){
    this.click(this.partner_select_btn);
  }

  gotoShop(){
    this.click(this.shop_select_btn);
  }

  veluxRewardsShopDivElement(){
    return this.element(this.velux_rewards_shop_div);
  }

  partnersDivElement(){
    return this.element(this.partners_div);
  }

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

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
