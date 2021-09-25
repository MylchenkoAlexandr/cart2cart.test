import React from "react";
import {Link} from "react-router-dom";
import * as Pages from "../../models/constants/pages";

export default function Application() {
    return (
        <ul className="Application">
            <li>
                <Link to={ `/${ Pages.SIGN }` }>Sign</Link>
            </li>
            <li>
                <Link to={ `/${ Pages.WIZARD }` }>Wizard</Link>
            </li>
            <li>
                <Link to={ `/${ Pages.MY_MIGRATIONS }` }>My Migrations</Link>
            </li>
        </ul>
    );
}
