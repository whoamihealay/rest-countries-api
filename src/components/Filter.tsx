import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Dropdown from "./Dropdown";
import "./filter.css";

const Filter = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="filter-wrapper">
      <button
        className="filter-btn"
        onClick={() => setDropdown(!dropdown)}
        onBlur={() => setDropdown(false)}
      >
        Filter by Region
        <FaCaretDown className="filter-icon" />
      </button>
      {dropdown && <Dropdown close={setDropdown} />}
    </div>
  );
};

export default Filter;
