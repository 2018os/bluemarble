import io from "socket.io-client";

const url = "http://localhost:4001/";

export const socket = io(url);
