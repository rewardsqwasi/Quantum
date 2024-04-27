
import BasePage from './BasePage';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import HomePage from './HomePage';
import ForgetPinPage from './ForgetPinPage';
import EmailPage from './EmailPage';
import AddPurchasePage from './AddPurchasePage';

export default class App extends BasePage {
   
    public get loginPage(): LoginPage {
        return new LoginPage();
    }

    public get createAccountPage(): CreateAccountPage {
        return new CreateAccountPage();
    }

    public get homePage(): HomePage {
        return new HomePage();
    }

    public get forgetPinPage(): ForgetPinPage {
        return new ForgetPinPage();
    }

    public get emailPage(): EmailPage {
        return new EmailPage();
    }

    public get addPurchasePage(): AddPurchasePage {
        return new AddPurchasePage();
    }


}
