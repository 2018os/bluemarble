import Dice from "../components/dice/dice";
import * as actions from "../actions";
import { connect } from "react-redux";

export function getRandomnumber() {
    const random = Math.floor(Math.random()*6+1);
    return random;
}

const mapStateToProps = (state) => ({
    number: state.number
});

const mapDispatchToProps = (dispatch) => ({
    onRandom: () => {
        const number = getRandomnumber();
        dispatch(actions.random(number));
    }
});

const DiceConainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice);

export default DiceConainer;