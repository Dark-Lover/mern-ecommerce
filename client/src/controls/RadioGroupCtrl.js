import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const RadioGroupCtrl = (props) => {
  const { name, value, label, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange} row>
        {items.map((item) => (
          <FormControlLabel
            value={item.value}
            control={<Radio size="small" />}
            label={item.label}
            key={item.id}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupCtrl;
