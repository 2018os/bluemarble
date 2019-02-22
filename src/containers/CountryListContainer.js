import CountryList from "../components/country/CountryList";
import { connect } from "react-redux";
import * as actions from "../actions";

//props 값으로 넣어줄 상태 정의
const mapStateToProps = state => ({
  countries: state.countries,
  player: state.player,
  turn: state.turn,
  collected: state.collected
});
const mapDispatchToProps = dispatch => ({
  onNaming: (name, clientCount, socketId) => {
    console.log(clientCount + " " + name + " : " + socketId);
   dispatch(actions.naming(name, clientCount, socketId));
  }
});

const CountryListContainer = connect(mapStateToProps, mapDispatchToProps)(CountryList);

export default CountryListContainer;
