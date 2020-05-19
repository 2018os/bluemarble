import { socket } from "./config";

function join(chatroomName, cb) {
    socket.emit("join", chatroomName, cb);
}

function leave(chatroomName, cb) {
    socket.emit("leave", chatroomName, cb);
}
