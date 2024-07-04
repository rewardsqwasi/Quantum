
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
import ContactUsPage from './ContactUsPage';
import TermsPage from './TermsPage';
import RewardsCalculatorPage from './RewardsCalculatorPage';
import DashboardPage from './DashboardPage';
import RewardsHistoryPage from './RewardsHistoryPage';
import BasketPage from './BasketPage';
import ShopPage from './ShopPage';
import ProfilePage from './ProfilePage';
import PartnersPage from './PartnersPage';
import PresentoirsPage from './PresentoirsPage';
import VisitsPage from './VisitsPage';
import TicketsPage from './TicketsPage';
import MyProjectPage from './MyProjectPage';

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

    public get contactUsPage(): ContactUsPage {
        return new ContactUsPage();
    }

    public get termsPage(): TermsPage {
        return new TermsPage();
    }

    public get rewardsCalculatorPage(): RewardsCalculatorPage {
        return new RewardsCalculatorPage();
    }

    public get dashboardPage(): DashboardPage {
        return new DashboardPage();
    }

    public get rewardsHistoryPage(): RewardsHistoryPage {
        return new RewardsHistoryPage();
    }

    public get basketPage(): BasketPage {
        return new BasketPage();
    }

    public get shopPage(): ShopPage {
        return new ShopPage();
    }

    public get profilePage(): ProfilePage {
        return new ProfilePage();
    }

    public get partnersPage(): PartnersPage {
        return new PartnersPage();
    }

    public get presentoirsPage(): PresentoirsPage {
        return new PresentoirsPage();
    }

    public get visitsPage(): VisitsPage {
        return new VisitsPage();
    }

    public get ticketsPage(): TicketsPage {
        return new TicketsPage();
    }

    public get myProjectPage(): MyProjectPage {
        return new MyProjectPage();
    }
    
}
