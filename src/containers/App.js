import React, { Component } from 'react';
import Board from '../components/country/Board';
import Player from '../components/player/Player';
import CountryContainer from "./countrycontainer";

class App extends Component {
  state = {
    move: 0
  }

  handlePlayerMove = (e) => {
    const { value } = e.target;
    this.setState({
      move: value
    });
  }


  render() {
    return (
      <div>
        <Board />
        <CountryContainer />
        <Player onMove={this.handlePlayerMove} />
      </div>
    );
  }
}

export default App;
