import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Check if the query is empty or only whitespace
    if (query.trim() === "") {
      alert("Please enter a search term.");
      return;
    }

    // Navigate to the results page with the query
    navigate(`/results?query=${encodeURIComponent(query)}`); // Use encodeURIComponent to safely encode the query
  };

  return (
    <div>
      <h1>Search any song...</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter song name..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPage;
