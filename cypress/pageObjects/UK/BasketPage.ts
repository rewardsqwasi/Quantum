import BasePage from "../BasePage";

export default class BasketPage extends BasePage {

  private url = '/new_shop/basket';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Basket")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private back_to_products_btn = '//span[text()="Back to Products"]/parent::a';
  private section = '(//div[contains(@class,"intro-y")])[1]';
  private order_confirm_section = '(//div[contains(@class,"intro-y")])[2]//h2[contains(text(),"Order Confirmation")]';
  private shipping_detail_section = '(//div[contains(@class,"intro-y")])[3]//h2[contains(text(),"Shipping Details")]';
  private order_name = '(//div[contains(@class,"intro-y")])[2]//div[contains(text(),"Name")]/following-sibling::div';
  private company_name = '(//div[contains(@class,"intro-y")])[2]//div[contains(text(),"Company")]/following-sibling::div';
  private name_field = '(//div[contains(@class,"intro-y")])[3]//input[@id="shipping_name"]';
  private company_name_field = '(//div[contains(@class,"intro-y")])[3]//input[@id="shipping_company_name"]';
  private address_1_field = '(//div[contains(@class,"intro-y")])[3]//input[@id="shipping_address_1"]';
  private address_2_field = '(//div[contains(@class,"intro-y")])[3]//input[@id="shipping_address_2"]';
  private city_field = '(//div[contains(@class,"intro-y")])[3]//input[@id="shipping_city"]';
  private postcode_field = '(//div[contains(@class,"intro-y")])[3]//input[@id="shipping_postcode"]';
  private country_field = '(//div[contains(@class,"intro-y")])[3]//input[@id="shipping_country"]';
  private mobile_number_field = '(//div[contains(@class,"intro-y")])[3]//input[@id="shipping_mobile"]';
  private shipping_notes_field = '(//div[contains(@class,"intro-y")])[3]//textarea[@id="shipping_notes"]';
  private terms_checkbox = '(//div[contains(@class,"intro-y")])[3]//input[@id="terms-input"]';
  private complete_order_btn = '(//div[contains(@class,"intro-y")])[3]//button/span[contains(text(),"Complete Order")]';

  completeOrderBtnElement(){
    return this.element(this.complete_order_btn);
  }

  termsCheckboxElement(){
    return this.element(this.terms_checkbox);
  }

  shippingNotesFieldElement(){
    return this.element(this.shipping_notes_field);
  }

  mobileNumberFieldElement(){
    return this.element(this.mobile_number_field);
  }

  countryFieldElement(){
    return this.element(this.country_field);
  }

  postcodeFieldElement(){
    return this.element(this.postcode_field);
  }

  cityFieldElement(){
    return this.element(this.city_field);
  }

  address2FieldElement(){
    return this.element(this.address_2_field);
  }

  address1FieldElement(){
    return this.element(this.address_1_field);
  }

  companyNameFieldElement(){
    return this.element(this.company_name_field);
  }

  nameFieldElement(){
    return this.element(this.name_field);
  }

  orderNameText(){
    return this.inner_text(this.order_name);
  }

  companyNameText(){
    return this.inner_text(this.company_name);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  shippingDetailSectionElement(){
    return this.element(this.shipping_detail_section);
  }

  orderConfirmSectionElement(){
    return this.element(this.order_confirm_section);
  }

  backToProductsBtnElement(){
    return this.element(this.back_to_products_btn);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
