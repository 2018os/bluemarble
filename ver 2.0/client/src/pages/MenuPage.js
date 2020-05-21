import React from "react";
import { Menu } from "../components";
import { CommonContext } from "../context/context";

function MenuPage() {
    return (
        <CommonContext>
            <Menu />
        </CommonContext>
    );
}

export default MenuPage;
