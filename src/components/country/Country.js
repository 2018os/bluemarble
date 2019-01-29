import React from 'react';
import "./country_box.scss";
import PropTypes from 'prop-types';
import PlayerInfoContainer from "../../containers/PlayerInfoContainer";

const Country = ({ name, price, done, owner }) => {   //done으로 player위치 확인
  return (
    <div className="country_nick">
      <div className="sub_detail">
        <div>{name}</div>
        {owner}
      </div>
      { done && <PlayerInfoContainer />}
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  done: PropTypes.bool,
  owner: PropTypes.string
};

Country.defaultProps = {
  name: '',
  price: 0,
  done: false,
  owner: ''
};

export default Country;