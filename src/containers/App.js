import React, { Component } from 'react';
import CountryListContainer from './CountryListContainer';
import { Route } from 'react-router-dom';
import {
  Home, Menu
} from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/" component={Home}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/blue" component={CountryListContainer} /> */}
        <CountryListContainer />
      </div>
    );
  }
}

export default App;
