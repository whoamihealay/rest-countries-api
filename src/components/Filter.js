import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./filter.css";

const Filter = ({ icon }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <button className="filter-btn" onClick={toggleDropdown}>
        Filter by Region
        {icon}
      </button>
      {dropdown && <Dropdown />}
    </div>
  );
};

export default Filter;
