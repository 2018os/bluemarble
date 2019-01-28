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
            {/* <p>id: {player[0].playerName}</p>
            <p>돈: {player[0].money}</p>
            <p>나라: {player[0].ownCountries}</p>
            <p>id: {player[1].playerName}</p>
            <p>돈: {player[1].money}</p>
            <p>나라: {player[1].ownCountries}</p>
            <p>id: {player[2].playerName}</p>
            <p>돈: {player[2].money}</p>
            <p>나라: {player[2].ownCountries}</p>
            <p>id: {player[3].playerName}</p>
            <p>돈: {player[3].money}</p>
            <p>나라: {player[3].ownCountries}</p> */}
        </div>
      </div>
    )
  }
}

export default Showplayer;