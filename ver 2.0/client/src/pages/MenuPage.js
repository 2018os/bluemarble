import React from "react";
import { Menu } from "../interfaces";
import { CommonContext } from "../context/context";

function MenuPage() {
    return (
        <CommonContext>
            <Menu />
        </CommonContext>
    );
}

export default MenuPage;
