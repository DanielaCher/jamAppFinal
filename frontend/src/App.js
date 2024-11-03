import React from "react";
import "./App.css";
import "./global.css";
import AppRoutes from "./AppRoutes";
import io from "socket.io-client";
import { useEffect } from "react";
const socket = io.connect("http://localhost:5000"); //TODO: make a serever path var to controll path changing more easely

function App() {
  //for the socket
  useEffect(() => {
    socket.on("receive_song", (data) => {});
  }, [socket]); // TODO: why we need this [socket]

  return (
    <div className="App">
      <header></header>
      <AppRoutes socket={socket} />
    </div>
  );
}

export default App;
