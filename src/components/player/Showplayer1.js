import React, { Component } from 'react'
import "./Showplayer.scss";

class Showplayer1 extends Component {
  render() {
    const { player } = this.props;
  
    return (
      <div className="up_player">
        <div className="A_player">
          <p>id: {player[0].playerName}</p>
          <p>돈: {player[0].money}</p>
          <p>나라: {player[0].ownCountries}</p>
        </div>
        <div className="B_player">
          <p>id: {player[1].playerName}</p>
          <p>돈: {player[1].money}</p>
          <p>나라: {player[1].ownCountries}</p>
        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default Showplayer1;