import React, { useEffect, useContext, useState } from "react";
import { socket } from "../assets/utils/config";
import { Context } from "../context/context";

function Menu() {
    const { history } = useContext(Context);
    const [roomList, setRoomList] = useState([]);
    const [isRoom, setIsRoom] = useState(false);

    useEffect(() => {
        let isCancelled = false; // can't perform a react state update on an unmounted component 해결법 return 문까지 포함
        socket.emit("getRooms");

        socket.on("roomsList", function (roomData) {
            if (!isCancelled) {
                setRoomList(roomData);
            }
        });

        socket.on("max_personnel", function (max_check) {
            console.log(max_check);
            if (max_check == true) {
                alert("인원이 가득 참");
                // 나중에 로비로
                history.push("/menu");
            }
            socket.emit("roomLeave", 1);
        });

        return () => {
            isCancelled = true;
        };
    });

    socket.on("null_room", () => {
        // console.log(isRoomV);
        // setIsRoom(isRoomV);
        // console.log(isRoom);
        // if (isRoomV) {
        console.log("ture");
        alert("이미 없어진 방입니다.");
        // setIsRoom(false);
        history.push("/");
        // isRoomV = false;
        // }
    });

    function roomEnter() {
        socket.emit("makeroom");
    }

    function roomEnter2(roomnum) {
        socket.emit("joinroom", roomnum);
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
            <button
                onClick={() => {
                    history.push("/");
                }}
            >
                홈
            </button>

            <ul>{roomMap}</ul>
        </div>
    );
}

export default Menu;
