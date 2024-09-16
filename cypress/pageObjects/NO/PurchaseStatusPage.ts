import BasePage from "../BasePage";

export default class PurchaseStatusPage extends BasePage {

  private url = '/purchase-status';
  private section = '//section';
  private table = '//section//table';
  private table_header_column = '//th[contains(text(),"Type")]/preceding::th[1][contains(text(),"Fakturanummer")]/preceding::th[1][contains(text(),"Status")]/preceding::th[1][contains(text(),"Bonuskroner")]/preceding::th[1][contains(text(),"Ref")]/preceding::th[1][contains(text(),"Dato")]/parent::tr';
  private table_heading = '//section//p[text()="Din bonushistorikk"]';
  private filterStatusSelect = '//select[@id="FilterStatus"]';
  private paginationSelect = '//select[@id="pagination"]';
  private firstDataDate = '//section//table//tr[2]/td[1]';
  private firstDataRef = '//section//table//tr[2]/td[2]/a';
  private firstDataStatus = '//section//table//tr[2]/td[4]/span';
  private section_breadcrumb = '//li[contains(text(),"VELUX Bonus - Status")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private status_column = '//section//table//tr/td[4]/span';
  private column = '//section//table//tr';
  private firstDataView = '//section//table//tr[2]/td[7]/a';

  sectionElement(){
    return this.element(this.section);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

  clickEditPencilElement(){
    this.click(this.firstDataView);
  }
  
  firstDataViewElement(){
    return this.element(this.firstDataView);
  }

  selectPerPage(option: string){
    this.select(this.paginationSelect, option);
  }

  columnElement(){
    return this.element(this.column);
  }

  statusOfPurchase(){
    return this.inner_text(this.firstDataStatus);
  }

  refOfPurchase(){
    return this.inner_text(this.firstDataRef);
  }

  dateOfPurchase(){
    return this.inner_text(this.firstDataDate);
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

  selectStatus(status: string){
    this.select(this.filterStatusSelect, status);
  }

  statusColumnElement(){
    return this.element(this.status_column);
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
