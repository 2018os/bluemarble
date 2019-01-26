import Dice from "../components/dice/dice";
import * as actions from "../actions";
import { connect } from "react-redux";

export function getRandomnumber() {
    const random = Math.floor(Math.random()*6+1);
    return random;
}
// props 값 정의
const mapStateToProps = (state) => ({
    // player: state.player,
    // countries: state.countries,
    number: state.number
});

const mapDispatchToProps = (dispatch) => ({
    onRandom: () => {
        const number = getRandomnumber();
        dispatch(actions.random(number));
    },
    onDeal: () => {
        dispatch(actions.deal());
    }
});

const DiceConainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice);

export default DiceConainer;