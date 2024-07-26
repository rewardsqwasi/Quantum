import { appendFile } from "fs";
import BasePage from "../BasePage";

export default class ShopPage extends BasePage {

  private url = '/new_shop';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Shop")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//div[contains(@class,"shop-section")]';
  private product_section = '//div[contains(@class,"products")]';
  private product_section_heading = '//div[contains(@class,"products")]//h1[text()="All Products" or text()=" Products "]';
  private product_div = '//div[contains(@class,"products")]/div[@id="GridView"]';
  private search_filter_form = '//h1[text()="Search Filter"]/parent::div/parent::form';
  private search_filter_checkboxes = '//div[@class="see-more-content"]';
  private filter_button = '//button/span[contains(text(),"Filter")]';
  private reset_button = '//button/span[contains(text(),"Reset")]';
  private first_product_link = '((//div[@id="GridView"]//div[contains(@class,"card-container")])[1]//a)[1]';
  private product_name = '//div[contains(@class,"product-details")]//h2';
  private product_code = '//div[contains(@class,"product-details")]//h3[1]';
  private product_points = '//div[contains(@class,"product-details")]//span[contains(text(),"Points:")]';
  private add_to_basket_btn = '//span[contains(text(),"Add to basket")]/parent::button';
  private product_code_2 = '//div[contains(@class,"product-details")]//span[text()="Product Number: "]/following-sibling::b';
  private product_points_2 = '//div[contains(@class,"product-details")]//span[contains(text(),"Points")]';
  private add_to_basket_btn_2 = '//span[text()="Add"]/parent::a';
  private success_toast = '//div[@class="toast-message" and text()="This product was added to your cart successfully"]';
  
  successToastElement(){
    return this.element(this.success_toast);
  }

  clickAddToBasket2(){
    this.click2(this.add_to_basket_btn_2);
  }

  getProductDetail2(){
    let productDetails = {
      name: '',
      code: '',
      points: ''
    };

    return this.element(this.product_name).then($el => {
      productDetails.name = $el.text().trim();
      return this.element(this.product_code_2);
    })
    .then($el => {
      productDetails.code = $el.text().trim();
      return this.element(this.product_points_2);
    })
    .then($el => {
      productDetails.points = $el.text().replace("Reward Points:", "").trim();
      return this.wrap([productDetails.name, productDetails.points, productDetails.code]);
    });

  }

  clickFirstProduct(){
    this.click(this.first_product_link);
  }

  clickAddToBasket(){
    this.click2(this.add_to_basket_btn);
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
      productDetails.points = $el.text().replace("Points:", "").trim();
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

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
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
