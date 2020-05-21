import React from "react";
import { CommonContext } from "../context/context";
import { CustomNick } from "../components";

function StartPage() {
    return (
        <CommonContext>
            <CustomNick />
        </CommonContext>
    );
}

export default StartPage;
