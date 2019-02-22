import CountryInfo from "../components/country/CountryInfo";
import { connect } from "react-redux";
import * as actions from "../actions";

//props 값으로 넣어줄 상태 정의
const mapStateToProps = (state, props) => ({
  countries: state.countries,
  player: state.player,
  turn: state.turn,
  socket: props.socket
});
const mapDispatchToProps = dispatch => ({
  onBuy: answer => {
    dispatch(actions.buy(answer));
  },
  onDeal: () => {
    dispatch(actions.deal());
  },
  onBankruptcy: () => {
    dispatch(actions.bankruptcy());
  },
  onEvent: (event, random) => {
    dispatch(actions.event(event, random));
  },
  onTravel: travel => {
    dispatch(actions.travel(travel));
  },
  onWin: () => {
    dispatch(actions.win());
  }
});
const CountryInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryInfo);

export default CountryInfoContainer;
