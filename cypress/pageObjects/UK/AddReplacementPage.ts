import BasePage from "../BasePage";

export default class AddReplacementPage extends BasePage {

  private url = '/add-replacement';
  private section = '//section';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Add Replacement")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
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
  private add_data_plate = '//a[contains(@onclick,"addDataPlateImage")]';
  private add_window_image = '//a[contains(@onclick,"addWindowImage")]';
  private upload_file_input = '#uploaded_file';
  private upload_button = '//button[text()="Upload"]';
  private file_previewer = '#preview-wrapper';
  private finish_btn = '//span[text()="Finish"]/parent::button';
  private success_toast = '//div[@class="toast-message" and text()="Your replacement has been saved successfully."]';
  private page_heading = '//h1';

  successToastElement(){
    return this.element(this.success_toast);
  }

  getHeadingText(){
    return this.inner_text(this.page_heading);
  }

  clickFinishBtn(){
    this.click(this.finish_btn);
  }

  addDataPlate(region: string, file: string){
    this.getURL().then((currentUrl: string) => {
      this.getAttributeValue(this.add_data_plate, 'onclick').then((id: string) => {
        const match = id.match(/\d+/);
        const number = match[0];
        const url = '/'+region+'/add-data-plate-image/'+number;
        let req = this.interceptRequest(url,'req1');
        this.goToUrl(url);
        this.selectFile2(this.upload_file_input, file);
        this.element(this.file_previewer).should('be.visible');
        this.click2(this.upload_button);
        this.waitForRequest(req);
        this.goToUrl(currentUrl);
      });
    });
  }

  addWindowImage(region: string, file: string){
    this.getURL().then((currentUrl: string) => {
      this.getAttributeValue(this.add_window_image, 'onclick').then((id: string) => {
        const match = id.match(/\d+/);
        const number = match[0];
        const url = '/'+region+'/add-window-image/'+number;
        let req = this.interceptRequest(url,'req2');
        this.goToUrl(url);
        this.selectFile2(this.upload_file_input, file);
        this.element(this.file_previewer).should('be.visible');
        this.click2(this.upload_button);
        this.waitForRequest(req);
        this.goToUrl(currentUrl);
      });
    });
  }

  clickNextBtn(){
    this.click(this.next_btn);
  }

  selectNoOfWindowsReplaced(option){
    this.select(this.no_of_window_replaced_select, option);
  }

  selectIsVeluxWindow(option){
    this.select(this.is_velux_window_select, option);
  }

  selectFinish(option){
    this.select(this.finish_select, option);
  }

  selectFunction(option){
    this.select(this.function_select, option);
  }

  selectGlazingType(option){
    this.select(this.glazing_type_select, option);
  }

  selectProjectDesc(option){
    this.select(this.project_description_select, option);
  }

  selectProjectDetails(option){
    this.select(this.project_details_select, option);
  }

  selectRoomType(option){
    this.select(this.room_type_select, option);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

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
