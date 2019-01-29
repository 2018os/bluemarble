import React from 'react';
import "./country_box.scss";
import PropTypes from 'prop-types';
import PlayerInfoContainer from "../../containers/PlayerInfoContainer";

const Country = ({ name, price, done }) => {   //done으로 player위치 확인
  return (
    <div className="country_nick">
      <div className="sub_detail">
        <div>{name}</div>
      </div>
      { done && <PlayerInfoContainer />}
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