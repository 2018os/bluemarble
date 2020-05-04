import React, { Component } from "react";
import PropTypes from "prop-types";

class Dice extends Component {
    render() {
        const { number, senumber, onRandom } = this.props;
        return (
            <div>
                <div className="random_button clearfix">
                    <div className="random_dice_number">
                        주사위1: {number}
                        주사위2: {senumber}
                    </div>
                    <div>
                        <button
                            onClick={onRandom}
                            onContextMenu={(e) => {
                                e.preventDefault();
                            }}
                        >
                            누르기
                        </button>
                    </div>
                </div>
                <div className="hidden_dice"></div>
            </div>
        );
    }
}

Dice.propTypes = {
    number: PropTypes.number,
    senumber: PropTypes.number,
    onRandom: PropTypes.func,
};

Dice.defaultProps = {
    number: 0,
    senumber: 0,
    onRandom: () => console.warn("onRandom not defined"),
};

export default Dice;
