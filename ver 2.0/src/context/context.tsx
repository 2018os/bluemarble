import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
// import { Nav } from "../templates";
import LoadingGif from "../assets/img/loading.gif";
import { Notify } from "../components";
import { CustomDiceBox } from "../assets/utils/useReducer";

const Context = createContext<any>({});

function CommonContext(props: any) {
    let history = useHistory();
    const [CheckValue, SetCheckValue] = useState<boolean>(false);
    const [ErrorMessage, SetErrorMessage] = useState<string>("");
    const { CustomDice, throwDice }: any = CustomDiceBox();
    const LoadingDiv = () => {
        return (
            <div className="loadingAni">
                <img src={LoadingGif} alt="loading" />
            </div>
        );
    };

    return (
        <Context.Provider value={{ history, LoadingDiv, throwDice, CustomDice }}>
            <div className="inner">
                {CheckValue ? <Notify>{ErrorMessage.replace("GraphQL error:", "").trim()}</Notify> : null}
                {props.children}
            </div>
            {/* <Nav checkLogin={loginMode} /> */}
        </Context.Provider>
    );
}

export { CommonContext, Context };
