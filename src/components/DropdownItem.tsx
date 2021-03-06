import React from "react";

interface IProps {
  region: string;
  onClick: (arg0: string) => void;
}

const DropdownItem = ({ region, onClick }: IProps) => {
  return (
    <li className="dropdown-item" onClick={() => onClick(region)}>
      <button className="btn">{region}</button>
    </li>
  );
};

export default DropdownItem;
