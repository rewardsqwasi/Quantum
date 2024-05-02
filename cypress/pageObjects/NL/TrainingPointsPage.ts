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
