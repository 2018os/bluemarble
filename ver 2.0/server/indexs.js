const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const port = 4001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let current_turn = 0;
let _turn = 0;
const connections = [null, null];
let timeout;
let chat = [];
let clients = [null, null];
var clientInfo = new Object();
var availableRooms = [];
var roomCount = 0;
var roomData = {};
var room = "room";

function next_turn() {
    _turn = current_turn++ % connections.length;
    connections[_turn].emit("your_turn");
    console.log("nextt turn: ", _turn);
}

io.on("connection", function (socket) {
    console.log("user connected: ", socket.id);

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

    socket.on("makeroom", (name) => {
        socket.join(roomCount, () => {
            console.log(name + "join room " + roomCount);
            createRoom(roomCount);
            roomCount++;
        });
    });

    // 방참여
    socket.on("joinroom", (roomnum, nick) => {
        console.log("join room " + roomnum);
        socket.join(roomnum);
        var personnel = [io.sockets.clients(roomnum)];

        console.log(personnel.sockets);
        console.log(personnel.length);

        let playerIndex = -1;
        for (var i in connections) {
            if (connections[i] === null) {
                playerIndex = i;
                chat = [];
            }
        }

        // 플레이어 수 제한(현재: 2명으로)
        if (playerIndex == -1) return;

        connections[playerIndex] = socket;

        // 연결 클라이언트에 번호 표시(유저닉넴)
        socket.emit("player-number", playerIndex);

        // 다른 모든 사용자에게 방금 연결한 플레이어 번호 표시
        socket.broadcast.emit("player-connect", playerIndex);
    });

    // 턴바꿈
    socket.on("pass_turn", function () {
        if (connections[_turn] == socket) {
            next_turn();
        }
    });

    // 주사위 값전달
    socket.on("dice_val", function (num, name, val) {
        var res = name + "님: " + val;
        chat = [...chat, res];
        socket.broadcast.to(num).emit("receive message", chat);
    });

    // 방정보 제공
    socket.on("getRooms", function () {
        socket.emit("roomsList", availableRooms);
    });

    // socket.emit("roomsList", io.sockets.adapter.rooms); //그룹의 목록과 그룹 안의 소켓들

    // 유저업데이트
    io.sockets.emit("update", clients);

    // 연결해제
    socket.on("disconnect", function () {
        // console.log(`Player ${playerIndex} Disconnected`);
        // connections[playerIndex] = null;
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
