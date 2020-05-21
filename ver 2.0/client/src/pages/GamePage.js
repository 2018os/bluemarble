import React from "react";
import { Country } from "../components";
import { CommonContext } from "../context/context";

function GamePage() {
    return (
        <CommonContext>
            <Country />
        </CommonContext>
    );
}

export default GamePage;
