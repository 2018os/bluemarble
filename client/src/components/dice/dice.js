import React, { Component } from "react";
import PropTypes from "prop-types";
import "./dice.scss";

class Dice extends Component {
  componentDidMount() {
    this.props.socket.on("random", (data) => {
      const { number, senumber } = data;
      // if(socketId === this.props.socket.id) {     //socketId = 주사위를 굴린 소켓, socket.id = 본인 소켓
      //   this.props.onRandom(number, senumber);
      // } else {
      //   console.log('!!!');
      // }
      this.props.onRandom(number, senumber);
    });
  }
  render() {
    const { number, senumber, socket } = this.props;
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
