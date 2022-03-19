import React from "react";
import { Box } from "@mui/material";

const Main = (props) => {
  return <Box className="min-h-screen">{props.children}</Box>;
};

export default Main;
