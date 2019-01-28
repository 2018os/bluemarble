import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CountryInfo.scss';

class CountryInfo extends Component {
  render() {
    const { countries, player, onBuy, turn } = this.props;
    const { location } = player[turn];
    const { name, price, bought } = countries[location];
    return (
      <div className="countryInfo">
        <h1>{name}</h1>
        <h3>{price}원</h3>
        {
          // !bought && location!==0 && <button onClick={onBuy}>구매 하시겠습니까?</button>
        }
      </div>

    )
  }
}

CountryInfo.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, done: PropTypes.bool, bought: PropTypes.bool, owner: PropTypes.string})),
  player: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, playerName: PropTypes.string, money: PropTypes.number, ownCountries: PropTypes.array})),
  onBuy: PropTypes.func,
  turn: PropTypes.number
}

CountryInfo.defaultProps = {
  countries: [],
  player: [],
  onBuy: () => console.warn('onBuy not defined'),
  turn: 0
}

export default CountryInfo;