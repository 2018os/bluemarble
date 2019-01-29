import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CountryInfo.scss';

//jquery
import * as $ from 'jquery';

window.jQuery = window.$ = $
//--------------------------


class CountryInfo extends Component {
  render() {
    const { countries, player, onBuy, turn } = this.props;
    const { location } = player[turn];
    const { name, price, bought } = countries[location];

    const ModalShow = () => {
      $('#Country_detail').modal('show')
    };

    return (
      <div className="countryInfo">
        <h1>{name}</h1>
        <h3>{price}원</h3>
        {
          !bought && location!==0 && ModalShow()
        }


        <div className="modal fade" id="Country_detail" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">{name}</h4>
              </div>
              <div className="modal-body">
                <p>땅 종류</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={onBuy} data-dismiss="modal">구매하기</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">닫기</button>
              </div>
            </div>
            
          </div>
        </div>
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