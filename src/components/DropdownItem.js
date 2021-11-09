import React from "react";

const DropdownItem = ({ id, region, onClick }) => {
  return (
    <li id={id} className="dropdown-item" onClick={() => onClick(id)}>
      {region}
    </li>
  );
};

export default DropdownItem;
