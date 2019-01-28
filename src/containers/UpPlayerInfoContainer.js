import Showplayer1 from "../components/player/Showplayer1";
import { connect } from 'react-redux';

//props 값으로 넣어줄 상태 정의
const mapStateToProps = (state) => ({player: state.player, turn: state.turn});
const UpPlayerInfoContainer = connect(mapStateToProps)(Showplayer1);

export default UpPlayerInfoContainer;