import Showplayer from '../components/player/Showplayer';
import * as actions from "../actions";
import { connect } from "react-redux";

// props 값 정의
const mapStateToProps = (state) => ({
    player: state.player
});

// const mapDispatchToProps = (dispatch) => ({
//     onRandom: () => {
//         const number = getRandomnumber();
//         dispatch(actions.random(number));
//     }
// });

const PlayerContainer = connect(
    mapStateToProps,
    // mapDispatchToProps
)(Showplayer);

export default PlayerContainer;