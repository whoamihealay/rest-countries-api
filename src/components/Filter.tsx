import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { statusFilterChanged } from "../features/filters/filtersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import "./filter.css";
import { Menu, Button, MenuItem } from "@mui/material";
import { selectRegions } from "../features/countries/countriesSlice";

const Filter = () => {
  const dispatch = useAppDispatch();
  const regions = useAppSelector(selectRegions);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (region: string | null) => {
    region && dispatch(statusFilterChanged(region));

    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        variant="contained"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        Filter by Region
        <FaCaretDown
          aria-label={open ? "close" : "open"}
          className="filter-icon"
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("All")}>All</MenuItem>
        {regions.sort().map((region) => (
          <MenuItem key={region} onClick={() => handleClose(region)}>
            {region}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Filter;
