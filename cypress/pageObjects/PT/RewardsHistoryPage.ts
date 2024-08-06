import BasePage from "../BasePage";

export default class RewardsHistoryPage extends BasePage {

  private url = '/rewards-history';
  private section_breadcrumb = '//li[contains(text(),"Recompensas VELUX - Histórico de prémios")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private shop_section = '//div[contains(@class,"shop-section")]';
  private search_filter_form = '//h1[text()="Filtro de pesquisa"]/parent::div/parent::form';
  private search_filter_radio_btns = '//div[@class="see-more-content"]';
  private filter_button = '//button/span[text()="Filtrar"]';

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }
  
  shopSectionElement(){
    return this.element(this.shop_section);
  }

  searchFilterFormElement(){
    return this.element(this.search_filter_form);
  }

  searchFilterRadioBtnsElement(){
    return this.element(this.search_filter_radio_btns);
  }

  filterButtonElement(){
    return this.element(this.filter_button);
  }

  viewSection(){
    this.inView(this.search_filter_form);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
