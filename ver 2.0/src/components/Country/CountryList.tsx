import React from "react";

interface Props {
    subData: Array<object>;
    class1?: string;
    class2?: string;
}

function CountryList(props: Props) {
    const { subData, class1, class2 } = props;
    const list = subData.map((data: any, index: number) => {
        return (
            <li className={`${class2} li_part`} key={index}>
                {data.name}
            </li>
        );
    });

    return <ul className={`${class1} clearfix`}>{list}</ul>;
}

export default CountryList;
