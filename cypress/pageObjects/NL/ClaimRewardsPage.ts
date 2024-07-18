import BasePage from "../BasePage";

export default class ClaimRewardsPage extends BasePage {

  private url = '/claim-rewards';
  private product_section_div = '//h1[text()="VELUX & Ik"]//ancestor::div[@id="product_list_view"]';
  private heading = '//div[@id="product_list_view"]//h1[text()="VELUX & Ik"]';
  private velux_rewards_shop_div = '//div[contains(@class,"col-span-12")]//a/b/p[contains(text(),"VELUX Reward Shop")]';
  private takeback_div = '//div[contains(@class,"col-span-12")]//a/b/p[contains(text(),"Take Back")]';
  private retailers_div = '//div[contains(@class,"col-span-12")]//a/b/p[text()="Retailers"]';
  private chasing_daylight_div = '//div[contains(@class,"col-span-12")]//a/b/p[contains(text(),"Chasing Daylight")]';
  private velux_shop_select_btn = '//span[contains(text(),"Wissel in")]/parent::a[contains(@href,"/velux-shop")]';
  private takeback_select_btn = '//span[contains(text(),"Wissel in")]/parent::a[contains(@href,"/takeback")]';
  private partners_select_btn = '//span[contains(text(),"Wissel in")]/parent::a[contains(@href,"/partners")]';
  private tickets_select_btn = '//span[contains(text(),"Wissel in")]/parent::a[contains(@href,"/tickets")]';
  
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

  takebackDivElement(){
    return this.element(this.takeback_div);
  }

  retailersDivElement(){
    return this.element(this.retailers_div);
  }

  ChasingDaylightDivElement(){
    return this.element(this.chasing_daylight_div);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }
  
  gotoVeluxShop(){
    this.click(this.velux_shop_select_btn);
  }

  gotoTakeback(){
    this.click(this.takeback_select_btn);
  }

  gotoTickets(){
    this.click(this.tickets_select_btn);
  }

  gotoPartners(){
    this.click(this.partners_select_btn);
  }

}
