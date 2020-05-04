import React from 'react';
import "./country_box.scss";
import HaveCountry from "./haveCountry";
import PlayerHave from "./PlayerHave";
import PropTypes from 'prop-types';
import Player from "../player/Player";

const Country = ({ id, name, price, owner, location, userid, collected }) => {   //done으로 player위치 확인

  return (
    <div className="country_nick">
      <div className="sub_detail">
        <PlayerHave owner={owner}>{name}</PlayerHave>
        {
          price!==0 && <div>{price}원</div>
        }
        {
          id===20 && <div>{collected}원</div>
        }
        <HaveCountry owner={owner}></HaveCountry>
        {
          (() => {
            if(location === id) return <Player userid={userid} location={location}/>
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
  userid: PropTypes.number,
  collected: PropTypes.number
};

Country.defaultProps = {
  name: '',
  price: 0,
  done: false,
  owner: '',
  location: 0,
  userid: 0,
  collected: 0
};

export default Country;