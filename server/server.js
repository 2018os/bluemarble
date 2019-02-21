const express = require("express");
const socket = require("socket.io");
const http = require("http");

const port = 5000;
const app = express();
const server = http.createServer(app);

const io = socket(server);
io.on("connection", socket => {
  console.log("user connected");

  socket.on("sayHello", data => {
    socket.emit("sayHello", data);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => console.log(`listening on ${port}`));
