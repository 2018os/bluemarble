import React, { Component } from "react";
import CountryList from "../components/country/CountryList";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";

// import { Route } from 'react-router-dom';
// import {
//   Home, Menu
// } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/" component={Home}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/blue" component={CountryListContainer} /> */}
        {/* <CountryListContainer/> */}
          <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
              <CountryList />
            </ApolloHooksProvider>
          </ApolloProvider>
      </div>
    );
  }
}

export default App;
