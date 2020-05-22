import React from "react";
import { Game } from "../interfaces";
import { CommonContext } from "../context/context";

function GamePage() {
    return (
        <CommonContext>
            <Game />
        </CommonContext>
    );
}

export default GamePage;
