import React from 'react';
import Country from './Country';
import './Country.scss';
import PropTypes from 'prop-types';
import Showplayer from "../player/Showplayer";
import DiceConainer from '../../containers/DiceContainer';

const CountryList = ({countries}) => {
  const map1 = countries.slice(0, 10);
  const map2 = countries.slice(10, 18);
  const map3 = countries.slice(18, 28);
  const reversemap3 = map3.reverse();
  const map4 = countries.slice(28, 36);
  const reversemap4 = map4.reverse();
  const map1List = map1.map(
    (info, i) => (
      <Country key={i} {...info} />
    )
  );
  const map2List = map2.map(
    (info, i) => (
      <Country key={i} {...info} />
    )
  );
  const map3List = reversemap3.map(
    (info, i) => (
      <Country key={i} {...info} />
    )
  );
  const map4List = reversemap4.map(
    (info, i) => (
      <Country key={i} {...info} />
    )
  );


  return (
    <div>
      {/* <Showplayer /> */}
      <div className="CountryList">
        <div className="first_line">
          {map1List}
        </div>
        <div className="second_line">
          {map4List}
        </div>
        <DiceConainer />
        <div className="third_line">
          {map2List}
        </div>
        <div className="four_line">
          {map3List}
        </div>
      </div>
    </div>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, done: PropTypes.bool}))
};

CountryList.defaultProps = {
  countries: []
}
export default CountryList;