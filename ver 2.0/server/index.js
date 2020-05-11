const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

// our localhost port
const port = 4001;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

// This is what the socket.io syntax is like, we will work this later
let current_turn = 0;
let _turn = 0;
const connections = [null, null];
let timeout;
const MAX_WAITING = 5000;
let chat = [];

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

    socket.on("pass_turn", function () {
        if (connections[_turn] == socket) {
            // resetTimeout();
            next_turn();
        }
    });

    // Tell the connecting client what player number they are
    socket.emit("player-number", playerIndex);

    // Ignore player 3
    if (playerIndex == -1) return;

    connections[playerIndex] = socket;

    // Tell everyone else what player number just connected
    socket.broadcast.emit("player-connect", playerIndex);

    socket.on("dice_val", function (name, val) {
        var res = name + "님: " + val;
        chat = [...chat, res];
        chat.map((data, index) => {
            console.log(data);
        });
        io.emit("receive message", chat);
    });

    socket.on("disconnect", function () {
        console.log(`Player ${playerIndex} Disconnected`);
        connections[playerIndex] = null;
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
