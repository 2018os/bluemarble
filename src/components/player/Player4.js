import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.scss';


class Player4 extends Component {
  render() {
    const { turn } = this.props;
    return (
      <div>
        <div className="player">player{turn}</div>
      </div>
      
    )
  }
}

Player4.propTypes = {
  turn: PropTypes.number
}

Player4.defaultProps = {
  turn: 0
}

export default Player4;