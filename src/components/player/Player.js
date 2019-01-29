import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.scss';


class Player extends Component {
  render() {
    const { turn } = this.props;

    return (
      <div>
        <div className="player">player{turn}</div>
      </div>
      
    )
  }
}

Player.propTypes = {
  turn: PropTypes.number
}

Player.defaultProps = {
  turn: 0
}

export default Player;