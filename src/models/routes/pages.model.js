import * as Pages from "../constants/pages";
import MyMigrationsPage from "../../containers/MyMigrationsPage";
import WizardPage from "../../containers/WizardPage";
import HomePage from "../../containers/SignPage";

const all = {
    [ Pages.SIGN ]: HomePage,
    [ Pages.MY_MIGRATIONS ]: MyMigrationsPage,
    [ Pages.WIZARD ]: WizardPage
}

export default all ;
