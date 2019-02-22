import React, { Component } from "react";
import PropTypes from "prop-types";
import "./dice.scss";

class Dice extends Component {
  render() {
    const { number, senumber, onRandom, socket } = this.props;
    socket.on("random", (data) => {
      const { number, senumber } = data;
      onRandom(number, senumber);    
    });
    return (
      <div className="random_button">
        <div className="random_dice_number">
          주사위1: {number}
          주사위2: {senumber}
        </div>
        <div>
          <button
            onClick={() => {
              socket.emit("random");
            }}
            onContextMenu={e => {
              e.preventDefault();
            }}
          >
            누르기
          </button>
        </div>
      </div>
    );
  }
}

Dice.propTypes = {
  number: PropTypes.number,
  senumber: PropTypes.number,
  onRandom: PropTypes.func
};

Dice.defaultProps = {
  number: 0,
  senumber: 0,
  onRandom: () => console.warn("onRandom not defined")
};

export default Dice;
