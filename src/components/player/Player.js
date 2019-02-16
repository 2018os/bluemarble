import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.scss';
import Playerstate from "./Playerstyle";
import player1 from '../../lib/player1.png';
import player2 from '../../lib/player2.png';
import player3 from '../../lib/player3.png';
import player4 from '../../lib/player4.png';


class Player1 extends Component {
  render() {
    const { userid, location } = this.props;
    // console.log(location);
    return (
      <div>
        <div className="player">
          <Playerstate location={location}>
          {
            userid === 0 && 
            <div>
              <img className="playerimg" src={player1} alt={player1} />
            </div>
          }
          {
            userid === 1 && 
            <div>
              <img className="playerimg" src={player2} alt={player2} />
            </div>
          }
          {
            userid === 2 && 
            <div>
              <img className="playerimg" src={player3} alt={player3} />
            </div>
          }
          {
            userid === 3 && 
            <div>
              <img className="playerimg" src={player4} alt={player4} />
            </div>
          }
          </Playerstate>
        </div>
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