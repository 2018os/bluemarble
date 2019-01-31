import React from 'react';
import "./country_box.scss";
// import HaveCountry from "./haveCountry";
import PropTypes from 'prop-types';
// import Player1 from "../player/Player1";
// import Player2 from "../player/Player2";
// import Player3 from "../player/Player3";
// import Player4 from "../player/Player4";

const Country = ({ id, name, price, done, owner, location }) => {   //done으로 player위치 확인

  return (
    <div className="country_nick">
      <div className="sub_detail">
        <div>{name}</div>
        {/* <HaveCountry owner={owner}></HaveCountry> */}
        {
          (() => {
            if(location === id) return <div>hi</div>
          })()
        }
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
  location: PropTypes.number
};

Country.defaultProps = {
  name: '',
  price: 0,
  done: false,
  owner: '',
  location: PropTypes.number
};

export default Country;