import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Dropdown from "./Dropdown";
import "./filter.css";

const Filter = () => {
  const [dropdown, setDropdown] = useState(false);

  // TODO: Find solution to close dropdown when clicked outside the box without stopping dispatch
  return (
    <div className="filter-wrapper">
      <button className="filter-btn" onClick={() => setDropdown(!dropdown)}>
        Filter by Region
        <FaCaretDown
          aria-label={dropdown ? "close" : "open"}
          className="filter-icon"
        />
      </button>
      {dropdown && <Dropdown ariaExpanded={dropdown} close={setDropdown} />}
    </div>
  );
};

export default Filter;
