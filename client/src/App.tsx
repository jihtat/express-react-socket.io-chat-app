import { Fragment, useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";
import Message from "./components/Msesage";
import Room from "./components/Room";
import Conversation from "./components/Conversation";

const socket = io("localhost:3000");
function App() {
  const [messages, addMessage] = useState<string[]>([]);
  const [room, setRoom] = useState("public");
  useEffect(() => {
    socket.on("connect", () => {
      addMessage([
        ...messages,
        `You are connected with id ${socket.id} in room ${room}`,
      ]);
    });
  }, []);
  useEffect(() => {
    socket.emit("join-room", room, (msg: string) => {
      addMessage([msg]);
    });
  }, [room]);
  socket.on("display-msg", (msg) => {
    addMessage([...messages, msg]);
  });
  function sendmsg(msg: string) {
    socket.emit("msg", msg, room);
  }
  return (
    <Fragment>
      <div className="container d-flex flex-column justify-content-center">
        <Conversation messages={messages} />
        <Message
          messages={messages}
          addMessage={addMessage}
          sendmsg={sendmsg}
        />
        <Room setRoom={setRoom} />
      </div>
    </Fragment>
  );
}

export default App;
