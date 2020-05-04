import React, { useContext } from "react";
import { Context } from "../../context/context";
import CountryList from "./CountryList";
import Dice from "../Dice/Dice";

import { useQuery } from "@apollo/react-hooks";
import { READ_CONTRIES } from "../../assets/utils/queries";

function Country() {
    const { LoadingDiv, SetCheckValue, SetErrorMessage } = useContext(Context);
    const { loading: countryLoading, data: countryData, error: countryError } = useQuery(READ_CONTRIES);

    if (countryLoading) return <LoadingDiv />;
    if (countryError) return <p>서버 에러</p>;

    const map0 = countryData.allCountries.slice(0, 1);
    const map1 = countryData.allCountries.slice(1, 10);
    const reversemap1 = map1.reverse();
    const map2 = countryData.allCountries.slice(10, 21);
    const map3 = countryData.allCountries.slice(21, 30);
    const map4 = countryData.allCountries.slice(30, 40);
    let reversemap4 = map4.reverse();
    reversemap4 = map0.concat(reversemap4);

    return (
        <div className="clearfix">
            <div className="Country clearfix">
                <CountryList class1="first_line" subData={map2} />
                <CountryList class1="second_line" subData={reversemap1} />
                <Dice />
                <CountryList class1="third_line" subData={map3} />
            </div>
            <CountryList class1="four_line" subData={reversemap4} />
        </div>
    );
}

export default Country;
