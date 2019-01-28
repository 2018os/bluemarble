import React, { Component } from 'react';
import './Player.scss';


class Player extends Component {
  render() {
    const { turn } = this.props;
    return (
      <div className="player">player{turn}</div>
    )
  }
}

export default Player;