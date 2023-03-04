import "./AddEditBanner.scss";

import * as React from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

export interface IAddEditBannerProps {}

export function AddEditBanner(props: IAddEditBannerProps) {
  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <div className="addedit_banner_container">
      <div className="addedit_banner_content">
        <p className="banner_content_category">
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Categoy</InputLabel>
            <Select
              className="banner_input_field"
              labelId="demo-select-small"
              id="demo-select-small"
              value={category}
              label="Categoy"
              onChange={handleChange}
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </p>
        <h2 className="banner_content_title">
          <TextField
            className="banner_input_field"
            fullWidth
            label="Blog's Title"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
        </h2>
        <p className="banner_content_subtitle">
          <TextField
            className="banner_input_field"
            fullWidth
            label="Blog's SubTitle"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
        </p>
        <p className="banner_content_time">May 10, 2020 • 5 mins read</p>
      </div>

      <div className="addedit_banner_image">
        <img
          src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
