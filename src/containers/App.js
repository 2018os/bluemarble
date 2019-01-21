import React, { Component } from 'react';
import CountryListContainer from './CountryListContainer';
import DiceConainer from './DiceContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CountryListContainer />
        <DiceConainer />
      </div>
    );
  }
}

export default App;
