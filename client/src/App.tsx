import { useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("localhost:3000");
function App() {
  useEffect(() => {}, []);
  function sendmsg() {
    const msg = "hello";
    socket.emit("msg", msg);
  }
  return (
    <div>
      <button onClick={sendmsg}>send msg</button>
    </div>
  );
}

export default App;
