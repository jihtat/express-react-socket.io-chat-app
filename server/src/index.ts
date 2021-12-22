import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});
io.on("connection", (socket) => {
  socket.on("msg", (msg, room) => {
    if (room === "public") {
      socket.broadcast.emit("display-msg", msg);
    } else {
      socket.to(room).emit("display-msg", msg);
    }
  });
  socket.on("join-room", (room, addMessage) => {
    socket.join(room);
    addMessage(`You joined the room ${room}`);
    socket.to(room).emit("display-msg", `${socket.id} joined the room ${room}`);
  });
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(3000, async () => {
  console.log("Server running on port 3000");
});
