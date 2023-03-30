import "../../../pages/Search/Search.scss";

import * as React from "react";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

export interface ISearchFieldProps {}

export function SearchField(props: ISearchFieldProps) {
  return (
    <div className="search_head">
      <h2>Find your favourite blogs 🤔 👇 </h2>
      <p>
        Stay current with all the latest design trends, software, industry,
        expectation and more.{" "}
      </p>

      <TextField
        id="outlined-basic"
        className="search_field"
        label="Find your blog"
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
