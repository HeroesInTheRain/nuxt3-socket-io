import { Server as NuxtServer } from "node:http";
import { Socket, Server } from "socket.io";

export default (nuxtServer: NuxtServer) => {
  if (nuxtServer) {
    const io = new Server(nuxtServer);
    io.on("connection", (socket: Socket) => {
      socket.emit("message", {
        message: "Server connected :)",
        type: 'alert-success'
      });

      socket.on("message", (data) => {
        socket.emit("message", data);
      });
    });
  }
};