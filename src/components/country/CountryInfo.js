import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CountryInfo.scss';

//jquery
import * as $ from 'jquery';

window.jQuery = window.$ = $
//--------------------------


class CountryInfo extends Component {
  componentDidUpdate() {
    if(this.props.player[this.props.turn].bankruptcy === true) {
      (() => {
        this.props.onBankruptcy();
      })();
    }
  }
  render() {
    const { countries, player, turn, onBuy, onDeal, onBankruptcy, onEvent } = this.props;
    const { location, playerName, prevLocation  } = player[turn];
    const { name, price, bought, owner, event } = countries[location];

    const ModalBuy = () => {
      $('#Country_Buy').modal('show')
    };
    const ModalDeal = () => {
      $('#Country_Deal').modal('show')
    }

    return (
      <div className="countryInfo">
        <h1>{name}</h1>
        <h3>{price}원</h3>
        <h3>NOW: {playerName}</h3>
        {
          prevLocation!==location && location!==0 && owner!==playerName && (() => {
            console.log('prevLocation: ' + prevLocation + ' location: ' + location);
            if (event) {
              onEvent(event);
            } else {
              if (!bought) return (ModalBuy());
              return (ModalDeal());
            }
          })()
        }


        <div className="modal fade" id="Country_Buy" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{name}</h4>
              </div>
              <div className="modal-body">
                <p>{name}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => onBuy(true)} data-dismiss="modal">구매하기</button>
                <button type="button" className="btn btn-default" onClick={() => onBuy(false)} data-dismiss="modal">닫기</button>
              </div>
            </div> 
          </div>
        </div>

        <div className="modal fade" id="Country_Deal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{name}</h4>
              </div>
              <div className="modal-body">
                <p>{owner}님의 땅을 밟았습니다.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => onDeal()} data-dismiss="modal">지불하기</button>
                <button type="button" className="btn btn-default" onClick={() => onBankruptcy()} data-dismiss="modal">파산하기</button>
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
  onDeal: PropTypes.func,
  onBankruptcy: PropTypes.func,
  onEvent: PropTypes.func,
  turn: PropTypes.number
}

CountryInfo.defaultProps = {
  countries: [],
  player: [],
  onBuy: () => console.warn('onBuy not defined'),
  onDeal: () => console.warn('onDeal not defined'),
  onBankruptcy: () => console.warn('onBankruptcy not defined'),
  onEvent: () => console.warn('onEvent not defined'),
  turn: 0
}

export default CountryInfo;