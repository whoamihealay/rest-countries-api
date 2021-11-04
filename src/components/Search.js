import React from "react";
import "./search.css";

const Search = ({ icon }) => {
  return (
    <div className="search-wrapper">
      {icon}
      <input
        className="search-bar"
        placeholder="Search for a country..."
      ></input>
    </div>
  );
};

export default Search;
