import Showplayer2 from "../components/player/Showplayer2";
import { connect } from 'react-redux';

//props 값으로 넣어줄 상태 정의
const mapStateToProps = (state) => ({player: state.player});
const UndefPlayerInfoContainer = connect(mapStateToProps)(Showplayer2);

export default UndefPlayerInfoContainer;