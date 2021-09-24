import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Routes from "../../models/routes/router.model";

export default function Main() {
    return (
        <Router>
            <Switch>
                <Routes/>
            </Switch>
        </Router>
    );
}
