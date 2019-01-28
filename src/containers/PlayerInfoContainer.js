import Showplayer from "../components/player/Showplayer";
import { connect } from 'react-redux';

//props 값으로 넣어줄 상태 정의
const mapStateToProps = (state) => ({player: state.player, turn: state.turn});
const CountryListContainer = connect(mapStateToProps)(Showplayer);

export default CountryListContainer;