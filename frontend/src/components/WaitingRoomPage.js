import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WaitingRoomPage = ({ socket }) => {
  const [song, setSong] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for the song broadcast from the admin
    socket.on("receive_song", (data) => {
      console.log("Received song data:", data); // Log the received song data
      setSong(data.song); // Store the received song data
      // Navigate to the JamRoomPage with the song title when a song is received
      navigate(`/jamRoom?title=${encodeURIComponent(data.song.title)}`);
    });

    // Cleanup listener on component unmount
    return () => {
      socket.off("receive_song"); // Remove the listener when the component unmounts
    };
  }, [navigate]);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Waiting for Next Song</h1>
    </div>
  );
};

export default WaitingRoomPage;
