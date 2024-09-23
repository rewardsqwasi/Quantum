
import BasePage from '../BasePage';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import HomePage from './HomePage';
import ForgetPinPage from './ForgetPinPage';
import ProfilePage from './ProfilePage';
import AddPurchasePage from './AddPurchasePage';
import PurchaseStatusPage from './PurchaseStatusPage';
import RewardsHistoryPage from './RewardsHistoryPage';
import PartnersPage from './PartnersPage';
import ContactUsPage from './ContactUsPage';
import TermsPage from './TermsPage';

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

    public get addPurchasePage(): AddPurchasePage {
        return new AddPurchasePage();
    }

    public get purchaseStatusPage(): PurchaseStatusPage {
        return new PurchaseStatusPage();
    }

    public get profilePage(): ProfilePage {
        return new ProfilePage();
    }

    public get rewardsHistoryPage(): RewardsHistoryPage {
        return new RewardsHistoryPage();
    }

    public get partnersPage(): PartnersPage {
        return new PartnersPage();
    }

    public get contactUsPage(): ContactUsPage {
        return new ContactUsPage();
    }

    public get termsPage(): TermsPage {
        return new TermsPage();
    }

}
