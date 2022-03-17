import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Header = () => {
  return (
    <Box className="flex flex-col items-center">
      <Typography variant="h6" component="h1">
        Localy.
      </Typography>
      <Box className="flex justify-around w-full px-3">
        <TextField
          className="flex-initial w-8/12 "
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
        <Box className="flex flex-initial w-4/12  justify-around items-center">
          <LocalMallOutlinedIcon className="cursor-pointer" />
          <AccountCircleOutlinedIcon className="cursor-pointer" />
          <MenuOutlinedIcon className="cursor-pointer" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
