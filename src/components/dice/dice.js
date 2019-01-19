import React from "react";
import PropTypes from "prop-types";
import './dice.scss';

const Counter = ({number, onRandom}) => {
    return(
        <div className="random_button">
            <div className={"random_dice_number"}>{number}</div>
            <div>
                <button onClick={onRandom} onContextMenu={(e)=> {
                e.preventDefault();
                }}>누르기</button>
            </div>
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    onRandom: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    onRandom: () => console.warn("아직이라")
};

export default Counter;