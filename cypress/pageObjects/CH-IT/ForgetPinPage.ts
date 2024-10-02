import BasePage from "../BasePage";

export default class ForgetPinPage extends BasePage {

  private url = '/forget-pin';
  private captcha_div = '.g-recaptcha';
  private captcha_error_div = '#g-recaptcha-error';
  private reset_password_heading = '//h1[text()="Richiedere una nuova password"]';
  private email_field = '#email';
  private info_text_one = '//p[text()="Lei già aveva un login nello strumento per artigiani e ora accede per la prima volta al nuovo portale PRIMA? Allora La preghiamo di richiedere qui una nuova password per il Suo solito indirizzo e-mail che usa per registrarsi. Quando lo avrà fatto la prima volta, potrà sempre accedere comodamente attraverso il portale PRIMA di VELUX. Oppure ha dimenticato la password? Anche in questo caso potrà richiederne una nuova qui."]';
  private request_new_pass_btn = '#submit';
  private toastMessage = '.toast-message';
  private enter_email_error = '//span[@id="emailStatus" and text()="Si prega di inserire l\'indirizzo email"]';
  private enter_email_error_2 = '//span[@id="emailStatus" and text()="Si prega di inserire un indirizzo email valido"]';
  private re_captcha_error = '//div[@id="g-recaptcha-error" and ./span[contains(text(),"reCaptcha è obbligatorio")]]';

  enterEmailErrorElement(){
    return this.element(this.enter_email_error);
  }

  enterEmailError2Element(){
    return this.element(this.enter_email_error_2);
  }

  reCaptchaErrorElement(){
    return this.element(this.re_captcha_error);
  }

  removeCaptchaDiv(){
    this.removeFromDom(this.captcha_div);
    this.removeFromDom(this.captcha_error_div);
  }

  captchaDivElement(){
    return this.element(this.captcha_div);
  }

  resetPasswordHeadingElement(){
    return this.element(this.reset_password_heading);
  }

  infoTextOneElement(){
    return this.element(this.info_text_one);
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
  
  reqNewPassword(email: string){
    this.removeCaptchaDiv();
    this.type(this.email_field, email);
    this.click(this.request_new_pass_btn);
  }

  enterEmail(email: string){
    this.type(this.email_field, email);
  }

  clickReqPassBtn(){
    this.click(this.request_new_pass_btn);
  }

  getToastMessageText(){
    return this.inner_text(this.toastMessage);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }
  
}
