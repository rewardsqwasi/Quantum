
import BasePage from '../BasePage';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import HomePage from './HomePage';
import ForgetPinPage from './ForgetPinPage';
import EmailPage from './EmailPage';
import AddPurchasePage from './AddPurchasePage';
import DSPPage from './DSPPage';
import AddReplacementPage from './AddReplacementPage';
import PurchaseStatusPage from './PurchaseStatusPage';
import TrainingPointsPage from './TrainingPointsPage';
import ClaimRewardsPage from './ClaimRewardsPage';
import RewardsHistoryPage from './RewardsHistoryPage';
import OrdersHistoryPage from './OrdersHistoryPage';
import RewardsCalculatorPage from './RewardsCalculatorPage';
import DashboardPage from './DashboardPage';
import BasketPage from './BasketPage';
import ProfilePage from './ProfilePage';
import ShopPage from './ShopPage';
import AddUserPage from './AddUserPage';
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

    public get emailPage(): EmailPage {
        return new EmailPage();
    }

    public get addPurchasePage(): AddPurchasePage {
        return new AddPurchasePage();
    }

    public get dspPage(): DSPPage {
        return new DSPPage();
    }

    public get addReplacementPage(): AddReplacementPage {
        return new AddReplacementPage();
    }

    public get purchaseStatusPage(): PurchaseStatusPage {
        return new PurchaseStatusPage();
    }

    public get trainingPointsPage(): TrainingPointsPage {
        return new TrainingPointsPage();
    }

    public get claimRewardsPage(): ClaimRewardsPage {
        return new ClaimRewardsPage();
    }

    public get ordersHistoryPage(): OrdersHistoryPage {
        return new OrdersHistoryPage();
    }

    public get rewardsHistoryPage(): RewardsHistoryPage {
        return new RewardsHistoryPage();
    }

    public get rewardsCalculatorPage(): RewardsCalculatorPage {
        return new RewardsCalculatorPage();
    }

    public get dashboardPage(): DashboardPage {
        return new DashboardPage();
    }

    public get basketPage(): BasketPage {
        return new BasketPage();
    }

    public get profilePage(): ProfilePage {
        return new ProfilePage();
    }

    public get shopPage(): ShopPage {
        return new ShopPage();
    }

    public get addUserPage(): AddUserPage {
        return new AddUserPage();
    }

    public get contactUsPage(): ContactUsPage {
        return new ContactUsPage();
    }

    public get termsPage(): TermsPage {
        return new TermsPage();
    }
    
}
