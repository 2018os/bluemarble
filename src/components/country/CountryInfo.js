import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CountryInfo extends Component {
  render() {
    const { countries, player, onBuy } = this.props;
    const { location } = player;
    const { name, price, bought } = countries[location];
    return (
      <div>
        <h1>{name}</h1>
        <h3>{price}원</h3>
        {
          !bought && location!==0 && <button onClick={onBuy}>구매 하시겠습니까?</button>
        }
      </div>

    )
  }
}

CountryInfo.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, done: PropTypes.bool, bought: PropTypes.bool})),
  player: PropTypes.object,
  onBuy: PropTypes.func
}

CountryInfo.defaultProps = {
  countries: [],
  player: {},
  onBuy: () => console.warn('onBuy not defined')
}

export default CountryInfo;