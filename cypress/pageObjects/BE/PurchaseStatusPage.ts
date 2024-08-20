import BasePage from "../BasePage";

export default class PurchaseStatusPage extends BasePage {

  private url = '/purchase-status';
  private section = '//section';
  private table = '//section//table';
  private table_header_column = '//th[contains(text(),"Voir")]/preceding::th[1][contains(text(),"Type")]/preceding::th[1][contains(text(),"Numéro de facture")]/preceding::th[1][contains(text(),"Statut")]/preceding::th[1][contains(text(),"Points")]/preceding::th[1][contains(text(),"Réf")]/preceding::th[1][contains(text(),"Date")]/parent::tr';
  private table_heading = '//section//p[text()="Historique des achats"]';
  private filterStatusSelect = '//select[@id="FilterStatus"]';
  private paginationSelect = '//select[@id="pagination"]';
  private firstDataDate = '//section//table//tr[2]/td[1]';
  private firstDataRef = '//section//table//tr[2]/td[2]/a';
  private firstDataPoints = '//section//table//tr[2]/td[3]';
  private firstDataStatus = '//section//table//tr[2]/td[4]/span';
  private firstDataView = '//section//table//tr[2]/td[7]/a';
  private status_column = '//section//table//tr/td[4]/span';
  private column = '//section//table//tr';
  private firstDataInvNumber = '//section//table//tr[2]/td[5]';
  private section_breadcrumb = '//li[contains(text(),"VELUX Club - Historique des achats")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';

  dateOfPurchase(){
    return this.inner_text(this.firstDataDate);
  }

  refOfPurchase(){
    return this.inner_text(this.firstDataRef);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

  statusColumnElement(){
    return this.element(this.status_column);
  }

  columnElement(){
    return this.element(this.column);
  }

  statusOfPurchase(){
    return this.inner_text(this.firstDataStatus);
  }

  firstDataViewElement(){
    return this.element(this.firstDataView);
  }

  clickEditPencilElement(){
    this.click(this.firstDataView);
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

  selectStatus(status: string){
    this.select(this.filterStatusSelect, status);
  }

  paginationSelectElement(){
    return this.element(this.paginationSelect);
  }

  selectPerPage(option: string){
    this.select(this.paginationSelect, option);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
