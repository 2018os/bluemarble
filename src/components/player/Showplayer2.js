import React, { Component } from 'react'
import "./Showplayer.scss";
import PropTypes from 'prop-types';

class Showplayer2 extends Component {
  render() {
    const { player } = this.props;

    return (
      <div className="up_player">
        <div className="A_player C_player">
          {
            (() => {
              if(player.length > 2) {
                return (
                  <div>
                    <p>id: {player[2].playerName}</p>
                    <p>돈: {player[2].money}</p>
                    {/* <p>나라: {player[2].ownCountries}</p> */}
                  </div>
                )
              } else {
                return (
                  <div>
                    <p>id: 파산</p>
                    <p>돈: -999999</p>
                    <p>나라: 0</p>
                  </div>
                )
              }
            })()
          }
        </div>
        <div className="B_player D_player">
        {
          (() => {
            if(player.length > 3) {
              return (
                <div>
                  <p>id: {player[3].playerName}</p>
                  <p>돈: {player[3].money}</p>
                  {/* <p>나라: {player[3].ownCountries}</p> */}
                </div>
              )
            } else {
              return (
                <div>
                  <p>id: 파산</p>
                  <p>돈: -999999</p>
                  <p>나라: 0</p>
                </div>
              )
            }
          })()
        }
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