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
  private presentoirs_select_btn = '//span[contains(text(),"Choisir")]/parent::a[contains(@href,"/presentoirs")]';
  private visits_select_btn = '//span[contains(text(),"Choisir")]/parent::a[contains(@href,"/visit")]';
  private tickets_select_btn = '//span[contains(text(),"Choisir")]/parent::a[contains(@href,"/tickets")]';
  private my_project_select_btn = '//span[contains(text(),"Choisir")]/parent::a[contains(@href,"/mon-projet")]';
  private chantier_select_btn = '//span[contains(text(),"Choisir")]/parent::a[contains(@href,"/assistance-chantier")]';

  gotoChantier(){
    this.click(this.chantier_select_btn);
  }

  gotoMyProject(){
    this.click(this.my_project_select_btn);
  }

  gotoTickets(){
    this.click(this.tickets_select_btn);
  }

  gotoVisits(){
    this.click(this.visits_select_btn);
  }

  gotoPartners(){
    this.click(this.partner_select_btn);
  }

  gotoPresentoirs(){
    this.click(this.presentoirs_select_btn);
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
