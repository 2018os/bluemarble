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
// const MAX_WAITING = 5000;

function next_turn() {
    _turn = current_turn++ % connections.length;
    connections[_turn].emit("your_turn");
    console.log("nextt turn: ", _turn);
    // triggerTimeout();
}

// function triggerTimeout() {
//     timeout = setTimeout(() => {
//         next_turn();
//     }, MAX_WAITING);
// }

// function resetTimeout() {
//     if (typeof timeout === "object") {
//         console.log("timeout reset");
//         clearTimeout(timeout);
//     }
// }

io.on("connection", function (socket) {
    console.log("user connected: ", socket.id);

    // Find an available player number
    let playerIndex = -1;
    for (var i in connections) {
        if (connections[i] === null) {
            playerIndex = i;
            chat = [];
        }
    }

    // 연결 클라이언트에 번호 표시(유저닉넴)
    socket.emit("player-number", playerIndex);

    // 플레이어 수 제한(현재: 2명으로)
    if (playerIndex == -1) return;

    connections[playerIndex] = socket;

    // 다른 모든 사용자에게 방금 연결한 플레이어 번호 표시
    socket.broadcast.emit("player-connect", playerIndex);

    socket.on("pass_turn", function () {
        if (connections[_turn] == socket) {
            // resetTimeout();
            next_turn();
        }
    });

    socket.on("dice_val", function (name, val) {
        var res = name + "님: " + val;
        chat = [...chat, res];
        io.emit("receive message", chat);
    });

    const room = "room";
    socket.on("join", function (data, nickname) {
        socket.join(data);
        console.log("방입장: " + data);
        // socket.emit("receive message", ["hi"]);

        // 방안에 있는 모든유저에게 메세지 보내기
        io.sockets.in(room).emit("receive message", ["새로운 유저 입장"]);

        for (var i in clients) {
            if (clients[i] === null) {
                // clientInfo.username = "song";
                // clientInfo.id = socket.id;
                // clients[playerIndex] = clientInfo;
                clients[playerIndex] = nickname;
            }
        }
    });

    console.log(clients);
    io.sockets.emit("update", clients);

    // io.clients 는 모든 유저 검색
    // io.clients((err, clients) => {
    //     console.log(clients);
    //     console.log(err);
    // });
    //io.in("방이름").clients 는 "방이름"안의 유저
    // io.in(room).clients((err, clients) => {
    //     if (err) throw err;
    //     console.log("방인원: " + clients);
    // });

    socket.on("disconnect", function () {
        console.log(`Player ${playerIndex} Disconnected`);
        connections[playerIndex] = null;
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
