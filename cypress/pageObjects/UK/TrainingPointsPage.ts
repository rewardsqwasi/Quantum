import BasePage from "../BasePage";

export default class TrainingPointsPage extends BasePage {

  private url = '/training-points';
  private section = '(//section)[1]';
  private form_section = '//form[contains(@action,"/training-points")]';
  private heading = '//section//*[text()="Claim your training workshop points"]';
  private validate_code_btn = '//span[text()="Validate code"]/parent::button[@id="validateCode"]';
  private code_input_field = '#code';
  private current_boosted_heading = '//section//h3[text()="Current Boosted Rewards for Training offers:"]';
  private points_related_heading = '//section//h3[text()="Points related to Rewards for Training offers"]';
  private error_code_msg = '#codeStatus';
  private body_text_1 = '(//div[@class="w-full"][1]//p)[1]';
  private body_text_2 = '(//div[@class="w-full"][1]//p)[2]';
  private body_text_3 = '(//div[@class="w-full"][1]//p)[3]';
  private body_text_4 = '(//div[@class="w-full"][1]//p)[4]';
  private sign_up_here_link = '//a[text()="Sign up here for training"]';

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

  clickValidateCode(){
    this.click2(this.validate_code_btn);
  }

  codeInputFieldElement(){
    return this.element(this.code_input_field);
  }

  currentBoostedHeadingElement(){
    return this.element(this.current_boosted_heading);
  }

  pointsRelatedHeadingElement(){
    return this.element(this.points_related_heading);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
