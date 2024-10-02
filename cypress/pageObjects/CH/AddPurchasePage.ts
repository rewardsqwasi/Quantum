import BasePage from "../BasePage";

export default class AddPurchasePage extends BasePage {

  private url = '/add-purchase';
  private add_purchase_section = '//div[@id="content"]/section';
  private heading = '//section//h1[contains(text(),"Rechnung einreichen")]';
  private form_section = '//form[@id="formQuestionsAnswers"]';
  private cancel_btn = '//a[text()="Vorgang abbrechen"]';
  private continue_btn = '//button[text()="Fortfahren"]';
  private how_many_property_select = '#question-1';
  private describe_installation_radio_btn: string;
  private in_which_room_installation_checkbox: string;
  private describe_installation_section = '#container-2';
  private in_which_project_type_section = '//div[@id="container-3"]/label[@for="question-3"]';
  private in_which_room_installation_section = '#container-6';
  private upload_invoice_form_section = '//form[contains(@action,"/add-purchase-invoice/")]/parent::section';
  private upload_invoice_input = '#uploaded_file';
  private add_purchase_checkbox = '#terms';
  private finish_btn = '//input[@value="Rechnung einreichen" and @id="finish"]';
  private success_purchase_toast = '//div[@class="toast-message" and text()="Wir haben Ihre Daten erhalten und werden diese schnellstmöglich verarbeiten. Sie erhalten Ihre Gutschrift direkt nach der Prüfung und Freigabe der Daten."]';
  private page_heading = '//h1';
  private dont_know_installation_checkbox = '//span[contains(text(),"unbekannt")]/preceding-sibling::input[contains(@name,"questions[3]")]';
  private upload_invoice_label: string;

  inWhichRoomInstallationSectionElement(){
    return this.element(this.in_which_room_installation_section);
  }

  inWhichProjectTypeSectionElement(){
    return this.element(this.in_which_project_type_section);
  }

  describeInstallationSectionElement(){
    return this.element(this.describe_installation_section);
  }

  successPurchaseToastElement(){
    return this.element(this.success_purchase_toast);
  }

  getHeadingText(){
    return this.inner_text(this.page_heading);
  }

  clickFinishBtn(){
    this.click(this.finish_btn);
  }

  selectAddPurchaseCheckBox(){
    this.check(this.add_purchase_checkbox);
  }

  uploadInvoiceFormSectionElement(){
    return this.element(this.upload_invoice_form_section);
  }

  viewUploadInvoiceSection(){
    this.inView(this.upload_invoice_form_section);
  }

  addPurchaseSectionElement(){
    return this.element(this.add_purchase_section);
  }

  headingElement(){
    return this.element(this.heading);
  }

  viewSection(){
    this.inView(this.add_purchase_section);
  }

  formSectionElement(){
    return this.element(this.form_section);
  }

  cancelBtnElement(){
    return this.element(this.cancel_btn);
  }

  continueBtnElement(){
    return this.element(this.continue_btn);
  }

  selectHowManyPropertyDropdown(){
    return this.element(this.how_many_property_select);
  }

  selectPropertyValidationMsg(){
    return this.validationMessage(this.how_many_property_select);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

  selectHowManyProperty(option){
    this.select(this.how_many_property_select, option);
  }

  selectDescribeInstallation(option: string){
    this.describe_installation_radio_btn = '//span[contains(text(),"'+option+'")]/preceding-sibling::input[@name="questions[2]"]';
    this.check(this.describe_installation_radio_btn);
  }

  selectWhichRoomInstallation(option: string){
    this.in_which_room_installation_checkbox = '//span[contains(text(),"'+option+'")]/preceding-sibling::input[contains(@name,"questions[6]")]';
    this.check(this.in_which_room_installation_checkbox);
  }

  selectDontKnowInstallation(){
    this.check(this.dont_know_installation_checkbox);
  }

  clickContinueBtn(){
    this.click(this.continue_btn);
  }

  clickCancelBtn(){
    this.click(this.cancel_btn);
  }

  uploadInvoice(file: string){
    this.selectFile2(this.upload_invoice_input, file);
    this.upload_invoice_label = '//button[text()="Weitere Seite hinzufügen"]';
    return this.element(this.upload_invoice_label);
  }

}
