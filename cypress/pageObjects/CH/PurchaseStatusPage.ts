import BasePage from "../BasePage";

export default class PurchaseStatusPage extends BasePage {

  private url = '/purchase-status';
  private section = '//div[@id="content"]/section';
  private table = '//section//div[@id="tablist1-panel1"]//table';
  private table_header_column = '//div[@id="tablist1-panel1"]//th[contains(text(),"View")]/preceding::th[1][contains(text(),"Art")]/preceding::th[1][contains(text(),"Eigene Notizen")]/preceding::th[1][contains(text(),"Rechnung")]/preceding::th[1][contains(text(),"Status")]/preceding::th[1][contains(text(),"Punkte/€")]/preceding::th[1][contains(text(),"Vorgang")]/preceding::th[1][contains(text(),"Datum")]/parent::tr';
  private filterStatuslist = '//ul[@role="tablist"]';
  private paginationSelect = '//select[@id="pagination"]';
  private firstDataDate = '(//section//table//tr[2]/td[1])[1]';
  private firstDataRef = '(//section//table//tr[2]/td[2])[1]';
  private firstDataPoints = '(//section//table//tr[2]/td[3])[1]';
  private firstDataStatus = '(//section//table//tr[2]/td[4]/span)[1]';
  private firstDataView = '(//section//table//tr[./td//i[@class="fa fa-pencil"]])[1]/td[8]/a';
  private status_column = '//section//table//tr/td[4]/span';
  private column = '(//section//table)[1]//td/parent::tr';
  private firstDataInvNumber = '//section//table//tr[2]/td[5]';

  refOfPurchase(){
    return this.inner_text(this.firstDataRef);
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

  dateOfPurchase(){
    return this.inner_text(this.firstDataDate);
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

  selectStatus(status: string){
    let s = '//ul[@role="tablist"]//li[text()="'+status+'"]';
    this.click2(s);
    return this.element(s);
  }

  selectPerPage(option: string){
    this.select(this.paginationSelect, option);
  }

  filterStatusListElement(){
    return this.element(this.filterStatuslist);
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
