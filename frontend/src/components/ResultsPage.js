import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = ({ socket }) => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to parse the query parameter
  const getQueryParam = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("query");
  };

  useEffect(() => {
    const query = getQueryParam();

    if (query) {
      // Fetch data based on the query
      fetch(`http://localhost:5000/search?query=${encodeURIComponent(query)}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [location.search]);

  const handleSelectSong = (song) => {
    socket.emit("send_song", { song });

    navigate(`/jamRoom?title=${encodeURIComponent(song.title)}`);
  };

  return (
    <div>
      <h1>Search Results</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {results.length > 0 ? (
          results.map((song, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => handleSelectSong(song)}
                style={{
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  width: "100%", // Optional: makes the button full width of the list item
                }}
              >
                {song.title}
              </button>
            </li>
          ))
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  );
};

export default ResultsPage;
