import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { statusFilterChanged } from "../features/filters/filtersSlice";
import { useAppDispatch } from "../hooks/redux";
import { RootState } from "../store";
import Dropdown from "./Dropdown";
import "./filter.css";

const Filter = () => {
  const [dropdown, setDropdown] = useState(false);
  const status = useSelector((state: RootState) => state.filters.status);
  const dispatch = useAppDispatch();

  const handleFilter = (region: string) => {
    dispatch(statusFilterChanged(region));
    setDropdown(false);
  };

  return (
    <div className="filter-wrapper">
      <button className="filter-btn" onClick={() => setDropdown(!dropdown)}>
        {status === "All" ? "Filter by Region" : status}
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
