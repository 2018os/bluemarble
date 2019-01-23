import Dice from "../components/dice/dice";
import * as actions from "../actions";
import { connect } from "react-redux";

export function getRandomnumber() {
    const random = Math.floor(Math.random()*6+1);
    return random;
}
// props 값 정의
const mapStateToProps = (state) => ({
    prevNumber: state.prevNumber,
    number: state.number
});

const mapDispatchToProps = (dispatch) => ({
    onRandom: (prevNumber) => {
        const number = getRandomnumber();
        dispatch(actions.random(number, prevNumber));
    }
});

const DiceConainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice);

export default DiceConainer;