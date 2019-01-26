import React from 'react';
import "./country_box.scss";
import PropTypes from 'prop-types';
// import Player from '../player/Player';
import PlayerContainer from "../../containers/PlayContainer";

const Country = ({ id, name, price, done, bought }) => {   //done으로 player위치 확인
  return (
    <div className="country_nick">
      <div className="sub_detail">
        <div>{price}원</div>
        <div></div>
        <div>{name}</div>
      </div>
      { done && <PlayerContainer />}
    </div>
  );
};

Country.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  done: PropTypes.bool,
  bought: PropTypes.bool,
};

Country.defaultProps = {
  id: 0,
  name: '',
  done: false,
  bought: false,
};

export default Country;