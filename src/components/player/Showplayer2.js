import React, { Component } from 'react'
import "./Showplayer.scss";
import PropTypes from 'prop-types';

class Showplayer2 extends Component {
  render() {
    const { player } = this.props;

    return (
      <div className="up_player">
        <div className="A_player C_player">
          <p>id: {player[2].playerName}</p>
          <p>돈: {player[2].money}</p>
          <p>나라: {player[2].ownCountries}</p>
        </div>
        <div className="B_player D_player">
          <p>id: {player[3].playerName}</p>
          <p>돈: {player[3].money}</p>
          <p>나라: {player[3].ownCountries}</p>
        </div>
      </div>
    )
  }
}

Showplayer2.propTypes = {
  player: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, playerName: PropTypes.string, money: PropTypes.number, location: PropTypes.number, prevLocation: PropTypes.number, ownCountries: PropTypes.arrayOf}))
}

Showplayer2.defaultProps = {
  player: []
}

export default Showplayer2;