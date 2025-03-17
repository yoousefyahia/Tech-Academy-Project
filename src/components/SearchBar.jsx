import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchBar";

const SearchBar = ({ SearchArea, setSearchArea }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={SearchArea}
        onChange={(e) => setSearchArea(e.target.value)}
      />
      <FaSearch className="search-icon" />  
    </div>
  );
};

export default SearchBar;
