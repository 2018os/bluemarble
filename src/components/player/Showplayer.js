import React, { Component } from 'react'
import "./Showplayer.scss";

class Showplayer extends Component {
  render() {
    const { player } = this.props;
    return (
      <div className="up_player">
        <div className="A_player">
            <p>id: {player.playerName}</p>
            <p>돈: {player.money}</p>
            <p>나라: {player.ownCountries}</p>
        </div>
      </div>
    )
  }
}

export default Showplayer;