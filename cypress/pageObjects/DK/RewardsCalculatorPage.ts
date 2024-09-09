import BasePage from "../BasePage";

export default class RewardsCalculatorPage extends BasePage {

  private url = '/rewards-calculator';
  private section_breadcrumb = '//li[contains(text(),"VELUX håndværkerbonus - Bonuskroner beregner")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//div[contains(@class,"rewardPageSection1Text")]/parent::div';
  private sectionHeading = '//h1[text()="Se hvor mange bonuskroner du kan få for dine VELUX produkter"]';
  private table = '//table[@id="table-data"]';
  private add_another_product_button = '//span[contains(text(),"Tilføj endnu et produkt ")]/parent::a';
  private add_your_invoice_button = '//h3/following-sibling::p/following-sibling::a[contains(@class, "btn-effect") and contains(@class, "text-white")]/span[text()="Tilføj faktura"]';
  private enter_product_code_div = '//select[contains(@class,"js-product-code")]/parent::div';
  private select_product_code_btn = '//span[contains(@class,"select2-container")]';
  private input_product_code_field = '//input[@class="select2-search__field"]'
  private enter_product_code_span = '//span[@title="Indtast produktkode"]//span';
  private input_quantity_field = '//input[contains(@class,"js-input-quantity")]';
  private points_field = '(//input[contains(@class,"js-input-product-total")])[1]';
  private increment_quanity_button = '//span[contains(@class,"incrementNumber")]';
  private decrement_quantity_button = '//span[contains(@class,"decrementNumber")]';
  private total_points_field = '//input[@id="productRewardTotal"]';
  
  totalPointsFieldElement(){
    return this.element(this.total_points_field);
  }

  pointsFieldElement(){
    return this.element(this.points_field);
  }

  enterProductCodeDivElement(){
    return this.element(this.enter_product_code_div);
  }

  removeProductRow(index: number){
    let row = '(//button[contains(@class,"btn-delete")])['+index+']'
    this.click2(row);
  }

  enterProductCode(code: string){
    this.click2(this.select_product_code_btn);
    this.type(this.input_product_code_field, code);
    let product = '//li[contains(text(),"'+code+'")]/parent::ul';
    this.click2(product);
  }

  incrementQuantity(){
    this.click(this.increment_quanity_button);
  }

  decrementQuantity(){
    this.click(this.decrement_quantity_button);
  }

  inputQuantityFieldElement(){
    return this.element(this.input_quantity_field);
  }

  enterProductCodeSpanElement(){
    return this.element(this.enter_product_code_span);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  sectionHeadingElement(){
    return this.element(this.sectionHeading);
  }

  addAnotherProductButtonElement(){
    return this.element(this.add_another_product_button);
  }

  addAnotherProduct(){
    this.click2(this.add_another_product_button);
  }

  addYourInvoiceButtonElement(){
    return this.element(this.add_your_invoice_button);
  }

  addYourInvoice(){
    this.click2(this.add_your_invoice_button);
  }

  tableElement(){
    return this.element(this.table);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
