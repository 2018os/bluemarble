import React, { useContext } from "react";
import { Context } from "../../context/context";

function CustomNick() {
    const { history, setNick } = useContext(Context);

    return (
        <div>
            <input
                type="text"
                onChange={({ target: { value } }) => {
                    setNick(value);
                }}
            />
            <button onClick={() => history.push("/menu")}>시작</button>
        </div>
    );
}

export default CustomNick;
