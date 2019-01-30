import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.scss';


class Player3 extends Component {
  render() {
    const { turn } = this.props;
    return (
      <div>
        <div className="player">player{turn}</div>
      </div>
      
    )
  }
}

Player3.propTypes = {
  turn: PropTypes.number
}

Player3.defaultProps = {
  turn: 0
}

export default Player3;