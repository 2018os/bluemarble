import React, { Component } from 'react';
import './Player.scss';


class Player extends Component {
  render() {
    const { turn } = this.props;
    console.log(turn);
    return (
      <div className="player">player{turn}</div>
    )
  }
}

export default Player;