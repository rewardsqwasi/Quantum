import BasePage from "../BasePage";

export default class AddReplacementPage extends BasePage {

  private url = '/add-replacement';
  private section = '//section';
  private form_section = '//form[@id="addReplacementForm"]';
  private heading = '//section//h4[contains(text()," Add Replacement Project ")]';
  private cancel_btn = '//span[text()="Cancel"]/parent::a';
  private next_btn = '//span[text()="Next"]/parent::button';
  private no_of_window_replaced_select = '//div/label[contains(text(),"Number of windows replaced")]/following::select[1][@id="question-8"]';
  private is_velux_window_select = '//div/label[contains(text(),"Is this a VELUX window?")]/following::select[1][@id="question-9"]';
  private finish_select = '//div/label[contains(text(),"Select Finish")]/following::select[1][@id="question-10"]';
  private function_select = '//div/label[contains(text(),"Select Function & Operation")]/following::select[1][@id="question-11"]';
  private glazing_type_select = '//div/label[contains(text(),"Select Glazing Type")]/following::select[1][@id="question-12"]';
  private project_description_select = '//div/label[contains(text(),"Select Project Description")]/following::select[1][@id="question-13"]';
  private project_details_select = '//div/label[contains(text(),"Select Project Details")]/following::select[1][@id="question-14"]';
  private room_type_select = '//div/label[contains(text(),"Select Room Type")]/following::select[1][@id="question-15"]';
  
  windowReplacedSelectElement(){
    return this.element(this.no_of_window_replaced_select);
  }

  isVeluxWindowSelectElement(){
    return this.element(this.is_velux_window_select);
  }

  finishSelectElement(){
    return this.element(this.finish_select);
  }

  functionSelectElement(){
    return this.element(this.function_select);
  }

  glazingTypeSelectElement(){
    return this.element(this.glazing_type_select);
  }

  projectDescriptionSelectElement(){
    return this.element(this.project_description_select);
  }

  projectDetailSelectElement(){
    return this.element(this.project_details_select);
  }

  roomTypeSelectElement(){
    return this.element(this.room_type_select);
  }

  viewSection(){
    this.inView(this.section);
  }

  sectionElement(){
    return this.element(this.section);
  }

  headingElement(){
    return this.element(this.heading);
  }

  formSectionElement(){
    return this.element(this.form_section);
  }

  cancelBtnElement(){
    return this.element(this.cancel_btn);
  }

  nextBtnElement(){
    return this.element(this.next_btn);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
