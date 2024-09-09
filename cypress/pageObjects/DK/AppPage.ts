
import BasePage from '../BasePage';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import HomePage from './HomePage';
import ForgetPinPage from './ForgetPinPage';
import EmailPage from './EmailPage';
import AddPurchasePage from './AddPurchasePage';
import PurchaseStatusPage from './PurchaseStatusPage';
import ClaimRewardsPage from './ClaimRewardsPage';
import BasketPage from './BasketPage';
import ShopPage from './ShopPage';
import ProfilePage from './ProfilePage';
import TermsPage from './TermsPage';
import ContactUsPage from './ContactUsPage';
import DashboardPage from './DashboardPage';
import RewardsHistoryPage from './RewardsHistoryPage';
import RewardsCalculatorPage from './RewardsCalculatorPage';
import PartnersPage from './PartnersPage';
import TicketsPage from './TicketsPage';

export default class App extends BasePage {
   
    public get loginPage(): LoginPage {
        return new LoginPage();
    }
    
    public get shopPage(): ShopPage {
        return new ShopPage();
    }

    public get termsPage(): TermsPage {
        return new TermsPage();
    }

    public get profilePage(): ProfilePage {
        return new ProfilePage();
    }

    public get partnersPage(): PartnersPage {
        return new PartnersPage();
    }

    public get ticketsPage(): TicketsPage {
        return new TicketsPage();
    }

    public get rewardsCalculatorPage(): RewardsCalculatorPage {
        return new RewardsCalculatorPage();
    }

    public get rewardsHistoryPage(): RewardsHistoryPage {
        return new RewardsHistoryPage();
    }

    public get dashboardPage(): DashboardPage {
        return new DashboardPage();
    }

    public get contactUsPage(): ContactUsPage {
        return new ContactUsPage();
    }

    public get createAccountPage(): CreateAccountPage {
        return new CreateAccountPage();
    }
    public get basketPage(): BasketPage {
        return new BasketPage();
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

    public get purchaseStatusPage(): PurchaseStatusPage {
        return new PurchaseStatusPage();
    }

    public get claimRewardsPage(): ClaimRewardsPage {
        return new ClaimRewardsPage();
    }

}
