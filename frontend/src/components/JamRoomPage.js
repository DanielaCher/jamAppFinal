import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const JamRoomPage = () => {
  const [song, setSong] = useState(null);
  const location = useLocation();

  const getSongTitleParam = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("title");
  };

  useEffect(() => {
    const songTitle = getSongTitleParam();
    if (songTitle) {
      // Fetch the song details from the backend based on the title
      fetch(
        `${
          process.env.REACT_APP_SERVER_URL
        }/search/song?title=${encodeURIComponent(songTitle)}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setSong(data))
        .catch((err) => console.error("Error fetching song data:", err));
    }
  }, [location.search]);

  const userRole = localStorage.getItem("userRole");

  const isHebrew = (text) => {
    const hebrewCharPattern = /[\u0590-\u05FF]/;
    return hebrewCharPattern.test(text);
  };

  const determineTextAlign = (verse) => {
    // Check lyrics to decide direction
    return verse.some((line) => isHebrew(line.lyrics)) ? "right" : "left";
  };

  const formatTitle = (title) => {
    return title.replace(/_/g, " "); // Replace all underscores with spaces
  };

  return (
    <div>
      <h1>Jam Room</h1>
      {song ? (
        <div>
          <h2>{formatTitle(song.title)}</h2>
          {song.verses.map((verse, verseIndex) => (
            <div
              key={verseIndex}
              style={{
                marginBottom: "20px",
                textAlign: determineTextAlign(verse),
                direction:
                  determineTextAlign(verse) === "right" ? "rtl" : "ltr", // Set direction based on language
              }}
            >
              {verse.map((line, lineIndex) => (
                <div
                  key={lineIndex}
                  style={{
                    display: "inline-block",
                    minWidth: "80px",
                  }}
                >
                  {line.chords && userRole !== "Singer" && (
                    <span style={{ display: "block", color: "blue" }}>
                      {line.chords}
                    </span> // Display chord above lyrics
                  )}
                  <span style={{ display: "inline" }}>{line.lyrics} </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading song details...</p>
      )}
    </div>
  );
};

export default JamRoomPage;
