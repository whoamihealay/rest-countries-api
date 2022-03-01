import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./filter.css";

const Filter = ({ icon }: any) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="filter-wrapper">
      <button className="filter-btn" onClick={() => setDropdown(!dropdown)}>
        Filter by Region
        {icon}
      </button>
      {dropdown && <Dropdown close={setDropdown} />}
    </div>
  );
};

export default Filter;
