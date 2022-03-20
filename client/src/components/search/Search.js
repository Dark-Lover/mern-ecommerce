import React from "react";
import { TextField, InputAdornment } from "@mui/material";
// import { SearchIcon } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <TextField
      className="flex-initial w-8/12 md:w-4/12 md:ml-5"
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
  );
};

export default Search;
