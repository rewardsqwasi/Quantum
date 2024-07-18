import BasePage from "../BasePage";

export default class BasketPage extends BasePage {

  private url = '/new_shop/basket';
  private continue_shopping_btn = '//a[contains(text(),"Doorgaan met winkelen")]';
  private section = '//div[contains(@class,"product-details")]';
  private member_detail_heading = '//h5[contains(text(),"Lidgegevens")]';
  private delivery_address_heading = '//h5[contains(text(),"Adres")]';
  private member_name_field = '#name';
  private member_email_field = '#email';
  private member_phone_field = '#phone';
  private company_name_field = '#company';
  private street_no_field = '#houseNumber';
  private address_field = '#address1';
  private city_field = '#town';
  private postal_code_field = '#postcode';
  private country_field = '#country_name';
  private terms_checkbox = '#terms';
  private product_name = '//div[contains(@class,"product-name")]/a';
  private product_points = '//span[contains(text(),"Aantal punten (per stuk)")]';
  private product_code = '(//div[contains(@class,"product-name")]/text())[3]';
  private quanity_input = '(//div[contains(@class,"product-name")]/text())[4]';
  private total_points = '//span[contains(text(),"Aantal punten (totaal): ")]';
  private buy_now_btn = '//input[@value="Koop nu"]';
  private remove_cart_btn = '//a[contains(@href,"cart/remove/")]';
  private basket_empty_text = '//div[contains(text(),"Er zijn geen artikelen in uw winkelwagen")]';

  basketEmptyTextElement(){
    return this.element(this.basket_empty_text);
  }

  emptyCart(){
    this.click(this.remove_cart_btn);
  }

  totalPointsElement(){
    return this.element(this.total_points);
  }

  quanityInputElement(){
    return this.element(this.quanity_input);
  }

  productCodeElement(){
    return this.element(this.product_code);
  }

  productPointsElement(){
    return this.element(this.product_points);
  }

  productNameElement(){
    return this.element(this.product_name);
  }

  buyNowBtnElement(){
    return this.element(this.buy_now_btn);
  }

  termsCheckboxElement(){
    return this.element(this.terms_checkbox);
  }

  streetNoFieldElement(){
    return this.element(this.street_no_field);
  }

  postcodeFieldElement(){
    return this.element(this.postal_code_field);
  }

  cityFieldElement(){
    return this.element(this.city_field);
  }

  addressFieldElement(){
    return this.element(this.address_field);
  }

  countryFieldElement(){
    return this.element(this.country_field);
  }

  companyNameFieldElement(){
    return this.element(this.company_name_field);
  }

  nameFieldElement(){
    return this.element(this.member_name_field);
  }

  emailFieldElement(){
    return this.element(this.member_email_field);
  }

  phoneFieldElement(){
    return this.element(this.member_phone_field);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  deliveryAddressHeadingElement(){
    return this.element(this.delivery_address_heading);
  }

  memberDetailHeadingElement(){
    return this.element(this.member_detail_heading);
  }

  continueShoppingBtnElement(){
    return this.element(this.continue_shopping_btn);
  }

  clickContinueShoppingBtn(){
    this.click(this.continue_shopping_btn);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
