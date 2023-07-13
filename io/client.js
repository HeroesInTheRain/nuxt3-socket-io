import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  messagesList: []
});

export var socket = null;

let server = "http://localhost:3000/";
socket = io(server);

socket.on("connect", () => {
    state.connected = true;
    state.messagesList.unshift({
        message: "Client connected to Socket: " + socket.id + " :)",
        type: 'alert-success'
      });
});

socket.on("disconnect", () => {
    state.connected = false;
});

socket.on("message", (data) => {
    state.messagesList.unshift(data)
});