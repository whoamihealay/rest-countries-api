import React from "react";
import DropdownItem from "./DropdownItem";
import "./dropdown.css";
import { selectRegions } from "../features/countries/countriesSlice";
import { useAppSelector } from "../hooks/redux";
import { useAppDispatch } from "../hooks/redux";
import { statusFilterChanged } from "../features/filters/filtersSlice";

interface IProps {
  close: (args: boolean) => void;
}

const Dropdown = ({ close }: IProps) => {
  const regions = useAppSelector(selectRegions);
  const dispatch = useAppDispatch();

  const handleFilter = (region: string) => {
    dispatch(statusFilterChanged(region));
    close(false);
  };

  return (
    <ul className="dropdown">
      <DropdownItem key="All" region="All" onClick={handleFilter} />
      {regions.sort().map((region) => (
        <DropdownItem key={region} region={region} onClick={handleFilter} />
      ))}
    </ul>
  );
};

export default Dropdown;
