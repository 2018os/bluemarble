import React from "react";
import PropTypes from "prop-types";
import './dice.scss';
// import Player from '../player/Player';

const Dice = ({number, onRandom}) => {
    return(
        <div className="random_button">
            <div className="random_dice_number">
                number: {number}
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
    onRandom: PropTypes.func
};

Dice.defaultProps = {
    number: 0,
    onRandom: () => console.warn('onRandom not defined')
};

export default Dice;