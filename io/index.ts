import { Server as NuxtServer } from "node:http";
import { Socket, Server } from "socket.io";

export default (nuxtServer: NuxtServer) => {
  if (nuxtServer) {
    const io = new Server(nuxtServer, {
      cors: {
        origin: "*"
      }
    });
    io.on("connection", (socket: Socket) => {
      socket.emit("message", {
        message: "Server connected to Socket: " + socket.id + " :)",
        type: 'alert-success'
      });

      socket.on("message", (data) => {
        socket.emit("message", data);
      });
    });
  }
};