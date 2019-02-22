import Dice from "../components/dice/dice";
import * as actions from "../actions";
import { connect } from "react-redux";

// props 값 정의
const mapStateToProps = (state, props) => ({
    number: state.number,
    senumber: state.senumber,
    socket: props.socket
});

const mapDispatchToProps = (dispatch) => ({
    onRandom: (number, senumber) => {
        dispatch(actions.random(number, senumber));
    }
});

const DiceConainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice);

export default DiceConainer;
