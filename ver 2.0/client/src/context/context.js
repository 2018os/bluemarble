import React, { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
// import { Nav } from "../templates";
import LoadingGif from "../assets/img/loading.gif";
import { Notify } from "../components";
import { CustomDiceBox } from "../assets/utils/useReducer";
import { socket } from "../assets/utils/config";

const Context = createContext({});

function CommonContext(props) {
    let history = useHistory();
    const [CheckValue, SetCheckValue] = useState(false);
    const [ErrorMessage, SetErrorMessage] = useState("");
    const { CustomDice, throwDice } = CustomDiceBox();
    const LoadingDiv = () => {
        return (
            <div className="loadingAni">
                <img src={LoadingGif} alt="loading" />
            </div>
        );
    };

    const [playerName, setPlayerName] = useState("");

    useEffect(() => {
        socket.on("player-number", function (res_name) {
            setPlayerName(res_name);
            if (res_name < 0) {
                alert("인원이 가득 참");
                // 나중에 로비로
                history.push("/");
            }
        });
    });

    return (
        <Context.Provider value={{ history, LoadingDiv, throwDice, CustomDice, playerName, socket }}>
            <div className="inner">
                {CheckValue ? <Notify>{ErrorMessage.replace("GraphQL error:", "").trim()}</Notify> : null}
                {props.children}
            </div>
            {/* <Nav checkLogin={loginMode} /> */}
        </Context.Provider>
    );
}

export { CommonContext, Context };
