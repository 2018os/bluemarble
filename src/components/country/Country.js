import React from 'react';
import "./country_box.scss";
import HaveCountry from "./haveCountry";
import PropTypes from 'prop-types';
import Player1 from "../player/Player1";
import Player2 from "../player/Player2";
import Player3 from "../player/Player3";
import Player4 from "../player/Player4";

const Country = ({ name, price, done, owner, turn, player }) => {   //done으로 player위치 확인

  // const turn1 = 1;

  const { playerMove } = player[turn];
  console.log(playerMove);
  return (
    <div className="country_nick">
      <div className="sub_detail">
        <div>{name}</div>
        <HaveCountry owner={owner}></HaveCountry>
      </div>
      {/* { (done && playerMove) && <Player1 />} */}
      {/* { (done && player[turn].id===1) && <Player2 />} */}
      {/* { player[turn].playerMove && <div>aa</div>} */}
      {/* {
       done && (function() {
         if (player[turn].id === 0) {
          return (<Player1 />); 
        } else if (turn === 1) {
          return (<Player2 />);
        } else if (turn === 2) {
          return (<Player3 />);
        } else if (turn === 3) {
          return (<Player4 />);
        } else {
          return console.log("오류");
        }
        })()
      } */}
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  done: PropTypes.bool,
  owner: PropTypes.string,
  playerMove: PropTypes.bool,
  turn: PropTypes.number
};

Country.defaultProps = {
  name: '',
  price: 0,
  done: false,
  owner: '',
  playerMove: false,
  turn: 0,
};

export default Country;