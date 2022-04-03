import React from "react";
import { Box } from "@mui/material";
const HeaderContainer = (props) => {
  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <Box className=" h-auto p-2  max-w-7xl m-auto  ">{props.children}</Box>
    </header>
  );
};

export default HeaderContainer;
