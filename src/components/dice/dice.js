import React from "react";
import PropTypes from "prop-types";
import './dice.scss';
// import Player from '../player/Player';

const Dice = ({number, onRandom}) => {
    return(
        <div>
            <div className="random_button">
                <div className={"random_dice_number"}>
                    number: {number}
                    </div>
                <div>
                    <button onClick={() => onRandom(number)} onContextMenu={(e)=> {
                    e.preventDefault();
                    }}>누르기</button>
                </div>
            </div>
        </div>
    );
};

Dice.propTypes = {
    prevNumber: PropTypes.number,
    number: PropTypes.number,
    onRandom: PropTypes.func
};

Dice.defaultProps = {
    prevNumber: 0,
    number: 0,
    onRandom: () => console.warn("아직이라")
};

export default Dice;