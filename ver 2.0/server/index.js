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
        var roomData = io.sockets.adapter.rooms[roomnum];
        if (roomData) {
            personnelCheck = roomData;
            socket.join(roomnum);

            if (personnelCheck.length > 1) {
                console.log("인원이 꽉 찾습니다.");
                // 인원 꽉 찾을 경우 오류 해결
                socket.emit("max_personnel", true);
                return false;
            }

            // 방 유저업데이트;
            var roomInClients = [];
            for (var socketID in io.nsps["/"].adapter.rooms[roomnum].sockets) {
                const userInfo = io.nsps["/"].connected[socketID].nickname;
                roomInClients.push(userInfo);
                console.log(roomInClients);
                io.sockets.in(roomnum).emit("userUpdate", roomInClients);
            }
        } else {
            // 방에 인원없을 때 오류 고쳐야함
            socket.emit("null_room", true);
            console.log("방이 없습니다.");
            // return false;
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
