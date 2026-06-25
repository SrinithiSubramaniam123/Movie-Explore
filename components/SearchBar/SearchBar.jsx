import React from "react";

function SearchBar({ searchTerm, setSearchTerm, placeholder }) {
  return (
    <div className="search-bar-wrap">
      <input
        type="text"
        className="search-bar-input"
        placeholder={placeholder || "🔍 Search Movies, Songs, Artists..."}
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;
