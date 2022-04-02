import React, { useState } from "react";
//prettier-ignore
import {
  Grid,Box,FormControl,InputLabel,Select,MenuItem, Typography,
} from "@mui/material";

const FooterSection = () => {
  const [currency, setCurrency] = useState("Dollar ($)");
  const [language, setLanguage] = useState("English");

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const currencies = ["Dollar ($)", "Euro (€)", "Pound (£)", "Morrocco (dh)"];
  const languages = ["English", "French", "Arabic"];

  return (
    <footer className="bg-light_gray py-8 px-8   ">
      <Grid container className="gap-4 justify-center">
        <Grid item>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="language-select-label">Language</InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                value={language}
                label="Language"
                onChange={handleLanguage}
                size="small"
              >
                {languages.map((language) => (
                  <MenuItem value={language} key={language}>
                    {language}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="currency-select-label">Currency</InputLabel>
              <Select
                labelId="currency-select-label"
                id="currency-select"
                value={currency}
                label="Currency"
                onChange={handleCurrency}
                size="small"
              >
                {currencies.map((currency) => (
                  <MenuItem value={currency} key={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="body2" className=" mt-4 text-center">
          All Rights Reserved LOCALY© 2022
        </Typography>
      </Box>
    </footer>
  );
};

export default FooterSection;
