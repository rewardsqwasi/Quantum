import BasePage from "../BasePage";

export default class ClaimRewardsPage extends BasePage {

  private url = '/claim-rewards';
  private product_section_div = '//h1[text()="VELUX y YO"]//ancestor::div[@id="product_list_view"]';
  private heading = '//div[@id="product_list_view"]//h1[text()="VELUX y YO"]';
  private velux_rewards_shop_div = '//div[contains(@class,"col-span-12")]//a/b/p[contains(text(),"La Boutique VELUX")]';
  private partners_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Socios")]';
  private partner_select_btn = '//span[contains(text(),"Escoger")]/parent::a[contains(@href,"/partners")]';
  private price_file_div = '//div[contains(@class,"col-span-12")]//a/b/p[contains(text(),"Lista de Precios 2024")]';
  private price_file_select_btn = '//span[contains(text(),"Escoger")]/parent::a[contains(@href,"/price-file")]';
  private chasing_daylight_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Chasing Daylight")]';
  private tickets_select_btn = '//span[contains(text(),"Escoger")]/parent::a[contains(@href,"/tickets")]';

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

  priceFileDivElement(){
    return this.element(this.price_file_div);
  }

  gotoTickets(){
    this.click(this.tickets_select_btn);
  }

  gotoPriceFile(){
    this.click(this.price_file_select_btn);
  }

  gotoPartners(){
    this.click(this.partner_select_btn);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
