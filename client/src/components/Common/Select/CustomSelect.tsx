import * as React from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Options, Post } from "../../../models";

export interface ICustomSelectProps {
  name: string;
  values: string | undefined;
  handleChange: any;
  handleBlur: any;
  className?: string;
  options?: Options[];
}

export function CustomSelect({
  name,
  values,
  handleBlur,
  handleChange,
  className,
  options,
}: ICustomSelectProps) {
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel component="span" id="demo-select-small">
        Category
      </InputLabel>

      <Select
        name={name}
        className={className ? className : "banner_input_field"}
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        label="Categoy"
        onBlur={handleBlur}
        value={values}
        onChange={handleChange}
        // error={touched.categories && Boolean(errors.categories)}
      >
        {options?.map((option, key) => {
          return (
            <MenuItem key={key} value={option.optionName}>
              {option.optionName}{" "}
            </MenuItem>
          );
        })}
      </Select>

      {/* <p>{touched.categories && errors.categories}</p> */}
    </FormControl>
  );
}
