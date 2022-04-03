import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../search/Search";

//prettier-ignore
import {
  Box,Typography,Badge
} from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Box className="flex flex-col items-center md:flex-row md:px-3">
      <Typography
        variant="h6"
        component="h1"
        className="text-primary uppercase font-bold border-2 px-2 tracking-wide"
      >
        <NavLink to={"/"}>Localy.</NavLink>
      </Typography>

      <Box className="flex justify-around w-full px-3 md:w-12/12 md:justify-end">
        <Search />
        <Box className="flex flex-initial w-4/12  justify-around items-center md:w-8/12">
          <Box className="flex w-8/12 md:w-2/12 justify-around items-center">
            <NavLink to={"/cart"}>
              <Badge
                badgeContent={cartItems.length !== 0 ? cartItems.length : 0}
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "#e32e00",
                  },
                }}
              >
                <LocalMallOutlinedIcon className="cursor-pointer " />
                {/* <MailIcon color="action" /> */}
              </Badge>
            </NavLink>
            <AccountCircleOutlinedIcon className="cursor-pointer " />
          </Box>
          <Navbar />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
