import React, { Component } from "react";
import CountryList from "../components/country/CountryList";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";

class App extends Component {
  render() {
    return (
      <div>
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
