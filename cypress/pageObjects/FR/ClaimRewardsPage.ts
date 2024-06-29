import BasePage from "../BasePage";

export default class ClaimRewardsPage extends BasePage {

  private url = '/claim-rewards';
  private product_section_div = '//h1[text()="VELUX & Moi"]//ancestor::div[@id="product_list_view"]';
  private heading = '//div[@id="product_list_view"]//h1[text()="VELUX & Moi"]';
  private displays_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Présentoirs")]';
  private my_project_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Mon projet avec VELUX")]';
  private chasing_daylight_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Chasing Daylight")]';
  private velux_co_store_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"La Boutique VELUX & Co.")]';
  private site_assist_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Assistance Chantier")]';
  private partners_div = '//div[contains(@class,"col-span-12")]//a//b[contains(text(),"Partenaires")]';
  private partner_select_btn = '//span[contains(text(),"Choisir")]/parent::a[contains(@href,"/partner")]';

  gotoPartners(){
    this.click(this.partner_select_btn);
  }

  partnersDivElement(){
    return this.element(this.partners_div);
  }

  siteAssistDivElement(){
    return this.element(this.site_assist_div);
  }

  veluxCoStoreDivElement(){
    return this.element(this.velux_co_store_div);
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

  myProjectDivElement(){
    return this.element(this.my_project_div);
  }

  displaysDivElement(){
    return this.element(this.displays_div);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
