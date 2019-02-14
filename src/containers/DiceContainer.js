import Dice from "../components/dice/dice";
import * as actions from "../actions";
import { connect } from "react-redux";

export function getRandomnumber() {
    const random = Math.floor(Math.random()*6+1);
    return random;
}
// props 값 정의
const mapStateToProps = (state) => ({
    number: state.number,
    senumber: state.senumber,
});

const mapDispatchToProps = (dispatch) => ({
    onRandom: () => {
        const number = 3;
        const senumber = 1;
        // const number = 30;
        // const senumber = 0;
        dispatch(actions.random(number, senumber));
    }
});

const DiceConainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice);

export default DiceConainer;