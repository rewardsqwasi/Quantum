import BasePage from "../BasePage";

export default class PriceFilePage extends BasePage {

  private url = '/price-file';
  private section_breadcrumb = '//li[contains(text(),"Lista de Precios 2024")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//section';
  private reward_detail_div = '#reward-details';
  private heading_1 = '//h2';
  private heading_2 = '//h1';
  private claim_form = '//form[contains(@action,"/price-file/claim/")]';
  private cancel_btn = '//a[text()="Cancelar"]';
  private confirm_btn = '//span[text()="Confirmar"]/parent::button';
  private quantity_input_field = '#quantityInput';
  private file_icon = '//div[@id="reward-details"]//img'

  fileIconElement(){
    return this.element(this.file_icon);
  }

  quantityInputFieldElement(){
    return this.element(this.quantity_input_field);
  }

  confirmBtnElement(){
    return this.element(this.confirm_btn);
  }

  cancelBtnElement(){
    return this.element(this.cancel_btn);
  }

  clickCancelBtn(){
    return this.click(this.cancel_btn);
  }

  claimFormElement(){
    return this.element(this.claim_form);
  }

  heading1Element(){
    return this.element(this.heading_1);
  }

  heading2Element(){
    return this.element(this.heading_2);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

  sectionElement(){
    return this.element(this.section);
  }

  viewSection(){
    this.inView(this.section);
  }
  
  rewardDetailDivElement(){
    return this.element(this.reward_detail_div);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
