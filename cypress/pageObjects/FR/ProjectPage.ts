import BasePage from "../BasePage";

export default class ProjectPage extends BasePage {

  private url = '/projects';
  private section = '//section';
  private table = '//section//table';
  private table_header_column = '//th[contains(text(),"Code postal")]/preceding::th[1][contains(text(),"Statut")]/preceding::th[1][contains(text(),"Nom")]/preceding::th[1][contains(text(),"Réf.")]/preceding::th[1][contains(text(),"Date")]/parent::tr';
  private table_heading = '//section//p[text()="Historique de votre projet QR"]';
  private filterStatusSelect = '//select[@id="FilterStatus"]';
  private paginationSelect = '//select[@id="pagination"]';
  private column = '//section//table//tr';
  private section_breadcrumb = '//li[contains(text(),"VELUX & CO - Projets")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

  columnElement(){
    return this.element(this.column);
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
