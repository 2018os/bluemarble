import React from 'react';
import StyledCountry from './StyledCountry';
import "./country_box.scss";
import PropTypes from 'prop-types';
import Player from '../player/Player';

const Country = ({ id, name, done }) => {   //done으로 player위치 확인
  return (
    <StyledCountry id={id}>
      <div className="country_nick">
        {name}
        { done && <Player>hello</Player> }
      </div>
    </StyledCountry>
  );
};

Country.PropTypes = {
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