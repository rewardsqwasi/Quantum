import BasePage from "../BasePage";

export default class PurchaseStatusPage extends BasePage {

  private url = '/purchase-status';
  private section = '//div[@id="content"]/section';
  private table = '//section//div[@id="tablist1-panel1"]//table';
  private table_header_column = '//div[@id="tablist1-panel1"]//th/preceding::th[1]/preceding::th[1][contains(text(),"Beleg")]/preceding::th[1][contains(text(),"Status")]/preceding::th[1][contains(text(),"€")]/preceding::th[1][contains(text(),"Vorgang")]/preceding::th[1][contains(text(),"Datum")]/parent::tr';
  private filterStatuslist = '//ul[@role="tablist"]';
  private paginationSelect = '//select[@id="pagination"]';
  private firstDataDate = '(//div[not(contains(@style,"display: none;"))]/div/table/tbody/tr[2]/td[1])[1]';
  private firstDataRef = '(//div[not(contains(@style,"display: none;"))]/div/table/tbody/tr[2]/td[2])[1]';
  private firstDataPoints = '(//div[not(contains(@style,"display: none;"))]/div/table/tbody/tr[2]/td[3])[1]';
  private firstDataStatus = '(//div[not(contains(@style,"display: none;"))]/div/table/tbody/tr[2]/td[4])[1]';
  private firstDataView = '(//div[not(contains(@style,"display: none;"))]/div/table/tbody/tr[./td//i[@class="fa fa-pencil"]])[1]/td[7]/a';
  private status_column = '//div[not(contains(@style,"display: none;"))]/div/table/tbody/tr/td[4]/span';
  private column = '//div[not(contains(@style,"display: none;"))]/div/table/tbody/tr';
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
