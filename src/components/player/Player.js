import React, { Component } from 'react';
import StyledPlayer from './StyledPlayer';


class Player extends Component {
  render() {
    return (
      <StyledPlayer number={this.props.number}>hello</StyledPlayer>
    )
  }
}

Player.defaultProps = {
  number: 0
}

export default Player;