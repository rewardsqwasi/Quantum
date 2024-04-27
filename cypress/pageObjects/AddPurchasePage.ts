import BasePage from "./BasePage";

export default class AddPurchasePage extends BasePage {

  private url = '/uk/add-purchase';
  private add_purchase_section = '//section';
  private heading = '//section//h4[contains(text(),"Add Purchase")]';
  private headline_text = '//section//label[contains(text(),"Upload your invoices here to earn your Rewards. Submit your details and fill in the questionnaire below.")]';
  private form_heading = '//section//h1[contains(text(),"Add Purchase")]';
  private form_section = '//form[@id="formQuestionsAnswers"]';
  private cancel_btn = '//span[text()="Cancel"]/parent::a';
  private continue_btn = '//span[text()="Continue"]/parent::button';


  private captcha_div = '.g-recaptcha';
  private captcha_error_div = '#g-recaptcha-error';
  private reset_password_heading = '//h1[text()="Reset Password"]';
  private email_field = '#email';
  private info_text_one = '//p[text()="You will shortly receive an email and SMS detailing instructions on how to reset your password."]';
  private info_text_two = '//p[text()="The SMS will also contain a verification code."]';
  private request_new_pass_btn = '#submit';
  private toastMessage = '.toast-message';

  removeCaptchaDiv(){
    this.removeFromDom(this.captcha_div);
    this.removeFromDom(this.captcha_error_div);
  }

  resetPasswordHeadingElement(){
    return this.element(this.reset_password_heading);
  }

  infoTextOneElement(){
    return this.element(this.info_text_one);
  }

  infoTextTwoElement(){
    return this.element(this.info_text_two);
  }

  viewResetPasswordHeading(){
    this.inView(this.reset_password_heading);
  }

  emailFieldElement(){
    return this.element(this.email_field);
  }

  requestPassBtnElement(){
    return this.element(this.request_new_pass_btn);
  }

  enterEmail(email: string){
    this.removeCaptchaDiv();
    this.type(this.email_field, email);
  }

  clickReqPassBtn(){
    this.click(this.request_new_pass_btn);
  }

  getToastMessageText(){
    return this.inner_text(this.toastMessage);
  }

  open(){
    this.goToUrl(this.url);
  }

}