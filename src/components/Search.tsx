import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { statusSearchChanged } from "../features/searches/searchesSlice";
import { useAppDispatch } from "../hooks/redux";
import useDebounce from "../hooks/useDebounce";
import "./search.css";

const Search = ({ icon }: any) => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  useDebounce(() => dispatch(statusSearchChanged(text)), 500, [text]);

  const handleSubmit = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(statusSearchChanged(text));
    }
  };

  return (
    <form className="search-wrapper">
      <FaSearch className="search-icon" />
      <input
        className="search-bar"
        placeholder="Search for a country..."
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleSubmit}
        value={text}
      />
    </form>
  );
};

export default Search;
