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
      <DropdownItem region="Africa" onClick={handleFilter} />
      <DropdownItem region="Americas" onClick={handleFilter} />
      <DropdownItem region="Asia" onClick={handleFilter} />
      <DropdownItem region="Europe" onClick={handleFilter} />
      <DropdownItem region="Oceania" onClick={handleFilter} />
    </ul>
  );
};

export default Dropdown;
