import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import ResultsPage from "./components/ResultsPage";
import JamRoomPage from "./components/JamRoomPage";
import WaitingRoomPage from "./components/WaitingRoomPage";
import LoginPage from "./components/LoginPage";

const AppRoutes = ({ socket }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage socket={socket} />} />
        <Route path="/jamRoom" element={<JamRoomPage />} />
        <Route
          path="/waiting-room"
          element={<WaitingRoomPage socket={socket} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
