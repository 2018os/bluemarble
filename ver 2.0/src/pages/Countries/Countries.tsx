import React from "react";
import { Country } from "../../components";
import { CommonContext } from "../../context/context";

function CountriesPage() {
    return (
        <CommonContext>
            <Country />
        </CommonContext>
    );
}

export default CountriesPage;
