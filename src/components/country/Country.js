import React from 'react';
import "./country_box.scss";
import PropTypes from 'prop-types';
// import Player from '../player/Player';
import Player from "../player/Player";

const Country = ({ name, price, done, turn }) => {   //done으로 player위치 확인
  return (
    <div className="country_nick">
      <div className="sub_detail">
        <div>{name}</div>
      </div>
      { done && <Player turn={turn} />}
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  done: PropTypes.bool,
  turn: PropTypes.number
};

Country.defaultProps = {
  name: '',
  price: 0,
  done: false,
  turn: 0
};

export default Country;