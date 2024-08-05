import BasePage from "../BasePage";

export default class AddPurchasePage extends BasePage {

  private url = '/add-purchase';
  private add_purchase_section = '//section';
  private section_breadcrumb = '//li[contains(text(),"VELUX Premia - Añadir factura")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private heading = '//section//h4[contains(text(),"Gana puntos")]';
  private headline_text = '//section//label[contains(text(),"Carga aquí tus facturas para ganar premios. Envía tus datos y rellena el cuestionario que aparece a continuación.")]';
  private form_heading = '//section//h1[contains(text(),"Añadir factura")]';
  private form_section = '//form[@id="formQuestionsAnswers"]';
  private cancel_btn = '//span[text()="Cancelar"]/parent::a';
  private continue_btn = '//span[text()="Continuar"]/parent::button';
  private how_many_property_select = '#question-1';
  private describe_installation_radio_btn: string;
  private in_which_room_installation_checkbox: string;
  private describe_installation_section = '#container-2';
  private in_which_project_type_section = '#container-3';
  private in_which_room_installation_section = '#container-6';
  private upload_invoice_form_section = '//form[contains(@action,"/add-purchase-invoice/")]';
  private upload_invoice_input = '#uploaded_file';
  private finish_btn = '//span[text()="Añadir factura"]/parent::button';
  private success_purchase_toast = '//div[@class="toast-message" and text()="Your purchase has been added successfully"]';
  private page_heading = '//h1';
  private dont_know_installation_checkbox = '//span[text()="No lo sé"]/preceding-sibling::input[contains(@name,"questions[3]")]';
  private upload_invoice_label: string;

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

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

  headlineTextElement(){
    return this.element(this.headline_text);
  }

  viewSection(){
    this.inView(this.add_purchase_section);
  }

  formHeadingElement(){
    return this.element(this.form_heading);
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

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

  selectHowManyProperty(option){
    this.select(this.how_many_property_select, option);
  }

  selectDescribeInstallation(option: string){
    this.describe_installation_radio_btn = '//span[text()="'+option+'"]/preceding-sibling::input[@name="questions[2]"]';
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

  uploadInvoice(file: string){
    this.selectFile2(this.upload_invoice_input, file);
    this.upload_invoice_label = '//div[@class="purchase-invoice-fileinputs"]//label[text()="'+file+'"]'
    return this.element(this.upload_invoice_label);
  }

  private postal_code_field = '#question-7';
 
  clickCancelBtn(){
    this.click(this.cancel_btn);
  }

  selectHowManyPropertyDropdown(){
    return this.element(this.how_many_property_select);
  }
  
  selectPropertyValidationMsg(){
    return this.validationMessage(this.how_many_property_select);
  }

  enterPostalCode(code: string){
    this.type(this.postal_code_field, code);
  }

}