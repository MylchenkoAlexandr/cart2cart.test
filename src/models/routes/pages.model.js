import * as Pages from "../constants/pages";
import {MyMigrationsPage, SignPage, WizardPage} from "../../components/pages";

const all = {
    [ Pages.SIGN ]: SignPage,
    [ Pages.MY_MIGRATIONS ]: MyMigrationsPage,
    [ Pages.WIZARD ]: WizardPage
}

export default all ;
