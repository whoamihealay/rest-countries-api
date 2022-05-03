import React from "react";
import DropdownItem from "./DropdownItem";
import "./dropdown.css";
import { selectRegions } from "../features/countries/countriesSlice";
import { useAppSelector } from "../hooks/redux";

interface IProps {
  handleFilter: (arg0: string) => void;
  ariaExpanded: boolean;
}

const Dropdown = ({ handleFilter, ariaExpanded }: IProps) => {
  const regions = useAppSelector(selectRegions);

  return (
    <ul className="dropdown" aria-expanded={ariaExpanded}>
      <DropdownItem key="All" region="All" onClick={handleFilter} />
      {regions.sort().map((region) => (
        <DropdownItem key={region} region={region} onClick={handleFilter} />
      ))}
    </ul>
  );
};

export default Dropdown;
