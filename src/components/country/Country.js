import React from 'react';
import "./country_box.scss";
import HaveCountry from "./haveCountry";
import PlayerHave from "./PlayerHave";
import PropTypes from 'prop-types';
import Player from "../player/Player";

const Country = ({ id, name, price, done, owner, location, userid }) => {   //done으로 player위치 확인

  return (
    <div className="country_nick">
      <div className="sub_detail">
        <PlayerHave owner={owner}>{name}</PlayerHave>
        <HaveCountry owner={owner}></HaveCountry>
        {
          (() => {
            // console.log(userid);
            if(location === id) return <Player userid={userid}/>
          })()
        }
      </div>
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  done: PropTypes.bool,
  owner: PropTypes.string,
  location: PropTypes.number,
  userid: PropTypes.number
};

Country.defaultProps = {
  name: '',
  price: 0,
  done: false,
  owner: '',
  location: PropTypes.number,
  userid: PropTypes.number,
};

export default Country;