import React, { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
// import { Nav } from "../templates";
import LoadingGif from "../assets/img/loading.gif";
import { CustomNick } from "../components";
import { CustomDiceBox } from "../assets/utils/useReducer";
import { socket } from "../assets/utils/config";

const Context = createContext({});

function CommonContext(props) {
    let history = useHistory();
    // const [ErrorMessage, SetErrorMessage] = useState("");
    const { CustomDice, throwDice } = CustomDiceBox();
    const [playerName, setPlayerName] = useState("");
    const [clientsList, setClientsList] = useState([]);
    const [nick, setNick] = useState("");
    const LoadingDiv = () => {
        return (
            <div className="loadingAni">
                <img src={LoadingGif} alt="loading" />
            </div>
        );
    };

    const Start = () => {
        return (
            <div className="">
                <input
                    type="text"
                    onChange={({ target: { value } }) => {
                        setNick(value);
                    }}
                />
            </div>
        );
    };

    useEffect(() => {
        socket.emit("join", "room", "name");

        socket.on("player-number", function (res_name) {
            setPlayerName(res_name);
            if (res_name < 0) {
                alert("인원이 가득 참");
                // 나중에 로비로
                history.push("/");
            }
        });
    });

    socket.on("update", function (clientsData) {
        setClientsList(clientsData);
    });

    return (
        <Context.Provider value={{ history, LoadingDiv, throwDice, CustomDice, playerName, socket, clientsList }}>
            {props.children}
            {/* <Nav checkLogin={loginMode} /> */}
        </Context.Provider>
    );
}

export { CommonContext, Context };
