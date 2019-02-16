import React, { Component } from 'react';
import Country from './Country';
import './CountryList.scss';
import PropTypes from 'prop-types';
import UpPlayerInfoContainer from "../../containers/UpPlayerInfoContainer";
import DiceContainer from '../../containers/DiceContainer';
import CountryInfoContainer from '../../containers/CountryInfoContainer';
import UndefPlayerInfoContainer from "../../containers/UnderPlayerInfo";
import bg from '../../lib/bg.mp3';

class CountryList extends Component {
  render() {
    const { countries, player, turn, collected } = this.props;
    const map1 = countries.slice(0, 10);
    const reversemap1 = map1.reverse();
    const map2 = countries.slice(10, 21);
    const map3 = countries.slice(21, 30);
    const map4 = countries.slice(30, 40);
    const reversemap4 = map4.reverse();
    const map1List = reversemap1.map(
      (info, i) => (
        <Country key={i} {...info} location={player[turn].location} userid={player[turn].userid} collected={collected} />
      )
    );
    const map2List = map2.map(
      (info, i) => (
        <Country key={i} {...info} location={player[turn].location} userid={player[turn].userid} collected={collected} />
      )
    );
    const map3List = map3.map(
      (info, i) => (
        <Country key={i} {...info} location={player[turn].location} userid={player[turn].userid} collected={collected} />
      )
    );
    const map4List = reversemap4.map(
      (info, i) => (
        <Country key={i} {...info} location={player[turn].location} userid={player[turn].userid} collected={collected} />
      )
    );


    return (
      <div>
        <audio src={bg} autoPlay={true} loop={true}></audio>
        <UpPlayerInfoContainer />
        <div className="CountryList">
          <div className="first_line">
            {map2List}
          </div>
          <div className="second_line">
            {map1List}
          </div>
          <CountryInfoContainer />
          <DiceContainer />
          <div className="third_line">
            {map3List}
          </div>
          <div className="four_line">
            {map4List}
          </div>
        </div>
        <UndefPlayerInfoContainer />
      </div>
    );
  }
}


CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, price: PropTypes.number, done: PropTypes.bool, bought: PropTypes.bool, owner: PropTypes.string})),
  player: PropTypes.arrayOf(PropTypes.shape({userid: PropTypes.number, playerName:PropTypes.string, money: PropTypes.number, location: PropTypes.number, prevLocation: PropTypes.number, ownCountries: PropTypes.array})),
  turn: PropTypes.number,
  collected: PropTypes.number
};

CountryList.defaultProps = {
  countries: [],
  player: [],
  turn: 0,
  collected: 0
}
export default CountryList;