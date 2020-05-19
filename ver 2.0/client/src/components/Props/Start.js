import React, { useState } from "react";

function CustomNick() {
    const [nick, setNick] = useState("");
    console.log(nick);

    return (
        <input
            type="text"
            onChange={({ target: { value } }) => {
                setNick(value);
            }}
        />
    );
}

export default CustomNick;
