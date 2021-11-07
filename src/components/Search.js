import React, { useContext, useState } from "react";
import "./search.css";

import ApiContext from "../context/api/apiContext";

const Search = ({ icon }) => {
  const apiContext = useContext(ApiContext);

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    if (e.target.value) {
      apiContext.searchCountry(e.target.value);
    } else {
      apiContext.getAll();
    }
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <form className="search-wrapper">
      {icon}
      <input
        className="search-bar"
        placeholder="Search for a country..."
        onChange={onChange}
        onKeyPress={handleSubmit}
        value={text}
      />
    </form>
  );
};

export default Search;
