import * as React from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { CategoriesOption } from "../../../constants";
import { Post } from "../../../models";

export interface ICustomSelectProps {
  name: string;
  values: string | undefined;
  handleChange: any;
  handleBlur: any;
  className?: string;
}

export function CustomSelect({
  name,
  values,
  handleBlur,
  handleChange,
  className,
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
        {CategoriesOption.map((category, key) => {
          return (
            <MenuItem key={key} value={category.categoryName}>
              {category.categoryName}{" "}
            </MenuItem>
          );
        })}
      </Select>

      {/* <p>{touched.categories && errors.categories}</p> */}
    </FormControl>
  );
}
