// import Showplayer from '../components/player/Showplayer';
import Player from "../components/player/Player";
import * as actions from "../actions";
import { connect } from "react-redux";

// props 값 정의
const mapStateToProps = (state) => ({
    player: state.player,
    countries: state.countries,
    number: state.number
});

const mapDispatchToProps = (dispatch) => ({
    onDeal: (number) => {
        dispatch(actions.deal(number));
    }
});

const PlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);

export default PlayerContainer;