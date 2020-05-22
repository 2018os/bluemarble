import React, { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
// import { Nav } from "../templates";
import LoadingGif from "../assets/img/loading.gif";
import { CustomDiceBox } from "../assets/utils/useReducer";
import { socket } from "../assets/utils/config";

const Context = createContext({});

function CommonContext(props) {
    let history = useHistory();
    // const [ErrorMessage, SetErrorMessage] = useState("");
    const { CustomDice, throwDice } = CustomDiceBox();
    const LoadingDiv = () => {
        return (
            <div className="loadingAni">
                <img src={LoadingGif} alt="loading" />
            </div>
        );
    };

    return (
        <Context.Provider value={{ history, LoadingDiv, throwDice, CustomDice, socket }}>
            {props.children}
            {/* <Nav checkLogin={loginMode} /> */}
        </Context.Provider>
    );
}

export { CommonContext, Context };
