import BasePage from "../BasePage";

export default class DSPPage extends BasePage {

  private url = '/dsp-points';
  private section = '//section';
  private dsp_table = '//section//table';
  private dsp_table_header_column = '//th[contains(text(),"DSP Points")]/preceding::th[1][contains(text(),"Date")]/preceding::th[1][contains(text(),"Blind Code")]/preceding::th[1][contains(text(),"ID")]/parent::tr';

  sectionElement(){
    return this.element(this.section);
  }

  dspTableElement(){
    return this.element(this.dsp_table);
  }

  tableHeaderColumnElement(){
    return this.element(this.dsp_table_header_column);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}