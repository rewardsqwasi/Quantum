import BasePage from "../BasePage";

export default class CreateAccountPage extends BasePage {

  private url = '/create-account';
  private title_select = '#title';
  private signup_form = '//form[@id="create-account"]';
  private first_name_field = '#firstName';
  private last_name_field = '#lastName';
  private company_name_field = '#company_name';
  private company_phone_field = '#companyPhone';
  private address_1_field = '#address_line1';
  private postcode_field = '#postcode';
  private town_field = '#town_county';
  private mobile_field = '#mobile';
  private iban_field = '#iban';
  private vat_field = '#vatNumber';
  private credit_note_email_field = '#creditNoteEmail';
  private how_many_people_ques = '//div[@id="q3CoreWrapper"]/select';
  private how_many_roof_ques = '//div[@id="q5CoreWrapper"]/input';
  private how_many_velux_ques = '//div[@id="q6CoreWrapper"]/select';
  private social_media_info_heading = '//h2[text()="Informationen zu Social Media"]';
  private website_field = '//input[@name="website"]';
  private facebook_field = '//input[@name="facebook"]';
  private youtube_field = '//input[@name="youtube"]';
  private instagram_field = '//input[@name="instagram"]';
  private create_account_login_heading = '//h2[text()="Ihre Zugangsdaten für VELUX PLUS Haushersteller"]';
  private email_field = '#email2';
  private verify_email_field = '#verifyEmail';
  private password_field = '#user-password2';
  private terms_checkbox = '#terms';
  private create_account_btn = '#createAccount';
  private label_how_many_people_ques = '//div[@id="q3CoreWrapper"]/label';
  private label_how_many_roof_ques = '//div[@id="q5CoreWrapper"]/label';
  private label_how_many_velux_ques = '//div[@id="q6CoreWrapper"]/label';
  private enter_email_error = '//span[@id="email2Status" and text()="Bitte überprüfen Sie Ihre E-Mailadresse."]';
  private enter_verify_email_error = '#verifyEmailStatus';
  private email_promotion_checkbox = '//input[@name="optinMarketing"]';
  private verify_mobile_field = '#mobile_verify';
  
  verifyMobileFieldElement(){
    return this.element(this.verify_mobile_field);
  }

  emailPromotionCheckboxElement(){
    return this.element(this.email_promotion_checkbox);
  }
  titleSelectElement(){
    return this.element(this.title_select);
  }

  ibanFieldElement(){
    return this.element(this.iban_field);
  }

  vatFieldElement(){
    return this.element(this.vat_field);
  }

  creditNoteEmailFieldElement(){
    return this.element(this.credit_note_email_field);
  }

  enterEmailErrorElement(){
    return this.element(this.enter_email_error);
  }

  enterVerifyEmailErrorElement(){
    return this.element(this.enter_verify_email_error);
  }

  howManyPeopleQuesLabel(){
    return this.inner_text(this.label_how_many_people_ques);
  }

  howManyRoofQuesLabel(){
    return this.inner_text(this.label_how_many_roof_ques);
  }

  howManyVeluxQuesLabel(){
    return this.inner_text(this.label_how_many_velux_ques);
  }

  signupFormElement(){
    return this.element(this.signup_form);
  }

  viewSignupFormElement(){
    this.inView(this.signup_form);
  }

  firstNameFieldElement(){
    return this.element(this.first_name_field);
  }

  lastNameFieldElement(){
    return this.element(this.last_name_field);
  }

  companyNameFieldElement(){
    return this.element(this.company_name_field);
  }

  companyPhoneFieldElement(){
    return this.element(this.company_phone_field);
  }

  address1FieldElement(){
    return this.element(this.address_1_field);
  }

  postcodeFieldElement(){
    return this.element(this.postcode_field);
  }

  townFieldElement(){
    return this.element(this.town_field);
  }

  mobileFieldElement(){
    return this.element(this.mobile_field);
  }

  howManyPeopleQuesElement(){
    return this.element(this.how_many_people_ques);
  }

  howManyRoofQuesElement(){
    return this.element(this.how_many_roof_ques);
  }

  howManyVeluxQuesElement(){
    return this.element(this.how_many_velux_ques);
  }

  socialMediaInfoHeadingElement(){
    return this.element(this.social_media_info_heading);
  }

  viewSocialMediaInfoHeading(){
    this.inView(this.social_media_info_heading);
  }

  websiteFieldElement(){
    return this.element(this.website_field);
  }

  facebookFieldElement(){
    return this.element(this.facebook_field);
  }

  youtubeFieldElement(){
    return this.element(this.youtube_field);
  }

  instagramFieldElement(){
    return this.element(this.instagram_field);
  }

  createAccountLoginHeadingElement(){
    return this.element(this.create_account_login_heading);
  }

  viewCreateAccountLoginHeading(){
    this.inView(this.create_account_login_heading);
  }

  emailFieldElement(){
    this.clear(this.email_field);
    return this.element(this.email_field);
  }

  verifyEmailFieldElement(){
    return this.element(this.verify_email_field);
  }

  passwordFieldElement(){
    return this.element(this.password_field);
  }

  termsCheckboxElement(){
    return this.element(this.terms_checkbox);
  }

  createAccountBtnElement(){
    return this.element(this.create_account_btn);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }
  
  submitCreateAccountForm(email: string, password: string){
    this.select(this.title_select, 'Herr');
    this.type(this.first_name_field,'test first name');
    this.type(this.last_name_field,'test last name');
    this.type(this.mobile_field,'0111123456863');
    this.type(this.verify_mobile_field,'0111123456863');
    this.type(this.company_name_field,'test company name');
    this.type(this.address_1_field,'test address 1');
    this.type(this.postcode_field,'test123');
    this.type(this.town_field,'test town');
    this.type(this.company_phone_field,'0111123456863');
    this.type(this.iban_field,'14514651');
    this.type(this.vat_field,'53845695125');
    this.type(this.credit_note_email_field, email);
    this.select(this.how_many_people_ques,1);
    this.type(this.how_many_roof_ques, '1');
    this.select(this.how_many_velux_ques,1);
    this.type(this.email_field, email);
    this.type(this.verify_email_field, email);
    this.type(this.password_field, password);
    this.check(this.terms_checkbox);
    this.click(this.create_account_btn);
  }

}
