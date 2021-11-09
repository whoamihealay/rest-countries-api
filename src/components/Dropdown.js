import React, { useContext } from "react";
import DropdownItem from "./DropdownItem";
import "./dropdown.css";

import ApiContext from "../context/api/apiContext";

const Dropdown = () => {
  const apiContext = useContext(ApiContext);

  const handleFilter = (region) => {
    apiContext.filterRegion(region);
  };

  return (
    <ul className="dropdown">
      <DropdownItem id="africa" region="Africa" onClick={handleFilter} />
      <DropdownItem id="americas" region="Americas" onClick={handleFilter} />
      <DropdownItem id="asia" region="Asia" onClick={handleFilter} />
      <DropdownItem id="europe" region="Europe" onClick={handleFilter} />
      <DropdownItem id="oceania" region="Oceania" onClick={handleFilter} />
    </ul>
  );
};

export default Dropdown;
