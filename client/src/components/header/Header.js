import React, { useState, useRef } from "react";
//prettier-ignore
import {
  Box,Typography,TextField,InputAdornment,Tooltip,Menu,MenuItem,MenuList,Link
} from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef(null);
  console.log(anchorRef);
  const handleClose = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Box className="flex flex-col items-center md:flex-row md:px-3">
      <Typography
        variant="h6"
        component="h1"
        className="text-primary uppercase font-bold border-2 px-2 tracking-wide"
      >
        Localy.
      </Typography>
      <Box className="flex justify-around w-full px-3 md:w-12/12 md:justify-end">
        <TextField
          className="flex-initial w-8/12 md:w-6/12 md:ml-5"
          id="input-with-icon-textfield"
          hiddenLabel
          placeholder="Search .."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <Box className="flex flex-initial w-4/12  justify-around items-center md:w-6/12">
          <Box className="flex w-8/12 md:w-3/12 justify-around">
            <LocalMallOutlinedIcon className="cursor-pointer " />
            <AccountCircleOutlinedIcon className="cursor-pointer " />
          </Box>
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            className="hidden md:flex md:w-9/12  md:px-4 justify-around"
            sx={{ fontFamily: "Roboto" }}
          >
            <Link href="#" className="no-underline text-secondary">
              Men's
            </Link>
            <Link href="#" className="no-underline text-secondary">
              Women's
            </Link>
            <Link href="#" className="no-underline text-secondary">
              Kid's
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
