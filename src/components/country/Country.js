import React from 'react';
import "./country_box.scss";
import PropTypes from 'prop-types';
import Player from '../player/Player';

const Country = ({ id, name, price, done }) => {   //done으로 player위치 확인
  return (
    <div className="country_nick">
      {price}원
      <div></div>
      {name}
      { done && <Player>hello</Player>}
    </div>
  );
};

Country.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  done: PropTypes.bool
};

Country.defaultProps = {
  id: 0,
  name: '',
  done: false
};

export default Country;