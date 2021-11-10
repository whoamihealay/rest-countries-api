import React from "react";

const DropdownItem = ({ region, onClick }) => {
  return (
    <li className="dropdown-item" onClick={() => onClick(region)}>
      {region}
    </li>
  );
};

export default DropdownItem;
