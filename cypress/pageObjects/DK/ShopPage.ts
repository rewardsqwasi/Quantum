import BasePage from "../BasePage";

export default class ShopPage extends BasePage {

  private url = '/velux-shop';
  private section = '//div[contains(@class,"shop-section")]';
  private product_section = '//div[contains(@class,"products")]';
  private product_section_heading = '//div[contains(@class,"products")]//h1[text()=" Produkter "]';
  private product_div = '//div[contains(@class,"products")]/div[@id="GridView"]';
  private search_filter_form = '//h1[text()="Søgefilter"]/parent::div/parent::form';
  private search_filter_checkboxes = '//div[@class="see-more-content"]';
  private filter_button = '//button/span[contains(text(),"Filtrer")]';
  private reset_button = '//button/span[contains(text(),"Reset")]';
  private first_product_link = '((//div[@id="GridView"]//div[contains(@class,"card-container")])[1]//a)[1]';
  private product_name = '//div[contains(@class,"product-details")]//h2';
  private product_code = '//div[contains(@class,"product-details")]//span[text()="Produktnummer: "]/following-sibling::b';
  private product_points = '//div[contains(@class,"product-details")]//span[contains(text(),"Bonuskroner")]';
  private add_to_basket_btn = '//span[(text()="Tilføj")]/parent::a';
  private success_toast = '//div[@class="toast-message" and text()="Dette produkt blev tilføjet til din indkøbskurv med succes"]';
  
  successToastElement(){
    return this.element(this.success_toast);
  }

  clickFirstProduct(){
    this.click(this.first_product_link);
  }

  clickAddToBasket(){
    let url = '/dk/cart/add';
    let req = this.interceptRequest(url,'req1');
    this.click2(this.add_to_basket_btn);
    this.waitForRequest(req);    
  }

  getProductDetail(){
    let productDetails = {
      name: '',
      code: '',
      points: ''
    };

    return this.element(this.product_name).then($el => {
      productDetails.name = $el.text().trim();
      return this.element(this.product_code);
    })
    .then($el => {
      productDetails.code = $el.text().trim();
      return this.element(this.product_points);
    })
    .then($el => {
      productDetails.points = $el.text().replace("Bonuskroner", "").trim();
      return this.wrap([productDetails.name, productDetails.points, productDetails.code]);
    });

  }

  productDivElement(){
    return this.element(this.product_div);
  }

  productSectionElement(){
    return this.element(this.product_section);
  }

  productSectionHeadingElement(){
    return this.element(this.product_section_heading);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  searchFilterFormElement(){
    return this.element(this.search_filter_form);
  }

  searchFilterCheckboxesElement(){
    return this.element(this.search_filter_checkboxes);
  }

  filterButtonElement(){
    return this.element(this.filter_button);
  }

  resetButtonElement(){
    return this.element(this.reset_button);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
