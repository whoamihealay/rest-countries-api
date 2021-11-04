import React from "react";
import DropdownItem from "./DropdownItem";
import "./dropdown.css";

const Dropdown = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const items = regions.map((items) => <DropdownItem text={items} />);

  return <ul className="dropdown">{items}</ul>;
};

export default Dropdown;
