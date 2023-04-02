import "./AddEditBanner.scss";

import { Post, UserType } from "../../../../models";

import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { setImageFile } from "../../addEditSlice";
import { useAppDispatch } from "../../../../app/hooks";
import { useState } from "react";

export interface IAddEditBannerProps {
  values: Post;
  handleChange: any;
  handleBlur: any;
  touched: any;
  errors: any;
  userType: UserType | null | undefined;
  blogData: Post | null | undefined;
}

export function AddEditBanner({
  values,
  handleBlur,
  handleChange,
  touched,
  errors,
  userType,
  blogData,
}: IAddEditBannerProps) {
  const dispatch = useAppDispatch();

  var [image, setImage] = useState<File | null | string>(null);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    image = URL.createObjectURL(e.target.files![0]);
    setImage(image);

    dispatch(setImageFile(e.target.files![0]));
  };

  return (
    <div className="addedit_banner_container">
      <div className="addedit_banner_content">
        <p className="banner_content_category">
          {userType === "isGuest" ? (
            `${blogData?.categories}`
          ) : (
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <p>
                <InputLabel component="span" id="demo-select-small">
                  Category
                </InputLabel>
              </p>
              <Select
                name="categories"
                className="banner_input_field"
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={values?.categories}
                label="Categoy"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.categories && Boolean(errors.categories)}
                // helperText={touched.categories && errors.categories}
              >
                {categoriesOptions.map((items, key) => {
                  return (
                    <MenuItem key={key} value={items.categoryName}>
                      {items.categoryName}{" "}
                    </MenuItem>
                  );
                })}
              </Select>

              <p>{touched.categories && errors.categories}</p>
            </FormControl>
          )}
        </p>
        <h2 className="banner_content_title">
          {userType === "isGuest" ? (
            `${blogData?.title}`
          ) : (
            <TextField
              className="banner_input_field"
              fullWidth
              label="Blog's Title"
              id="outlined-size-small"
              size="small"
              name="title"
              value={values?.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
          )}
        </h2>

        <p className="banner_content_subtitle">
          {userType === "isGuest" ? (
            `${blogData?.subTitle}`
          ) : (
            <TextField
              className="banner_input_field"
              fullWidth
              label="Blog's SubTitle"
              id="outlined-size-small"
              size="small"
              name="subTitle"
              value={values?.subTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subTitle && Boolean(errors.subTitle)}
              helperText={touched.subTitle && errors.subTitle}
            />
          )}
        </p>
        <p className="banner_content_time">
          {moment(blogData?.createdAt).format("LL")} • 5 mins read
        </p>
      </div>

      <div className="addedit_banner_image">
        {userType === "isGuest" ? null : (
          <Button className="banner_image_button">
            <input
              onChange={(e) => handleChangeImg(e)}
              className="banner_image_input"
              accept="image/*"
              type="file"
            />
            <CameraAltIcon className="banner_image_icon" fontSize="large" />
          </Button>
        )}
        <img
          src={
            image
              ? `${image}`
              : values.image
              ? `${values?.image}`
              : "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          }
          alt=""
        />
      </div>
    </div>
  );
}

const categoriesOptions = [
  {
    id: 1,
    categoryName: "Food and Drink",
  },
  {
    id: 2,
    categoryName: "Lifestyle",
  },
  {
    id: 3,
    categoryName: "Travel",
  },
];
