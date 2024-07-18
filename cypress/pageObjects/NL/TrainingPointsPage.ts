import BasePage from "../BasePage";

export default class TrainingPointsPage extends BasePage {

  private url = '/training-points';
  private section = '//section';
  private form_section = '//form[contains(@action,"/training-points")]';
  private heading = '//section//h2[text()="Vraag je trainingspunten op "]';
  private validate_code_btn = '//span[text()="Valideer de code"]/parent::button[@id="validateCode"]';
  private code_input_field = '#code';
  private error_code_msg = '#codeStatus';
  private body_text_1 = '(//section//p)[1]';
  private body_text_2 = '(//section//p)[2]';
  private body_text_3 = '(//section//p)[3]';
  private body_text_4 = '(//section//p)[4]';
  private sign_up_here_link = '//a[text()="Meld je hier aan voor trainingen."]';

  clickSignUpHereLink(){
    this.forceClick(this.sign_up_here_link);
  }

  bodyTextElement1(){
    return this.element(this.body_text_1);
  }

  bodyTextElement2(){
    return this.element(this.body_text_2);
  }

  bodyTextElement3(){
    return this.element(this.body_text_3);
  }

  bodyTextElement4(){
    return this.element(this.body_text_4);
  }

  errorMsgElement(){
    return this.element(this.error_code_msg);
  }

  clickValidateCode(){
    this.click2(this.validate_code_btn);
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

  validateCodeBtnElement(){
    return this.element(this.validate_code_btn);
  }

  codeInputFieldElement(){
    return this.element(this.code_input_field);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
