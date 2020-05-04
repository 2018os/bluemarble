import React, { useContext } from "react";
import { Context } from "../../context/context";

function Dice() {
    const { throwDice, CustomDice } = useContext(Context);
    return (
        <div className="diceWrap">
            <div className="resultWrap">
                주사위1: {CustomDice.firstDice} 주사위2: {CustomDice.secondDice}
            </div>
            <button onClick={throwDice}>누르기</button>
        </div>
    );
}

export default Dice;
