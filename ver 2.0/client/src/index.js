import React from "react";
import ReactDOM from "react-dom";
import { Redirect, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./assets/scss/index.scss";
import { GamePage } from "./pages";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={GamePage} />
            <Redirect path="*" to="/" />
        </Switch>
    </Router>,
    document.getElementById("root")
);
