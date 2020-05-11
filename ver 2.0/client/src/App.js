import React, { useState, useEffect } from "react";
import { socket } from "./config";

function App() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [msg, setMsg] = useState([]);
    useEffect(() => {
        socket.on("player-number", function (res_name) {
            setName(res_name);
            if (res_name < 0) {
                const att = document.createAttribute("disabled");
                document.getElementById("dice").setAttributeNode(att);
                alert("인원이 가득 참");
            }
        });

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
        var v = Math.floor(Math.random() * 6) + 1;
        socket.emit("dice_val", name, v);
        socket.emit("pass_turn");
        const att = document.createAttribute("disabled");
        document.getElementById("dice").setAttributeNode(att);
        // e.currentTarget.disabled = true;
    }

    const result = msg.map((data, index) => <li key={index}>{data}</li>);

    return (
        <div className="App">
            {/* <textarea id="chatLog" readOnly value={msg}></textarea> */}
            <ul>{result}</ul>
            <input type="text" readOnly value={name} />
            <button id="dice" onClick={dice}>
                랜덤
            </button>
        </div>
    );
}

export default App;
