import React from "react";

function CountryList(props) {
    const { subData, class1, class2 } = props;
    const list = subData.map((data, index) => {
        return (
            <li className={`${class2} li_part`} key={index}>
                {data.name}
            </li>
        );
    });

    return <ul className={`${class1} clearfix`}>{list}</ul>;
}

export default CountryList;
