import React, { useState, useRef } from "react";
import { Box, Tooltip, Menu, MenuList, MenuItem } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef(null);
  const handleClose = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="md:w-10/12">
      <Box className="md:hidden">
        <Tooltip title="Open Menu">
          <MenuOutlinedIcon
            className="cursor-pointer"
            ref={anchorRef}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </Tooltip>
        <Menu
          anchorEl={anchorRef.current}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <MenuList
            sx={{
              width: "12rem",
            }}
          >
            <NavLink to="/electronics">
              <MenuItem onClick={handleClose}>Electronics</MenuItem>
            </NavLink>
            <NavLink to="/jewelery">
              <MenuItem onClick={handleClose}>Jewelery</MenuItem>
            </NavLink>
            <NavLink to="/men">
              <MenuItem onClick={handleClose}>Men's clothing</MenuItem>
            </NavLink>
            <NavLink to="/women">
              <MenuItem onClick={handleClose}>Women's clothing</MenuItem>
            </NavLink>
          </MenuList>
        </Menu>
      </Box>
      {/* Desktop nav */}
      <Box
        className="hidden md:flex md:px-4 justify-around "
        sx={{ fontFamily: "Roboto" }}
      >
        <NavLink
          to={"/electronics"}
          className={({ isActive }) =>
            isActive
              ? "text-primary border-b-2"
              : "no-underline text-secondary border-b-2 border-transparent  "
          }
        >
          Electronics
        </NavLink>
        <NavLink
          to={"/jewelery"}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2" : "no-underline text-secondary"
          }
        >
          Jewelery
        </NavLink>
        <NavLink
          to={"/men"}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2" : "no-underline text-secondary"
          }
        >
          Men's
        </NavLink>
        <NavLink
          to={"/women"}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2" : "no-underline text-secondary"
          }
        >
          Women's
        </NavLink>
      </Box>
    </nav>
  );
};

export default Navbar;
