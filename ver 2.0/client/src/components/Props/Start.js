import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import { socket } from "../../assets/utils/config";

function CustomNick() {
    const { history } = useContext(Context);
    const [nick, setNick] = useState("");

    function setNickname() {
        socket.emit("set_nickname", nick);
    }

    return (
        <div>
            <input
                type="text"
                onChange={({ target: { value } }) => {
                    setNick(value);
                }}
            />
            <button
                onClick={() => {
                    setNickname();
                    history.push("/menu");
                }}
            >
                시작
            </button>
        </div>
    );
}

export default CustomNick;
