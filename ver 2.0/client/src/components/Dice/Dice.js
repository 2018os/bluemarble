import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";

function Dice() {
    const { throwDice, CustomDice, socket, playerName } = useContext(Context);
    useEffect(() => {
        socket.on("your_turn", function () {
            console.log("my");
            document.getElementById("dice").removeAttribute("disabled");
        });

        socket.on("receive message", function (msg1) {
            console.log("rec");
            console.log(msg1);
            setMsg(msg1);
        });
    }, []);

    function dice() {
        socket.emit("dice_val", playerName, CustomDice.firstDice);
        socket.emit("pass_turn");
        const att = document.createAttribute("disabled");
        document.getElementById("dice").setAttributeNode(att);
        // e.currentTarget.disabled = true;
    }

    const [msg, setMsg] = useState([]);

    const result = msg.map((data, index) => <li key={index}>{data}</li>);

    return (
        <div className="diceWrap">
            <div className="resultWrap">
                <ul>{result}</ul>
                주사위1: {CustomDice.firstDice} 주사위2: {CustomDice.secondDice}
            </div>
            <button
                id="dice"
                onClick={() => {
                    throwDice();
                    dice();
                }}
            >
                누르기
            </button>
        </div>
    );
}

export default Dice;
