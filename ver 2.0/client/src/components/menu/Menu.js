import React, { useEffect, useContext, useState } from "react";
import { socket } from "../../assets/utils/config";
import { Context } from "../../context/context";

function Menu() {
    const { history, nick } = useContext(Context);
    const [roomList, setRoomList] = useState([]);
    useEffect(() => {
        socket.emit("getRooms");

        socket.on("roomsList", function (roomData) {
            setRoomList(roomData);
        });
    }, []);

    function roomEnter() {
        socket.emit("makeroom", nick);
    }

    function roomEnter2(roomnum) {
        socket.emit("joinroom", roomnum, nick);
        history.push("/game");
    }

    const roomMap = roomList.map((data, key) => {
        return (
            <button key={key} onClick={() => roomEnter2(data)}>
                {data}
            </button>
        );
    });

    return (
        <div>
            <button
                onClick={() => {
                    roomEnter();
                    history.push("/game");
                }}
            >
                방만들기
            </button>

            <ul>{roomMap}</ul>
        </div>
    );
}

export default Menu;
