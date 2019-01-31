import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.scss';
import Playerturns from "./Playerstyle";


class Player1 extends Component {
  render() {
    const { userid } = this.props;
    return (
      <div>
        <div className="player"><Playerturns userid={userid}>player</Playerturns></div>
      </div>
      
    )
  }
}

Player1.propTypes = {
  turn: PropTypes.number
}

Player1.defaultProps = {
  turn: 0
}

export default Player1;