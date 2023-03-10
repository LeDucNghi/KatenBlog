import "./AddEditBanner.scss";

import { Post, UserType } from "../../../../models";

import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export interface IAddEditBannerProps {
  values: Post;
  handleChange: any;
  handleBlur: any;
  imageFile: (file: File) => any;
  touched: any;
  errors: any;
  userType: UserType;
  blogData: Post;
}

export function AddEditBanner({
  values,
  handleBlur,
  handleChange,
  imageFile,
  touched,
  errors,
  userType,
  blogData,
}: IAddEditBannerProps) {
  var [image, setImage] = useState<File | null | string>(null);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    imageFile(e.target.files![0]);
    image = URL.createObjectURL(e.target.files![0]);
    setImage(image);
  };

  return (
    <div className="addedit_banner_container">
      <div className="addedit_banner_content">
        <p className="banner_content_category">
          {userType.isGuest ? (
            `${blogData?.categories}`
          ) : (
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small">Categoy</InputLabel>
              <Select
                name="categories"
                className="banner_input_field"
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={
                  userType.isPoster ? blogData?.categories : values.categories
                }
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

              {/* <FormHelperText> */}
              <p>{touched.categories && errors.categories}</p>
              {/* </FormHelperText> */}
            </FormControl>
          )}
        </p>
        <h2 className="banner_content_title">
          {userType.isGuest ? (
            `${blogData?.title}`
          ) : (
            <TextField
              className="banner_input_field"
              fullWidth
              label="Blog's Title"
              id="outlined-size-small"
              size="small"
              name="title"
              value={userType.isPoster ? blogData?.title : values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
          )}
        </h2>

        <p className="banner_content_subtitle">
          {userType.isGuest ? (
            `${blogData?.subTitle}`
          ) : (
            <TextField
              className="banner_input_field"
              fullWidth
              label="Blog's SubTitle"
              id="outlined-size-small"
              size="small"
              name="subTitle"
              value={userType.isPoster ? blogData?.subTitle : values?.subTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subTitle && Boolean(errors.subTitle)}
              helperText={touched.subTitle && errors.subTitle}
            />
          )}
        </p>
        <p className="banner_content_time">May 10, 2020 • 5 mins read</p>
      </div>

      <div className="addedit_banner_image">
        {userType.isGuest ? null : (
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
            userType.isPoster
              ? `${blogData?.image}`
              : image
              ? `${image}`
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
