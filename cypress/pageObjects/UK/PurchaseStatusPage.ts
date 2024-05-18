import BasePage from "../BasePage";

export default class PurchaseStatusPage extends BasePage {

  private url = '/purchase-status';
  private section = '//section';
  private table = '//section//table';
  private table_header_column = '//th[contains(text(),"View")]/preceding::th[1][contains(text(),"Type")]/preceding::th[1][contains(text(),"Invoice Number")]/preceding::th[1][contains(text(),"Status")]/preceding::th[1][contains(text(),"Points")]/preceding::th[1][contains(text(),"Ref")]/preceding::th[1][contains(text(),"Date")]/parent::tr';
  private table_heading = '//section//p[text()="Your Points History"]';
  private filterStatusSelect = '//select[@id="FilterStatus"]';
  private paginationSelect = '//select[@id="pagination"]';
  private firstDataDate = '//section//table//tr[2]/td[1]';
  private firstDataRef = '//section//table//tr[2]/td[2]/a';
  private firstDataPoints = '//section//table//tr[2]/td[3]';
  private firstDataStatus = '//section//table//tr[2]/td[4]/span';
  private firstDataInvNumber = '//section//table//tr[2]/td[5]';

  dateOfPurchase(){
    return this.inner_text(this.firstDataDate);
  }

  refOfPurchase(){
    return this.inner_text(this.firstDataRef);
  }

  statusOfPurchase(){
    return this.inner_text(this.firstDataStatus);
  }

  sectionElement(){
    return this.element(this.section);
  }
  
  tableElement(){
    return this.element(this.table);
  }

  tableHeaderColumnElement(){
    return this.element(this.table_header_column);
  }

  tableHeadingElement(){
    return this.element(this.table_heading);
  }

  filterStatusSelectElement(){
    return this.element(this.filterStatusSelect);
  }

  paginationSelectElement(){
    return this.element(this.paginationSelect);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
