import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.scss';


class Player1 extends Component {
  render() {
    // const { turn } = this.props;
    return (
      <div>
        <div className="A_player">player</div>
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