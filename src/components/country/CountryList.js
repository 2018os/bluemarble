import React, { Component } from 'react';
import Country from './Country';
import './CountryList.scss';
import PropTypes from 'prop-types';
import UpPlayerInfoContainer from "../../containers/UpPlayerInfoContainer";
import DiceContainer from '../../containers/DiceContainer';
import CountryInfoContainer from '../../containers/CountryInfoContainer';
import UndefPlayerInfoContainer from "../../containers/UnderPlayerInfo";

class CountryList extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   this.props.onDeal();
  // }

  render() {
    const { countries } = this.props;
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
        <UpPlayerInfoContainer />
        <div className="CountryList">
          <div className="first_line">
            {map1List}
          </div>
          <div className="second_line">
            {map4List}
          </div>
          <CountryInfoContainer />
          <DiceContainer />
          <div className="third_line">
            {map2List}
          </div>
          <div className="four_line">
            {map3List}
          </div>
        </div>
        <UndefPlayerInfoContainer />
      </div>
    );
  }
}


CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, done: PropTypes.bool, bought: PropTypes.bool})),
  onDeal: PropTypes.func,
  turn: PropTypes.number
};

CountryList.defaultProps = {
  countries: [],
  onDeal: () => console.warn('onDeal not defined')
}
export default CountryList;