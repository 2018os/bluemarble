import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CountryInfo.scss';
import goldenKey from '../../lib/GoldenKey';

//jquery
import * as $ from 'jquery';

window.jQuery = window.$ = $
//--------------------------


class CountryInfo extends Component {
  componentDidUpdate() {
    if(this.props.player.length <= 1) {
      (() => {
        alert('승리했습니다.');
        // 리로드
      })();
    }
    if(this.props.player[this.props.turn].bankruptcy === true) {
      (() => {
        this.props.onBankruptcy();
      })();
    }
  }

  state = {
    box: ''
  }

  handleClick = (e) => {
    this.setState({
      box: ''
    });
  }

  handleChangge = (e) => {
    this.setState({
      box: e.target.value
    });
  }

  handleBankruptcyOnBuy = () => {
    if(this.props.countries[this.props.player[this.props.turn].location].price <= this.props.player[this.props.turn].money) {
      this.props.onBuy(true);
    } else {
      this.props.onBuy(false);
    }
  }

  handleBankruptcyOnDeal = () => {
    if(this.props.countries[this.props.player[this.props.turn].location].price <= this.props.player[this.props.turn].money) {
      this.props.onDeal();
    } else {
      this.props.onBankruptcy();
    }
  }

  render() {
    const { countries, player, turn, onBuy, onBankruptcy, onEvent, onTravel } = this.props;
    const { location, playerName, prevLocation, islandNumber } = player[turn];
    const { name, price, bought, owner, event } = countries[location];
    const random = Math.floor(Math.random()*3);   //황금열쇠 번호

    const ModalBuy = () => {
      $('#Country_Buy').modal({ backdrop: 'static', keyboard: false }, 'show');
    };
    const ModalDeal = () => {
      $('#Country_Deal').modal({ backdrop: 'static', keyboard: false }, 'show');
    }
    const ModalEvent = () => {
      $('#Country_Event').modal({ backdrop: 'static', keyboard: false }, 'show');
    }

    return (
      <div className="countryInfo">
        {/* <h1>{name}</h1>
        <h3>{price}원</h3>
        <h3>NOW: {playerName}</h3> */}
        {
          prevLocation!==location && location!==0 && owner!==playerName && (() => {
            if(name === '우주여행') {
              return (
                <div>
                  <input type="text" name="box" placeholder="나" value={this.state.box} onChange={this.handleChangge} />
                  <button onClick={()=> {this.handleClick(); onTravel(this.state.box);}}>여행가기</button>
                </div>
              )
            } else if(event) {
              return (ModalEvent());
            } else {
              if (!bought) return (ModalBuy());
              return (ModalDeal());
            }
          })()
        }

        <div className="modal fade" id="Country_Bankruptcy" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">파산</h4>
              </div>
              <div className="modal-body">
                <p>{playerName}님이 파산을 했습니다 ㅠㅠ</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => onBankruptcy()} data-dismiss="modal">확인</button>
              </div>
            </div> 
          </div>
        </div>


        <div className="modal fade" id="Country_Event" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{name}</h4>
              </div>
              <div className="modal-body">
                <p>{
                  (() => {
                    switch(event) {
                      case 'island':
                        return(`무인도에 도착을 했습니다! ${islandNumber}턴동안 빠져나가지 못해요ㅠㅠ`);
                      case 'goldenKey':
                        return(goldenKey[random].description);
                      case 'receiveDonation':
                        return('이번 게임에서 모인 사회복지기금을 드리겠습니다!!!');
                      case 'donation':
                        return('기부 하세요, 두번 하세요');
                      default:
                        return('EVENT');
                    }
                  })()
                }</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => onEvent(event, random)} data-dismiss="modal">확인</button>
              </div>
            </div> 
          </div>
        </div>

        <div className="modal fade" id="Country_Buy" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{name}</h4>
              </div>
              <div className="modal-body">
                <p>
                  {name}를 무려 {price}원에 구매하실 수 있습니다.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => this.handleBankruptcyOnBuy()} data-dismiss="modal">구매하기</button>
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
                <p>{owner}님의 땅을 밟았습니다({price}원).</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => this.handleBankruptcyOnDeal()} data-dismiss="modal">지불하기</button>
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