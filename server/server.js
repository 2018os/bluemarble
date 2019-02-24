const express = require("express");
const socket = require("socket.io");
const http = require("http");

const port = 5000;
const app = express();
const server = http.createServer(app);

const io = socket(server);
io.on("connection", socket => {
  console.log("user connected");

  socket.on("naming", name => {
    const clientCount = io.engine.clientsCount;
    socket.join("FirstRoom");
    io.to("FirstRoom").emit("naming", { name, clientCount });
  });

  socket.on("random", () => {
    const number = Math.floor(Math.random() * 6 + 1);
    const senumber = Math.floor(Math.random() * 6 + 1);
    io.to("FirstRoom").emit("random", { number, senumber });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => console.log(`listening on ${port}`));
