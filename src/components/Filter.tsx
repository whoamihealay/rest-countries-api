import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { statusFilterChanged } from "../features/filters/filtersSlice";
import { useAppDispatch } from "../hooks/redux";
import Dropdown from "./Dropdown";
import "./filter.css";

const Filter = () => {
  const [dropdown, setDropdown] = useState(false);

  const dispatch = useAppDispatch();

  const handleFilter = (region: string) => {
    dispatch(statusFilterChanged(region));
    setDropdown(false);
  };

  return (
    <div className="filter-wrapper">
      <button className="filter-btn" onClick={() => setDropdown(!dropdown)}>
        Filter by Region
        <FaCaretDown
          aria-label={dropdown ? "close" : "open"}
          className="filter-icon"
        />
      </button>
      {dropdown && (
        <Dropdown ariaExpanded={dropdown} handleFilter={handleFilter} />
      )}
    </div>
  );
};

export default Filter;
