import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.scss';


class Player2 extends Component {
  render() {
    const { turn } = this.props;
    return (
      <div>
        <div className="B_player">player{turn}</div>
      </div>
      
    )
  }
}

Player2.propTypes = {
  turn: PropTypes.number
}

Player2.defaultProps = {
  turn: 0
}

export default Player2;