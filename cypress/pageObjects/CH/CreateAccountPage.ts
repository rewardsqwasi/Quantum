import BasePage from "../BasePage";

export default class CreateAccountPage extends BasePage {

  private url = '/create-account';
  private signup_form = '//form[contains(@action,"/create-account")]';
  private profile_detail_heading = '//h2[text()="Benutzerkonto anlegen"]/parent::div';
  private first_name_field = '#firstName';
  private last_name_field = '#lastName';
  private company_name_field = '#companyName';
  private company_number_field = '#companyNumber';
  private address_1_field = '#address1';
  private address_2_field = '#address2';
  private postcode_field = '#postcode';
  private town_field = '#town';
  private mobile_field = '#mobile';
  private verify_mobile_field = '#mobile_verify';
  private how_many_people_ques = '//div[@id="q3CoreWrapper"]/select';
  private how_many_roof_ques = '//div[@id="q4CoreWrapper"]/select';
  private how_many_velux_ques = '//div[@id="q6CoreWrapper"]/select';
  private describe_yourself_ques = '//div[@id="q7CoreWrapper"]/select';
  private recommend_velux_ques = '//div[@id="q2CoreWrapper"]/select';
  private social_media_info_heading = '//h3[text()="Informationen zu Social Media"]';
  private website_field = '#website';
  private facebook_field = '#facebook';
  private youtube_field = '#youtube';
  private instagram_field = '//input[@name="instagram"]';
  private create_account_login_heading = '//h3[text()="Ihre Zugangsdaten für PRIMA"]';
  private email_field = '#email';
  private verify_email_field = '#verifyEmail';
  private password_field = '#password';
  private terms_checkbox = '#terms';
  private create_account_btn = '#register';
  private label_mobile_field = '//label[@for="mobile"]';
  private label_verify_mobile_field = '//label[@for="mobileVerify"]';
  private label_how_many_people_ques = '//label[@for="q3Core"]';
  private label_how_many_roof_ques = '//label[@for="q4Core"]';
  private label_how_many_velux_ques = '//label[@for="q6Core"]';
  private label_describe_yourself_ques = '//label[@for="q7Core"]';
  private label_recommend_velux_ques = '//label[@for="q2Core"]';
  private enter_email_error = '//span[@id="emailStatus" and text()="Bitte geben Sie eine gültige E-Mail Adresse ein."]';
  private enter_verify_email_error = '#verifyEmailStatus';

  enterEmailErrorElement(){
    return this.element(this.enter_email_error);
  }

  enterVerifyEmailErrorElement(){
    return this.element(this.enter_verify_email_error);
  }

  mobileFieldLabel(){
    return this.inner_text(this.label_mobile_field);
  }

  verifyMobileFieldLabel(){
    return this.inner_text(this.label_verify_mobile_field);
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

  describeYourselfQuesLabel(){
    return this.inner_text(this.label_describe_yourself_ques);
  }

  recommendVeluxQuesLabel(){
    return this.inner_text(this.label_recommend_velux_ques);
  }

  signupFormElement(){
    return this.element(this.signup_form);
  }

  viewSignupFormElement(){
    this.inView(this.signup_form);
  }

  profileDetailHeadingElement(){
    return this.element(this.profile_detail_heading);
  }

  viewProfileDetailHeading(){
    this.inView(this.profile_detail_heading);
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

  companyNumberFieldElement(){
    return this.element(this.company_number_field);
  }

  address1FieldElement(){
    return this.element(this.address_1_field);
  }

  address2FieldElement(){
    return this.element(this.address_2_field);
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

  verifyMobileFieldElement(){
    return this.element(this.verify_mobile_field);
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

  describeYourselfQuesElement(){
    return this.element(this.describe_yourself_ques);
  }

  recommendVeluxQuesElement(){
    return this.element(this.recommend_velux_ques);
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
    this.type(this.first_name_field,'test first name');
    this.type(this.last_name_field,'test last name');
    this.type(this.company_name_field,'test company name');
    this.type(this.company_number_field,'16515635');
    this.type(this.address_1_field,'test address 1');
    this.type(this.address_2_field,'test address 2');
    this.type(this.postcode_field,'test123');
    this.type(this.town_field,'test town');
    this.type(this.mobile_field,'0781234588');
    this.type(this.verify_mobile_field,'0781234588');
    this.select(this.how_many_people_ques,1);
    this.select(this.how_many_roof_ques,1);
    this.select(this.describe_yourself_ques,1);
    this.select(this.how_many_velux_ques,1);
    this.select(this.recommend_velux_ques,1);
    this.type(this.email_field, email);
    this.type(this.verify_email_field, email);
    this.type(this.password_field, password);
    this.check(this.terms_checkbox);
    this.click(this.create_account_btn);
  }

}
