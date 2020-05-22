import React, { useEffect, useContext, useState } from "react";
import { Country, StatusPlayer } from "../components";
import { socket } from "../assets/utils/config";
import { Context } from "../context/context";

function Game() {
    const { history } = useContext(Context);
    const [clientsList, setClientsList] = useState([]);

    useEffect(() => {
        socket.on("userUpdate", function (clientsData) {
            setClientsList(clientsData);
            console.log(clientsData);
        });
    });

    function leave() {
        socket.emit("roomLeave", 0);
        history.push("/menu");
    }

    return (
        <div>
            <button onClick={leave}>나가기</button>
            <StatusPlayer clientsList={clientsList} />
            <Country />
        </div>
    );
}

export default Game;
