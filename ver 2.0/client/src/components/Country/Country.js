import React from "react";
import initialCountries from "../../assets/utils/initialCountries";
import CountryList from "./CountryList";
import Dice from "../Dice/Dice";

function Country() {
    const map0 = initialCountries.slice(0, 1);
    const map1 = initialCountries.slice(1, 10);
    const reversemap1 = map1.reverse();
    const map2 = initialCountries.slice(10, 21);
    const map3 = initialCountries.slice(21, 30);
    const map4 = initialCountries.slice(30, 40);
    let reversemap4 = map4.reverse();
    reversemap4 = map0.concat(reversemap4);

    return (
        <div className="clearfix">
            <div className="Country clearfix">
                <div className="inner">
                    {/* <CountryList class1="first_line" subData={map2} /> */}
                    {/* <CountryList class1="second_line" subData={reversemap1} /> */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Dice />
                    {/* <CountryList class1="third_line" subData={map3} /> */}
                </div>
            </div>
            {/* <CountryList class1="four_line" subData={reversemap4} /> */}
        </div>
    );
}

export default Country;
