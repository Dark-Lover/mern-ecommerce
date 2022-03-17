import React from "react";
import { Box } from "@mui/material";
const HeaderContainer = (props) => {
  return <Box className=" h-auto pt-2 pl-2 pr-2 pb-2">{props.children}</Box>;
};

export default HeaderContainer;