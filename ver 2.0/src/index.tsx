import React from "react";
import ReactDOM from "react-dom";
import { Redirect, Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { CountriesPage } from "./pages";
import "./assets/scss/index.scss";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
    uri: "http://localhost:2000/graphql",
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route path="/" exact component={CountriesPage} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    </ApolloProvider>,
    document.getElementById("root")
);
