import Dice from "../components/dice/dice";
import * as actions from "../actions";
import { connect } from "react-redux";

export function getRandomnumber() {
    const random = Math.floor(Math.random()*6+1);
    // const random = 5;
    return random;
}
// props 값 정의
const mapStateToProps = (state) => ({
    number: state.number,
    senumber: state.senumber,
});

const mapDispatchToProps = (dispatch) => ({
    onRandom: () => {
        const number = getRandomnumber();
        const senumber = getRandomnumber();
        dispatch(actions.random(number, senumber));
    }
});

const DiceConainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice);

export default DiceConainer;