import React from "react";
import { Link } from "react-router-dom";
import * as Pages from "../../models/constants/pages";

export default function Application( props ) {
    /* debug */ console.log( "Application([ props ])", props );
    return (
        <div className="Application">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={ `/${ Pages.WIZARD }` }>Wizard</Link>
                </li>
                <li>
                    <Link to={ `/${ Pages.SIGN }` }>Sign</Link>
                </li>
                <li>
                    <Link to={ `/${ Pages.MY_MIGRATIONS }` }>My Migrations</Link>
                </li>
            </ul>
        </div>
    );
}
