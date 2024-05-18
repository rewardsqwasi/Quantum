import BasePage from "../BasePage";

export default class OrdersHistoryPage extends BasePage {

  private url = '/new_shop/orders-history';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Order History")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private shop_section = '//div[contains(@class,"shop-section")]';
  private search_filter_form = '//h1[text()="Search Filter"]/parent::div/parent::form';
  private search_filter_radio_btns = '//div[@class="see-more-content"]';
  private filter_button = '//button/span[text()="Filter"]';
  private my_voucher_btn = '//span[text()="My Vouchers"]/parent::a';
  private my_orders_btn = '//span[text()="My Orders"]/parent::a';
  private my_orders_section ='//section';
  private table = '//section//table';
  private table_header_column = '//th[text()="View Details"]/preceding::th[1][text()="Order Date"]/preceding::th[1][text()="Order Status"]/preceding::th[1][text()="Order Number"]/parent::tr';
  private table_heading = '//section//p[text()="MY ORDERS"]';
  
  tableElement(){
    return this.element(this.table);
  }

  tableHeaderColumnElement(){
    return this.element(this.table_header_column);
  }

  tableHeadingElement(){
    return this.element(this.table_heading);
  }

  myVoucherBtnElement(){
    return this.element(this.my_voucher_btn);
  }

  myOrdersBtnElement(){
    return this.element(this.my_orders_btn);
  }

  myOrdersSectionElement(){
    return this.element(this.my_orders_section);
  }

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
