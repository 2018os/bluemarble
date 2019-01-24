import React from 'react';
import Country from './Country';
import './Country.scss';
import PropTypes from 'prop-types';
import Showplayer from "../player/Showplayer";

const CountryList = ({countries}) => {
  const list = countries.map(
    (info, i) => (
      <Country key={i} {...info} />
    )
  );

  return (
    <div>
      <Showplayer />
      <div className="CountryList">
        <div className="country">
          {list}
        </div>
      </div>
    </div>
  );
};

CountryList.PropTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, done: PropTypes.bool}))
};

CountryList.defaultProps = {
  countries: []
}
export default CountryList;