import React from "react";
import { TextField } from "@mui/material";
const InputControl = (props) => {
  const { name, value, label, onChange, ...others } = props;
  return (
    <TextField
      size="small"
      variant="outlined"
      name={name || "test"}
      value={value}
      label={label || "test Field"}
      onChange={onChange}
      autoComplete="off"
      {...others}
      required
    />
  );
};

export default InputControl;
