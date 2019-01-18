import React, { Component } from 'react';
import Board from './board/Board';
import Player from './player/Player';

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
        <Player onMove={this.handlePlayerMove} />
      </div>
    );
  }
}

export default App;
