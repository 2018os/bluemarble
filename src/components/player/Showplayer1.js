import React, { Component } from "react";
import PropTypes from "prop-types";

class Showplayer1 extends Component {
    render() {
        const { player } = this.props;

        return (
            <div className="up_player">
                <div className="A_player">
                    <p>id: {player[0].playerName}</p>
                    <p>돈: {player[0].money}</p>
                </div>
                <div className="B_player">
                    <p>id: {player[1].playerName}</p>
                    <p>돈: {player[1].money}</p>
                </div>
            </div>
        );
    }
}

Showplayer1.propTypes = {
    player: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, playerName: PropTypes.string, money: PropTypes.number, location: PropTypes.number, prevLocation: PropTypes.number, ownCountries: PropTypes.arrayOf })),
};

Showplayer1.defaultProps = {
    player: [],
};
export default Showplayer1;
