import React from "react";
import PropTypes from "prop-types";
import './dice.scss';

const Dice = ({number, senumber, onRandom}) => {
    return(
        <div className="random_button">
            <div className="random_dice_number">
                주사위1: {number}
                주사위2: {senumber}
            </div>
            <div>
                <button onClick={onRandom} onContextMenu={(e)=> {
                e.preventDefault();
                }}>누르기</button>
            </div>
        </div>
    );
};

Dice.propTypes = {
    number: PropTypes.number,
    senumber: PropTypes.senumber,
    onRandom: PropTypes.func
};

Dice.defaultProps = {
    number: 0,
    senumber: 0,
    onRandom: () => console.warn('onRandom not defined')
};

export default Dice;