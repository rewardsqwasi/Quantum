import BasePage from "../BasePage";

export default class ClaimRewardsPage extends BasePage {

  private url = '/claim-rewards';
  private product_section_div = '//h1[text()="VELUX & Me"]//ancestor::div[@id="product_list_view"]';
  private heading = '//div[@id="product_list_view"]//h1[text()="VELUX & Me"]';
  private velux_rewards_shop_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"VELUX Rewards")]';
  private velux_rewards_shop_div2 = '//div[contains(@class,"col-span-12")]//a//b/p[contains(text(),"VELUX Rewards")]';
  private retailers_div = '//div[contains(@class,"col-span-12")]//a//b[text()="Retailers"]';
  private shop_section_div = '.shop-section';
  private partner_select_btn = '//span[contains(text(),"Select")]/parent::a[contains(@href,"/partner")]';

  productSectionDivElement(){
    return this.element(this.product_section_div);
  }

  shopSectionDivElement(){
    return this.element(this.shop_section_div);
  }

  gotoPartners(){
     this.click(this.partner_select_btn);
  }

  viewSection(){
    this.inView(this.shop_section_div);
  }

  headingElement(){
    return this.element(this.heading);
  }

  veluxRewardsShopDivElement(){
    return this.element(this.velux_rewards_shop_div);
  }

  veluxRewardsShopDiv2Element(){
    return this.element(this.velux_rewards_shop_div2);
  }

  retailersDivElement(){
    return this.element(this.retailers_div);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
