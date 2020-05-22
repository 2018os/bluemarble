const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const port = 4001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// 방생성 관련
var roomCount = 0;
var availableRooms = [];

io.on("connection", function (socket) {
    console.log("user connected: ", socket.id);

    // ======================================================================
    // 방생성
    function createRoom(num) {
        for (var i = -1; availableRooms.length > i; i++) {
            if (availableRooms[i] == num) {
                console.log("이미 방이 있다");
                return false;
            }
        }
        availableRooms.push(num);
    }

    socket.on("makeroom", () => {
        socket.join(roomCount, () => {
            createRoom(roomCount);
            roomCount++;
        });
    });

    // 방참여
    socket.on("joinroom", (roomnum) => {
        console.log(roomnum + "방 입장");
        var personnelCheck = [];
        personnelCheck = io.sockets.adapter.rooms[roomnum];

        // 방에 인원없을 때 오류 고쳐야함
        // if (personnelCheck === "" || null || undefined || 0) {
        //     console.log("방이 없습니다.");
        //     // socket emit (no_room) 만들기
        // }

        if (personnelCheck.length > 1) {
            console.log("인원이 꽉 찾습니다.");
            socket.emit("max_personnel", true);
            return false;
        }

        socket.join(roomnum);

        // 방 유저업데이트;
        for (var socketID in io.nsps["/"].adapter.rooms[roomnum].sockets) {
            const userInfo = io.nsps["/"].connected[socketID].nickname;
            console.log(userInfo);
            io.sockets.in(roomnum).emit("userUpdate", userInfo);
        }
    });

    // 방나가기
    socket.on("roomLeave", (roomnum) => {
        console.log("방을 나갔습니다.");
        socket.leave(roomnum);
    });

    // 방이름
    socket.on("getRooms", function () {
        socket.emit("roomsList", availableRooms);
    });

    // ======================================================================
    // 닉네임 설정 (닉 설정안하면 null || undefined 나옴)
    socket.on("set_nickname", (nickname) => {
        socket.nickname = nickname;
    });

    // 연결 클라이언트에 번호 표시(유저닉넴)
    socket.emit("getNickname", socket.nickname);

    // ======================================================================
    // 연결해제
    socket.on("disconnect", () => {
        console.log("disconnected");
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
