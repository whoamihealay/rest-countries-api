import React from "react";

const DropdownItem = ({ text }) => {
  return (
    <li id={text} className="dropdown-item">
      {text}
    </li>
  );
};

export default DropdownItem;
